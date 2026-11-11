import Link from 'next/link';
import SiteFooter from '../../components/SiteFooter';
import './guide.css';

export const metadata = {
  title: 'How to Build a Cursed Social — Guide',
};

export default function GuidePage() {
  return (
    <div className="guide-page-container">
      {/* Top sticky navigation bar */}
      <div className="topbar">
        <Link href="/">← back to Cursed Socials</Link>
        <a
          href="/beginner-guide.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="topbar-beginner-tab"
          title="17-slide walkthrough for absolute beginners"
        >
          Read if absolute beginner (PDF) →
        </a>
        <a
          href="https://www.youtube.com/watch?v=G3e-cpL7ofc&t=479s"
          target="_blank"
          rel="noopener noreferrer"
          className="topbar-video-tab"
        >
          HTML &amp; CSS Video →
        </a>
        <a
          href="https://www.youtube.com/watch?v=ufKRYe8ZPaw"
          target="_blank"
          rel="noopener noreferrer"
          className="topbar-video-tab"
        >
          GitHub 10-Min Guide →
        </a>
      </div>

      {/* FRAME 0 — Absolute Beginner Slide Deck (directly on paper frame) */}
      <div className="guide-page-wrap">
        <div className="guide-stage">
          <div className="vr"></div>
          <div className="fc fc-2">
            <div className="col">
              <div className="h2">Absolute beginner?<br />Read these slides first.</div>
              <div className="body">
                never touched Git or coded a website? start with our <strong>17-slide PDF deck</strong> before reading the rest of this page.
              </div>
              <hr className="hr" />
              <div className="body-sm" style={{ lineHeight: 1.55 }}>
                what&apos;s inside:<br />
                1. what Git &amp; GitHub are (explained plainly)<br />
                2. creating a repo + pushing 3 starter files<br />
                3. copying a basic social feed in HTML/CSS<br />
                4. 4 cursed JS tricks you can steal<br />
                5. putting it live on GitHub Pages or Vercel
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: 'auto' }}>
                <a
                  href="/beginner-guide.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn"
                >
                  Open Slides (PDF) →
                </a>
                <a
                  href="/beginner-guide.pdf"
                  download="cursed-socials-beginner-guide.pdf"
                  className="cta-btn-outline"
                >
                  Download PDF
                </a>
              </div>
            </div>

            <div className="col">
              <div className="slides-frame-box">
                <div className="label">PREVIEW — 17-SLIDE BEGINNER DECK</div>
                <iframe
                  src="/beginner-guide.pdf#toolbar=1&navpanes=0"
                  title="Cursed Socials Absolute Beginner Slides"
                  className="slides-pdf-embed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FRAME 1 — Title + What is a Cursed Social + Why Build One */}
      <div className="guide-page-wrap">
        <div className="guide-stage">
          <div className="vr"></div>
          <div className="fc fc-2">
            <div className="col">
              <div className="h1">How to Build a<br />Cursed Social</div>
              <div className="body">
                a guide for teens who want to ship a deliberately silly social media clone and claim a <strong>$5–$10 Hack Club grant</strong> for it.
              </div>
              <hr className="hr" />
              <div className="h3" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.35rem)', color: '#2d2459', marginTop: '2px' }}>
                Why build this? (for beginners &amp; pros)
              </div>
              <div className="body" style={{ fontSize: 'clamp(0.65rem, 1.3vw, 0.82rem)', lineHeight: 1.45 }}>
                <strong>If you&apos;re a beginner:</strong> learn real HTML, CSS &amp; JS by making something fun without the pressure of &quot;corporate perfection&quot;. It&apos;s the most hands-on, low-stress way to start building the web.
              </div>
              <div className="body" style={{ fontSize: 'clamp(0.65rem, 1.3vw, 0.82rem)', lineHeight: 1.45 }}>
                <strong>If you&apos;re already experienced:</strong> unlearn boring templates! mess with weird CSS math, push JS edge cases, and build something you&apos;d never put on a resume.
              </div>
              <div className="chip-line" style={{ marginTop: 'auto' }}>
                <span className="chip filled">HACK CLUB YSWS</span>
                <span className="chip">teens 13–18</span>
                <span className="chip green">$5–$10 grant</span>
                <span className="chip">sharpen skills</span>
              </div>
            </div>

            <div className="col">
              <div className="h2">what even is a Cursed Social?</div>
              <div className="body">
                pick any social media — Instagram, TikTok, Twitter, YouTube. clone its design but make it <strong>deliberately, intentionally weird.</strong> add at least one cursed feature that shouldn&apos;t work but does. that&apos;s the whole assignment.
              </div>
              <div className="body">
                the key word is <strong>deliberately</strong>. it shouldn&apos;t look like an accident — it should look like you thought &quot;what if this button ran away?&quot; or &quot;what if the site rotated upside-down?&quot; and then coded it. that&apos;s the sweet spot between broken and cursed.
              </div>
              <div className="body" style={{ color: '#483b8a', fontSize: 'clamp(0.65rem, 1.3vw, 0.82rem)', lineHeight: 1.45, borderLeft: '2px solid #483b8a', paddingLeft: '8px' }}>
                <em>&quot;Break the rules intentionally — you have to understand how web layouts work before you can break them this beautifully.&quot;</em>
              </div>
              <div className="chip-line" style={{ marginTop: 'auto' }}>
                <span className="chip">insta</span>
                <span className="chip">twitter</span>
                <span className="chip">tiktok</span>
                <span className="chip">discord</span>
                <span className="chip red">≥1 cursed feature</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FRAME 2 — Beginner Q&A */}
      <div className="guide-page-wrap">
        <div className="guide-stage">
          <div className="ftitle">Questions beginners always ask</div>
          <div className="vr"></div>
          <div className="fc fc-2">
            <div className="col">
              <div className="q">&quot;do I need to already know HTML?&quot;</div>
              <div className="a">nope. you learn it AS you build. start with the boilerplate on frame 5, then google anything you don&apos;t understand. that&apos;s how every programmer learns.</div>

              <div className="q">&quot;can I use Wix / WordPress / Canva?&quot;</div>
              <div className="a">no. this grant is for hand-coded HTML+CSS+JS. no website builders. reviewers check your source code. but basic HTML is just typing tags like <span className="ic">&lt;h1&gt;</span> and <span className="ic">&lt;p&gt;</span> — you got this.</div>

              <div className="q">&quot;how long does it take?&quot;</div>
              <div className="a">a rough working site in 2–3 hours. a polished one in a weekend. track your time with Hackatime so it auto-fills on the submission form.</div>
            </div>

            <div className="col">
              <div className="q">&quot;what if my site looks bad?&quot;</div>
              <div className="a">it&apos;s literally called <em>Cursed</em> Socials. a messy hand-drawn aesthetic is part of the vibe. ugly-on-purpose is 100% allowed and encouraged. you&apos;re not building Apple.com.</div>

              <div className="q">&quot;can I use JavaScript if I don&apos;t know it?&quot;</div>
              <div className="a">yes. the cursed feature needs JS but it&apos;s tiny — 5–10 lines. this guide gives you copy-pasteable code. read each line, understand what it does, tweak it. that&apos;s how you learn JS in one evening.</div>

              <div className="q">&quot;does it have to be live online?&quot;</div>
              <div className="a">yes! Netlify makes it free in 60 seconds. drag your folder to netlify.com/drop and you get a live URL. that&apos;s literally it.</div>
            </div>
          </div>
        </div>
      </div>

      {/* FRAME 3 — Tools you need (all free) */}
      <div className="guide-page-wrap">
        <div className="guide-stage">
          <div className="ftitle">Tools you need — all completely free</div>
          <div className="fc fc-2" style={{ top: '16%' }}>
            <div className="col">
              <div>
                <div className="tool-name">VS Code</div>
                <div className="tool-url">code.visualstudio.com</div>
                <div className="tool-desc">free code editor. write all your HTML, CSS and JS here. install the <strong>Live Server</strong> extension — your site auto-refreshes every time you save.<br />→ Ctrl+S to save · right-click → Open with Live Server</div>
              </div>
              <hr className="hr" />
              <div>
                <div className="tool-name">Browser DevTools</div>
                <div className="tool-url">press F12 in any browser</div>
                <div className="tool-desc">click any element on your page to see its CSS live. change values instantly — nothing saves until you copy it into your CSS file. super handy when styles refuse to line up.<br />→ F12 → Elements tab → click any element</div>
              </div>
              <hr className="hr" />
              <div>
                <div className="tool-name">Hackatime</div>
                <div className="tool-url">search &quot;Hackatime&quot; in VS Code Extensions</div>
                <div className="tool-desc">auto-tracks how long you code. the submission form asks for hours logged — Hackatime fills this automatically. install it on day one so you don&apos;t lose hours.</div>
              </div>
            </div>

            <div className="col">
              <div>
                <div className="tool-name">Photopea</div>
                <div className="tool-url">photopea.com</div>
                <div className="tool-desc">free Photoshop in your browser. use this to clean up paper sketches — boost contrast, remove background, add watercolor wash. no install needed.</div>
              </div>
              <hr className="hr" />
              <div>
                <div className="tool-name">Google Fonts</div>
                <div className="tool-url">fonts.google.com</div>
                <div className="tool-desc">free fonts for your site. pick any font, copy one <span className="ic">&lt;link&gt;</span> tag, paste it in your <span className="ic">&lt;head&gt;</span>. good picks: Caveat, Patrick Hand, Special Elite.</div>
              </div>
              <hr className="hr" />
              <div>
                <div className="tool-name">Netlify Drop</div>
                <div className="tool-url">netlify.com/drop</div>
                <div className="tool-desc">deploy your site for free. drag your whole project folder onto the page, get a live public URL in 30 seconds. sign up free to make the URL permanent.</div>
              </div>
              <hr className="hr" />
              <div>
                <div className="tool-name">Recommended Video Guides</div>
                <div className="tool-url" style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '2px' }}>
                  <a href="https://www.youtube.com/watch?v=G3e-cpL7ofc&t=479s" target="_blank" rel="noopener noreferrer" style={{ color: '#483b8a', fontWeight: 700 }}>HTML/CSS Tutorial: You are GONE!</a>
                  <a href="https://www.youtube.com/watch?v=ufKRYe8ZPaw" target="_blank" rel="noopener noreferrer" style={{ color: '#483b8a', fontWeight: 700 }}>GitHub in 10 Minutes: Push Your Code</a>
                </div>
                <div className="tool-desc" style={{ marginTop: '2px' }}>the best fast-paced beginner tutorials to watch while building.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FRAME 4 — Rules + Two Approaches */}
      <div className="guide-page-wrap">
        <div className="guide-stage">
          <div className="vr"></div>
          <div className="fc fc-2">
            <div className="col">
              <div className="h2">The Rules</div>

              <div className="step">
                <div className="stepn">1</div>
                <div>
                  <div className="step-title">Your own design — max 5% AI</div>
                  <div className="step-body">the design decisions must be yours. AI for tiny hints is ok. building the whole thing with AI gets your submission rejected — reviewers check code quality.</div>
                </div>
              </div>

              <div className="step">
                <div className="stepn">2</div>
                <div>
                  <div className="step-title">Neatly structured code</div>
                  <div className="step-body">every cursed thing must look like a choice, not a bug. write readable HTML/CSS, use 2-space indentation, and leave short comments explaining what you did.</div>
                </div>
              </div>

              <div className="step">
                <div className="stepn">3</div>
                <div>
                  <div className="step-title">Write a &quot;hardest part&quot; note on submit</div>
                  <div className="step-body">explain what was hardest and how you solved it. this is how reviewers know you built it yourself. don&apos;t skip this — it&apos;s the most important part of submission.</div>
                </div>
              </div>

              <div className="step">
                <div className="stepn" style={{ background: '#2a7a2a' }}>$</div>
                <div>
                  <div className="step-title" style={{ color: '#2a7a2a' }}>get approved = real $5–$10 Hack Club grant</div>
                  <div className="step-body">real money, sent to you. not a voucher. once approved, Hack Club sends it and you spend it on whatever you want.</div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="h2">Two Approaches</div>

              <div>
                <div className="chip-line"><span className="chip filled">RECOMMENDED — CSS First</span></div>
                <div className="body" style={{ marginTop: '4px' }}>
                  code the layout with HTML + CSS. use flexbox or grid for layout. add JavaScript for the cursed feature. deploy on Netlify. <strong>bonus marks for creative CSS</strong> — custom fonts, interesting color schemes, hand-crafted components. this is the main skill to learn.
                </div>
              </div>

              <hr className="hr" />

              <div>
                <div className="chip-line"><span className="chip">SECONDARY / CREATIVITY BONUS</span></div>
                <div className="body" style={{ marginTop: '4px' }}>
                  sketch your layout on paper first. scan or photograph it. polish free in Photopea. then use it as a CSS <span className="ic">background-image</span>. CSS still handles all the positioning — paper is just the artwork, and gives your site a look nobody else has.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FRAME 5 — File structure + HTML boilerplate */}
      <div className="guide-page-wrap">
        <div className="guide-stage">
          <div className="ftitle">Start here — your files</div>
          <div className="vr"></div>
          <div className="fc fc-2" style={{ top: '16%' }}>
            <div className="col">
              <div className="body">create a folder anywhere on your computer. put these 3 files inside it — that&apos;s your whole project:</div>
              <div className="code">{`my-cursed-insta/
├── index.html   ← your main page
├── style.css    ← all your styles
├── script.js    ← your cursed feature
└── images/      ← put photos here`}</div>
              <div className="body-sm">open the folder in VS Code (File → Open Folder). right-click on <span className="ic">index.html</span> → Open with Live Server. your site opens in the browser and auto-refreshes on every save.</div>
            </div>

            <div className="col">
              <div className="body">paste this into index.html — every line is explained in the comments:</div>
              <div className="code">{`<!DOCTYPE html>  <!-- tells browser: html file -->
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <!-- makes it look right on phones -->
  <meta name="viewport"
    content="width=device-width,
             initial-scale=1.0" />
  <title>My Cursed Instagram</title>
  <!-- link your CSS file -->
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <!-- your content goes here -->
  <h1>Cursed Insta</h1>
  <p>nothing is real</p>

  <!-- link JS at the VERY BOTTOM -->
  <script src="script.js"></script>
</body>
</html>`}</div>
            </div>
          </div>
        </div>
      </div>

      {/* FRAME 6 — Basic social media layout */}
      <div className="guide-page-wrap">
        <div className="guide-stage">
          <div className="ftitle">Build a basic social media layout</div>
          <div className="vr"></div>
          <div className="fc fc-2" style={{ top: '16%' }}>
            <div className="col">
              <div className="body">a social media clone needs 3 things: a <strong>navbar</strong> at the top, a <strong>post feed</strong> in the middle, a <strong>sidebar</strong> on the right. this HTML creates that:</div>
              <div className="code">{`<nav class="navbar">
  <h1>CursedGram</h1>
  <button id="like-btn">Like</button>
</nav>

<div class="layout">
  <!-- post feed -->
  <main class="feed">
    <div class="post">
      <img src="images/post1.jpg">
      <p>totally normal post</p>
    </div>
  </main>

  <!-- sidebar -->
  <aside class="sidebar">
    <h3>Suggested</h3>
    <p>@cursed_user_69</p>
  </aside>
</div>`}</div>
            </div>

            <div className="col">
              <div className="body">this CSS makes it look right — two-column layout and a navbar:</div>
              <div className="code">{`/* reset browser defaults */
* { margin: 0; padding: 0;
    box-sizing: border-box; }

.navbar {
  background: #483b8a;
  color: white;
  padding: 12px 20px;
  display: flex;        /* side by side */
  justify-content: space-between;
}

/* two-column layout */
.layout {
  display: flex;
  gap: 20px;
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
}
.feed    { flex: 2; }   /* wider column */
.sidebar { flex: 1; }   /* narrower column */

.post {
  border: 2px solid #c4b5fd;
  padding: 12px;
  margin-bottom: 16px;
}
.post img { width: 100%; }`}</div>
            </div>
          </div>
        </div>
      </div>

      {/* FRAME 7 — Runaway Button full example */}
      <div className="guide-page-wrap">
        <div className="guide-stage">
          <div className="ftitle">Cursed Feature: The Runaway Button</div>
          <div className="fc fc-3" style={{ top: '16%' }}>
            <div className="col">
              <div className="label">STEP 1 — HTML</div>
              <div className="body-sm">put this inside your .post div:</div>
              <div className="code">{`<button
  id="run-btn"
  class="like-btn">
  Like
</button>

<!-- give it an id so JS
     can grab it easily -->`}</div>
            </div>

            <div className="col">
              <div className="label">STEP 2 — CSS (style.css)</div>
              <div className="body-sm">must use <span className="ic">position:fixed</span> so we can move it anywhere on screen:</div>
              <div className="code">{`.like-btn {
  /* fixed = can go anywhere */
  position: fixed;
  background: #ff4466;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  /* smooth slide animation */
  transition: top 0.15s,
              left 0.15s;
}`}</div>
            </div>

            <div className="col">
              <div className="label">STEP 3 — JS (script.js)</div>
              <div className="body-sm">runs when mouse enters button:</div>
              <div className="code">{`// grab button by its id
const btn =
  document.getElementById(
    'run-btn'
  );

btn.addEventListener(
  'mouseenter', () => {
  // random x and y on screen
  const x = Math.random()
    * (window.innerWidth - 100);
  const y = Math.random()
    * (window.innerHeight - 60);

  // teleport the button there
  btn.style.left = x + 'px';
  btn.style.top  = y + 'px';
});`}</div>
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: '3%', left: '9%', right: '9%', fontFamily: "'Patrick Hand', cursive", fontSize: 'clamp(0.62rem, 1.2vw, 0.78rem)', color: '#483b8a', textAlign: 'center' }}>
            <strong>Math.random()</strong> gives a decimal 0–1. multiplied by window size = random pixel position. setting <span className="ic">btn.style.left</span> moves it in real time. that&apos;s all the JS you need.
          </div>
        </div>
      </div>

      {/* FRAME 8 — R-key flip + more ideas */}
      <div className="guide-page-wrap">
        <div className="guide-stage">
          <div className="vr"></div>
          <div className="fc fc-2">
            <div className="col">
              <div className="h3">R-Key Flip — the code</div>
              <div className="body-sm">press R → entire site rotates 180°. this site does it. try it now.</div>
              <div className="code">{`/* style.css — 3 lines */
body.flipped {
  transform: rotate(180deg);
  transition: transform 0.8s ease;
}

// script.js — 5 lines
window.addEventListener('keydown', (e) => {
  // only act when R is pressed
  if (e.key === 'r' || e.key === 'R') {
    // toggle = on/off switch
    document.body.classList
      .toggle('flipped');
  }
});`}</div>
              <div className="body-sm"><strong>classList.toggle</strong> adds the class if it&apos;s missing, removes it if it&apos;s there. that&apos;s the whole on/off mechanism.</div>
            </div>

            <div className="col">
              <div className="h3">More ideas with starter code</div>

              <div className="label">AIR HORN ON 10TH LIKE</div>
              <div className="code">{`let likeCount = 0;
btn.addEventListener('click', () => {
  likeCount++;
  if (likeCount % 10 === 0) {
    // put airhorn.mp3 in your folder
    new Audio('airhorn.mp3').play();
  }
});`}</div>

              <div className="label" style={{ marginTop: '4px' }}>EVERY 5TH POST = WINGDINGS (CSS only!)</div>
              <div className="code">{`/* style.css — no JS needed */
.post:nth-child(5n) p {
  font-family: 'Wingdings', cursive;
  /* 5n = every 5th: 5, 10, 15... */
}`}</div>

              <div className="body-sm">pick ONE cursed feature and do it well. your &quot;hardest part&quot; note should explain how you built it — that&apos;s what reviewers check first.</div>
            </div>
          </div>
        </div>
      </div>

      {/* FRAME 9 — Before/After — How This Site Was Built */}
      <div className="guide-page-wrap">
        <div className="guide-stage">
          <div className="ftitle">How This Site Was Actually Built</div>
          <div className="vr"></div>
          <div className="fc fc-2" style={{ top: '16%' }}>
            <div className="col">
              <div className="label">ABOUT PAGE — 3D eraser box + slanted containers</div>
              <div className="body-sm">drawn in ~3 minutes. cleaned up in Photopea. set as the CSS background. text floats over using position:absolute.</div>
              <div style={{ display: 'flex', gap: '5%', alignItems: 'flex-start', marginTop: '2%' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="label" style={{ color: '#9b1b1b' }}>RAW SKETCH</div>
                  <img className="stage-img" src="/assets/about-unpolished.jpg" alt="raw ballpoint sketch" />
                </div>
                <div style={{ fontFamily: "'Caveat', cursive", fontSize: 'clamp(1.2rem, 3vw, 2rem)', color: '#483b8a', alignSelf: 'center' }}>→</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="label" style={{ color: '#1a5c1a' }}>LIVE BG</div>
                  <img className="stage-img" src="/about-bg.jpg" alt="polished about background" />
                </div>
              </div>
            </div>

            <div className="col">
              <div className="label">FAQ PAGE — 4 slanted parallelogram boxes</div>
              <div className="body-sm">took 90 seconds to draw. in CSS this would need skewX() transforms and counter-rotating all text. paper was faster.</div>
              <div style={{ display: 'flex', gap: '5%', alignItems: 'flex-start', marginTop: '2%' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="label" style={{ color: '#9b1b1b' }}>RAW SKETCH</div>
                  <img className="stage-img" src="/assets/faq-unpolished.jpg" alt="raw faq sketch" />
                </div>
                <div style={{ fontFamily: "'Caveat', cursive", fontSize: 'clamp(1.2rem, 3vw, 2rem)', color: '#483b8a', alignSelf: 'center' }}>→</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="label" style={{ color: '#1a5c1a' }}>LIVE BG</div>
                  <img className="stage-img" src="/faq-bg.jpg" alt="polished faq background" />
                </div>
              </div>
              <div className="code" style={{ marginTop: '4%' }}>{`.stage {
  position: relative;
  background: url('/drawing.jpg')
    center / 100% 100% no-repeat;
}
.text-box {
  position: absolute;
  top: 40%; left: 15%;
  width: 30%;
  background: transparent;
}`}</div>
            </div>
          </div>
        </div>
      </div>

      {/* FRAME 10 — Deploy + YOUR TURN */}
      <div className="guide-page-wrap">
        <div className="guide-stage">
          <div className="vr"></div>
          <div className="fc fc-2">
            <div className="col">
              <div className="h2">Deploy it in 60 seconds</div>

              <div className="step"><div className="stepn">1</div><div className="step-body">go to <strong>netlify.com/drop</strong> in your browser</div></div>
              <div className="step"><div className="stepn">2</div><div className="step-body">drag your whole project folder into the page</div></div>
              <div className="step"><div className="stepn">3</div><div className="step-body">it uploads and gives you a free live public URL</div></div>
              <div className="step"><div className="stepn">4</div><div className="step-body">sign up free to keep the URL permanent</div></div>
              <div className="step"><div className="stepn">5</div><div className="step-body">copy that URL — you need it on the submission form</div></div>

              <hr className="hr" />
              <div className="label">SUBMISSION CHECKLIST</div>
              <div className="body-sm" style={{ lineHeight: 1.9 }}>
                ☐ &nbsp;site opens at a public URL<br />
                ☐ &nbsp;it looks like a social media clone<br />
                ☐ &nbsp;it has at least one cursed feature<br />
                ☐ &nbsp;the HTML/CSS is your own (not AI-written)<br />
                ☐ &nbsp;you wrote the &quot;hardest part&quot; note<br />
                ☐ &nbsp;Hackatime shows your logged hours
              </div>
            </div>

            <div className="col" style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <div className="h1" style={{ fontSize: 'clamp(2rem, 5.5vw, 3.5rem)', textAlign: 'center' }}>Your turn now.</div>
              <div className="body" style={{ textAlign: 'center', lineHeight: 1.8, marginTop: '4%' }}>
                pick a social media platform.<br />
                build a clone in HTML + CSS.<br />
                add one deliberately cursed feature.<br />
                write your hardest part note.<br />
                submit.
              </div>
              <div className="body-sm" style={{ textAlign: 'center', marginTop: '4%', lineHeight: 1.6 }}>
                CSS is the main skill to learn here.<br />
                code it properly, get bonus marks for creative choices.<br /><br />
                want to go further? sketch on paper, polish in Photopea,<br />
                use as a background-image. that&apos;s what gets you noticed.
              </div>
              <Link href="/" className="cta-btn" style={{ marginTop: '5%', display: 'inline-block' }}>view the live site →</Link>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter isGuide />
    </div>
  );
}
