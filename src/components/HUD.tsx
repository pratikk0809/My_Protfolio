"use client";

import { useEffect, useState } from "react";
import styles from "./HUD.module.css";

export default function HUD() {
  const [time, setTime] = useState("--:--");
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    /* ── Live clock ── */
    const tick = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      setTime(`${h}:${m}`);
    };
    tick();
    const clockTimer = setInterval(tick, 1000);

    /* ── Scroll % ── */
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      setScroll(total > 0 ? Math.round((window.scrollY / total) * 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearInterval(clockTimer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={styles.hud} role="status" aria-label="System HUD">
      <div className={styles.inner}>

        {/* Activity pulse + status */}
        <div className={styles.chip}>
          <ActivityIcon />
          <span className={styles.mono}>SYS.ONLINE</span>
        </div>

        <div className={styles.sep} />

        {/* Clock */}
        <div className={styles.chip}>
          <ClockIcon />
          <span className={styles.mono}>{time}</span>
        </div>

        <span className={styles.mono} style={{ color: "var(--border-light)" }}>|</span>

        {/* Scroll % — green when scrolled */}
        <span
          className={styles.mono}
          style={{ color: scroll > 0 ? "var(--green)" : "var(--muted)" }}
        >
          {scroll}%
        </span>

        <div className={styles.sep} />

        {/* Email — tooltip: CONTACT */}
        <a
          href="mailto:pratikk0809@gmail.com"
          className={styles.iconBtn}
          aria-label="Email Pratik"
        >
          <span className={styles.tooltip}>CONTACT</span>
          <span className={styles.iconCircle}>
            <MailIcon />
          </span>
        </a>

        {/* GitHub — tooltip: GITHUB */}
        <a
          href="https://github.com/pratikk0809"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconBtn}
          aria-label="GitHub profile"
        >
          <span className={styles.tooltip}>GITHUB</span>
          <span className={styles.iconCircle}>
            <GitHubIcon />
          </span>
        </a>

      </div>
    </div>
  );
}

/* ─── Inline SVG Icons ─────────────────────────────────────────── */
function ActivityIcon() {
  return (
    <svg
      width="14" height="10"
      viewBox="0 0 28 16"
      fill="none"
      stroke="var(--green)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="0,8 5,8 7,2 10,14 13,5 16,11 19,8 28,8" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
