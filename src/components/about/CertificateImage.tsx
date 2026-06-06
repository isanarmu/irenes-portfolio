"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./about.module.scss";

type CertificateImageProps = {
  src: string;
  alt: string;
};

export function CertificateImage({ src, alt }: CertificateImageProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={styles.certificateThumb}
        onClick={() => setOpen(true)}
        aria-label={`Open ${alt}`}
      >
        <img src={src} alt={alt} />
      </button>

      {mounted &&
        open &&
        createPortal(
          <div className={styles.certificateLightbox} onClick={() => setOpen(false)}>
            <button
              type="button"
              className={styles.certificateClose}
              onClick={() => setOpen(false)}
              aria-label="Close certificate"
            >
              ×
            </button>

            <img
              src={src}
              alt={alt}
              className={styles.certificateFullImage}
              onClick={(event) => event.stopPropagation()}
            />
          </div>,
          document.body,
        )}
    </>
  );
}