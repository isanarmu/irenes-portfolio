import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiPython,
  SiFlask,
  SiJsonwebtokens,
  SiSocketdotio,
  SiPostgresql,
  SiSqlalchemy,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVercel,
  SiResend,
  SiPostman,
  SiGooglemaps,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { HiOutlineCircleStack, HiOutlineCodeBracket } from "react-icons/hi2";

const skillIcons: Record<string, { icon: IconType; color: string }> = {
  React: { icon: SiReact, color: "#61dafb" },
  "Next.js": { icon: SiNextdotjs, color: "var(--portfolio-text)" },
  TypeScript: { icon: SiTypescript, color: "#539bdf" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38bdf8" },
  JavaScript: { icon: SiJavascript, color: "#f7df1e" },
  HTML: { icon: SiHtml5, color: "#ef683d" },
  CSS: { icon: SiCss3, color: "#429cdf" },
  Bootstrap: { icon: SiBootstrap, color: "#b08afa" },
  Python: { icon: SiPython, color: "#68a7d5" },
  Flask: { icon: SiFlask, color: "var(--portfolio-text)" },
  "REST APIs": { icon: HiOutlineCodeBracket, color: "#80cedd" },
  JWT: { icon: SiJsonwebtokens, color: "#ec72c2" },
  "Socket.IO": { icon: SiSocketdotio, color: "var(--portfolio-text)" },
  PostgreSQL: { icon: SiPostgresql, color: "#79afd1" },
  SQL: { icon: HiOutlineCircleStack, color: "#79afd1" },
  SQLAlchemy: { icon: SiSqlalchemy, color: "#de7676" },
  "Firebase / Firestore": { icon: SiFirebase, color: "#ffca28" },
  Git: { icon: SiGit, color: "#f57356" },
  GitHub: { icon: SiGithub, color: "var(--portfolio-text)" },
  Vercel: { icon: SiVercel, color: "var(--portfolio-text)" },
  Resend: { icon: SiResend, color: "var(--portfolio-text)" },
  "VS Code": { icon: VscVscode, color: "#42a7ed" },
  Postman: { icon: SiPostman, color: "#ff8a64" },
  "Google Maps API": { icon: SiGooglemaps, color: "#65c790" },
};

export function SkillIcon({ name }: { name: string }) {
  const skill = skillIcons[name];
  if (!skill) return null;
  const Logo = skill.icon;
  return (
    <Logo
      aria-hidden="true"
      focusable="false"
      size={32}
      style={{
        color: `var(--skill-icon-color, ${skill.color})`,
        flexShrink: 0,
        transition: "color .2s",
      }}
    />
  );
}
