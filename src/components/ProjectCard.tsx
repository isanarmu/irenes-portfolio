"use client";

import { Carousel } from "@once-ui-system/core";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  number?: number;
  images: string[];
  title: string;
  logo?: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  number,
  images = [],
  title,
  logo,
  content,
  description,
  link,
}) => (
  <article className={styles.project}>
    <div className={styles.heading}>
      <span className="eyebrow">
        {String(number ?? 1).padStart(2, "0")} /{" "}
        {title === "SocialPulse" ? "SaaS · Team contribution" : "Full stack · Web application"}
      </span>
      <h2>
        <a href={href}>
          <span className={styles.titleWithLogo}>
            {logo && (
              <img className={styles.projectLogo} src={logo} alt="" width={52} height={52} />
            )}
            <span>{title}</span>
          </span>
          <span aria-hidden="true">↗</span>
        </a>
      </h2>
    </div>
    {images.length > 0 && (
      <div className={styles.media}>
        <Carousel
          sizes="(max-width: 1120px) 100vw, 1120px"
          items={images.map((image) => ({ slide: image, alt: `${title} screenshot` }))}
        />
      </div>
    )}
    <div className={styles.details}>
      <p>{description}</p>
      <div className={styles.links}>
        {content.trim() && (
          <a href={href}>
            Read case study <span aria-hidden="true">↗</span>
          </a>
        )}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            Visit website <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </div>
  </article>
);
