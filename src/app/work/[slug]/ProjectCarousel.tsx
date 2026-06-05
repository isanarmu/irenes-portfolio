"use client";

import { useRef } from "react";
import { Media } from "@once-ui-system/core";
import styles from "./project.module.scss";

type ProjectCarouselProps = {
  images: string[];
  title: string;
};

export default function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;

    const slideWidth = track.clientWidth * 0.9;

    track.scrollBy({
      left: direction === "right" ? slideWidth : -slideWidth,
      behavior: "smooth",
    });
  };

  if (!images.length) return null;

  return (
    <div className={styles.carouselWrapper}>
      <button
        type="button"
        className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}
        onClick={() => scroll("left")}
        aria-label="Previous screenshot"
      >
        ‹
      </button>

      <div className={styles.projectGallery} ref={trackRef}>
        {images.map((image, index) => (
          <div className={styles.gallerySlide} key={image}>
            <Media
              priority={index === 0}
              aspectRatio="16 / 9"
              radius="l"
              alt={`${title} screenshot ${index + 1}`}
              src={image}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
        onClick={() => scroll("right")}
        aria-label="Next screenshot"
      >
        ›
      </button>
    </div>
  );
}