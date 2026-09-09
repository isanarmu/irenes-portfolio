import { Meta, Schema, Icon } from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import { CertificateImage } from "@/components/about/CertificateImage";
import { SkillIcon } from "@/components/SkillIcon";
import { ScrollReveal } from "@/components/ScrollReveal";
import styles from "@/components/about/about.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}&v=irene-2`,
    path: about.path,
  });
}

export default function About() {
  return (
    <div className={`portfolio-page ${styles.aboutLayout}`}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}&v=irene-final`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <aside className={styles.sidebar}>
        <div className={styles.profile}>
          {about.avatar.display && (
            <img
              src={person.avatar}
              alt={person.name}
              width={192}
              height={192}
              className={styles.portrait}
              fetchPriority="high"
            />
          )}
          <p className={styles.location}>
            <Icon name="globe" size="s" /> Madrid, Spain
          </p>
          <div className={styles.languages}>
            <span>English</span>
            <span>Spanish</span>
            <span>French</span>
          </div>
        </div>
        {about.tableOfContent.display && (
          <nav className={styles.sectionNav} aria-label="On this page">
            {[about.intro, about.work, about.technical, about.studies]
              .filter((section) => section.display)
              .map((section) => (
                <a key={section.title} href={`#${section.title}`}>
                  {section.title}
                </a>
              ))}
          </nav>
        )}
      </aside>
      <div className={styles.content}>
        <section className={styles.hero} aria-labelledby="intro-heading" id={about.intro.title}>
          {about.calendar.display && (
            <a className={styles.contactPill} href={about.calendar.link}>
              <Icon name="email" size="s" />
              <span>Let’s work together</span>
              <span aria-hidden="true">›</span>
            </a>
          )}
          <h1 id="intro-heading" className={styles.name}>
            {person.name}
          </h1>
          <p className={styles.roleTitle}>{person.role}</p>
          <div className={styles.socialLinks}>
            {social
              .filter((item) => item.essential && item.link)
              .map((item) => (
                <a href={item.link} key={item.name}>
                  <Icon name={item.icon} size="s" />
                  {item.name}
                </a>
              ))}
          </div>
          {about.intro.display && <p className={styles.intro}>{about.intro.description}</p>}
          <a className={styles.textLink} href="/work">
            Explore my projects <span aria-hidden="true">↗</span>
          </a>
        </section>
        {about.work.display && (
          <ScrollReveal>
            <section
              className={styles.section}
              id={about.work.title}
              aria-labelledby="experience-heading"
            >
              <h2 id="experience-heading">Work Experience</h2>
              {about.work.experiences.map((experience) => (
                <article className={styles.entry} key={experience.company}>
                  <div className={styles.entryHeading}>
                    <h3>{experience.company}</h3>
                    <p className={styles.meta}>{experience.timeframe}</p>
                  </div>
                  <p className={styles.role}>{experience.role}</p>
                  <ul className={styles.achievements}>
                    {experience.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                  {experience.company === "SOCIALPULSE" && (
                    <a className={styles.textLink} href="/work/socialpulse">
                      See my contribution to SocialPulse ↗
                    </a>
                  )}
                </article>
              ))}
            </section>
          </ScrollReveal>
        )}
        {about.technical.display && (
          <ScrollReveal>
            <section
              className={styles.section}
              id={about.technical.title}
              aria-labelledby="skills-heading"
            >
              <h2 id="skills-heading">Technical Skills</h2>
              {about.technical.skills.map((skill) => (
                <div className={styles.skillRow} key={skill.title}>
                  <h3>{skill.title}</h3>
                  <ul className={styles.tags}>
                    {skill.tags?.map((tag) => (
                      <li key={tag.name} tabIndex={0}>
                        <SkillIcon name={tag.name} />
                        <span>{tag.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </ScrollReveal>
        )}
        {about.studies.display && (
          <ScrollReveal>
            <section
              className={styles.section}
              id={about.studies.title}
              aria-labelledby="studies-heading"
            >
              <h2 id="studies-heading">Studies</h2>
              {about.studies.institutions.map((institution) => (
                <article className={styles.entry} key={institution.name}>
                  <h3>{institution.name}</h3>
                  <p className={styles.studyDescription}>{institution.description}</p>
                  {institution.images && (
                    <div className={styles.certificates}>
                      {institution.images.map((image) => (
                        <CertificateImage key={image.src} src={image.src} alt={image.alt} />
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </section>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
}
