import { person, social } from "@/resources";

export const Footer = () => (
  <footer className="portfolio-footer">
    <span>
      © {new Date().getFullYear()} {person.name}
    </span>
    <nav aria-label="Social links">
      {social
        .filter((item) => item.link)
        .map((item) => (
          <a key={item.name} href={item.link}>
            {item.name}
          </a>
        ))}
    </nav>
  </footer>
);
