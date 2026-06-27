import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { site } from "@/config/site";

const UPDATED = "June 26, 2026";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `The terms that govern your use of the ${site.name} website.`,
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Use"
      updated={UPDATED}
      intro={`These Terms of Use govern your access to and use of ${site.domain}. By using the site, you agree to these terms.`}
    >
      <h2>1. Acceptance of terms</h2>
      <p>
        By accessing or using {site.domain} (the &ldquo;Site&rdquo;), you agree
        to be bound by these Terms of Use and our{" "}
        <a href="/privacy">Privacy Policy</a>. If you do not agree, please do not
        use the Site.
      </p>

      <h2>2. Use of the site</h2>
      <p>You agree to use the Site lawfully and not to:</p>
      <ul>
        <li>Violate any applicable law or regulation.</li>
        <li>
          Attempt to gain unauthorized access to the Site, its systems, or its
          data.
        </li>
        <li>
          Interfere with or disrupt the integrity or performance of the Site.
        </li>
        <li>
          Copy, scrape, or reproduce content from the Site except as expressly
          permitted.
        </li>
      </ul>

      <h2>3. Services and engagements</h2>
      <p>
        The Site describes the services {site.name} offers. Information here is
        for general purposes and does not constitute an offer or commitment. Any
        engagement to design, build, or monitor software is governed by a
        separate written agreement between you and {site.name}, which controls in
        the event of any conflict with these terms.
      </p>

      <h2>4. Intellectual property</h2>
      <p>
        The Site and its content — including text, design, graphics, logos, and
        code — are owned by {site.name} or its licensors and are protected by
        intellectual property laws. You may not use our marks or content without
        prior written permission, except as needed to view the Site normally.
      </p>

      <h2>5. Third-party links</h2>
      <p>
        The Site may link to third-party websites or services that we do not
        control. We are not responsible for their content, policies, or
        practices, and including a link does not imply endorsement.
      </p>

      <h2>6. Disclaimer of warranties</h2>
      <p>
        The Site is provided on an &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; basis without warranties of any kind, whether express or
        implied, including merchantability, fitness for a particular purpose, and
        non-infringement. We do not warrant that the Site will be uninterrupted,
        secure, or error-free.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {site.name} will not be liable
        for any indirect, incidental, special, consequential, or punitive damages
        arising from your use of, or inability to use, the Site.
      </p>

      <h2>8. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless {site.name} from any claims,
        losses, or expenses arising out of your misuse of the Site or violation
        of these terms.
      </p>

      <h2>9. Changes to these terms</h2>
      <p>
        We may update these Terms of Use from time to time. Continued use of the
        Site after changes take effect constitutes acceptance of the revised
        terms. The &ldquo;Last updated&rdquo; date above reflects the current
        version.
      </p>

      <h2>10. Contact us</h2>
      <p>
        Questions about these terms? Reach us at{" "}
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
