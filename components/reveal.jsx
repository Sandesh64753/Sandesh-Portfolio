"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({ children, className = "", delay = 0, as = "div", ...props }) {
  const reduceMotion = useReducedMotion();
  const Element = motion[as] || motion.div;

  return (
    <Element
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.12, margin: "0px 0px -5% 0px" }}
      transition={{ duration: reduceMotion ? 0 : 0.62, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </Element>
  );
}
