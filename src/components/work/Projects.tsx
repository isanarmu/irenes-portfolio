import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
}

export function Projects({ range, exclude }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  // Keep the requested editorial order independent of publication dates.
  const featuredOrder = ["trasteando", "socialpulse"];
  const sortedProjects = allProjects.sort((a, b) => {
    const aRank = featuredOrder.indexOf(a.slug);
    const bRank = featuredOrder.indexOf(b.slug);
    const rankDifference = (aRank < 0 ? Infinity : aRank) - (bRank < 0 ? Infinity : bRank);
    if (aRank !== bRank) return rankDifference;
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          number={index + 1}
          key={post.slug}
          href={`/work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          logo={post.metadata.logo}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
        />
      ))}
    </Column>
  );
}
