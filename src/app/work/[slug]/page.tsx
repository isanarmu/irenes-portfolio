import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import {
  Meta,
  Schema,
  Button,
  Column,
  Heading,
  Media,
  Text,
} from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { ScrollToHash, CustomMDX } from "@/components";
import { Metadata } from "next";
import styles from "./project.module.scss";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "work", "projects"]);
  let post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${work.path}/${post.slug}`,
  });
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  let post = getPosts(["src", "app", "work", "projects"]).find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  const galleryImages = post.metadata.images || [];

  return (
    <Column as="section" maxWidth="l" horizontal="center" gap="24" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={
          post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
        }
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column maxWidth="m" gap="12" horizontal="center" align="center" paddingTop="24" paddingBottom="8">
        <Heading variant="display-strong-m">{post.metadata.title}</Heading>

        {post.metadata.summary && (
          <Text variant="body-default-l" onBackground="neutral-weak" align="center">
            {post.metadata.summary}
          </Text>
        )}
      </Column>

      {galleryImages.length > 0 && (
        <div className={styles.projectGallery}>
          {galleryImages.map((image, index) => (
            <div className={styles.gallerySlide} key={image}>
              <Media
                priority={index === 0}
                aspectRatio="16 / 9"
                radius="l"
                alt={`${post.metadata.title} screenshot ${index + 1}`}
                src={image}
              />
            </div>
          ))}
        </div>
      )}

      <Column as="article" maxWidth="m" fillWidth>
        <CustomMDX source={post.content} />
      </Column>

      <Column fillWidth horizontal="center" paddingTop="32" paddingBottom="40">
        <Button href="/work" variant="secondary" size="m">
          ← Back to Projects
        </Button>
      </Column>

      <ScrollToHash />
    </Column>
  );
}