
import React, { useEffect, useState } from "react";
import { BarChart3, Zap, Target } from "lucide-react";
import logo from "../assets/logo.jpeg";
import introVideo from "../assets/figrit-intro.mp4";

const LaunchingSoon = () => {
  // Launch date
  const launchDate = "2027-02-01T00:00:00";

  // Destination link
  const bookingLink = "https://demo.thebasilium.com/figrit/";

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
    note: "Get ready to see your career like never before.",
    footer: "© 2026 Figrit. All rights reserved.",
  };

  // Feature tags
  const tags = [
    { label: "Real job data", icon: BarChart3 },
    { label: "Skill gap analysis", icon: Zap },
    { label: "Personal roadmap", icon: Target },
  ];

  // Live countdown
  useEffect(() => {
    const calculate = () => {
      const ms = Math.max(
        0,
        new Date(launchDate) - new Date()
      );

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
  }, []);

  // Countdown boxes
  const countdownBoxes = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col bg-white bg-[radial-gradient(circle_at_80%_-10%,rgba(232,38,75,0.10),transparent_55%)] text-[#1b0b11] font-['DM_Sans',sans-serif]">

      {/* Fonts */}
      <style>
        {`@import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=DM+Sans:wght@400;500;700&display=swap");`}
      </style>


      {/* Header / Rounded Navbar */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md px-5 pt-4 pb-2">
        <nav className="w-full flex items-center justify-between px-7 sm:px-10 py-3 rounded-full border border-[#ffc4cf] bg-white">

          {/* Figrit Image Logo */}
          <a href="/">
            <img
              src={logo}
              alt="Figrit Logo"
              className="w-24 sm:w-28 h-auto object-contain"
            />
          </a>

          {/* Get Started */}
          <a
            href={bookingLink}
            className="px-6 py-3 rounded-full text-white font-bold text-sm sm:text-base bg-[#e85b73] hover:bg-[#d93656] hover:shadow-md transition-all duration-200"
          >
            Get Started
          </a>
        </nav>
      </header>


      {/* Main Section */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-5 py-6 sm:py-8 flex items-center justify-center">

        <section className="relative isolate overflow-hidden w-full text-center px-5 sm:px-8 lg:px-12 py-7 sm:py-9 rounded-[30px] border border-[#f6c9d2] shadow-[8px_8px_0_#fff1f3]">

          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover z-[-2]"
          >
            <source src={introVideo} type="video/mp4" />
            Your browser does not support video playback.
          </video>

          {/* White Transparent Overlay */}
          <div className="absolute inset-0 bg-white/75 z-[-1]"></div>

          {/* Launching Soon */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter text-[#1b0b11] font-['Bricolage_Grotesque',sans-serif]">
            Launching{" "}
            <span className="text-[#e8264b]">Soon</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-[#6b5a60]">
            {content.note}
          </p>

          {/* Headline */}
          <div className="mt-6 mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight text-[#1b0b11] font-['Bricolage_Grotesque',sans-serif]">
              {content.headline}
              <span className="block mt-1 text-[#e8264b]">
                {content.accent}
              </span>
            </h2>
          </div>

          {/* Countdown Timer */}
          <div
            role="timer"
            aria-label="Time until launch"
            className="flex flex-wrap justify-center gap-3"
          >
            {countdownBoxes.map((box) => (
              <div
                key={box.label}
                className="w-[72px] sm:w-[100px] py-4 px-2 rounded-[18px] bg-[#fff1f3] border border-[#f6c9d2] grid place-items-center"
              >
                <b className="text-3xl sm:text-4xl font-extrabold leading-none tabular-nums text-black font-['Bricolage_Grotesque',sans-serif]">
                  {String(box.value).padStart(2, "0")}
                </b>
                <small className="mt-1.5 text-xs text-[#6b5a60]">
                  {box.label}
                </small>
              </div>
            ))}
          </div>

          {/* Feature Tags */}
          <ul className="flex flex-wrap justify-center gap-2.5 mt-6">
            {tags.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#f6c9d2] bg-white text-sm text-[#6b5a60]"
              >
                <Icon className="w-4 h-4 text-[#e8264b]" />
                {label}
              </li>
            ))}
          </ul>

          {/* Get Started */}
          <div className="mt-7">
            <a
              href={bookingLink}
              className="inline-flex items-center justify-center px-10 py-4 rounded-full text-white text-base font-bold bg-gradient-to-r from-[#e8264b] to-[#a8123a] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              Get Started →
            </a>
            <p className="mt-3 text-sm text-[#6b5a60]">
              Your next career opportunity starts here.
            </p>
          </div>
        </section>
      </main>


      {/* Footer */}
      <footer className="text-center p-6 text-sm text-[#6b5a60] border-t border-[#f6c9d2]">
        {content.footer}
      </footer>

    </div>
  );
};

export default LaunchingSoon;