"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["Work", "#work"],
  ["Problem solving", "#leetcode"],
  ["Blueprint", "#blueprint"],
  ["About", "#about"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header" id="top">
      <a className="wordmark" href="#top" aria-label="Sandesh Vairagar, home">
        Sandesh Vairagar<span>.</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="primary-nav"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
      </button>
      <nav id="primary-nav" className={`primary-nav${open ? " is-open" : ""}`} aria-label="Main navigation">
        <motion.div
          className="nav-links"
          initial={false}
        >
          {links.map(([label, href]) => (
            <motion.a href={href} key={label} onClick={closeMenu} whileHover={reduceMotion ? undefined : { y: -2 }}>
              {label}
            </motion.a>
          ))}
          <motion.a className="nav-contact" href="#contact" onClick={closeMenu} whileHover={reduceMotion ? undefined : { y: -2 }}>
            Let’s talk <ArrowUpRight size={15} aria-hidden="true" />
          </motion.a>
        </motion.div>
      </nav>
    </header>
  );
}
