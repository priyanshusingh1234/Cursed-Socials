'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import './intro.css';

export default function IntroPage() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const origBg = document.body.style.backgroundColor;
    const origColor = document.body.style.color;
    if (light) {
      document.body.style.backgroundColor = '#faf7f2';
      document.body.style.color = '#1c1824';
    } else {
      document.body.style.backgroundColor = '#0d0c15';
      document.body.style.color = '#f2edf9';
    }
    return () => {
      document.body.style.backgroundColor = origBg;
      document.body.style.color = origColor;
    };
  }, [light]);

  return (
    <div className={`intro-page ${light ? 'intro-light' : 'intro-dark'}`}>
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
          <p className="intro-logo-sub">part 1: build whatever you want</p>
        </div>
      </header>

      <main className="intro-wrap">
        <section className="intro-hero">
          <p className="intro-tagline">
            Make your own website from scratch using plain HTML, CSS, and a
            little bit of JavaScript. It can be about literally anything you
            want. Once you put it online, Hack Club sends you $5 to $10 to buy
            whatever you like.
          </p>

          <div className="intro-buttons">
            <Link href="/guide" className="intro-pill intro-pill-fill">
              see the guide
            </Link>
            <a href="#steps" className="intro-pill">
              the 4 steps
            </a>
          </div>

          <div className="intro-buttons">
            <Link href="/" className="intro-pill intro-pill-red">
              part 2: make it cursed -&gt;
            </Link>
          </div>
        </section>

        <section className="intro-block" id="learn">
          <h2>the three basics</h2>
          <p className="intro-note">
            ages 13 to 18 · you do not need any coding experience at all
          </p>

          <ul className="intro-list">
            <li>
              <strong>HTML</strong> is for your content. It adds your text,
              pictures, buttons, and page links.
            </li>
            <li>
              <strong>CSS</strong> is for styling. It lets you pick your
              background colors, fonts, borders, and spacing.
            </li>
            <li>
              <strong>JavaScript</strong> is for action. It makes buttons
              clickable so your site can react when someone taps on it.
            </li>
          </ul>
        </section>

        <section className="intro-block" id="steps">
          <h2>how to get your grant</h2>

          <ol className="intro-steps">
            <li>
              <strong>Make a folder</strong> on your computer. Inside, make
              three empty files: index.html, style.css, and script.js. You can
              open them in any text editor like VS Code or Notepad.
              <pre>{`my-site/
├── index.html
├── style.css
└── script.js`}</pre>
            </li>

            <li>
              <strong>Build your idea.</strong> It can be about anything you care
              about: your favorite video game, a music artist, a fun quiz, a
              simple portfolio, or silly jokes. Write your words in HTML and
              make it look nice with CSS:
              <pre>{`<nav class="topbar">my site</nav>
<div class="card">
  <h2>hello!</h2>
  <p>i built this website myself.</p>
  <button id="click-me">click me</button>
</div>`}</pre>
            </li>

            <li>
              <strong>Add a simple button action.</strong> Write a few lines in
              script.js so something happens when someone clicks your button,
              like updating the text or showing a message:
              <pre>{`let count = 0;
const btn = document.getElementById('click-me');

btn.addEventListener('click', () => {
  count = count + 1;
  btn.textContent = 'clicked ' + count + ' times';
});`}</pre>
            </li>

            <li>
              <strong>Put it online and get your grant.</strong> Go to{' '}
              <a
                href="https://app.netlify.com/drop"
                target="_blank"
                rel="noopener noreferrer"
              >
                app.netlify.com/drop
              </a>{' '}
              and drag your folder onto the screen to get a live link. Submit
              your link, and Hack Club will send you a $5 to $10 grant. After
              that, you can check out <Link href="/">Part 2</Link> to make
              cursed projects.
            </li>
          </ol>
        </section>
      </main>

      <footer className="intro-footer">
        <div className="intro-wrap intro-footer-row">
          <span>cursed socials · a hack club ysws by priyanshu singh</span>
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
              #cursed-socials slack
            </a>
            <a
              href="https://hackclub.com/conduct"
              target="_blank"
              rel="noopener noreferrer"
            >
              code of conduct
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
