'use client';

import Link from 'next/link';
import { useState } from 'react';
import './intro.css';

export default function IntroPage() {
  const [light, setLight] = useState(false);

  return (
    <div className={`intro-page ${light ? 'intro-light' : ''}`}>
      <header className="intro-banner">
        <div className="intro-wrap intro-banner-row">
          <a
            href="https://hackclub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="intro-hc"
          >
            <img src="/assets/hackclub-icon.svg" alt="Hack Club" />
            <span>HACK CLUB</span>
          </a>

          <button
            type="button"
            className="intro-theme-btn"
            onClick={() => setLight(p => !p)}
          >
            {light ? 'go dark' : 'go light'}
          </button>
        </div>

        <div className="intro-wrap">
          <h1 className="intro-logo">cursed socials.</h1>
          <p className="intro-logo-sub">part 1 — learn to build stuff</p>
        </div>
      </header>

      <main className="intro-wrap">
        <section className="intro-hero">
          <p className="intro-tagline">
            Build your first real website with HTML, CSS, and JS — any kind of
            site you want. We will send you a $5–$10 grant when you ship it!
          </p>

          <div className="intro-buttons">
            <Link href="/guide" className="intro-pill intro-pill-fill">
              read the guide
            </Link>
            <a href="#steps" className="intro-pill">
              how it works
            </a>
          </div>

          <div className="intro-buttons">
            <Link href="/" className="intro-pill intro-pill-red">
              part 2: cursed socials →
            </Link>
          </div>
        </section>

        <section className="intro-block" id="learn">
          <h2>what you will actually learn</h2>
          <p className="intro-note">
            part 1 of 2 · for teens 13–18 · no coding experience needed
          </p>

          <ul className="intro-list">
            <li>
              <strong>HTML</strong> — puts headings, images, navbars, buttons,
              and everything else on the page
            </li>
            <li>
              <strong>CSS</strong> — colors, fonts, layouts, and spacing so it
              looks like something you would actually use
            </li>
            <li>
              <strong>JavaScript</strong> — makes buttons do things when you
              click them, counters that count, popups that pop
            </li>
          </ul>
        </section>

        <section className="intro-block" id="steps">
          <h2>how to do it</h2>

          <ol className="intro-steps">
            <li>
              <strong>make three files</strong> in a folder:
              <pre>{`my-site/
├── index.html
├── style.css
└── script.js`}</pre>
            </li>

            <li>
              <strong>build any website you want</strong> — a portfolio, a fan
              page, a fake store, a blog, a social feed, literally anything
              using HTML and CSS:
              <pre>{`<nav class="topbar">my cool site</nav>
<div class="card">
  <h2>hello world</h2>
  <p>i made this myself!</p>
  <button id="click-me">click me</button>
</div>`}</pre>
            </li>

            <li>
              <strong>add one JavaScript thing</strong> — a click counter, an
              alert, a color changer, anything interactive:
              <pre>{`let count = 0;
document.getElementById('click-me')
  .addEventListener('click', function() {
    count = count + 1;
    alert('clicked ' + count + ' times');
  });`}</pre>
            </li>

            <li>
              <strong>put it online and submit.</strong> drag your folder
              into{' '}
              <a
                href="https://app.netlify.com/drop"
                target="_blank"
                rel="noopener noreferrer"
              >
                netlify.com/drop
              </a>{' '}
              to get a live link, then submit it for a $5–$10 Hack Club grant.
              after that, go break everything in{' '}
              <Link href="/">Part 2</Link>.
            </li>
          </ol>
        </section>
      </main>

      <footer className="intro-footer">
        <div className="intro-wrap intro-footer-row">
          <span>cursed socials — hack club ysws · by priyanshu singh</span>
          <div className="intro-footer-links">
            <a
              href="https://hackclub.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              hackclub.com
            </a>
            <a
              href="https://hackclub.enterprise.slack.com/archives/C0CDPQX3YT0"
              target="_blank"
              rel="noopener noreferrer"
            >
              #cursed-socials
            </a>
            <a
              href="https://hackclub.com/conduct"
              target="_blank"
              rel="noopener noreferrer"
            >
              conduct
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
