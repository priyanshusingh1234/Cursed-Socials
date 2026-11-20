'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import './handbook.css';

export default function HandbookPage() {
  const [siteLight, setSiteLight] = useState(false);
  const [activePart, setActivePart] = useState('all');

  const [boxPadding, setBoxPadding] = useState(16);
  const [boxMargin, setBoxMargin] = useState(16);

  const [flexActive, setFlexActive] = useState(true);
  const [justifyType, setJustifyType] = useState('space-between');
  const [layoutMode, setLayoutMode] = useState('grid3');

  const [likeCount, setLikeCount] = useState(0);
  const [spamAlert, setSpamAlert] = useState(false);
  const [demoDark, setDemoDark] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([
    '@alex: this actually works lol',
    '@sam: wait flexbox makes so much sense now'
  ]);

  useEffect(() => {
    const origBg = document.body.style.backgroundColor;
    const origColor = document.body.style.color;
    if (siteLight) {
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
  }, [siteLight]);

  function handleLikeClick() {
    const next = likeCount + 1;
    setLikeCount(next);
    if (next === 10) {
      setSpamAlert(true);
    }
  }

  function handleAddComment(e) {
    e.preventDefault();
    if (!commentText.trim()) return;
    setComments(prev => [...prev, `@you: ${commentText.trim()}`]);
    setCommentText('');
  }

  return (
    <div className={`site ${siteLight ? 'light' : 'dark'}`}>
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
              <span className="small-tag">complete 3-part guide</span>
            </div>

            <div className="topbar-right">
              <Link href="/intro" className="nav-accent topbar-link">
                &lt;- back to part 1
              </Link>
              <button
                type="button"
                className="theme-btn"
                onClick={() => setSiteLight(prev => !prev)}
              >
                {siteLight ? 'dark mode' : 'light mode'}
              </button>
            </div>
          </div>

          <div className="title-box">
            <div className="small-tag">&lt;live interactive handbook&gt;</div>
            <h1>THE 3-PART GUIDE</h1>
            <p className="subtitle">
              Everything in the three Cursed Socials beginner PDFs, now with live
              interactive widgets you can poke and test before writing a single
              line of code.
            </p>
          </div>

          <nav className="nav">
            <Link href="/intro" className="nav-accent">&lt;- part 1: intro&gt;</Link>
            <a href="#part1-section">&lt;part-1: html-css&gt;</a>
            <a href="#part2-section">&lt;part-2: flexbox-grid&gt;</a>
            <a href="#part3-section">&lt;part-3: javascript&gt;</a>
            <Link href="/">&lt;cursed socials home&gt;</Link>
          </nav>

          <div className="grid-3 pdf-overview-grid">
            <div className="card">
              <div className="card-title">part-1-guide.pdf · 8 pages</div>
              <div className="card-body">
                <span className="pill">PART 1 · 8 PAGES</span>
                <h3>HTML &amp; CSS Basics</h3>
                <p>
                  Setting up VS Code, the 7 essential HTML tags, colors, fonts,
                  and the Box Model.
                </p>
                <div className="card-btn-row">
                  <a
                    href="/part-1-guide.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-main"
                  >
                    open pdf -&gt;
                  </a>
                  <button
                    type="button"
                    onClick={() => setActivePart('part1')}
                    className="btn"
                  >
                    demos
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-title">part-2-guide.pdf · 6 pages</div>
              <div className="card-body">
                <span className="pill">PART 2 · 6 PAGES</span>
                <h3>Flexbox &amp; CSS Grid</h3>
                <p>
                  Stop stacking everything vertically. Sticky navbars, round
                  avatars, photo grids, and mobile queries.
                </p>
                <div className="card-btn-row">
                  <a
                    href="/part-2-guide.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-main"
                  >
                    open pdf -&gt;
                  </a>
                  <button
                    type="button"
                    onClick={() => setActivePart('part2')}
                    className="btn"
                  >
                    demos
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-title">part-3-guide.pdf · 5 pages</div>
              <div className="card-body">
                <span className="pill">PART 3 · 5 PAGES</span>
                <h3>JavaScript &amp; Shipping</h3>
                <p>
                  Working like counters, one-click dark mode, live comments, and
                  deploying on Netlify Drop.
                </p>
                <div className="card-btn-row">
                  <a
                    href="/part-3-guide.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-main"
                  >
                    open pdf -&gt;
                  </a>
                  <button
                    type="button"
                    onClick={() => setActivePart('part3')}
                    className="btn"
                  >
                    demos
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="filter-pill-bar">
            <button
              type="button"
              className={`filter-btn ${activePart === 'all' ? 'active' : ''}`}
              onClick={() => setActivePart('all')}
            >
              all 3 parts
            </button>
            <button
              type="button"
              className={`filter-btn ${activePart === 'part1' ? 'active' : ''}`}
              onClick={() => setActivePart('part1')}
            >
              part 1: html &amp; css
            </button>
            <button
              type="button"
              className={`filter-btn ${activePart === 'part2' ? 'active' : ''}`}
              onClick={() => setActivePart('part2')}
            >
              part 2: flexbox &amp; grid
            </button>
            <button
              type="button"
              className={`filter-btn ${activePart === 'part3' ? 'active' : ''}`}
              onClick={() => setActivePart('part3')}
            >
              part 3: javascript
            </button>
          </div>
        </div>
      </header>

      <main className="wrap">
        {(activePart === 'all' || activePart === 'part1') && (
          <section id="part1-section">
            <div className="label">&lt;part-1: html-css-basics&gt;</div>
            <h2>PART 1: HTML &amp; CSS BASICS</h2>
            <p>
              From the 8-page guide. Here are the two core concepts you need to
              understand before moving forward:
            </p>

            <div className="card">
              <div className="card-title">live-demo-1.1: the-box-model.html</div>
              <div className="card-body">
                <div className="demo-head">
                  <span className="pill">LIVE DEMO 1.1</span>
                  <h3>The Box Model Visualizer</h3>
                </div>
                <p>
                  From page 5: In CSS, every single element is a box. Content is the
                  Polaroid picture, Padding is the soft bubble wrap inside, Border
                  is the cardboard walls, and Margin is the space pushing other
                  boxes away.
                </p>

                <div className="controls-panel">
                  <label className="slider-label">
                    Padding (bubble wrap): {boxPadding}px
                    <input
                      type="range"
                      min="4"
                      max="40"
                      value={boxPadding}
                      onChange={e => setBoxPadding(Number(e.target.value))}
                    />
                  </label>

                  <label className="slider-label">
                    Margin (space outside): {boxMargin}px
                    <input
                      type="range"
                      min="0"
                      max="40"
                      value={boxMargin}
                      onChange={e => setBoxMargin(Number(e.target.value))}
                    />
                  </label>
                </div>

                <div className="box-playground">
                  <div
                    className="box-margin-zone"
                    style={{ padding: `${boxMargin}px` }}
                  >
                    <div
                      className="box-cardboard-zone"
                      style={{ padding: `${boxPadding}px` }}
                    >
                      <div className="box-polaroid-zone">
                        <strong>Polaroid Content</strong>
                        <span className="muted-small">@you: hello from html!</span>
                      </div>
                    </div>
                  </div>
                </div>

                <pre>{`.post {
  padding: ${boxPadding}px;
  margin: ${boxMargin}px auto;
  border: 2px solid #24211f;
}`}</pre>
              </div>
            </div>
          </section>
        )}

        {(activePart === 'all' || activePart === 'part2') && (
          <section id="part2-section">
            <div className="label">&lt;part-2: flexbox-grid&gt;</div>
            <h2>PART 2: LAYOUTS (FLEXBOX &amp; GRID)</h2>
            <p>
              From the 6-page guide. Browsers naturally stack everything like
              pancakes. Flexbox and Grid are your superpowers to put things side
              by side.
            </p>

            <div className="card">
              <div className="card-title">live-demo-2.1: flexbox-navbar.css</div>
              <div className="card-body">
                <div className="demo-head">
                  <span className="pill">LIVE DEMO 2.1</span>
                  <h3>Flexbox: The Magic Side-by-Side Switch</h3>
                </div>
                <p>
                  Page 1 of Part 2: Toggle <code>display: flex</code> to watch
                  three items snap from stacked pancakes to a horizontal row.
                </p>

                <div className="btn-row-left">
                  <button
                    type="button"
                    className={`btn ${flexActive ? 'btn-main' : ''}`}
                    onClick={() => setFlexActive(true)}
                  >
                    display: flex (side-by-side)
                  </button>
                  <button
                    type="button"
                    className={`btn ${!flexActive ? 'btn-main' : ''}`}
                    onClick={() => setFlexActive(false)}
                  >
                    default block (pancake stack)
                  </button>

                  {flexActive && (
                    <select
                      className="select-input"
                      value={justifyType}
                      onChange={e => setJustifyType(e.target.value)}
                    >
                      <option value="space-between">justify-content: space-between</option>
                      <option value="center">justify-content: center</option>
                      <option value="flex-start">justify-content: flex-start</option>
                    </select>
                  )}
                </div>

                <div
                  className="flex-stage"
                  style={{
                    display: flexActive ? 'flex' : 'block',
                    justifyContent: flexActive ? justifyType : 'initial',
                    alignItems: 'center',
                    gap: flexActive ? '14px' : '8px'
                  }}
                >
                  <div className="flex-box-item">Box 1 (Avatar)</div>
                  <div className="flex-box-item">Box 2 (Username)</div>
                  <div className="flex-box-item">Box 3 (Follow Btn)</div>
                </div>

                <pre>{flexActive ? `.parent-box {
  display: flex;
  justify-content: ${justifyType};
  align-items: center;
  gap: 14px;
}` : `.parent-box {
  display: block;
}`}</pre>
              </div>
            </div>

            <div className="card">
              <div className="card-title">live-demo-2.2: grid-photo-vs-sidebar.css</div>
              <div className="card-body">
                <div className="demo-head">
                  <span className="pill">LIVE DEMO 2.2</span>
                  <h3>CSS Grid: Instagram Grid vs Discord Sidebar</h3>
                </div>
                <p>
                  Page 4 &amp; 5: Use Grid when you need rows and columns. Switch
                  between a 3-column photo grid and a 2-column sidebar layout.
                </p>

                <div className="btn-row-left">
                  <button
                    type="button"
                    className={`btn ${layoutMode === 'grid3' ? 'btn-main' : ''}`}
                    onClick={() => setLayoutMode('grid3')}
                  >
                    Instagram 3-Column Grid
                  </button>
                  <button
                    type="button"
                    className={`btn ${layoutMode === 'sidebar' ? 'btn-main' : ''}`}
                    onClick={() => setLayoutMode('sidebar')}
                  >
                    Discord Sidebar (220px + 1fr)
                  </button>
                </div>

                {layoutMode === 'grid3' ? (
                  <div className="instagram-grid">
                    <div className="photo-cell">Photo 1</div>
                    <div className="photo-cell">Photo 2</div>
                    <div className="photo-cell">Photo 3</div>
                    <div className="photo-cell">Photo 4</div>
                    <div className="photo-cell">Photo 5</div>
                    <div className="photo-cell">Photo 6</div>
                  </div>
                ) : (
                  <div className="discord-grid">
                    <div className="discord-side">
                      <strong># Sidebar (220px)</strong>
                      <div className="channel-item"># general</div>
                      <div className="channel-item"># memes</div>
                      <div className="channel-item"># cursed-ideas</div>
                    </div>
                    <div className="discord-main">
                      <strong>Main Feed (1fr = takes all leftover space)</strong>
                      <div className="post-item">Post 1: Just deployed my first site!</div>
                      <div className="post-item">Post 2: Flexbox is pretty cool.</div>
                    </div>
                  </div>
                )}

                <pre>{layoutMode === 'grid3' ? `.photo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}` : `.app-layout {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 20px;
}`}</pre>
              </div>
            </div>
          </section>
        )}

        {(activePart === 'all' || activePart === 'part3') && (
          <section id="part3-section">
            <div className="label">&lt;part-3: javascript-shipping&gt;</div>
            <h2>PART 3: JAVASCRIPT &amp; SHIPPING</h2>
            <p>
              From the 5-page guide. The 3-step loop: [1. GRAB IT] -&gt; [2. LISTEN]
              -&gt; [3. CHANGE IT]. Here are all three recipes from the PDF running
              live right in front of you:
            </p>

            <div className="card">
              <div className="card-title">recipe-1: like-counter.js</div>
              <div className="card-body">
                <div className="demo-head">
                  <span className="pill">LIVE DEMO 3.1</span>
                  <h3>Recipe 1: Like Counter with Spam easter egg</h3>
                </div>
                <p>
                  Page 2 &amp; 3: A counter that updates text. Click it 10 times to
                  see what happens:
                </p>

                <div className="recipe-row">
                  <button
                    type="button"
                    onClick={handleLikeClick}
                    className="like"
                  >
                    Like ({likeCount})
                  </button>
                  <span className="muted-small">
                    clicked {likeCount} times · click 10 times for spam alert
                  </span>
                </div>

                {spamAlert && (
                  <div className="toast">
                    <span>
                      <strong>Easter Egg Triggered:</strong> &quot;bro stop liking your own post&quot;
                    </span>
                    <button
                      type="button"
                      onClick={() => setSpamAlert(false)}
                      className="toast-close"
                    >
                      dismiss
                    </button>
                  </div>
                )}

                <pre>{`let likes = 0;
const likeBtn = document.getElementById("like-btn");

likeBtn.addEventListener("click", function () {
  likes = likes + 1;
  likeBtn.textContent = "Like (" + likes + ")";

  if (likes === 10) {
    alert("bro stop liking your own post");
  }
});`}</pre>
              </div>
            </div>

            <div className="card">
              <div className="card-title">recipe-2: dark-mode-toggle.js</div>
              <div className="card-body">
                <div className="demo-head">
                  <span className="pill">LIVE DEMO 3.2</span>
                  <h3>Recipe 2: One-Click Dark Mode</h3>
                </div>
                <p>
                  Page 3: Four lines of JS to flip a <code>.dark</code> CSS class on
                  and off:
                </p>

                <div className="recipe-row">
                  <button
                    type="button"
                    onClick={() => setDemoDark(prev => !prev)}
                    className="btn btn-main"
                  >
                    Toggle Component Dark Mode
                  </button>
                </div>

                <div className={`theme-preview-box ${demoDark ? 'dark-box' : 'light-box'}`}>
                  <strong>@priyanshu (status: {demoDark ? 'dark mode' : 'light mode'})</strong>
                  <p>Watch the background and border colors invert seamlessly!</p>
                </div>

                <pre>{`const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});`}</pre>
              </div>
            </div>

            <div className="card">
              <div className="card-title">recipe-3: live-comments.js</div>
              <div className="card-body">
                <div className="demo-head">
                  <span className="pill">LIVE DEMO 3.3</span>
                  <h3>Recipe 3: Live In-Browser Comments</h3>
                </div>
                <p>
                  Page 3 &amp; 4: Type something below and press Post. JavaScript
                  creates a new <code>&lt;p&gt;</code> element and appends it to
                  the feed instantly:
                </p>

                <form onSubmit={handleAddComment} className="comment-form">
                  <input
                    type="text"
                    placeholder="say something..."
                    value={commentText}
                    onChange={e => setCommentText(e.target.value)}
                    className="text-input"
                  />
                  <button type="submit" className="btn btn-main">
                    Post
                  </button>
                </form>

                <div className="comments-stream">
                  <div className="label">&lt;live-comment-list&gt;</div>
                  {comments.map((c, i) => (
                    <div key={i} className="comment-bubble">
                      {c}
                    </div>
                  ))}
                </div>

                <pre>{`const input = document.getElementById("comment-input");
const postBtn = document.getElementById("post-btn");
const list = document.getElementById("comments-list");

postBtn.addEventListener("click", function () {
  if (input.value === "") return;
  const newComment = document.createElement("p");
  newComment.textContent = "@you: " + input.value;
  list.appendChild(newComment);
  input.value = "";
});`}</pre>
              </div>
            </div>
          </section>
        )}

        <section className="finished">
          <div className="label">&lt;ready-for-cursed&gt;</div>
          <h2>DONE WITH ALL 3 PARTS?</h2>
          <p>
            You built your site, made layouts with Flexbox/Grid, wired up
            JavaScript buttons, and shipped it on Netlify Drop. Now it is time to
            make it properly cursed for Part 2!
          </p>
          <div className="btn-row">
            <Link href="/" className="btn btn-main">
              Go To Part 2: Cursed Socials -&gt;
            </Link>
            <Link href="/intro" className="btn">
              &lt;- Back to Part 1 Guide
            </Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <div>
            <strong>Cursed Socials Starter Handbook</strong> · by Priyanshu Singh
          </div>
          <div className="footer-links">
            <Link href="/intro">part 1 guide</Link>
            <Link href="/">part 2 (cursed home)</Link>
            <Link href="/guide">guide</Link>
            <a
              href="https://hackclub.enterprise.slack.com/archives/C0CDPQX3YT0"
              target="_blank"
              rel="noopener noreferrer"
            >
              #cursed-socials slack
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
