'use client';

import Image from 'next/image';
import { useState, type ReactElement } from 'react';
import styles from './GroupHomepage.module.css';

const groupLogo = {
  src: '/images/MPDEE-logo-trans.png',
  width: 1024,
  height: 1024,
} as const;

declare global {
  interface Window {
    trackServiceReferral?: (service: string) => void;
  }
}

const services = [
  {
    id: 'creative',
    index: '01',
    kicker: 'Audio',
    name: 'Creative',
    description:
      'Audio production for radio, imaging, events and sound design.',
    href: 'https://creative.mpdee.co.uk/',
  },
  {
    id: 'development',
    index: '02',
    kicker: 'Digital',
    name: 'Development',
    description: 'Websites, applications and digital platforms built to last.',
    href: 'https://development.mpdee.co.uk/',
  },
  {
    id: 'support',
    index: '03',
    kicker: 'Technology',
    name: 'Support',
    description: 'Remote and on-site IT support for hardware and software.',
    href: 'https://support.mpdee.co.uk/',
  },
] as const;

type ServiceId = (typeof services)[number]['id'];

function trackReferral(service: string) {
  window.trackServiceReferral?.(service);
}

function CreativeArt() {
  return (
    <svg className={styles.artSvg} viewBox="0 0 260 260" aria-hidden="true">
      <defs>
        <radialGradient id="recordSurface">
          <stop stopColor="#303747" />
          <stop offset=".58" stopColor="#080c17" />
          <stop offset="1" stopColor="#1d2540" />
        </radialGradient>
        <linearGradient id="recordLabel" x2="1" y2="1">
          <stop stopColor="#60a5fa" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="recordShine">
          <stop stopColor="#dbeafe" stopOpacity=".02" />
          <stop offset=".5" stopColor="#dbeafe" stopOpacity=".23" />
          <stop offset="1" stopColor="#dbeafe" stopOpacity=".02" />
        </linearGradient>
      </defs>
      <g className={styles.recordShadow}>
        <ellipse
          cx="124"
          cy="226"
          rx="85"
          ry="12"
          fill="#02040b"
          opacity=".5"
        />
      </g>
      <g className={styles.recordFloat}>
        <circle
          cx="120"
          cy="120"
          r="101"
          fill="url(#recordSurface)"
          stroke="#94a3b8"
          strokeOpacity=".35"
        />
        {[91, 86, 81, 76, 71, 66, 61, 56, 51].map(r => (
          <circle
            key={r}
            cx="120"
            cy="120"
            r={r}
            fill="none"
            stroke="#c7d2fe"
            strokeOpacity=".14"
            strokeWidth=".7"
          />
        ))}
        <g className={styles.recordSpin}>
          <path
            d="M120 120 34 70A99 99 0 0 1 161 29Z"
            fill="url(#recordShine)"
          />
          <path
            d="M120 120 206 170A99 99 0 0 1 79 211Z"
            fill="url(#recordShine)"
          />
          <circle cx="120" cy="120" r="37" fill="url(#recordLabel)" />
          <text
            x="120"
            y="108"
            textAnchor="middle"
            fill="#101329"
            fontSize="11"
            fontWeight="800"
          >
            mpdee.
          </text>
          <text
            x="120"
            y="139"
            textAnchor="middle"
            fill="#101329"
            fontSize="5"
            letterSpacing="2"
          >
            SIDE A / CREATIVE
          </text>
        </g>
        <circle cx="120" cy="120" r="5" fill="#080c17" stroke="#dbeafe" />
      </g>
      <g className={styles.waveBank}>
        {[20, 38, 64, 43, 78, 57, 34, 49, 24].map((h, i) => (
          <rect
            key={i}
            className={styles.bar}
            x={184 + i * 7}
            y={177 - h / 2}
            width="3"
            height={h}
            rx="1.5"
            style={{ animationDelay: i * 0.12 + 's' }}
          />
        ))}
      </g>
    </svg>
  );
}

