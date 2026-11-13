import Link from 'next/link';
import SiteFooter from '../../components/SiteFooter';
import './guide.css';

export const metadata = {
  title: 'How to Build a Cursed Social — Guide',
};

export default function GuidePage() {
  return (
    <div className="guide-page-container">
      <div className="topbar">
        <Link href="/">← back to Cursed Socials</Link>
        <a
          href="/beginner-guide.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="topbar-beginner-tab"
        >
          Read beginner slides (PDF) →
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

      <div className="guide-page-wrap">
        <div className="guide-stage">
          <div className="vr"></div>
          <div className="fc fc-2">
            <div className="col">
              <div className="h2">Absolute beginner?<br />Read these slides first.</div>
              <div className="body">
                never coded a site or used git before? read our <strong>beginner starter slides</strong> before going through this guide.
              </div>
              <hr className="hr" />
              <div className="body-sm" style={{ lineHeight: 1.55 }}>
                what&apos;s inside:<br />
                1. what git &amp; github are (plain english)<br />
                2. making a repo + saving starter files<br />
                3. building a simple social feed in html/css<br />
                4. easy cursed js tricks to use<br />
                5. hosting it live for free
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
                <div className="label">PREVIEW — STARTER SLIDES</div>
                <iframe
                  src="/beginner-guide.pdf#toolbar=1&navpanes=0"
                  title="Cursed Socials Beginner Slides"
                  className="slides-pdf-embed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="guide-page-wrap">
        <div className="guide-stage">
          <div className="vr"></div>
          <div className="fc fc-2">
            <div className="col">
              <div className="h1">How to Build a<br />Cursed Social</div>
              <div className="body">
                a guide for teens who want to ship a deliberately silly social media clone and get a <strong>$5–$10 Hack Club grant</strong>.
              </div>
              <hr className="hr" />
              <div className="h3" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.35rem)', color: '#2d2459', marginTop: '2px' }}>
                Why build this?
              </div>
              <div className="body" style={{ fontSize: 'clamp(0.65rem, 1.3vw, 0.82rem)', lineHeight: 1.45 }}>
                <strong>If you&apos;re a beginner:</strong> learn real HTML, CSS &amp; JS by building something funny without stressing about corporate perfection.
              </div>
              <div className="body" style={{ fontSize: 'clamp(0.65rem, 1.3vw, 0.82rem)', lineHeight: 1.45 }}>
                <strong>If you already know code:</strong> build something weird! mess with funny CSS math, break UI rules on purpose, and have fun.
              </div>
              <div className="chip-line" style={{ marginTop: 'auto' }}>
                <span className="chip filled">HACK CLUB YSWS</span>
                <span className="chip">teens 13–18</span>
                <span className="chip green">$5–$10 grant</span>
                <span className="chip">learn by shipping</span>
              </div>
            </div>

            <div className="col">
              <div className="h2">what even is a Cursed Social?</div>
              <div className="body">
                pick any social media site — Instagram, TikTok, Twitter, YouTube. copy its layout but make it <strong>funny and weird on purpose.</strong> add at least one cursed feature that makes no sense.
              </div>
              <div className="body">
                it shouldn&apos;t look like an accident — it should look like you planned it! like a like button that runs away from the cursor, or the whole screen flipping upside down.
              </div>
              <div className="body" style={{ color: '#483b8a', fontSize: 'clamp(0.65rem, 1.3vw, 0.82rem)', lineHeight: 1.45, borderLeft: '2px solid #483b8a', paddingLeft: '8px' }}>
                <em>&quot;Break the rules intentionally — understand the layout first, then make it delightfully cursed.&quot;</em>
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

      <div className="guide-page-wrap">
        <div className="guide-stage">
          <div className="ftitle">Common Questions</div>
          <div className="vr"></div>
          <div className="fc fc-2">
            <div className="col">
              <div className="q">&quot;do I need to know HTML already?&quot;</div>
              <div className="a">nope. you learn it while building. grab the basic starter files and search up anything you get stuck on.</div>

              <div className="q">&quot;can I use Wix / WordPress / Canva?&quot;</div>
              <div className="a">no site builders. write real HTML + CSS + JS code. reviewers check your files, but basic HTML is just simple tags like <span className="ic">&lt;h1&gt;</span> and <span className="ic">&lt;p&gt;</span>.</div>

              <div className="q">&quot;how long does it take?&quot;</div>
              <div className="a">a couple hours for a working site. maybe a weekend if you add extra details. track your time with Hackatime.</div>
            </div>

            <div className="col">
              <div className="q">&quot;what if my site looks goofy?&quot;</div>
              <div className="a">that&apos;s the whole point! it&apos;s called Cursed Socials for a reason. hand-drawn or messy on purpose is encouraged.</div>

              <div className="q">&quot;can I use JavaScript if I don&apos;t know it?&quot;</div>
              <div className="a">yes. the cursed trick only needs 5–10 lines of code. look at our examples, see how they work, and tweak them.</div>

              <div className="q">&quot;does it have to be live on the web?&quot;</div>
              <div className="a">yes! drop your folder on netlify.com/drop or host on GitHub Pages/Vercel and you get a live link.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="guide-page-wrap">
        <div className="guide-stage">
          <div className="ftitle">Free tools to use</div>
          <div className="fc fc-2" style={{ top: '16%' }}>
            <div className="col">
              <div>
                <div className="tool-name">VS Code</div>
                <div className="tool-url">code.visualstudio.com</div>
                <div className="tool-desc">free code editor. write your HTML, CSS, and JS here. add the Live Server extension so your browser refreshes when you save.</div>
              </div>
              <hr className="hr" />
              <div>
                <div className="tool-name">Browser DevTools</div>
                <div className="tool-url">press F12 in Chrome or Edge</div>
                <div className="tool-desc">inspect elements and test CSS live in your browser before putting it into your file.</div>
              </div>
              <hr className="hr" />
              <div>
                <div className="tool-name">Hackatime</div>
                <div className="tool-url">search Hackatime in VS Code Extensions</div>
                <div className="tool-desc">tracks your coding hours automatically so you can show them when submitting.</div>
              </div>
            </div>

            <div className="col">
              <div>
                <div className="tool-name">Photopea</div>
                <div className="tool-url">photopea.com</div>
                <div className="tool-desc">free web editor to clean up any doodles or sketches if you draw your site on paper.</div>
              </div>
              <hr className="hr" />
              <div>
                <div className="tool-name">Google Fonts</div>
                <div className="tool-url">fonts.google.com</div>
                <div className="tool-desc">free fonts. good picks: Caveat, Patrick Hand, Special Elite.</div>
              </div>
              <hr className="hr" />
              <div>
                <div className="tool-name">Netlify Drop / Vercel</div>
                <div className="tool-url">netlify.com/drop</div>
                <div className="tool-desc">drag and drop your folder to get a live URL in seconds.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                  <div className="step-body">make design choices yourself. AI for quick syntax checks is fine, but do not generate the whole project with prompts.</div>
                </div>
              </div>

              <div className="step">
                <div className="stepn">2</div>
                <div>
                  <div className="step-title">Clean code structure</div>
                  <div className="step-body">make sure everything runs smoothly and looks intentional, not broken by mistake.</div>
                </div>
              </div>

              <div className="step">
                <div className="stepn">3</div>
                <div>
                  <div className="step-title">Write a hardest-part note</div>
                  <div className="step-body">tell us what challenged you the most and how you solved it.</div>
                </div>
              </div>

              <div className="step">
                <div className="stepn" style={{ background: '#2a7a2a' }}>$</div>
                <div>
                  <div className="step-title" style={{ color: '#2a7a2a' }}>Approved = $5–$10 grant</div>
                  <div className="step-body">get real grant money sent to buy a silly product or merch.</div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="h2">Two ways to build</div>

              <div>
                <div className="chip-line"><span className="chip filled">CSS FIRST (Recommended)</span></div>
                <div className="body" style={{ marginTop: '4px' }}>
                  code the layout directly with HTML and CSS using flexbox. add a little JavaScript for the cursed behavior.
                </div>
              </div>

              <hr className="hr" />

              <div>
                <div className="chip-line"><span className="chip">PAPER SKETCH FIRST</span></div>
                <div className="body" style={{ marginTop: '4px' }}>
                  draw the site on paper, scan it or take a clear photo, use it as a background image, and place buttons and text over it with CSS.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="guide-page-wrap">
        <div className="guide-stage">
          <div className="ftitle">Starter file structure</div>
          <div className="vr"></div>
          <div className="fc fc-2" style={{ top: '16%' }}>
            <div className="col">
              <div className="body">make a project folder with these 3 files:</div>
              <div className="code">{`my-cursed-social/
├── index.html
├── style.css
├── script.js
└── images/`}</div>
              <div className="body-sm">open the folder in VS Code, right click index.html, and choose Open with Live Server.</div>
            </div>

            <div className="col">
              <div className="body">basic starter html:</div>
              <div className="code">{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cursed Social</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Cursed Feed</h1>
  <p>welcome to my site</p>

  <script src="script.js"></script>
</body>
</html>`}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="guide-page-wrap">
        <div className="guide-stage">
          <div className="ftitle">Social feed layout example</div>
          <div className="vr"></div>
          <div className="fc fc-2" style={{ top: '16%' }}>
            <div className="col">
              <div className="body">simple navbar and feed layout in html:</div>
              <div className="code">{`<nav class="navbar">
  <h1>CursedGram</h1>
  <button id="like-btn">Like</button>
</nav>

<div class="layout">
  <main class="feed">
    <div class="post">
      <img src="images/post1.jpg">
      <p>normal post</p>
    </div>
  </main>

  <aside class="sidebar">
    <h3>Suggested</h3>
    <p>@cursed_user</p>
  </aside>
</div>`}</div>
            </div>

            <div className="col">
              <div className="body">two-column css layout:</div>
              <div className="code">{`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  background: #483b8a;
  color: white;
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
}

.layout {
  display: flex;
  gap: 20px;
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.feed { flex: 2; }
.sidebar { flex: 1; }

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

      <div className="guide-page-wrap">
        <div className="guide-stage">
          <div className="ftitle">Cursed Trick: The Runaway Button</div>
          <div className="fc fc-3" style={{ top: '16%' }}>
            <div className="col">
              <div className="label">1. HTML</div>
              <div className="body-sm">add a button with an id:</div>
              <div className="code">{`<button id="run-btn" class="like-btn">
  Like
</button>`}</div>
            </div>

            <div className="col">
              <div className="label">2. CSS</div>
              <div className="body-sm">fixed position so it can move anywhere:</div>
              <div className="code">{`.like-btn {
  position: fixed;
  background: #ff4466;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: top 0.15s, left 0.15s;
}`}</div>
            </div>

            <div className="col">
              <div className="label">3. JAVASCRIPT</div>
              <div className="body-sm">moves away when mouse hovers over it:</div>
              <div className="code">{`const btn = document.getElementById('run-btn');

btn.addEventListener('mouseenter', () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 60);

  btn.style.left = x + 'px';
  btn.style.top = y + 'px';
});`}</div>
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: '3%', left: '9%', right: '9%', fontFamily: "'Patrick Hand', cursive", fontSize: 'clamp(0.62rem, 1.2vw, 0.78rem)', color: '#483b8a', textAlign: 'center' }}>
            Math.random() picks a random coordinate on the screen whenever you try to hover it.
          </div>
        </div>
      </div>

      <div className="guide-page-wrap">
        <div className="guide-stage">
          <div className="vr"></div>
          <div className="fc fc-2">
            <div className="col">
              <div className="h3">R-Key screen flip trick</div>
              <div className="body-sm">press R to rotate the entire site 180 degrees.</div>
              <div className="code">{`/* in style.css */
body.flipped {
  transform: rotate(180deg);
  transition: transform 0.8s ease;
}

/* in script.js */
window.addEventListener('keydown', (e) => {
  if (e.key === 'r' || e.key === 'R') {
    document.body.classList.toggle('flipped');
  }
});`}</div>
            </div>

            <div className="col">
              <div className="h3">Other cursed ideas</div>

              <div className="label">SOUND EFFECT ON LIKE</div>
              <div className="code">{`let count = 0;
btn.addEventListener('click', () => {
  count++;
  if (count % 5 === 0) {
    new Audio('boing.mp3').play();
  }
});`}</div>

              <div className="label" style={{ marginTop: '4px' }}>WEIRD FONT ON EVERY 5TH POST</div>
              <div className="code">{`.post:nth-child(5n) p {
  font-family: 'Wingdings', cursive;
}`}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="guide-page-wrap">
        <div className="guide-stage">
          <div className="ftitle">Drawing on paper first</div>
          <div className="vr"></div>
          <div className="fc fc-2" style={{ top: '16%' }}>
            <div className="col">
              <div className="label">ABOUT SECTION</div>
              <div className="body-sm">drawn on paper with ink, scanned, then used as background.</div>
              <div style={{ display: 'flex', gap: '5%', alignItems: 'flex-start', marginTop: '2%' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="label" style={{ color: '#9b1b1b' }}>RAW SKETCH</div>
                  <img className="stage-img" src="/assets/about-unpolished.jpg" alt="raw sketch" />
                </div>
                <div style={{ fontFamily: "'Caveat', cursive", fontSize: 'clamp(1.2rem, 3vw, 2rem)', color: '#483b8a', alignSelf: 'center' }}>→</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="label" style={{ color: '#1a5c1a' }}>SITE BACKGROUND</div>
                  <img className="stage-img" src="/about-bg.jpg" alt="about background" />
                </div>
              </div>
            </div>

            <div className="col">
              <div className="label">FAQ SECTION</div>
              <div className="body-sm">parallelograms drawn on paper and layered behind text boxes with CSS.</div>
              <div style={{ display: 'flex', gap: '5%', alignItems: 'flex-start', marginTop: '2%' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="label" style={{ color: '#9b1b1b' }}>RAW SKETCH</div>
                  <img className="stage-img" src="/assets/faq-unpolished.jpg" alt="raw sketch" />
                </div>
                <div style={{ fontFamily: "'Caveat', cursive", fontSize: 'clamp(1.2rem, 3vw, 2rem)', color: '#483b8a', alignSelf: 'center' }}>→</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="label" style={{ color: '#1a5c1a' }}>SITE BACKGROUND</div>
                  <img className="stage-img" src="/faq-bg.jpg" alt="faq background" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="guide-page-wrap">
        <div className="guide-stage">
          <div className="vr"></div>
          <div className="fc fc-2">
            <div className="col">
              <div className="h2">Publishing your site</div>

              <div className="step"><div className="stepn">1</div><div className="step-body">go to <strong>netlify.com/drop</strong> or Vercel</div></div>
              <div className="step"><div className="stepn">2</div><div className="step-body">upload your project folder</div></div>
              <div className="step"><div className="stepn">3</div><div className="step-body">copy your live website URL</div></div>
              <div className="step"><div className="stepn">4</div><div className="step-body">fill out the RSVP/submission form with your link</div></div>

              <hr className="hr" />
              <div className="label">CHECKLIST BEFORE SUBMITTING</div>
              <div className="body-sm" style={{ lineHeight: 1.9 }}>
                ☐ &nbsp;site opens at a public URL<br />
                ☐ &nbsp;it is a social media clone<br />
                ☐ &nbsp;it has at least one funny cursed feature<br />
                ☐ &nbsp;you coded it yourself (not AI generated)<br />
                ☐ &nbsp;you wrote your hardest part note
              </div>
            </div>

            <div className="col" style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <div className="h1" style={{ fontSize: 'clamp(2rem, 5.5vw, 3.5rem)', textAlign: 'center' }}>Your turn now.</div>
              <div className="body" style={{ textAlign: 'center', lineHeight: 1.8, marginTop: '4%' }}>
                pick a platform.<br />
                code the clone in HTML + CSS.<br />
                add your cursed feature.<br />
                submit and claim your grant!
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
