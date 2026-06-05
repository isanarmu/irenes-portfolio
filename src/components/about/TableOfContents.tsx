"use client";

import React from "react";
import styles from "./about.module.scss";

interface TableOfContentsProps {
  structure: {
    title: string;
    display: boolean;
    items: string[];
  }[];
  about: {
    tableOfContent: {
      display: boolean;
      subItems: boolean;
    };
  };
}

const fileNames: Record<string, string> = {
  Introduction: "Introduction.txt",
  "Work Experience": "Work Experience.txt",
  Studies: "Studies.txt",
  "Technical Skills": "Technical Skills.txt",
};

const TableOfContents: React.FC<TableOfContentsProps> = ({ structure, about }) => {
  const scrollTo = (id: string, offset: number) => {
    const element = document.getElementById(id);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (!about.tableOfContent.display) return null;

  const visibleSections = structure.filter((section) => section.display);

  return (
    <nav className={styles.fileTree} aria-label="About page navigation">
      <ul>
        <li className={styles.treeItem}>
          <div className={styles.treeLabel}>
            <span className={styles.folderIcon}>▾</span>
            <span>Irene Portfolio</span>
          </div>

          <ul>
            <li className={styles.treeItem}>
              <div className={styles.treeLabel}>
                <span className={styles.folderIcon}>▾</span>
                <span>About</span>
              </div>

              <ul>
                {visibleSections.map((section) => (
                  <li className={styles.treeItem} key={section.title}>
                    <button
                      type="button"
                      className={styles.fileItem}
                      onClick={() => scrollTo(section.title, 96)}
                    >
                      <span className={styles.fileIcon}>◻</span>
                      <span>{fileNames[section.title] ?? `${section.title}.txt`}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default TableOfContents;