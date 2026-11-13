import Link from 'next/link';

export default function SiteFooter({ isGuide = false }) {
  return (
    <footer className="foot-footer" aria-label="Footer">
      <div className="foot-footer-inner">
        <div className="footer-priyanshu-brand">
          <img
            src="/assets/hackclub-icon.svg"
            alt="Hack Club"
            className="round-hc-icon"
          />
          <span>
            <strong>Cursed Socials</strong> — ship something silly, get a grant.
            <span className="priyanshu-subtext"> a Hack Club YSWS · teens 13–18 · by Priyanshu Singh</span>
          </span>
        </div>

        <nav className="foot-links-row" aria-label="Program links">
          {isGuide ? (
            <Link href="/" className="foot-link-thing">← back to site</Link>
          ) : (
            <Link href="/guide" className="foot-link-thing">detailed guide</Link>
          )}
          <a
            href="/beginner-guide.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="foot-link-thing"
          >
            download guide (pdf)
          </a>
          <a href="#faq" className="foot-link-thing">faq</a>
          <a
            href="https://rsvp.soon.it/cursed-socials-rsvp"
            target="_blank"
            rel="noopener noreferrer"
            className="foot-link-thing"
          >
            rsvp
          </a>
        </nav>

        <nav className="foot-links-row extra-hc-links" aria-label="Hack Club links">
          <a href="https://hackclub.com/" target="_blank" rel="noopener noreferrer" className="foot-link-thing">hackclub.com</a>
          <a href="https://hackclub.com/slack" target="_blank" rel="noopener noreferrer" className="foot-link-thing">#cursed-socials on slack</a>
          <a href="https://hackclub.com/programs" target="_blank" rel="noopener noreferrer" className="foot-link-thing">ysws programs</a>
          <a href="https://hackclub.com/conduct" target="_blank" rel="noopener noreferrer" className="foot-link-thing">code of conduct</a>
          <a href="https://hackclub.com/privacy-and-terms" target="_blank" rel="noopener noreferrer" className="foot-link-thing">privacy</a>
          <a href="https://github.com/hackclub" target="_blank" rel="noopener noreferrer" className="foot-link-thing">github</a>
        </nav>
      </div>
    </footer>
  );
}
