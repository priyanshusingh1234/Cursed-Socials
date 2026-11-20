'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import './intro.css';

export default function IntroPage() {
  const [light, setLight] = useState(false);
  const [likes, setLikes] = useState(1);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const origBg = document.body.style.backgroundColor;
    const origColor = document.body.style.color;
    if (light) {
      document.body.style.backgroundColor = '#fbf8f1';
      document.body.style.color = '#15121e';
    } else {
      document.body.style.backgroundColor = '#0e0b19';
      document.body.style.color = '#f7f4ed';
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
      <header className="header">
        <div className="wrap">
          <div className="topbar">
            <div className="topbar-left">
              <a
                href="https://hackclub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="badge"
              >
                <img src="/assets/hackclub-icon.svg" alt="Hack Club" />
                <span>HACK CLUB</span>
              </a>
              <span className="small-tag">ysws · part 1 of 2</span>
            </div>

            <button
              type="button"
              className="theme-btn"
              onClick={() => setLight(prev => !prev)}
            >
              {light ? 'dark mode' : 'light mode'}
            </button>
          </div>

          <div className="title-box">
            <div className="small-tag">&lt;beginner edition&gt;</div>
            <h1>CURSED SOCIALS</h1>
            <p className="subtitle">
              Part 1: Build your first real website from scratch. No frameworks,
              no React, no setup headaches. Just HTML, CSS, and plain JavaScript.
            </p>
          </div>

          <nav className="nav">
            <a href="#demo">&lt;live-preview&gt;</a>
            <Link href="/handbook">&lt;parts-1-to-3-handbook&gt;</Link>
            <a href="#pdf-guide">&lt;starter-pdf&gt;</a>
            <a href="#basics">&lt;the-3-files&gt;</a>
            <a href="#ideas">&lt;ideas&gt;</a>
            <a href="#steps">&lt;how-to-ship&gt;</a>
            <Link href="/" className="nav-accent">&lt;part-2: cursed-socials&gt;</Link>
          </nav>
        </div>
      </header>

      <main className="wrap">
        {/* DEMO + FAST TRACKS */}
        <section id="demo">
          <div className="goal">
            <span className="goal-tag">THE GOAL</span>
            <span>
              Build any small website or social feed, publish it online, and Hack
              Club sends you a $5 to $10 grant to buy whatever you want.
            </span>
          </div>

          <div className="two-col">
            <div>
              <div className="label">&lt;what-you-are-building&gt;</div>
              <h2>See what HTML &amp; CSS looks like</h2>
              <p>
                This little post card below is coded with basic HTML tags and a
                few lines of CSS. Click the like button to see a tiny piece of
                JavaScript run. You can make something just like this in under
                20 minutes:
              </p>

              <div className="card">
                <div className="card-title">my-first-post.html</div>
                <div className="card-body">
                  <div className="post-head">
                    <div className="avatar">P</div>
                    <div>
                      <strong>@priyanshu</strong>
                      <div className="muted-small">first website · just now</div>
                    </div>
                  </div>

                  <p className="post-text">
                    Hello world! I built this post using a &lt;div&gt;, an &lt;h3&gt;,
                    and a &lt;button&gt;. Styled it with 15 lines of CSS. Click
                    the like button below:
                  </p>

                  <div className="post-actions">
                    <button
                      type="button"
                      onClick={handleLike}
                      className={`like ${liked ? 'liked' : ''}`}
                    >
                      {liked ? 'liked' : 'like'} ({likes})
                    </button>
                    <span className="muted-small">
                      &lt;-- interactive button powered by JS
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="label">&lt;fast-tracks&gt;</div>
              <h2>Jump straight into building</h2>

              <div className="stack">
                <a
                  href="/part-1-guide.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-card"
                >
                  <div className="link-card-top">
                    <span className="pill">RECOMMENDED</span>
                    <span className="pill-outline">PDF</span>
                  </div>
                  <div className="link-card-title">Open 8-Page Starter PDF</div>
                  <div className="link-card-desc">
                    Illustrated guide with skeletons, the box model explained
                    with bubble wrap, and quick fixes.
                  </div>
                  <div className="link-card-cta">read guide (PDF) -&gt;</div>
                </a>

                <Link href="/handbook" className="link-card">
                  <div className="link-card-top">
                    <span className="pill">INTERACTIVE DEMOS</span>
                    <span className="pill-outline">LIVE LAB</span>
                  </div>
                  <div className="link-card-title">3-Part Guide with Live Demos</div>
                  <div className="link-card-desc">
                    Play with live Flexbox toggles, photo grids, like counters,
                    and in-browser comments from all 3 PDFs.
                  </div>
                  <div className="link-card-cta">open interactive handbook -&gt;</div>
                </Link>

                <Link href="/" className="link-card">
                  <div className="link-card-top">
                    <span className="pill">PART TWO</span>
                    <span className="pill-outline">LEVEL UP</span>
                  </div>
                  <div className="link-card-title">Finished basic site? Enter Cursed Socials</div>
                  <div className="link-card-desc">
                    Ready to break all the rules? Add runaway buttons, gravity
                    text, and chaotic scroll on the cursed stage.
                  </div>
                  <div className="link-card-cta">go to part 2 (cursed) -&gt;</div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PDF */}
        <section id="pdf-guide">
          <div className="pdf-box">
            <div>
              <span className="pill">PDF COMPANION</span>
              <h2>HTML &amp; CSS Basics (without getting a headache)</h2>
              <p>
                We put together an 8-page visual handbook showing the 2-minute
                setup, the only 7 HTML tags you actually need, and how to style a
                post card with border-radius, padding, and hover states.
              </p>
              <a
                href="/part-1-guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-main"
              >
                Download or View the PDF (8 pages) -&gt;
              </a>
            </div>

            <div className="card">
              <div className="card-title">handbook-toc.txt</div>
              <div className="toc">
                <div className="label">&lt;contents&gt;</div>
                <div>1. What are HTML, CSS, and JS?</div>
                <div>2. 2-minute setup with VS Code</div>
                <div>3. The only 7 HTML tags you need</div>
                <div>4. Adding CSS and classes</div>
                <div>5. Box Model: Polaroid &amp; bubble wrap</div>
                <div>6. Your Part 1 mini-project code</div>
                <div>7. Troubleshooting &amp; quick fixes</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 FILES */}
        <section id="basics">
          <div className="label">&lt;the-three-files&gt;</div>
          <h2>The anatomy of every website on Earth</h2>
          <p>
            Whether it is Instagram, Discord, or your personal blog, every site
            is powered by these three simple text files in a folder:
          </p>

          <div className="grid-3">
            <div className="card">
              <div className="card-title">index.html</div>
              <div className="card-body">
                <div className="label">FILE: index.html</div>
                <h3>HTML is the skeleton</h3>
                <p>
                  Puts things on the blank screen. Words, photo tags, links, and
                  buttons. Without CSS, it looks like a black and white document.
                </p>
                <pre>{`<h1>My Title</h1>
<p>Hello world!</p>
<button>Click me</button>`}</pre>
              </div>
            </div>

            <div className="card">
              <div className="card-title">style.css</div>
              <div className="card-body">
                <div className="label">FILE: style.css</div>
                <h3>CSS is the paint &amp; layout</h3>
                <p>
                  Turns the boring text into something you would actually use.
                  Background colors, round avatars, fonts, margins, and card borders.
                </p>
                <pre>{`body {
  background: #f4ecdc;
  font-family: sans-serif;
}
button {
  background: #ec3750;
}`}</pre>
              </div>
            </div>

            <div className="card">
              <div className="card-title">script.js</div>
              <div className="card-body">
                <div className="label">FILE: script.js</div>
                <h3>JavaScript is the brain</h3>
                <p>
                  Makes the page respond when someone touches it. Like counters,
                  theme switches, popups, and button clicks.
                </p>
                <pre>{`let count = 0;
btn.addEventListener('click', () => {
  count += 1;
  btn.textContent = count;
});`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* IDEAS */}
        <section id="ideas">
          <div className="label">&lt;inspiration-board&gt;</div>
          <h2>What can you build for Part 1?</h2>
          <p>
            You do NOT need to build a boring corporate site. Build something
            weird, fun, or personal to you:
          </p>

          <div className="grid-4">
            <div className="card card-body">
              <span className="pill">FAN SITE</span>
              <div className="num">01</div>
              <h4>A Fan Shrine</h4>
              <p>
                A site dedicated to your favorite band, anime character, game,
                or pet. Include pictures, quotes, and your favorite songs.
              </p>
            </div>

            <div className="card card-body">
              <span className="pill">FEED MOCK</span>
              <div className="num">02</div>
              <h4>A Mock Social Feed</h4>
              <p>
                Create a fake clone of Instagram or Twitter with silly posts,
                fake usernames, and a working like button.
              </p>
            </div>

            <div className="card card-body">
              <span className="pill">REVIEWS</span>
              <div className="num">03</div>
              <h4>A Ramen / Snack Reviewer</h4>
              <p>
                Review instant noodles or convenience store snacks with a
                simple rating counter and pros/cons lists.
              </p>
            </div>

            <div className="card card-body">
              <span className="pill">RETRO 90S</span>
              <div className="num">04</div>
              <h4>A Personal Homepage</h4>
              <p>
                A 90s-style personal corner of the internet with your projects,
                favorite links, drawings, and an about me section.
              </p>
            </div>
          </div>
        </section>

        {/* STEPS */}
        <section id="steps">
          <div className="label">&lt;how-to-ship&gt;</div>
          <h2>The 4 steps to get your grant</h2>

          <div className="stack">
            <div className="step">
              <div className="step-num">1</div>
              <div>
                <h3>Create your folder on your desktop</h3>
                <p>
                  Make a folder named <code>my-social</code> (no spaces). Inside
                  it, create two files: <code>index.html</code> and{' '}
                  <code>style.css</code>. Open that folder in VS Code or any text
                  editor.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-num">2</div>
              <div>
                <h3>Write your HTML structure</h3>
                <p>
                  Put your headings, paragraphs, and buttons on the page. Double
                  click <code>index.html</code> on your desktop to see it open
                  in Chrome or Safari.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-num">3</div>
              <div>
                <h3>Add CSS styling &amp; link it</h3>
                <p>
                  In the <code>&lt;head&gt;</code> of your HTML, add{' '}
                  <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;</code>.
                  Pick background colors, style your buttons, and round your borders.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-num">4</div>
              <div>
                <h3>Publish on Netlify Drop and submit</h3>
                <p>
                  Drag your whole folder into{' '}
                  <a
                    href="https://app.netlify.com/drop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-link"
                  >
                    app.netlify.com/drop
                  </a>{' '}
                  to get a live URL in 10 seconds. Submit your link and get a
                  $5–$10 grant from Hack Club.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LEVEL UP */}
        <section className="finished">
          <div className="label">&lt;level-up&gt;</div>
          <h2>FINISHED YOUR BASIC SITE?</h2>
          <p>
            You know how HTML and CSS work now. Now it is time to break all the
            rules. Add runaway buttons, letters that fall with gravity, and
            wobbly layouts in Part 2.
          </p>
          <div className="btn-row">
            <Link href="/" className="btn btn-main">
              Go To Part 2: Cursed Socials -&gt;
            </Link>
            <Link href="/guide" className="btn">
              See Live Cursed Demos -&gt;
            </Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <div>
            <strong>Cursed Socials</strong> · a Hack Club YSWS by Priyanshu Singh
          </div>
          <div className="footer-links">
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
            <Link href="/handbook">handbook</Link>
            <Link href="/">part 2</Link>
            <Link href="/handbook">guide</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
