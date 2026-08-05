import React from 'react';
import Media from './Media';
import Countdown from './Countdown';
import EmailSignup from './EmailSignup';
import {
  IMAGES, NAV_LINKS, HERO, HIGHLIGHT_STATS, CAROUSEL_ALTS, INVESTING,
  OPPORTUNITY, WHY_US, BUSINESS_MODEL, ROADMAP, TIERS, EMPLOYEE_PERK,
  PERKS_NOTE, TEAM, FAQS, FOOTER,
} from './data';

// Logo Château (SVG de la marca). `light` = sobre fondo oscuro (se pasa a crema).
const LOGO = 'https://chateau.nexai.chat/assets/chateau_logo-DjSXA0Mc.svg';
export function Brand({ light }) {
  return <img className={`brand-logo${light ? ' on-dark' : ''}`} src={LOGO} alt="Château" />;
}

export function PromoBar() {
  return (
    <div className="promo">
      <div className="container">
        <span>Limited-Time Offer: Unlock 5% Bonus Shares</span>
        <Countdown />
      </div>
    </div>
  );
}

export function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <a href="/" aria-label="Lost Boy"><Brand light /></a>
        <div className="navlinks">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a className="btn btn-primary nav-cta" href="/checkout">Invest Now</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <h1>{HERO.title}</h1>
          <p className="lead">{HERO.lead}</p>
          <div className="links">
            <a href="#faq">SEC Filings</a>
            <a href="https://www.sec.gov/Archives/edgar/data/2132417/000187285626000225/lostboyformc.pdf" target="_blank" rel="noopener noreferrer">Offering Circular</a>
            <a href="#faq">Investor Education</a>
          </div>
          <div className="metrics">
            {HERO.metrics.map((m) => (
              <div className="metric" key={m.k}>
                <div className="k">{m.k}</div>
                <div className="v">{m.v}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24 }}>
            <a className="btn btn-primary" href="/checkout">Invest Now</a>
          </div>
        </div>
        <div className="hero-media">
          <Media src={IMAGES.hero} alt="Interior de Lost Boy Dry Goods · foto principal" height={420} />
        </div>
      </div>
    </header>
  );
}

