'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import './intro.css';

export default function IntroPage() {
  const [light, setLight] = useState(true);
  const [likes, setLikes] = useState(1);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const origBg = document.body.style.backgroundColor;
    const origColor = document.body.style.color;
    if (light) {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#111111';
    } else {
      document.body.style.backgroundColor = '#111111';
      document.body.style.color = '#eeeeee';
    }
    return () => {
      document.body.style.backgroundColor = origBg;
      document.body.style.color = origColor;
    };
  }, [light]);

  function handleLike() {
    if (!liked) {
      setLikes(prev => prev + 1);
      setLiked(true);
    } else {
      setLikes(prev => prev - 1);
      setLiked(false);
    }
  }

  return (
    <div className={`site ${light ? 'light' : 'dark'}`}>
      <div className="wrap">
        <header className="header">
          <div className="topbar">
            <div>
              <a
                href="https://hackclub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hc-link"
              >
                <img src="/assets/hackclub-icon.svg" alt="Hack Club" />
                Hack Club
              </a>
              <span className="muted"> — ysws (part 1 of 2)</span>
            </div>

            <button
              type="button"
              onClick={() => setLight(prev => !prev)}
            >
              {light ? 'dark mode' : 'light mode'}
            </button>
          </div>

          <h1>CURSED SOCIALS</h1>
          <p>
            <strong>Part 1 (beginner edition):</strong> Build your first real
            website from scratch. No frameworks, no React, no setup headaches.
            Just HTML, CSS, and plain JavaScript.
          </p>

          <nav className="nav">
            <a href="#demo">preview</a> ·{' '}
            <Link href="/handbook">handbook</Link> ·{' '}
            <a href="#pdf-guide">starter pdf</a> ·{' '}
            <a href="#basics">the 3 files</a> ·{' '}
            <a href="#ideas">ideas</a> ·{' '}
            <a href="#steps">how to ship</a> ·{' '}
            <Link href="/" className="accent">
              part 2: cursed socials
            </Link>
          </nav>
        </header>

        <hr />

        <main>
          <blockquote className="goal">
            <strong>THE GOAL:</strong> Build any small website or social feed,
            publish it online, and Hack Club sends you a $5 to $10 grant to buy
            whatever you want.
          </blockquote>

          {/* DEMO */}
          <section id="demo">
            <h2>1. See what HTML &amp; CSS looks like</h2>
            <p>
              This little post box below is coded with basic HTML tags and a few
              lines of CSS. Click the like button to see a tiny piece of
              JavaScript run. You can make something like this in under 20
              minutes:
            </p>

            <div className="demo-post">
              <p className="post-meta">
                <strong>@priyanshu</strong> · first website · just now
              </p>
              <p>
                Hello world! I built this post using a <code>&lt;div&gt;</code>,
                a <code>&lt;p&gt;</code>, and a <code>&lt;button&gt;</code>.
                Click the like button below:
              </p>
              <button
                type="button"
                onClick={handleLike}
                className={liked ? 'btn-red' : ''}
              >
                {liked ? 'liked' : 'like'} ({likes})
              </button>
              <span className="muted"> &lt;-- powered by JS</span>
            </div>

            <h3>Where to start</h3>
            <ul>
              <li>
                <a
                  href="/part-1-guide.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Open the 8-Page Starter PDF</strong>
                </a>{' '}
                — Illustrated guide with the 2-min setup, box model explained
                with bubble wrap, and quick fixes.
              </li>
              <li>
                <Link href="/handbook">
                  <strong>3-Part Interactive Handbook</strong>
                </Link>{' '}
                — Play with live Flexbox toggles, photo grids, like counters,
                and comments right in your browser.
              </li>
              <li>
                <Link href="/" className="accent">
                  <strong>Already built a basic site? Go to Part 2</strong>
                </Link>{' '}
                — Break all the rules with runaway buttons, gravity text, and
                chaotic scroll.
              </li>
            </ul>
          </section>

          <hr />

          {/* PDF */}
          <section id="pdf-guide">
            <h2>2. The 8-Page Starter PDF</h2>
            <p>
              I put together a short visual handbook showing the 2-minute setup,
              the only 7 HTML tags you actually need, and how to style a post
              card.
            </p>
            <p>
              <a
                href="/part-1-guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link"
              >
                Download or View the PDF (8 pages)
              </a>
            </p>

            <p className="muted">What&apos;s inside:</p>
            <ol>
              <li>What are HTML, CSS, and JS?</li>
              <li>2-minute setup with VS Code</li>
              <li>The only 7 HTML tags you need</li>
              <li>Adding CSS and classes</li>
              <li>Box Model: Polaroid &amp; bubble wrap</li>
              <li>Your Part 1 mini-project code</li>
              <li>Troubleshooting &amp; quick fixes</li>
            </ol>
          </section>

          <hr />

          {/* 3 FILES */}
          <section id="basics">
            <h2>3. Every website is just 3 text files</h2>
            <p>
              Instagram, Discord, or your personal blog—every site starts with
              these three files in a folder:
            </p>

            <h3>index.html (the stuff on the page)</h3>
            <p>
              Text, photos, links, and buttons. Without CSS, it looks like a
              plain black-and-white document.
            </p>
            <pre>{`<h1>My Title</h1>
<p>Hello world!</p>
<button>Click me</button>`}</pre>

            <h3>style.css (the colors &amp; layout)</h3>
            <p>
              Background colors, fonts, margins, and borders.
            </p>
            <pre>{`body {
  background: #fbf8f1;
  font-family: sans-serif;
}
button {
  background: #ec3750;
  color: white;
}`}</pre>

            <h3>script.js (making things react)</h3>
            <p>
              Like counters, dark mode toggles, popups, and button clicks.
            </p>
            <pre>{`let count = 0;
btn.onclick = () => {
  count += 1;
  btn.textContent = count;
};`}</pre>
          </section>

          <hr />

          {/* IDEAS */}
          <section id="ideas">
            <h2>4. Ideas for what to build</h2>
            <p>Make something weird, fun, or personal to you:</p>
            <ul>
              <li>
                <strong>A fan shrine:</strong> Dedicated to your favorite band,
                anime character, game, or pet with photos, quotes, and songs.
              </li>
              <li>
                <strong>A fake social feed:</strong> A mini Instagram or Twitter
                parody with silly posts, fake usernames, and a working like
                button.
              </li>
              <li>
                <strong>A ramen / snack reviewer:</strong> Rate instant noodles
                or snacks with a simple counter and pros/cons lists.
              </li>
              <li>
                <strong>A 90s personal homepage:</strong> Your own corner of the
                internet with your projects, favorite links, drawings, and an
                about me section.
              </li>
            </ul>
          </section>

          <hr />

          {/* STEPS */}
          <section id="steps">
            <h2>5. How to ship &amp; get your grant</h2>
            <ol>
              <li>
                <strong>Make a folder on your desktop.</strong> Name it{' '}
                <code>my-social</code> (no spaces). Inside, create{' '}
                <code>index.html</code> and <code>style.css</code>, and open the
                folder in VS Code.
              </li>
              <li>
                <strong>Write your HTML.</strong> Add headings, paragraphs, and
                buttons. Double-click <code>index.html</code> to open it in
                Chrome or Safari.
              </li>
              <li>
                <strong>Link your CSS.</strong> Inside <code>&lt;head&gt;</code>
                , add{' '}
                <code>
                  &lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;
                </code>
                . Mess around with colors, fonts, and borders.
              </li>
              <li>
                <strong>Publish on Netlify Drop.</strong> Drag your folder onto{' '}
                <a
                  href="https://app.netlify.com/drop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  app.netlify.com/drop
                </a>{' '}
                to get a live URL in 10 seconds. Submit your link to get a
                $5–$10 grant from Hack Club.
              </li>
            </ol>
          </section>

          <hr />

          {/* LEVEL UP */}
          <section>
            <h2>Finished your basic site?</h2>
            <p>
              Now break all the rules. Add runaway buttons, letters that fall
              with gravity, and wobbly layouts in Part 2.
            </p>
            <p className="actions">
              <Link href="/" className="btn-link">
                Go to Part 2: Cursed Socials
              </Link>{' '}
              <Link href="/guide">See live cursed demos</Link>
            </p>
          </section>
        </main>

        <hr />

        <footer className="footer">
          <p>
            <strong>Cursed Socials</strong> — a Hack Club YSWS by Priyanshu
            Singh
          </p>
          <p>
            <a
              href="https://hackclub.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              hackclub.com
            </a>{' '}
            ·{' '}
            <a
              href="https://hackclub.enterprise.slack.com/archives/C0CDPQX3YT0"
              target="_blank"
              rel="noopener noreferrer"
            >
              #cursed-socials slack
            </a>{' '}
            · <Link href="/handbook">handbook</Link> ·{' '}
            <Link href="/guide">cursed demos</Link> ·{' '}
            <Link href="/">part 2</Link>
          </p>
        </footer>
      </div>
    </div>
  );
}