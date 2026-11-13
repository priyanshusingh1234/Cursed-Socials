import Link from 'next/link';

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
            <strong>Cursed Socials</strong> — ship something silly, get a grant.
            <span className="site-footer-sub"> a Hack Club YSWS · teens 13–18 · by Priyanshu Singh</span>
          </span>
        </div>

        <nav className="site-footer-links" aria-label="Program links">
          {isGuide ? (
            <Link href="/" className="site-footer-link">← back to site</Link>
          ) : (
            <Link href="/guide" className="site-footer-link">detailed guide</Link>
          )}
          <a
            href="/beginner-guide.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer-link"
          >
            download guide (pdf)
          </a>
          <a href="#faq" className="site-footer-link">faq</a>
          <a
            href="https://rsvp.soon.it/cursed-socials-rsvp"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer-link"
          >
            rsvp
          </a>
        </nav>

        <nav className="site-footer-links site-footer-hc" aria-label="Hack Club links">
          <a href="https://hackclub.com/" target="_blank" rel="noopener noreferrer" className="site-footer-link">hackclub.com</a>
          <a href="https://hackclub.com/slack" target="_blank" rel="noopener noreferrer" className="site-footer-link">#cursed-socials on slack</a>
          <a href="https://hackclub.com/programs" target="_blank" rel="noopener noreferrer" className="site-footer-link">ysws programs</a>
          <a href="https://hackclub.com/conduct" target="_blank" rel="noopener noreferrer" className="site-footer-link">code of conduct</a>
          <a href="https://hackclub.com/privacy-and-terms" target="_blank" rel="noopener noreferrer" className="site-footer-link">privacy</a>
          <a href="https://github.com/hackclub" target="_blank" rel="noopener noreferrer" className="site-footer-link">github</a>
        </nav>
      </div>
    </footer>
  );
}