function Highlights() {
  return (
    <section className="section">
      <div className="container">
        <div className="stats3">
          {HIGHLIGHT_STATS.map((s) => (
            <div className="stat" key={s.lbl}>
              <div className="num">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
        <div className="marquee">
          <div className="marquee-track">
            {[...IMAGES.carousel, ...IMAGES.carousel].map((src, i) => {
              const n = IMAGES.carousel.length;
              return (
                <div className="marquee-item" key={i} aria-hidden={i >= n}>
                  <img src={src} alt={i < n ? CAROUSEL_ALTS[i] : ''} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Investing() {
  return (
    <section className="section section-dark">
      <div className="container">
        <div className="eyebrow" style={{ color: 'var(--cream)' }}>What You're Investing In</div>
        <h2>{INVESTING.title}</h2>
        <p style={{ maxWidth: '70ch', color: 'rgba(237,230,219,.85)' }}>{INVESTING.body}</p>
        <div className="cards3">
          {INVESTING.cards.map((c) => (
            <div className="card" key={c.title}>
              <div className="ico">
                {c.img ? <img src={c.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> : c.icon}
              </div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Opportunity() {
  return (
    <section className="section" id="opportunity">
      <div className="container opp-grid">
        <div className="opp-media">
          <Media src={IMAGES.opportunity} alt="Vista cenital del interior de Lost Boy Dry Goods" height={360} />
        </div>
        <div>
          <h2>{OPPORTUNITY.title}</h2>
          <p>{OPPORTUNITY.body}</p>
          <div className="opp-stats">
            {OPPORTUNITY.stats.map((s) => (
              <div key={s.lbl}>
                <div className="num">{s.num}</div>
                <div className="lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="section" id="why-us" style={{ background: 'rgba(92,46,45,.04)' }}>
      <div className="container">
        <h2>{WHY_US.title}</h2>
        <p style={{ maxWidth: '80ch' }}>{WHY_US.body}</p>
        <div className="locations">
          {WHY_US.locations.map((l) => (
            <div className="loc" key={l.name}>
              <span className="badge">{l.year}</span>
              <div className="meta">{l.meta}</div>
              <h3>{l.name}</h3>
              <p>{l.desc}</p>
            </div>
          ))}
        </div>
        <div className="gallery4">
          {IMAGES.gallery.map((src, i) => (
            <Media key={i} src={src} alt={`Deck ${i + 1}`} />
          ))}
        </div>
        <EmailSignup />
      </div>
    </section>
  );
}

function BusinessModel() {
  return (
    <section className="section">
      <div className="container opp-grid">
        <div>
          <h2>{BUSINESS_MODEL.title}</h2>
          <p>{BUSINESS_MODEL.body}</p>
        </div>
        <div className="opp-media">
          <Media src={IMAGES.businessModel} alt="Esquina del bar Lost Boy con taburetes de cuero y estantería arqueada" height={360} />
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section className="section section-dark" id="roadmap">
      <div className="container">
        <h2>{ROADMAP.title}</h2>
        <p style={{ maxWidth: '80ch', color: 'rgba(237,230,219,.85)' }}>{ROADMAP.body}</p>
        <div className="roadmap">
          {ROADMAP.phases.map((p) => (
            <div className="phase" key={p.yr}>
              <div className="yr">{p.yr}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
        <p className="disclaimer" style={{ color: 'rgba(237,230,219,.6)' }}>{ROADMAP.disclaimer}</p>
      </div>
    </section>
  );
}

function Perks() {
  return (
    <section className="section" id="perks">
      <div className="container">
        <div className="eyebrow">Investor Perks</div>
        <h2>Own a Piece, Get the Perks</h2>
        <div className="perks-grid">
          {TIERS.map((t) => (
            <div className={`perk${t.n === 7 ? ' featured' : ''}`} key={t.n}>
              <div className="tier">Tier {t.n}</div>
              <h3>{t.name}</h3>
              <div className="amt">{t.min}</div>
              <div className="bonus">{t.bonus} Bonus Shares</div>
              <ul>
                {t.perks.map((p) => (
                  <li key={p.title}>{p.title}</li>
                ))}
              </ul>
              <a className={`btn ${t.n === 7 ? 'btn-light' : 'btn-primary'}`} href="/checkout">Invest Now</a>
            </div>
          ))}
          <div className="perk">
            <div className="tier">Employee Perk</div>
            <h3 style={{ fontSize: '1.1rem' }}>{EMPLOYEE_PERK.title}</h3>
            <div className="amt">{EMPLOYEE_PERK.bonus}</div>
            <div className="bonus">{EMPLOYEE_PERK.note}</div>
            <a className="btn btn-primary" href="/checkout" style={{ marginTop: 'auto' }}>Invest Now</a>
          </div>
        </div>
        <p className="disclaimer">{PERKS_NOTE}</p>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="section section-dark" id="team">
      <div className="container">
        <div className="eyebrow" style={{ color: 'var(--cream)' }}>Team</div>
        <h2>{TEAM.title}</h2>
        <p style={{ maxWidth: '75ch', color: 'rgba(237,230,219,.85)' }}>{TEAM.body}</p>
        <div className="team">
          {TEAM.founders.map((f, i) => (
            <div className="founder" key={f.name}>
              <div className="photo"><Media src={IMAGES.founders[i]} alt={`Foto de ${f.name}`} /></div>
              <div>
                <div className="role">{f.role}</div>
                <h3>{f.name}</h3>
                <p>{f.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <h2 style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
        <div className="faq">
          {FAQS.map((f, i) => (
            <details key={i} open={i === 0}>
              <summary>{f.q}</summary>
              <div className="a">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Discussion() {
  return (
    <section className="section discussion" id="discussion">
      <div className="container">
        <h2>Join the Discussion</h2>
        <div className="box">Comentarios (Disqus) — se integran aquí en producción.</div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="ftop">
          <div className="fbrand"><Brand light /></div>
          <div className="fstats">
            <div className="metric" style={{ background: 'transparent', color: 'var(--cream)', borderColor: 'rgba(237,230,219,.3)' }}>
              <div className="k" style={{ color: 'var(--cream)', opacity: .8 }}>Share Price</div>
              <div className="v" style={{ color: 'var(--cream)' }}>$2.50</div>
            </div>
            <a className="btn btn-primary" href="/checkout">Invest Now</a>
          </div>
        </div>
        <div className="disc">
          <p>{FOOTER.broker}</p>
          <p>{FOOTER.forward}</p>
          <p>{FOOTER.risk}</p>
        </div>
        <div className="copyright">
          <span>{FOOTER.copyright}</span>
          <span><a href="#">Privacy Policy</a> · Powered by DealMaker</span>
        </div>
      </div>
    </footer>
  );
}

export default function Landing() {
  return (
    <>
      <PromoBar />
      <Nav />
      <main>
        <Hero />
        <Highlights />
        <Investing />
        <Opportunity />
        <WhyUs />
        <BusinessModel />
        <Roadmap />
        <Perks />
        <Team />
        <Faq />
        <Discussion />
      </main>
      <Footer />
    </>
  );
}
