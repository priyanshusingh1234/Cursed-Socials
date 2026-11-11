'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SiteFooter from '../components/SiteFooter';

export default function HomePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isCursed, setIsCursed] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  // Check login state from Next.js server cookie
  useEffect(() => {
    fetch('/api/auth/me')
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated && data.user) {
          setUser(data.user);
        }
      })
      .catch((err) => console.error('Auth fetch error:', err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setAvatarError(false);
  }, [user]);

  // Cursed 'R' key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        toggleCursed();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCursed]);

  const toggleCursed = () => {
    const nextState = !isCursed;
    setIsCursed(nextState);
    if (nextState) {
      document.body.classList.add('cursed-upside-down');
    } else {
      document.body.classList.remove('cursed-upside-down');
    }
  };

  const getDisplayName = (u) => {
    if (!u) return 'Hack Clubber';
    const profile = u.identity || u.user || u.profile || u;

    // 1. Direct full name / display name
    const explicitName = profile.name || profile.full_name || profile.display_name || u.name;
    if (explicitName && typeof explicitName === 'string' && explicitName.trim()) {
      return explicitName.trim();
    }

    // 2. First name + Last name or Given + Family name
    const first = profile.given_name || profile.first_name || u.given_name || u.first_name;
    const last = profile.family_name || profile.last_name || u.family_name || u.last_name;
    if (first && typeof first === 'string' && first.trim()) {
      return last && typeof last === 'string' && last.trim()
        ? `${first.trim()} ${last.trim()}`
        : first.trim();
    }

    // 3. Usernames & Nicknames
    const handle =
      profile.preferred_username ||
      profile.nickname ||
      profile.username ||
      u.preferred_username ||
      u.nickname ||
      u.username;
    if (handle && typeof handle === 'string' && handle.trim()) {
      return handle.trim();
    }

    // 4. Slack Handle
    const slack = profile.slack_id || u.slack_id;
    if (slack && typeof slack === 'string' && slack.trim()) {
      return `Slack @${slack.trim()}`;
    }

    // 5. Email prefix
    const email = profile.email || profile.primary_email || u.email;
    if (email && typeof email === 'string' && email.includes('@')) {
      return email.split('@')[0].trim();
    }

    // 6. User ID identifier
    const sub = profile.sub || u.sub || profile.id || u.id;
    if (sub) {
      return `User ${String(sub).replace(/^ident!/, '').slice(0, 6)}`;
    }

    return 'Hack Clubber';
  };

  const getAvatarUrl = (u) => {
    if (!u) return null;
    const profile = u.identity || u.user || u.profile || u;
    const pic =
      profile.avatar ||
      profile.avatar_url ||
      profile.picture ||
      profile.profile_picture ||
      profile.image ||
      profile.image_url ||
      u.avatar ||
      u.avatar_url ||
      u.picture;
    if (pic && typeof pic === 'string' && pic.trim()) {
      return pic.trim();
    }
    return null;
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setUser(null);
  };

  const HACKCLUB_FALLBACK_AVATAR = '/assets/hackclub-icon.svg';
  const displayName = getDisplayName(user);
  const customAvatarUrl = getAvatarUrl(user);
  const avatarSrc = (!avatarError && customAvatarUrl) ? customAvatarUrl : HACKCLUB_FALLBACK_AVATAR;
  const isVerified = Boolean(
    user &&
    (user.verification_status === 'verified' ||
      user.verification_status === true ||
      user.verified === true ||
      user.ysws_eligible === true ||
      user.identity?.verification_status === 'verified' ||
      user.identity?.verified === true)
  );

  return (
    <>
      {/* Translucent elongated hint in the left blank margin */}
      <aside
        className="cursed-hint"
        id="cursed-badge"
        onClick={toggleCursed}
        title="Press 'R' or click to see a cursed feature"
      >
        <span className="cursed-text">press r to see a cursed feature</span>
      </aside>

      {/* Official Hack Club YSWS Flag Banner */}
      <a
        href="https://hackclub.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hackclub-flag-banner"
        title="Hack Club"
      >
        <img
          src="/assets/hackclub-flag-orpheus.svg"
          alt="Hack Club"
          onError={(e) => {
            e.currentTarget.src = 'https://assets.hackclub.com/flag-orpheus-top.svg';
          }}
        />
      </a>

      {/* Beginner Guide Paper Tab */}
      <Link href="/guide" className="guide-floating-pill" title="Beginner Guide: build step by step or draw your site">
        <span>Beginner Guide →</span>
      </Link>

      {/* Hack Club Auth Status Container */}
      <div className="auth-floating-wrapper">
        {loading ? (
          <div className="auth-pill logged-in">
            <span className="auth-loading-spinner"></span>
            <span>Checking...</span>
          </div>
        ) : user ? (
          <div className="auth-pill logged-in" title={`Signed in as ${displayName}`}>
            <img
              src={avatarSrc}
              alt={displayName}
              className={`auth-avatar-img ${avatarSrc === HACKCLUB_FALLBACK_AVATAR ? 'auth-hc-fallback' : ''}`}
              onError={() => setAvatarError(true)}
            />
            <div className="auth-user-info">
              <span className="auth-user-name">
                {displayName}
              </span>
              {isVerified && (
                <span className="auth-badge-verified">Verified</span>
              )}
            </div>
            <button onClick={handleLogout} className="auth-btn-subtle" title="Sign out">
              Log out
            </button>
          </div>
        ) : (
          <a href="/api/auth/login" className="auth-pill login-btn" title="Sign in with your Hack Club Auth identity">
            <span className="auth-hc-icon"></span>
            <span>Sign in with Hack Club</span>
          </a>
        )}
      </div>

      {/* 1. HERO SECTION (Full Viewport with Drawing) */}
      <main id="hero" className="hero-section">
        <div className="stage">
          <div className="bg-image"></div>

          {/* Navigation for the 3 top horizontal boxes */}
          <nav className="nav-bar" aria-label="Main Navigation">
            <a href="#hero" className="nav-box nav-home">
              <span className="nav-text">Home</span>
            </a>
            <a href="#about" className="nav-box nav-about">
              <span className="nav-text">About</span>
            </a>
            <a href="#faq" className="nav-box nav-faq">
              <span className="nav-text">FAQ</span>
            </a>
          </nav>

          {user && (
            <div className="hero-rsvp-center">
              <a
                href="https://rsvp.soon.it/cursed-socials-rsvp"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-rsvp-btn"
              >
                RSVP Now →
              </a>
            </div>
          )}

          {/* Shape 1: Triangle */}
          <section id="shape-home" className="shape-container shape-triangle" aria-label="Cursed Socials Overview">
            <div className="triangle-content">
              <span className="shape-badge">Hack Club YSWS</span>
              <h2 className="shape-title">Cursed Socials</h2>
              <p className="shape-desc">
                You ship silly looking websites, we ship grants to buy silly products!
              </p>
              <div className="shape-meta">
                <span>Open to all teens (13–18)</span>
                <span>Organiser: Priyanshu Singh</span>
              </div>
            </div>
          </section>

          {/* Shape 2: Square */}
          <section id="shape-about" className="shape-container shape-square" aria-label="Three Steps & Guidelines">
            <div className="shape-content">
              <div className="shape-header">
                <h2 className="shape-title">Three Steps</h2>
                <span className="shape-tag">Guidelines</span>
              </div>
              <div className="steps-list">
                <p><strong>1. Design:</strong> Build a silly clone of any social media.</p>
                <p><strong>2. Ship:</strong> Deploy and submit it for review.</p>
                <p><strong>3. Review:</strong> We check design, cursed features &amp; notes.</p>
              </div>
              <div className="criteria-box">
                <p>Own design (max 5% AI allowed). Neatly structured, no copy-paste!</p>
              </div>
            </div>
          </section>

          {/* Shape 3: Rectangle */}
          <section id="shape-prize" className="shape-container shape-rectangle" aria-label="Prizes and Rewards">
            <div className="shape-content">
              <div className="shape-header">
                <h2 className="shape-title">Prizes &amp; Rewards</h2>
                <span className="shape-tag">$5 – $10 Grant</span>
              </div>
              <p className="prize-highlight">
                Once approved, get $5 or $10 to buy a silly product or merch for yourself!
              </p>
              <div className="prize-notes">
                <p>We read your &quot;hardest part&quot; note, so write it clearly.</p>
                <p>Make it weird on purpose and have fun building it.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="about-section">
        <div className="about-stage">
          <div className="about-top-box">
            <div className="about-top-box-inner">
              <span className="about-badge">Hack Club YSWS</span>
              <h2 className="about-top-title">About Cursed Socials</h2>
              <p className="about-top-quote">
                &quot;You ship silly looking websites, we ship grants to buy silly products or merch!&quot;
              </p>
              <span className="about-top-meta">Organiser: Priyanshu Singh • Open to all teens (13–18)</span>
            </div>
          </div>

          <div className="about-box about-step-1">
            <div className="box-inner">
              <span className="box-step-tag">Step 1</span>
              <h3 className="box-title">Design</h3>
              <p className="box-desc">Build a silly clone of any social media. Add deliberate cursed features!</p>
              <p className="box-rule">Must be your own design (max 5% AI allowed).</p>
            </div>
          </div>

          <div className="about-arrow about-arrow-1" aria-hidden="true">
            <svg className="sketch-arrow-svg" viewBox="0 0 40 18">
              <path d="M2,9 L32,9 M24,3 L34,9 L24,15" />
            </svg>
          </div>

          <div className="about-box about-step-2">
            <div className="box-inner">
              <span className="box-step-tag">Step 2</span>
              <h3 className="box-title">Ship</h3>
              <p className="box-desc">Deploy your project live on your own and submit it for community review.</p>
              <p className="box-rule">Structure it neatly — don&apos;t copy-paste anything!</p>
            </div>
          </div>

          <div className="about-arrow about-arrow-2" aria-hidden="true">
            <svg className="sketch-arrow-svg" viewBox="0 0 40 18">
              <path d="M2,9 L32,9 M24,3 L34,9 L24,15" />
            </svg>
          </div>

          <div className="about-box about-step-3">
            <div className="box-inner">
              <span className="box-step-tag">Step 3</span>
              <h3 className="box-title">Review &amp; Prize</h3>
              <p className="box-desc">We read your &quot;hardest part&quot; note — explain what tripped you up.</p>
              <p className="box-highlight">Approved builds get $5 or $10 for a silly product or merch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ SECTION */}
      <section id="faq" className="faq-section">
        <div className="faq-stage">
          <article className="faq-box faq-box-1">
            <div className="faq-box-inner">
              <h3 className="faq-question">Who can participate?</h3>
              <p className="faq-answer">Any teen aged 13–18 worldwide. Free to join and ship.</p>
            </div>
          </article>

          <article className="faq-box faq-box-2">
            <div className="faq-box-inner">
              <h3 className="faq-question">Can I use AI to build my site?</h3>
              <p className="faq-answer">Max 5% AI! Design and build it yourself, with deliberate cursed features.</p>
            </div>
          </article>

          <article className="faq-box faq-box-3">
            <div className="faq-box-inner">
              <h3 className="faq-question">What are the prizes &amp; rewards?</h3>
              <p className="faq-answer">Approved projects get a $5 or $10 grant for a silly product or merch.</p>
            </div>
          </article>

          <article className="faq-box faq-box-4">
            <div className="faq-box-inner">
              <h3 className="faq-question">How does the project review work?</h3>
              <p className="faq-answer">We check your design, cursed feature, and your &quot;hardest part&quot; note.</p>
            </div>
          </article>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

