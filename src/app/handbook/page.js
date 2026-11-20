'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import './handbook.css';

const samplePhotos = [
  { src: '/assets/cursed-cat.jpg', alt: 'Cursed cat' },
  { src: '/about-bg.jpg', alt: 'Paper background' },
  { src: '/faq-bg.jpg', alt: 'FAQ pattern' },
  { src: '/assets/about-unpolished.jpg', alt: 'Sketch design' },
  { src: '/assets/faq-unpolished.jpg', alt: 'Unpolished notes' },
  { src: '/generated.png', alt: 'YSWS art' }
];

export default function HandbookPage() {
  const [light, setLight] = useState(true);
  const [activePart, setActivePart] = useState('all');

  const [boxPadding, setBoxPadding] = useState(16);
  const [boxMargin, setBoxMargin] = useState(16);

  const [flexActive, setFlexActive] = useState(true);
  const [justifyType, setJustifyType] = useState('space-between');
  const [flexItems, setFlexItems] = useState(['Box 1 (Avatar)', 'Box 2 (Username)', 'Box 3 (Follow Btn)']);

  const [gridColumns, setGridColumns] = useState(3);
  const [layoutMode, setLayoutMode] = useState('grid');

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

  function handleLikeClick() {
    const next = likeCount + 1;
    setLikeCount(next);
    if (next === 10) {
      setSpamAlert(true);
    }
  }

  function handleAddFlexItem() {
    if (flexItems.length < 6) {
      setFlexItems(prev => [...prev, `Box ${prev.length + 1} (Tag)`]);
    }
  }

  function handleRemoveFlexItem() {
    if (flexItems.length > 2) {
      setFlexItems(prev => prev.slice(0, prev.length - 1));
    }
  }

  function handleAddComment(e) {
    e.preventDefault();
    if (!commentText.trim()) return;
    setComments(prev => [...prev, `@you: ${commentText.trim()}`]);
    setCommentText('');
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
              <span className="muted"> — 3-part handbook</span>
            </div>

            <button
              type="button"
              onClick={() => setLight(prev => !prev)}
            >
              {light ? 'dark mode' : 'light mode'}
            </button>
          </div>

          <h1>THE 3-PART HANDBOOK</h1>
          <p>
            <strong>Interactive demos &amp; cheat sheets:</strong> Everything
            from the three Cursed Socials beginner PDFs, with live code examples
            you can poke and test right in your browser.
          </p>

          <nav className="nav">
            <Link href="/intro" className="accent">
              &lt;- back to part 1
            </Link>{' '}
            · <a href="#pdfs">the 3 pdfs</a> ·{' '}
            <a href="#part1">part 1: html &amp; css</a> ·{' '}
            <a href="#part2">part 2: flexbox &amp; grid</a> ·{' '}
            <a href="#part3">part 3: javascript</a> ·{' '}
            <Link href="/">cursed socials (part 2)</Link>
          </nav>
        </header>

        <hr />

        <main>
          <section id="pdfs">
            <h2>The 3 Guide PDFs</h2>
            <p>
              Download or read the illustrated PDF handbooks directly:
            </p>
            <ul>
              <li>
                <a
                  href="/part-1-guide.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Part 1: HTML &amp; CSS Basics (8 pages)</strong>
                </a>{' '}
                — 2-minute setup, 7 essential tags, box model with bubble wrap.
              </li>
              <li>
                <a
                  href="/part-2-guide.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Part 2: Flexbox &amp; CSS Grid (6 pages)</strong>
                </a>{' '}
                — Stop stacking everything like pancakes. Side-by-side rows,
                photo grids, sidebars.
              </li>
              <li>
                <a
                  href="/part-3-guide.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Part 3: JavaScript &amp; Shipping (5 pages)</strong>
                </a>{' '}
                — Like counters, one-click dark mode, live comments, and
                deploying on Netlify Drop.
              </li>
            </ul>

            <div className="btn-group">
              <span className="muted">Filter demos:</span>
              <button
                type="button"
                className={activePart === 'all' ? 'btn-red' : ''}
                onClick={() => setActivePart('all')}
              >
                show all
              </button>
              <button
                type="button"
                className={activePart === 'part1' ? 'btn-red' : ''}
                onClick={() => setActivePart('part1')}
              >
                part 1
              </button>
              <button
                type="button"
                className={activePart === 'part2' ? 'btn-red' : ''}
                onClick={() => setActivePart('part2')}
              >
                part 2
              </button>
              <button
                type="button"
                className={activePart === 'part3' ? 'btn-red' : ''}
                onClick={() => setActivePart('part3')}
              >
                part 3
              </button>
            </div>
          </section>

          <hr />

          {(activePart === 'all' || activePart === 'part1') && (
            <section id="part1">
              <h2>Part 1: HTML &amp; CSS Basics</h2>
              <h3>Demo 1: The Box Model Visualizer</h3>
              <p>
                From page 5: In CSS, every single element is a box. Content is
                the Polaroid picture, Padding is the bubble wrap inside, Border
                is the cardboard walls, and Margin is the space pushing other
                boxes away.
              </p>

              <div className="slider-row">
                <label>
                  Padding (bubble wrap): {boxPadding}px
                  <input
                    type="range"
                    min="4"
                    max="40"
                    value={boxPadding}
                    onChange={e => setBoxPadding(Number(e.target.value))}
                  />
                </label>

                <label>
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

              <div className="btn-group">
                <span className="muted">Presets:</span>
                <button
                  type="button"
                  onClick={() => { setBoxPadding(8); setBoxMargin(8); }}
                >
                  Compact (8px)
                </button>
                <button
                  type="button"
                  onClick={() => { setBoxPadding(16); setBoxMargin(16); }}
                >
                  Default (16px)
                </button>
                <button
                  type="button"
                  onClick={() => { setBoxPadding(32); setBoxMargin(24); }}
                >
                  Roomy (32px)
                </button>
              </div>

              <div className="box-preview">
                <div
                  className="box-margin"
                  style={{ padding: `${boxMargin}px` }}
                >
                  <div
                    className="box-padding"
                    style={{ padding: `${boxPadding}px` }}
                  >
                    <div className="box-content">
                      <strong>Polaroid Content</strong>
                      <div className="muted">@you: hello from html!</div>
                    </div>
                  </div>
                </div>
              </div>

              <pre>{`.post {
  padding: ${boxPadding}px;
  margin: ${boxMargin}px auto;
  border: 2px solid #ec3750;
}`}</pre>
            </section>
          )}

          {(activePart === 'all' || activePart === 'part1') && (activePart === 'all' || activePart === 'part2') && <hr />}

          {(activePart === 'all' || activePart === 'part2') && (
            <section id="part2">
              <h2>Part 2: Flexbox &amp; CSS Grid</h2>
              <h3>Demo 2: Flexbox Side-by-Side</h3>
              <p>
                Browsers naturally stack elements like pancakes. Toggle{' '}
                <code>display: flex</code> to see how items snap into a
                horizontal row:
              </p>

              <div className="btn-group">
                <button
                  type="button"
                  className={flexActive ? 'btn-red' : ''}
                  onClick={() => setFlexActive(true)}
                >
                  display: flex (row)
                </button>
                <button
                  type="button"
                  className={!flexActive ? 'btn-red' : ''}
                  onClick={() => setFlexActive(false)}
                >
                  display: block (stacked)
                </button>

                {flexActive && (
                  <select
                    value={justifyType}
                    onChange={e => setJustifyType(e.target.value)}
                  >
                    <option value="space-between">justify-content: space-between</option>
                    <option value="center">justify-content: center</option>
                    <option value="flex-start">justify-content: flex-start</option>
                    <option value="flex-end">justify-content: flex-end</option>
                  </select>
                )}

                {flexActive && (
                  <>
                    <button
                      type="button"
                      onClick={handleAddFlexItem}
                      disabled={flexItems.length >= 6}
                    >
                      + Add box
                    </button>
                    <button
                      type="button"
                      onClick={handleRemoveFlexItem}
                      disabled={flexItems.length <= 2}
                    >
                      - Remove
                    </button>
                  </>
                )}
              </div>

              <div
                className="flex-stage"
                style={{
                  display: flexActive ? 'flex' : 'block',
                  justifyContent: flexActive ? justifyType : 'initial',
                  alignItems: 'center',
                  gap: flexActive ? '12px' : '8px'
                }}
              >
                {flexItems.map((item, idx) => (
                  <div key={idx} className="flex-item">
                    {item}
                  </div>
                ))}
              </div>

              <pre>{flexActive ? `.navbar {
  display: flex;
  justify-content: ${justifyType};
  align-items: center;
  gap: 12px;
}` : `.navbar {
  display: block;
}`}</pre>

              <h3>Demo 3: CSS Grid (Real Photo Feed vs Discord Layout)</h3>
              <p>
                Use CSS Grid when you need rows and columns. Toggle between a
                real 3-column photo grid and a 2-column sidebar:
              </p>

              <div className="btn-group">
                <button
                  type="button"
                  className={layoutMode === 'grid' && gridColumns === 3 ? 'btn-red' : ''}
                  onClick={() => { setLayoutMode('grid'); setGridColumns(3); }}
                >
                  Instagram 3-Col Grid
                </button>
                <button
                  type="button"
                  className={layoutMode === 'grid' && gridColumns === 2 ? 'btn-red' : ''}
                  onClick={() => { setLayoutMode('grid'); setGridColumns(2); }}
                >
                  2-Column Grid
                </button>
                <button
                  type="button"
                  className={layoutMode === 'grid' && gridColumns === 4 ? 'btn-red' : ''}
                  onClick={() => { setLayoutMode('grid'); setGridColumns(4); }}
                >
                  4-Column Grid
                </button>
                <button
                  type="button"
                  className={layoutMode === 'sidebar' ? 'btn-red' : ''}
                  onClick={() => setLayoutMode('sidebar')}
                >
                  Discord Sidebar (140px + 1fr)
                </button>
              </div>

              {layoutMode === 'grid' ? (
                <div
                  className="insta-grid"
                  style={{ gridTemplateColumns: `repeat(${gridColumns}, 1fr)` }}
                >
                  {samplePhotos.map((photo, i) => (
                    <div key={i} className="grid-cell-photo">
                      <img src={photo.src} alt={photo.alt} className="insta-img" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="discord-layout">
                  <div className="discord-sidebar">
                    <strong># Sidebar (140px)</strong>
                    <div className="muted"># general</div>
                    <div className="muted"># memes</div>
                    <div className="muted"># cursed-ideas</div>
                  </div>
                  <div className="discord-main">
                    <strong>Main Feed (takes remaining space)</strong>
                    <div>Post 1: Just deployed my first site!</div>
                    <div>Post 2: Flexbox makes sense now.</div>
                  </div>
                </div>
              )}

              <pre>{layoutMode === 'grid' ? `.photo-grid {
  display: grid;
  grid-template-columns: repeat(${gridColumns}, 1fr);
  gap: 8px;
}` : `.app-layout {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 12px;
}`}</pre>
            </section>
          )}

          {(activePart === 'all' || activePart === 'part2') && (activePart === 'all' || activePart === 'part3') && <hr />}

          {(activePart === 'all' || activePart === 'part3') && (
            <section id="part3">
              <h2>Part 3: JavaScript &amp; Shipping</h2>
              <h3>Demo 4: Like Counter (with spam alert)</h3>
              <p>
                A simple click event listener that updates text on the screen.
                Click 10 times for the spam warning:
              </p>

              <div className="btn-group">
                <button
                  type="button"
                  onClick={handleLikeClick}
                  className={likeCount > 0 ? 'btn-red' : ''}
                >
                  Like ({likeCount})
                </button>
                {likeCount > 0 && (
                  <button
                    type="button"
                    onClick={() => { setLikeCount(0); setSpamAlert(false); }}
                  >
                    Reset
                  </button>
                )}
                <span className="muted">
                  clicked {likeCount} times · click 10 times for easter egg
                </span>
              </div>

              {spamAlert && (
                <div className="alert-box">
                  <span>
                    <strong>Easter Egg Triggered:</strong> &quot;bro stop liking your own post&quot;
                  </span>
                  <button
                    type="button"
                    onClick={() => setSpamAlert(false)}
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

              <h3>Demo 5: One-Click Dark Mode Toggle</h3>
              <p>
                Toggles a <code>.dark</code> class with four lines of JavaScript.
                Click below to see the card invert its colors live:
              </p>

              <div className="btn-group">
                <button
                  type="button"
                  onClick={() => setDemoDark(prev => !prev)}
                  className={demoDark ? 'btn-red' : ''}
                >
                  {demoDark ? 'Active: Dark Theme (click to switch)' : 'Active: Light Theme (click to switch)'}
                </button>
                <span className="muted">
                  state: <code>{demoDark ? 'class="dark"' : 'class="light"'}</code>
                </span>
              </div>

              <div className="theme-demo-wrapper">
                <div className={`theme-card ${demoDark ? 'dark-theme' : 'light-theme'}`}>
                  <div className="theme-card-header">
                    <strong>@priyanshu</strong> · post · {demoDark ? 'dark mode' : 'light mode'}
                  </div>
                  <p>
                    Hello! This card uses background and text colors that flip
                    instantly when the <code>.dark</code> class is added.
                  </p>
                  <button type="button" className="theme-card-btn">
                    Sample Button
                  </button>
                </div>
              </div>

              <pre>{`const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});`}</pre>

              <h3>Demo 6: Live In-Browser Comments</h3>
              <p>
                Type something and press Post. JavaScript creates a new{' '}
                <code>&lt;p&gt;</code> element and appends it to the list:
              </p>

              <form onSubmit={handleAddComment} className="comment-form">
                <input
                  type="text"
                  placeholder="say something..."
                  value={commentText}
                  onChange={e => setCommentText(e.target.value)}
                  className="comment-input"
                />
                <button type="submit" className="btn-red">
                  Post
                </button>
                {comments.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setComments([])}
                  >
                    Clear
                  </button>
                )}
              </form>

              <div className="comment-list">
                <div className="muted" style={{ marginBottom: '6px' }}>
                  Live comments ({comments.length}):
                </div>
                {comments.map((c, i) => (
                  <div key={i} className="comment-item">
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
            </section>
          )}

          <hr />

          <section>
            <h2>Ready for Part 2?</h2>
            <p>
              Once your site works, jump into Part 2: runaway buttons, gravity
              text, and chaotic layouts.
            </p>
            <p className="actions">
              <Link href="/" className="btn-link">
                Go to Part 2: Cursed Socials
              </Link>{' '}
              <Link href="/intro">Back to Part 1 Guide</Link>
            </p>
          </section>
        </main>

        <hr />

        <footer className="footer">
          <p>
            <strong>Cursed Socials Starter Handbook</strong> — a Hack Club YSWS
            by Priyanshu Singh
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
            · <Link href="/intro">part 1 guide</Link> ·{' '}
            <Link href="/guide">cursed demos</Link> ·{' '}
            <Link href="/">part 2</Link>
          </p>
        </footer>
      </div>
    </div>
  );
}
