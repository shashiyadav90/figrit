import React, { useEffect, useState } from "react";
import { BarChart3, Zap, Target } from "lucide-react";

const LaunchingSoon = () => {
  // Update the launch date here
  const launchDate = "2027-02-01T00:00:00";

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const content = {
    brand: { first: "Fig", second: "rit" },
    headline: "Don't wait for the next opportunity.",
    accent: "Navigate to it.",
    body: "Figrit shows where you stand, what to learn next, and which opportunities fit you best, so every step moves you forward.",
    note: "Get ready to see your career like never before.",
    success: "You're on the list. We'll email you when your spot opens.",
    footer: "© 2026 Figrit. All rights reserved.",
  };

  const tags = [
    { label: "Real job data", icon: BarChart3 },
    { label: "Skill gap analysis", icon: Zap },
    { label: "Personal roadmap", icon: Target },
  ];

  // Live countdown
  useEffect(() => {
    const calculate = () => {
      const ms = Math.max(0, new Date(launchDate) - new Date());
      setTimeLeft({
        days: Math.floor(ms / 86400000),
        hours: Math.floor(ms / 3600000) % 24,
        minutes: Math.floor(ms / 60000) % 60,
        seconds: Math.floor(ms / 1000) % 60,
      });
    };
    calculate();
    const timer = setInterval(calculate, 1000);
    return () => clearInterval(timer);
  }, [launchDate]);

  const countdownBoxes = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send `email` to your backend or mailing list here
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-white bg-[radial-gradient(circle_at_80%_-10%,rgba(232,38,75,0.14),transparent_55%)] text-[#1b0b11] font-['DM_Sans',sans-serif]">
      {/* Fonts */}
      <style>{`@import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=DM+Sans:wght@400;500;700&display=swap");`}</style>

      {/* Header */}
      <header className="w-full max-w-6xl mx-auto px-5 py-6">
        <span className="text-3xl font-extrabold italic tracking-tighter font-['Bricolage_Grotesque',sans-serif]">
          {content.brand.first}
          <span className="text-[#e8264b]">{content.brand.second}</span>
        </span>
      </header>

      {/* Main */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-5 pt-6 pb-16 grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center">
        {/* LEFT */}
        <section>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight font-['Bricolage_Grotesque',sans-serif]">
            {content.headline}{" "}
            <span className="block text-[#e8264b]">{content.accent}</span>
          </h1>

          <p className="mt-6 mb-8 max-w-[52ch] text-lg text-[#6b5a60]">
            {content.body}
          </p>

          {submitted ? (
            <p role="status" className="font-bold text-[#a8123a]">
              {content.success}
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-wrap gap-2.5 max-w-lg">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 min-w-[230px] px-4 py-3.5 rounded-2xl border-2 border-[#f6c9d2] bg-white outline-none focus:border-[#e8264b]"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-2xl font-bold text-white bg-gradient-to-br from-[#e8264b] to-[#a8123a] hover:-translate-y-0.5 transition-transform duration-150 cursor-pointer"
              >
                Claim your spot
              </button>
            </form>
          )}

          <ul className="flex flex-wrap gap-2.5 mt-6">
            {tags.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f6c9d2] bg-[#fff1f3] text-sm text-[#6b5a60]"
              >
                <Icon className="w-4 h-4 text-[#e8264b]" />
                {label}
              </li>
            ))}
          </ul>
        </section>

        {/* RIGHT */}
        <aside className="text-center px-8 py-10 rounded-[36px] border border-[#f6c9d2] bg-white shadow-[12px_12px_0_#fff1f3]">
          <h2 className="text-5xl lg:text-7xl font-extrabold leading-none tracking-tighter text-[#1b0b11] font-['Bricolage_Grotesque',sans-serif]">
            Launching <span className="text-[#e8264b]">soon</span>
          </h2>
          <p className="mt-4 mb-7 text-[#6b5a60]">{content.note}</p>

          <div
            role="timer"
            aria-label="Time until launch"
            className="flex flex-wrap justify-center gap-3"
          >
            {countdownBoxes.map((box) => (
              <div
                key={box.label}
                className="w-[66px] sm:w-[84px] py-4 px-2.5 rounded-[20px] bg-[#fff1f3] border border-[#f6c9d2] grid"
              >
                <b className="text-3xl sm:text-4xl font-extrabold leading-none tabular-nums text-[#e8264b] font-['Bricolage_Grotesque',sans-serif]">
                  {String(box.value).padStart(2, "0")}
                </b>
                <small className="mt-1.5 text-xs text-[#6b5a60]">{box.label}</small>
              </div>
            ))}
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="text-center p-6 text-sm text-[#6b5a60] border-t border-[#f6c9d2]">
        {content.footer}
      </footer>
    </div>
  );
};

export default LaunchingSoon;