function DevelopmentArt() {
  return (
    <svg className={styles.artSvg} viewBox="0 0 260 260" aria-hidden="true">
      <defs>
        <linearGradient id="windowSurface" x2="1" y2="1">
          <stop stopColor="#342a20" />
          <stop offset="1" stopColor="#111319" />
        </linearGradient>
        <linearGradient id="buildAccent">
          <stop stopColor="#fb923c" />
          <stop offset="1" stopColor="#fde68a" />
        </linearGradient>
      </defs>
      <g className={styles.buildBack}>
        <rect
          x="22"
          y="27"
          width="177"
          height="137"
          rx="7"
          fill="#15171d"
          stroke="#f59e0b"
          strokeOpacity=".35"
        />
        <path d="M22 46H199" stroke="#f59e0b" strokeOpacity=".3" />
        <circle cx="34" cy="37" r="2" fill="#f59e0b" />
        <circle cx="43" cy="37" r="2" fill="#f59e0b" opacity=".5" />
        {[0, 1, 2, 3, 4].map(i => (
          <path
            key={i}
            d={'M36 ' + (65 + i * 14) + 'h' + (i % 2 ? 110 : 70)}
            stroke="#f59e0b"
            strokeOpacity=".15"
          />
        ))}
      </g>
      <g className={styles.buildFront}>
        <rect
          x="48"
          y="76"
          width="192"
          height="146"
          rx="9"
          fill="url(#windowSurface)"
          stroke="#fed7aa"
          strokeOpacity=".65"
        />
        <path d="M48 99H240" stroke="#fed7aa" strokeOpacity=".25" />
        <circle cx="61" cy="88" r="2.5" fill="#fb923c" />
        <circle cx="71" cy="88" r="2.5" fill="#fbbf24" />
        <circle cx="81" cy="88" r="2.5" fill="#fde68a" />
        <rect
          x="64"
          y="116"
          width="64"
          height="7"
          rx="2"
          fill="url(#buildAccent)"
        />
        <rect
          x="64"
          y="130"
          width="103"
          height="3"
          rx="1.5"
          fill="#e7e5e4"
          opacity=".3"
        />
        {[0, 1, 2].map(i => (
          <g
            key={i}
            className={styles.buildTile}
            style={{ animationDelay: i * 0.24 + 's' }}
          >
            <rect
              x={64 + i * 53}
              y="148"
              width="44"
              height="39"
              rx="4"
              fill="#f59e0b"
              fillOpacity={0.14 + i * 0.08}
              stroke="#fbbf24"
              strokeOpacity=".3"
            />
            <path
              d={'M' + (72 + i * 53) + ' 177h21'}
              stroke="#fde68a"
              strokeOpacity=".5"
            />
          </g>
        ))}
        <rect
          x="64"
          y="199"
          width="49"
          height="8"
          rx="2"
          fill="url(#buildAccent)"
        />
        <path
          d="m207 189 5 19 4-7 8-3Z"
          fill="#fff7ed"
          stroke="#111"
          strokeWidth="1"
        />
      </g>
    </svg>
  );
}

