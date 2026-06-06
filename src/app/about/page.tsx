import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
  RevealFx,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },

  ];
  const skillIcons: Record<string, { src: string }> = {
    HTML: {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    CSS: {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    JavaScript: {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    React: {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    Bootstrap: {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    Python: {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    Flask: {
      src: "https://img.shields.io/badge/Flask-4B5563?style=flat-square&logo=flask&logoColor=white",
    },
    JWT: {
      src: "https://abhishekganvir.vercel.app/json.png",
    },
    PostgreSQL: {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    SQL: {
      src: "https://symbols.getvecta.com/stencil_27/79_sql-database-generic.494ff6320e.png",
    },
    SQLAlchemy: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/SQLAlchemy.svg/960px-SQLAlchemy.svg.png",
    },
    Git: {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    GitHub: {
      src: "https://freepnglogo.com/images/all_img/github-logo-white-stroke-2a6c.png",
    },
    "VS Code": {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    Postman: {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    },
    "Google Maps API": {
      src: "https://img.shields.io/badge/Google_Maps_API-2563EB?style=flat-square&logo=googlemaps&logoColor=white",
    },
  };
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <RevealFx translateY="8" fillWidth>
        <Row fillWidth s={{ direction: "column" }} horizontal="center">
          {about.avatar.display && (
            <Column
              className={styles.avatar}
              top="64"
              fitHeight
              position="sticky"
              s={{ position: "relative", style: { top: "auto" } }}
              xs={{ style: { top: "auto" } }}
              minWidth="160"
              paddingX="l"
              paddingBottom="xl"
              gap="m"
              flex={3}
              horizontal="center"
            >
              <div className={styles.profileCard}>
                <div className={styles.profileImageWrap}>
                  <img
                    src={person.avatar}
                    alt={person.name}
                    className={styles.profileImage}
                  />
                </div>

                <div className={styles.profileInfo}>
                  <p className={styles.profileLocation}>
                    <span className={styles.locationLoader} aria-hidden="true"></span>
                    Madrid/Spain
                  </p>

                  <div className={styles.profileLanguages}>
                    <p className={styles.profileSectionTitle}>Languages</p>
                    <p>English</p>
                    <p>Spanish</p>
                    <p>French</p>
                  </div>
                </div>
              </div>
            </Column>
          )}
          <Column className={styles.blockAlign} flex={9} maxWidth={40}>
            <Column
              id={about.intro.title}
              fillWidth
              minHeight="160"
              vertical="center"
              marginBottom="32"
            >
              {about.calendar.display && (
                <Row
                  fitWidth
                  radius="full"
                  padding="4"
                  gap="8"
                  marginBottom="m"
                  vertical="center"
                  className={`${styles.blockAlign} ${styles.emailPill}`}
                >
                  <Icon
                    paddingLeft="12"
                    name="calendar"
                    className={styles.emailPillIcon}
                  />

                  <Row paddingX="8" className={styles.emailPillText}>
                    Send me an email
                  </Row>

                  <IconButton
                    href={about.calendar.link}
                    data-border="rounded"
                    variant="secondary"
                    icon="email"
                    className={styles.emailPillButton}
                  />
                </Row>
              )}
              <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="8">
                <Heading className={styles.textAlign} variant="display-strong-xl">
                  {person.name}
                </Heading>
              </RevealFx>
              <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="8">
                <Text
                  className={styles.textAlign}
                  variant="display-default-xs"
                  onBackground="neutral-weak"
                >
                  {person.role}
                </Text>
              </RevealFx>
              {social.length > 0 && (
                <RevealFx delay={0.4} fillWidth horizontal="center" paddingTop="20" paddingBottom="8">
                  <Row
                    className={styles.blockAlign}
                    paddingTop="20"
                    paddingBottom="8"
                    gap="8"
                    wrap
                    horizontal="center"
                    fitWidth
                    data-border="rounded"
                  >
                    {social
                      .filter((item) => item.essential)
                      .map(
                        (item) =>
                          item.link && (
                            <React.Fragment key={item.name}>
                              <Row s={{ hide: true }}>
                                <Button
                                  key={item.name}
                                  href={item.link}
                                  prefixIcon={item.icon}
                                  label={item.name}
                                  size="s"
                                  weight="default"
                                  variant="secondary"
                                />
                              </Row>
                              <Row hide s={{ hide: false }}>
                                <IconButton
                                  size="l"
                                  key={`${item.name}-icon`}
                                  href={item.link}
                                  icon={item.icon}
                                  variant="secondary"
                                />
                              </Row>
                            </React.Fragment>
                          ),
                      )}
                  </Row>
                </RevealFx>
              )}
            </Column>

            {about.intro.display && (
              <RevealFx translateY="8" delay={0.2} fillWidth>
                <Column
                  textVariant="body-default-l"
                  fillWidth
                  gap="m"
                  marginBottom="m"
                  style={{ textAlign: "justify" }}
                >
                  {about.intro.description}
                </Column>
              </RevealFx>
            )}

            {about.technical.display && (
              <Column fillWidth gap="8" paddingTop="m" marginBottom="xl">
                <RevealFx translateY="8" fillWidth>
                  <Heading as="h2" id={about.technical.title} variant="display-strong-s" marginBottom="m">
                    {about.technical.title}
                  </Heading>
                </RevealFx>

                <Row wrap gap="16" className={styles.skillCategories}>
                  {about.technical.skills.map((skill, index) => (
                    <div key={`${skill.title}-${index}`} className={styles.skillCategory}>
                      <span className={styles.skillGlass}></span>

                      <div className={styles.skillCategoryContent}>
                        <Text variant="heading-strong-s" marginBottom="4">
                          {skill.title}
                        </Text>

                        <Text variant="body-default-s" onBackground="neutral-weak">
                          {skill.description}
                        </Text>

                        <Row wrap gap="12" className={styles.skillIcons}>
                          {skill.tags?.map((tag, tagIndex) => (
                            <Column key={`${skill.title}-${tagIndex}`} className={styles.skillIcon} gap="8">
                              {skillIcons[tag.name] ? (
                                <img
                                  src={skillIcons[tag.name].src}
                                  alt={`${tag.name} icon`}
                                  className={styles.skillIconImage}
                                />
                              ) : null}

                              <Text variant="body-default-s" as="span">
                                {tag.name}
                              </Text>
                            </Column>
                          ))}
                        </Row>
                      </div>
                    </div>
                  ))}
                </Row>
              </Column>
            )}

            {about.work.display && (
              <>
                <RevealFx translateY="8" fillWidth>
                  <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                    {about.work.title}
                  </Heading>
                </RevealFx>

                <Column fillWidth gap="20" marginBottom="40" className={styles.timelineList}>
                  {about.work.experiences.map((experience, index) => (
                    <div key={`${experience.company}-${experience.role}-${index}`} className={styles.timelineItem}>
                      <div className={styles.timelineMarker} aria-hidden="true"></div>

                      <Column fillWidth gap="12" className={styles.experiencePanel}>
                        <Row fillWidth horizontal="between" vertical="start" gap="16" wrap>
                          <Column gap="4">
                            <Text id={experience.company} variant="heading-strong-l">
                              {experience.company}
                            </Text>
                            <Text variant="body-default-s" className={styles.gradientText}>
                              {experience.role}
                            </Text>
                          </Column>

                          <Text variant="label-default-s" className={styles.datePill}>
                            {experience.timeframe}
                          </Text>
                        </Row>

                        <Column as="ul" gap="10" className={styles.cleanList}>
                          {experience.achievements.map((achievement: React.ReactNode, index: number) => (
                            <Text as="li" variant="body-default-m" key={`${experience.company}-${index}`}>
                              {achievement}
                            </Text>
                          ))}
                        </Column>

                        {experience.images && experience.images.length > 0 && (
                          <Row fillWidth paddingTop="m" gap="12" wrap>
                            {experience.images.map((image, index) => (
                              <Row
                                key={index}
                                border="neutral-medium"
                                radius="m"
                                minWidth={image.width}
                                height={image.height}
                              >
                                <Media
                                  enlarge
                                  radius="m"
                                  sizes={image.width.toString()}
                                  alt={image.alt}
                                  src={image.src}
                                />
                              </Row>
                            ))}
                          </Row>
                        )}
                      </Column>
                    </div>
                  ))}
                </Column>
              </>
            )}

            {about.studies.display && (
              <>
                <RevealFx translateY="8" fillWidth>
                  <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                    {about.studies.title}
                  </Heading>
                </RevealFx>

                <Column fillWidth gap="20" marginBottom="40" className={styles.timelineList}>
                  {about.studies.institutions.map((institution, index) => (
                    <div key={`${institution.name}-${index}`} className={styles.timelineItem}>
                      <div className={styles.timelineMarker} aria-hidden="true"></div>

                      <Column fillWidth gap="12" className={styles.studyPanel}>
                        <Row fillWidth horizontal="between" vertical="start" gap="16" wrap>
                          <Column gap="6">
                            <Text id={institution.name} variant="heading-strong-l">
                              {institution.name}
                            </Text>
                            <Text variant="body-default-m" onBackground="neutral-weak">
                              {institution.description}
                            </Text>
                          </Column>

                          <span className={styles.studyBadge}>
                            {index === 0
                              ? "Bootcamp"
                              : index === 1
                                ? "Certification"
                                : index === 2
                                  ? "Currently learning"
                                  : "Background"}
                          </span>
                        </Row>

                        {institution.images && institution.images.length > 0 && (
                          <div className={styles.studyImagesCompact}>
                            {institution.images.map((image, imageIndex) => (
                              <div key={`${institution.name}-image-${imageIndex}`} className={styles.studyImageThumb}>
                                <Media
                                  enlarge
                                  radius="m"
                                  aspectRatio="16 / 9"
                                  objectFit="contain"
                                  sizes={image.width.toString()}
                                  alt={image.alt}
                                  src={image.src}
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </Column>
                    </div>
                  ))}
                </Column>
              </>
            )}

          </Column>
        </Row>
      </RevealFx>
    </Column>
  );
}