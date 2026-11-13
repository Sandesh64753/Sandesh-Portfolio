"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ProjectGallery({ images, className = "" }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const isOpen = activeIndex !== null;
  const activeImage = isOpen ? images[activeIndex] : null;

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current === null ? current : (current + 1) % images.length));
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => (current === null ? current : (current - 1 + images.length) % images.length));
      }
      if (event.key === "Tab") {
        const buttons = document.querySelectorAll(".lightbox-dialog button");
        const firstButton = buttons[0];
        const lastButton = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === firstButton) {
          event.preventDefault();
          lastButton?.focus();
        } else if (!event.shiftKey && document.activeElement === lastButton) {
          event.preventDefault();
          firstButton?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [isOpen, images.length]);

  const showImage = (index) => {
    triggerRef.current = document.activeElement;
    setActiveIndex(index);
  };

  const close = () => setActiveIndex(null);

  return (
    <>
      <div className={`project-screens ${className}`}>
        {images.map((image, index) => (
          <figure className="project-shot" key={image.src}>
            <Image src={image.src} alt={image.alt} fill sizes={image.sizes || "(max-width: 700px) 100vw, 70vw"} />
            <button
              className="project-shot-trigger"
              type="button"
              aria-label={`Preview image: ${image.caption || image.alt}`}
              aria-haspopup="dialog"
              onClick={() => showImage(index)}
            >
              <span className="project-zoom-hint"><ZoomIn size={16} aria-hidden="true" /> Preview</span>
            </button>
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="lightbox-backdrop"
            role="presentation"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
            onClick={(event) => {
              if (event.target === event.currentTarget) close();
            }}
          >
            <motion.div
              className="lightbox-dialog"
              role="dialog"
              aria-modal="true"
              aria-label={activeImage.caption || activeImage.alt}
              tabIndex={-1}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.985, y: 6 }}
              transition={{ duration: reduceMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <button ref={closeButtonRef} className="lightbox-close" type="button" onClick={close} aria-label="Close image preview">
                <X size={21} aria-hidden="true" />
              </button>
              {images.length > 1 && (
                <>
                  <button className="lightbox-nav lightbox-previous" type="button" onClick={() => setActiveIndex((activeIndex - 1 + images.length) % images.length)} aria-label="Previous image">
                    <ChevronLeft size={22} aria-hidden="true" />
                  </button>
                  <button className="lightbox-nav lightbox-next" type="button" onClick={() => setActiveIndex((activeIndex + 1) % images.length)} aria-label="Next image">
                    <ChevronRight size={22} aria-hidden="true" />
                  </button>
                </>
              )}
              <div className="lightbox-image">
                <Image src={activeImage.src} alt={activeImage.alt} fill sizes="100vw" priority />
              </div>
              <p className="lightbox-caption">{activeImage.caption || activeImage.alt}</p>
              {images.length > 1 && <span className="lightbox-count">{String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