function SupportArt() {
  return (
    <svg className={styles.artSvg} viewBox="0 0 260 260" aria-hidden="true">
      <defs>
        <radialGradient id="core">
          <stop stopColor="#eff6ff" />
          <stop offset=".25" stopColor="#93c5fd" />
          <stop offset=".7" stopColor="#2563eb" />
          <stop offset="1" stopColor="#111b4d" />
        </radialGradient>
        <linearGradient id="orbit">
          <stop stopColor="#f87171" />
          <stop offset=".5" stopColor="#fda4af" />
          <stop offset="1" stopColor="#60a5fa" />
        </linearGradient>
      </defs>
      <circle
        cx="130"
        cy="130"
        r="109"
        fill="none"
        stroke="#94a3b8"
        strokeOpacity=".12"
        strokeDasharray="1 8"
      />
      <g className={styles.orbitOne}>
        <ellipse
          cx="130"
          cy="130"
          rx="106"
          ry="49"
          fill="none"
          stroke="url(#orbit)"
          strokeWidth="1.5"
        />
        <circle cx="24" cy="130" r="7" fill="#f87171" />
        <circle cx="236" cy="130" r="6" fill="#93c5fd" />
      </g>
      <g className={styles.orbitTwo}>
        <ellipse
          cx="130"
          cy="130"
          rx="102"
          ry="50"
          fill="none"
          stroke="url(#orbit)"
          strokeWidth="1"
        />
        <circle cx="28" cy="130" r="5" fill="#60a5fa" />
        <circle cx="232" cy="130" r="8" fill="#fca5a5" />
      </g>
      <g className={styles.orbitThree}>
        <ellipse
          cx="130"
          cy="130"
          rx="99"
          ry="52"
          fill="none"
          stroke="#c7d2fe"
          strokeOpacity=".5"
          strokeDasharray="4 7"
        />
        <circle cx="31" cy="130" r="4" fill="#dbeafe" />
      </g>
      <circle
        className={styles.coreHalo}
        cx="130"
        cy="130"
        r="37"
        fill="none"
        stroke="#93c5fd"
        strokeOpacity=".25"
      />
      <circle
        cx="130"
        cy="130"
        r="25"
        fill="url(#core)"
        stroke="#bfdbfe"
        strokeOpacity=".55"
      />
      <path
        d="m121 130 6 6 13-14"
        fill="none"
        stroke="#eff6ff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const artFor: Record<ServiceId, () => ReactElement> = {
  creative: CreativeArt,
  development: DevelopmentArt,
  support: SupportArt,
};

export default function GroupHomepage() {
  const [active, setActive] = useState<ServiceId | null>(null);
  const [paused, setPaused] = useState(false);

  return (
    <div
      className={styles.shell}
      id="top"
      data-motion={paused ? 'paused' : 'running'}
      data-active={active ?? undefined}
    >
      <a className={styles.skip} href="#main-content">
        Skip to main content
      </a>

      <header className={styles.header}>
        <a className={styles.brand} href="#top">
          <Image
            src={groupLogo.src}
            alt="MPDEE Group"
            width={groupLogo.width}
            height={groupLogo.height}
            className={styles.headerMark}
            priority
          />
          <span className={styles.wordmark}>
            mpdee<span className={styles.stop}>.</span>
          </span>
          <span className={styles.groupLabel}>Group</span>
        </a>
        <h1 id="group-heading" className={styles.headline}>
          Three sides. One MPDEE.
        </h1>
        <button
          type="button"
          className={styles.pause}
          aria-pressed={paused}
          onClick={() => setPaused(value => !value)}
        >
          {paused ? 'Resume' : 'Pause'}
          <span className={styles.srOnly}> animations</span>
        </button>
      </header>

      <main
        id="main-content"
        className={styles.main}
        aria-labelledby="group-heading"
      >
        <div className={styles.triptych}>
          {services.map(service => {
            const Art = artFor[service.id];
            const hot = active === service.id;
            return (
              <a
                key={service.id}
                className={`${styles.territory} ${styles[service.id]}${hot ? ` ${styles.isHot}` : ''}`}
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setActive(service.id)}
                onPointerMove={event => {
                  if (
                    paused ||
                    event.pointerType !== 'mouse' ||
                    window.matchMedia('(prefers-reduced-motion: reduce)')
                      .matches
                  )
                    return;
                  const rect = event.currentTarget.getBoundingClientRect();
                  event.currentTarget.style.setProperty(
                    '--mx',
                    String((event.clientX - rect.left) / rect.width - 0.5)
                  );
                  event.currentTarget.style.setProperty(
                    '--my',
                    String((event.clientY - rect.top) / rect.height - 0.5)
                  );
                }}
                onPointerLeave={event => {
                  event.currentTarget.style.setProperty('--mx', '0');
                  event.currentTarget.style.setProperty('--my', '0');
                }}
                onMouseLeave={event => {
                  if (event.currentTarget === document.activeElement) return;
                  setActive(current =>
                    current === service.id ? null : current
                  );
                }}
                onFocus={() => setActive(service.id)}
                onBlur={() =>
                  setActive(current =>
                    current === service.id ? null : current
                  )
                }
                onClick={() => trackReferral(service.id)}
              >
                <span className={styles.territoryNumber} aria-hidden="true">
                  {service.index}
                </span>
                <span className={styles.copy}>
                  <span className={styles.kicker}>
                    {service.index} · {service.kicker}
                  </span>
                  <span className={styles.name}>{service.name}</span>
                  <span className={styles.description}>
                    {service.description}
                  </span>
                  <span className={styles.explore}>
                    Explore {service.name}
                    <span className={styles.arrow} aria-hidden="true">
                      →
                    </span>
                    <span className={styles.srOnly}> (opens in a new tab)</span>
                  </span>
                </span>
                <span className={styles.art} aria-hidden="true">
                  <Art />
                </span>
              </a>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2026 MPDEE Group</p>
      </footer>
    </div>
  );
}
