import Link from 'next/link';

const HACKCLUB_LINKS = [
  { label: 'Hack Club', href: 'https://hackclub.com/' },
  { label: 'Slack (#cursed-socials)', href: 'https://hackclub.com/slack' },
  { label: 'YSWS Programs', href: 'https://hackclub.com/programs' },
  { label: 'Hackatime', href: 'https://hackatime.hackclub.com/' },
  { label: 'Philosophy', href: 'https://hackclub.com/philosophy' },
  { label: 'Code of Conduct', href: 'https://hackclub.com/conduct' },
  { label: 'Privacy & Terms', href: 'https://hackclub.com/privacy-and-terms' },
  { label: 'GitHub', href: 'https://github.com/hackclub' }
];

/**
 * Hand-drawn zine colophon footer shared across the homepage and guide page.
 */
export default function SiteFooter({ isGuide = false }) {
  return (
    <footer className="site-footer" aria-label="Footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <img
            src="/assets/hackclub-icon.svg"
            alt="Hack Club"
            className="site-footer-icon"
          />
          <span>
            <strong>Cursed Socials</strong> — a Hack Club YSWS by Priyanshu Singh (teens 13–18)
          </span>
        </div>

        <nav className="site-footer-links" aria-label="Program links">
          {isGuide ? (
            <Link href="/" className="site-footer-link">
              ← Back to Main Site
            </Link>
          ) : (
            <Link href="/guide" className="site-footer-link">
              Beginner Guide
            </Link>
          )}
          <a
            href="/beginner-guide.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer-link"
          >
            17-Slide Starter PDF
          </a>
        </nav>

        <nav className="site-footer-links" aria-label="Hack Club essential links">
          {HACKCLUB_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer-link"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

