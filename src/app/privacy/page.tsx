import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { site } from "@/config/site";

const UPDATED = "June 26, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects your information.`,
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated={UPDATED}
      intro={`This Privacy Policy explains how ${site.name} ("we", "us", or "our") collects, uses, and safeguards information when you visit ${site.domain} or engage us to build software.`}
    >
      <h2>1. Information we collect</h2>
      <p>We collect only what we need to respond to you and deliver our work:</p>
      <ul>
        <li>
          <strong>Information you provide.</strong> Your name, email address,
          company, and the details of any project or message you send us — for
          example through our contact links or by email.
        </li>
        <li>
          <strong>Usage data.</strong> Standard technical information such as
          your browser type, device, referring pages, and how you interact with
          the site, collected to keep it secure and improve it.
        </li>
        <li>
          <strong>Client project data.</strong> When you engage us, we may
          process data and materials you share so we can design, build, and
          monitor your software. This is governed by our engagement agreement.
        </li>
      </ul>

      <h2>2. How we use information</h2>
      <ul>
        <li>To respond to enquiries and provide the services you request.</li>
        <li>To design, build, deliver, and monitor software on your behalf.</li>
        <li>To operate, secure, maintain, and improve our website.</li>
        <li>To comply with legal obligations and enforce our agreements.</li>
      </ul>

      <h2>3. How we share information</h2>
      <p>
        We do not sell your personal information. We share it only with trusted
        service providers who help us operate (such as hosting, analytics, and
        communication tools), when required by law, or to protect our rights.
        These providers are bound to handle information consistent with this
        policy.
      </p>

      <h2>4. Data retention</h2>
      <p>
        We keep personal information only as long as needed for the purposes
        described here, to maintain our business records, or as required by law.
        We delete or anonymize it when it is no longer needed.
      </p>

      <h2>5. Security</h2>
      <p>
        We use reasonable administrative, technical, and organizational measures
        to protect information against unauthorized access, loss, or misuse. No
        method of transmission or storage is completely secure, so we cannot
        guarantee absolute security.
      </p>

      <h2>6. Your rights</h2>
      <p>
        Depending on where you live, you may have the right to access, correct,
        delete, or restrict the use of your personal information, or to object to
        certain processing. To exercise these rights, contact us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>7. International transfers</h2>
      <p>
        We may process and store information in countries other than your own.
        Where we transfer personal information across borders, we take steps to
        ensure it remains protected in line with this policy.
      </p>

      <h2>8. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will
        revise the &ldquo;Last updated&rdquo; date above. Material changes will be
        communicated where appropriate.
      </p>

      <h2>9. Contact us</h2>
      <p>
        Questions about this policy or your information? Reach us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <p className="text-ink-3">
        This document is provided as a general template and does not constitute
        legal advice. Please have it reviewed by qualified counsel before relying
        on it.
      </p>
    </LegalLayout>
  );
}
