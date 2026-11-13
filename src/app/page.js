'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SiteFooter from '../components/SiteFooter';

export default function HomePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isCursed, setIsCursed] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  useEffect(() => {
    fetch('/api/auth/me')
      .then(res => res.json())
      .then(data => {
        if (data.authenticated && data.user) {
          setUser(data.user);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    setAvatarError(false);
  }, [user]);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'r' || e.key === 'R') {
        setIsCursed(prev => {
          if (!prev) {
            document.body.classList.add('cursed-upside-down');
          } else {
            document.body.classList.remove('cursed-upside-down');
          }
          return !prev;
        });
      }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  function getName(u) {
    if (!u) return 'Hack Clubber';
    const p = u.identity || u.user || u;
    if (p.name) return p.name;
    if (p.full_name) return p.full_name;
    if (p.first_name) return p.last_name ? p.first_name + ' ' + p.last_name : p.first_name;
    if (p.given_name) return p.given_name;
    if (p.preferred_username) return p.preferred_username;
    if (p.email) return p.email.split('@')[0];
    if (u.name) return u.name;
    if (u.email) return u.email.split('@')[0];
    return 'Hack Clubber';
  }

  function getAvatar(u) {
    if (!u) return null;
    const p = u.identity || u.user || u;
    return p.avatar || p.picture || p.avatar_url || u.avatar || u.picture || null;
  }

  function getClub(u) {
    if (!u) return null;
    const p = u.identity || u.user || u;
    return p.club || p.club_name || u.club || u.club_name || null;
  }

  async function logout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    setUser(null);
  }

  const name = getName(user);
  const avatarUrl = getAvatar(user);
  const fallback = '/assets/hackclub-icon.svg';
  const avatar = !avatarError && avatarUrl ? avatarUrl : fallback;
  const club = getClub(user);
  const verified = user && (user.verification_status === 'verified' || user.ysws_eligible === true);

  return (
    <>
      <aside className="cursed-hint" onClick={() => {
        setIsCursed(prev => {
          if (!prev) document.body.classList.add('cursed-upside-down');
          else document.body.classList.remove('cursed-upside-down');
          return !prev;
        });
      }}>
        <span className="cursed-text">press r to see a cursed feature</span>
      </aside>

      <a href="https://hackclub.com/" target="_blank" rel="noopener noreferrer" className="hackclub-flag-banner">
        <img
          src="/assets/hackclub-flag-orpheus.svg"
          alt="Hack Club"
          onError={e => { e.currentTarget.src = 'https://assets.hackclub.com/flag-orpheus-top.svg'; }}
        />
      </a>

      <Link href="/guide" className="guide-floating-pill">
        <span>Beginner Guide →</span>
      </Link>

      <div className="auth-floating-wrapper">
        {loading ? (
          <div className="auth-pill logged-in">
            <span className="auth-loading-spinner"></span>
            <span>Checking...</span>
          </div>
        ) : user ? (
          <div className="auth-pill logged-in">
            <img
              src={avatar}
              alt={name}
              className={`auth-avatar-img ${avatar === fallback ? 'auth-hc-fallback' : ''}`}
              onError={() => setAvatarError(true)}
            />
            <div className="auth-user-info">
              <div className="auth-user-name-row">
                <span className="auth-user-name">{name}</span>
                {verified && <span className="auth-badge-verified">Verified</span>}
              </div>
              {club && <span className="auth-user-club">Club: {club}</span>}
            </div>
            <button onClick={logout} className="auth-btn-subtle">Log out</button>
          </div>
        ) : (
          <a href="/api/auth/login" className="auth-pill login-btn">
            <span className="auth-hc-icon"></span>
            <span>Sign in with Hack Club</span>
          </a>
        )}
      </div>

      <main id="hero" className="hero-section">
        <div className="stage">
          <div className="bg-image"></div>

          <nav className="nav-bar">
            <a href="#hero" className="nav-box nav-home"><span className="nav-text">Home</span></a>
            <a href="#about" className="nav-box nav-about"><span className="nav-text">About</span></a>
            <a href="#faq" className="nav-box nav-faq"><span className="nav-text">FAQ</span></a>
          </nav>

          {user && (
            <div className="hero-rsvp-center">
              <a href="https://rsvp.soon.it/cursed-socials-rsvp" target="_blank" rel="noopener noreferrer" className="hero-rsvp-btn">
                RSVP Now →
              </a>
            </div>
          )}

          <section id="shape-home" className="shape-container shape-triangle">
            <div className="triangle-content">
              <span className="shape-badge">Hack Club YSWS</span>
              <h2 className="shape-title">Cursed Socials</h2>
              <p className="shape-desc">You ship silly looking websites, we ship grants to buy silly products!</p>
              <div className="shape-meta">
                <span>Open to all teens (13–18)</span>
                <span>Organiser: Priyanshu Singh</span>
              </div>
            </div>
          </section>

          <section id="shape-about" className="shape-container shape-square">
            <div className="shape-content">
              <div className="shape-header">
                <h2 className="shape-title">Three Steps</h2>
                <span className="shape-tag">Guidelines</span>
              </div>
              <div className="steps-list">
                <p><strong>1. Design:</strong> Build a silly clone of any social media.</p>
                <p><strong>2. Ship:</strong> Deploy and submit it for review.</p>
                <p><strong>3. Review:</strong> We check design, cursed features & notes.</p>
              </div>
              <div className="criteria-box">
                <p>Own design (max 5% AI allowed). Neatly structured, no copy-paste!</p>
              </div>
            </div>
          </section>

          <section id="shape-prize" className="shape-container shape-rectangle">
            <div className="shape-content">
              <div className="shape-header">
                <h2 className="shape-title">Prizes & Rewards</h2>
                <span className="shape-tag">$5 – $10 Grant</span>
              </div>
              <p className="prize-highlight">Once approved, get $5 or $10 to buy a silly product or merch for yourself!</p>
              <div className="prize-notes">
                <p>We read your "hardest part" note, so write it clearly.</p>
                <p>Make it weird on purpose and have fun building it.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <section id="about" className="about-section">
        <div className="about-stage">
          <div className="about-top-box">
            <div className="about-top-box-inner">
              <span className="about-badge">Hack Club YSWS</span>
              <h2 className="about-top-title">About Cursed Socials</h2>
              <p className="about-top-quote">"You ship silly looking websites, we ship grants to buy silly products or merch!"</p>
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
              <p className="box-desc">Deploy your project live and submit it for community review.</p>
              <p className="box-rule">Structure it neatly — don't copy-paste anything!</p>
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
              <h3 className="box-title">Review & Prize</h3>
              <p className="box-desc">We read your "hardest part" note — explain what tripped you up.</p>
              <p className="box-highlight">Approved builds get $5 or $10 for a silly product or merch.</p>
            </div>
          </div>
        </div>
      </section>

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
              <h3 className="faq-question">What are the prizes?</h3>
              <p className="faq-answer">Approved projects get a $5 or $10 grant for a silly product or merch.</p>
            </div>
          </article>

          <article className="faq-box faq-box-4">
            <div className="faq-box-inner">
              <h3 className="faq-question">How does review work?</h3>
              <p className="faq-answer">We check your design, cursed feature, and your "hardest part" note.</p>
            </div>
          </article>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
