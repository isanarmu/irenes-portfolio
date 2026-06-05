"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  {
    label: "Contact",
    href: "mailto:irene.armu99@gmail.com?subject=Contacto%20desde%20portfolio",
  },
];

export const Header = () => {
  const pathname = usePathname() ?? "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/about") return pathname.startsWith("/about");
    if (href === "/work") return pathname.startsWith("/work");
    return false;
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a href="/" className={styles.brand}>
          Irene Sánchez
        </a>

        <nav className={styles.desktopNav}>
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`${styles.navLink} ${isActiveLink(href) ? styles.active : ""}`}
            >
              <span className={styles.navText}>{label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};