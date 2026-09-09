import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type Metadata = {
  title: string;
  subtitle?: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  logo?: string;
  tag?: string;
  team: Team[];
  link?: string;
};

import { notFound } from "next/navigation";

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    notFound();
  }

  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  const metadata: Metadata = {
    title: data.title || "",
    subtitle: data.subtitle || "",
    publishedAt: data.publishedAt,
    summary: data.summary || "",
    image: data.image || "",
    images: data.images || [],
    logo: data.logo || "",
    tag: data.tag || [],
    team: data.team || [],
    link: data.link || "",
  };

  return { metadata, content };
}

const normalizeAssetName = (name: string) =>
  name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

function socialPulseImageRank(name: string): number {
  const key = normalizeAssetName(name);
  if (key.includes("hero")) return 0;
  if (key.includes("howitworks") || key.includes("howworks")) return 1;
  if (
    key.includes("whoisitfor") ||
    key.includes("whoitsfor") ||
    key.includes("whositfor") ||
    key.includes("whoisfor")
  )
    return 2;
  if (/(formulario|contactform|leadform|spform|^form)/.test(key)) return 3;
  if (key.includes("login")) return 4;
  if (key.includes("footer")) return 5;
  return 6;
}

/** Keep the brand mark separate from the screenshots and order the product journey. */
function getSocialPulseAssets(): { images: string[]; logo: string } {
  const projectsDirectory = path.join(process.cwd(), "public", "images", "projects");
  if (!fs.existsSync(projectsDirectory)) return { images: [], logo: "" };
  const folders = fs
    .readdirSync(projectsDirectory, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() && entry.name.replace(/\s+/g, "").toLowerCase() === "socialpulse",
    )
    .sort((a, b) => a.name.localeCompare(b.name, "en"));
  const folder = folders.find((entry) => entry.name === "Social PUlse") ?? folders[0];
  if (!folder) return { images: [], logo: "" };
  const files = fs
    .readdirSync(path.join(projectsDirectory, folder.name), { withFileTypes: true })
    .filter((entry) => entry.isFile() && /\.(png|jpe?g|webp|avif|gif|svg)$/i.test(entry.name))
    .sort((a, b) => a.name.localeCompare(b.name, "en", { numeric: true, sensitivity: "base" }));
  const isLogo = (name: string) => normalizeAssetName(name).includes("logo");
  const url = (name: string) =>
    `/images/projects/${encodeURIComponent(folder.name)}/${encodeURIComponent(name)}`;
  const logoFile = files.find((entry) => isLogo(entry.name));
  const images = files
    .filter((entry) => !isLogo(entry.name))
    .sort(
      (a, b) =>
        socialPulseImageRank(a.name) - socialPulseImageRank(b.name) ||
        a.name.localeCompare(b.name, "en", { numeric: true, sensitivity: "base" }),
    )
    .map((entry) => url(entry.name));
  return { images, logo: logoFile ? url(logoFile.name) : "" };
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    if (slug === "socialpulse") {
      const assets = getSocialPulseAssets();
      if (metadata.images.length === 0) metadata.images = assets.images;
      if (!metadata.logo) metadata.logo = assets.logo;
    }

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts(customPath = ["", "", "", ""]) {
  const postsDir = path.join(process.cwd(), ...customPath);
  return getMDXData(postsDir);
}
