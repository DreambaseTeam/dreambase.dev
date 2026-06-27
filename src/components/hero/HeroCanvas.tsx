"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

/* Shared, mutable pointer target in normalized device coords (-1..1).
   Held in a ref so mousemove never triggers React re-renders. */
type Pointer = { x: number; y: number; vel: number };

function useGlobalPointer() {
  const pointer = useRef<Pointer>({ x: 0, y: 0, vel: 0 });

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    const onMove = (clientX: number, clientY: number) => {
      const nx = (clientX / window.innerWidth) * 2 - 1;
      const ny = -((clientY / window.innerHeight) * 2 - 1);
      // crude velocity estimate, used to "energize" the distortion
      const dv = Math.hypot(nx - lastX, ny - lastY);
      pointer.current.vel = Math.min(pointer.current.vel + dv * 4, 1.5);
      pointer.current.x = nx;
      pointer.current.y = ny;
      lastX = nx;
      lastY = ny;
    };
    const mouse = (e: MouseEvent) => onMove(e.clientX, e.clientY);
    const touch = (e: TouchEvent) => {
      if (e.touches[0]) onMove(e.touches[0].clientX, e.touches[0].clientY);
    };
    window.addEventListener("mousemove", mouse);
    window.addEventListener("touchmove", touch, { passive: true });
    return () => {
      window.removeEventListener("mousemove", mouse);
      window.removeEventListener("touchmove", touch);
    };
  }, []);

  return pointer;
}

/* The central organic form — an icosahedron warped by noise.
   Mouse position steers its orientation; mouse *speed* swells the
   distortion, so the surface ripples as you move the cursor. */
function CoreBlob({ pointer }: { pointer: React.RefObject<Pointer> }) {
  const group = useRef<THREE.Group>(null!);
  const mat = useRef<{ distort: number }>(null!);

  useFrame((state, delta) => {
    const p = pointer.current;
    if (!group.current || !p) return;

    // velocity bleeds off every frame
    p.vel = THREE.MathUtils.damp(p.vel, 0, 2.5, delta);

    // orient toward the cursor with easing
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      p.x * 0.6,
      3,
      delta
    );
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      -p.y * 0.4,
      3,
      delta
    );
    // gentle perpetual drift
    group.current.rotation.z += delta * 0.04;

    if (mat.current) {
      const target = 0.32 + p.vel * 0.35;
      mat.current.distort = THREE.MathUtils.damp(mat.current.distort, target, 4, delta);
    }
  });

  return (
    <group ref={group}>
      {/* solid, lit core */}
      <Icosahedron args={[1.35, 24]}>
        <MeshDistortMaterial
          ref={mat as never}
          color="#1a2a6c"
          emissive="#5b8cff"
          emissiveIntensity={0.25}
          roughness={0.15}
          metalness={0.9}
          distort={0.32}
          speed={1.6}
        />
      </Icosahedron>

      {/* faint wireframe shell, slightly larger, for structure */}
      <Icosahedron args={[1.5, 6]}>
        <meshBasicMaterial
          color="#8b5bff"
          wireframe
          transparent
          opacity={0.12}
        />
      </Icosahedron>
    </group>
  );
}

/* A drifting particle field that parallaxes opposite the cursor,
   adding depth behind the core. */
function ParticleField({ pointer }: { pointer: React.RefObject<Pointer> }) {
  const points = useRef<THREE.Points>(null!);
  const count = 900;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // distribute on a thick spherical shell
      const r = 3.2 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi) - 2;
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    const p = pointer.current;
    if (!points.current || !p) return;
    points.current.rotation.y += delta * 0.02;
    // parallax: field leans away from the cursor
    points.current.position.x = THREE.MathUtils.damp(
      points.current.position.x,
      -p.x * 0.4,
      2,
      delta
    );
    points.current.position.y = THREE.MathUtils.damp(
      points.current.position.y,
      -p.y * 0.4,
      2,
      delta
    );
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.022}
        color="#9fb4ff"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* Camera receives a subtle parallax too, so the whole scene has
   a hand-held, reactive feel. */
function ParallaxRig({ pointer }: { pointer: React.RefObject<Pointer> }) {
  const { camera } = useThree();
  useFrame((state, delta) => {
    const p = pointer.current;
    if (!p) return;
    camera.position.x = THREE.MathUtils.damp(camera.position.x, p.x * 0.5, 2, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, p.y * 0.5, 2, delta);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export function HeroCanvas() {
  const pointer = useGlobalPointer();
  const [ready, setReady] = useState(false);

  // mount after first paint to keep the hero text snappy
  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!ready) return null;

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      <color attach="background" args={["#060608"]} />
      <fog attach="fog" args={["#060608", 6, 13]} />

      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 6, 4]} intensity={1.4} color="#ffffff" />
      <pointLight position={[-5, -2, 2]} intensity={50} color="#8b5bff" />
      <pointLight position={[5, 3, -3]} intensity={45} color="#2fe3d0" />
      <pointLight position={[0, -4, 5]} intensity={30} color="#5b8cff" />

      <ParallaxRig pointer={pointer} />
      <ParticleField pointer={pointer} />
      <CoreBlob pointer={pointer} />
    </Canvas>
  );
}
