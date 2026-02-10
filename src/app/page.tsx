import { Gamepad2, Layers3, Sparkles } from "lucide-react";

import ParallaxGlow from "@/components/parallax-glow";
import ScrollProgress from "@/components/scroll-progress";
import ScrollSection from "@/components/scroll-section";
import TiltCard from "@/components/tilt-card";

const highlights = [
  {
    title: "Deepfake Defense",
    description:
      "Built audio and image deepfake detection using C2PA, AudioSeal, and adversarial ML techniques.",
  },
  {
    title: "AI Content Integrity",
    description:
      "Implemented provenance verification, watermarking, and similarity search for enterprise media workflows.",
  },
  {
    title: "Full-Stack ML Systems",
    description:
      "Delivered FastAPI services, mobile apps, and Streamlit tools for end-to-end AI solutions.",
  },
] as const;

const experience = [
  {
    role: "Lead AI Engineer",
    company: "ContentLens",
    location: "Bengaluru, Karnataka, India · Hybrid",
    period: "Feb 2024 — Present",
    bullets: [
      "Implemented Audio Deepfake Detection using C2PA, audio watermarking, and AudioSeal for forgery detection.",
      "Developed Face Recognition and Image Deepfake Detection using imperceptible watermarking and adversarial ML techniques.",
      "Used CLIP, BLIP, and vector embeddings to detect AI-generated and poisoned content.",
      "Built iOS/Android apps for C2PA signatures and content provenance verification.",
      "Developed enterprise-grade FastAPI services for image, video, and audio watermarking.",
      "Engineered a Streamlit media analysis suite for credentials and AIGC detection.",
    ],
  },
] as const;

const projects = [
  {
    title: "AI Board Game — Hearts",
    period: "Apr 2023 — Sep 2023",
    description:
      "Implemented a custom heuristic AI in Java with the TAG framework, achieving a 90% win rate.",
    details: [
      "Implemented a custom heuristic to develop an AI with a 90% win rate.",
      "Designed a playable version of Hearts using Java and the TAG framework.",
    ],
    stack: ["Java", "TAG Framework", "Game AI"],
    link: "https://github.com/dr1zzy18/hearts",
    icon: Gamepad2,
  },
  {
    title: "Deep Learning Model Comparisons",
    period: "Mar 2023 — May 2023",
    description:
      "Benchmarked VGG, ResNet, and GoogLeNet on MNIST/CIFAR datasets with detailed metrics and logs.",
    details: [
      "Implemented VGG, ResNet, and GoogLeNet on MNIST, CIFAR-10, and CIFAR-100 to compare accuracy, precision, recall, and F1.",
      "Ran TensorFlow/Keras experiments with detailed logs and visual outputs to compare model efficiency.",
    ],
    stack: ["TensorFlow", "Keras", "VGG", "ResNet"],
    link: "https://github.com/dr1zzy18/Deep-Learning-Model-Comparisons-on-Image-Datasets",
    icon: Layers3,
  },
  {
    title: "GANs for Image Creation",
    period: "Jan 2023 — Mar 2023",
    description:
      "Built GAN pipelines in Python to generate realistic images from training datasets.",
    details: [
      "Created a GAN to generate new images from training sets, exploring realistic image synthesis.",
      "Trained the model in Python/TensorFlow to achieve high-fidelity generated outputs.",
    ],
    stack: ["Python", "TensorFlow", "GANs"],
    link: "https://github.com/dr1zzy18/Generative-Adversarial-Network",
    icon: Sparkles,
  },
] as const;

const skillGroups = [
  {
    title: "AI & Machine Learning",
    items: [
      "Computer Vision",
      "Deep Learning",
      "Applied ML",
      "Stable Diffusion",
      "HuggingFace",
      "Scikit-Learn",
      "NumPy",
    ],
  },
  {
    title: "Engineering & Platforms",
    items: [
      "FastAPI",
      "Flask",
      "AWS",
      "Google Cloud",
      "Firebase",
      "DBMS",
      "Agile/Scrum",
    ],
  },
  {
    title: "Languages & Tools",
    items: [
      "Python",
      "JavaScript",
      "React",
      "Java",
      "SQL",
      "GitHub",
      "TensorFlow",
      "Keras",
    ],
  },
] as const;

const education = [
  {
    title: "MSc in Artificial Intelligence",
    institution: "Queen Mary University of London",
    period: "Sep 2023",
    location: "London, England",
  },
  {
    title: "Bachelor of Computer Applications",
    institution: "St Josephs College Arts Science",
    period: "2022",
    location: "Bengaluru, Karnataka",
  },
] as const;

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <ParallaxGlow />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,124,255,0.12),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(11,13,18,0.2),_rgba(11,13,18,1))]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex flex-col">
            <span className="font-display text-lg font-semibold">
              Daksh Ramesh Chawla
            </span>
            <span className="text-sm text-muted">AI Engineer</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
            {[
              "about",
              "experience",
              "projects",
              "skills",
              "education",
              "contact",
            ].map((item) => (
              <a
                key={item}
                className="transition hover:text-foreground hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                href={`#${item}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>
          <a
            className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            href="mailto:daksh.chawla97@gmail.com"
          >
            Let’s Connect
          </a>
        </div>
      </header>

      <main className="relative">
        <ScrollSection id="about" className="border-b border-border/70">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-6 animate-fade-up motion-reduce:animate-none">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                AI Engineer · Software Developer
              </p>
              <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
                Building trusted AI systems for content integrity and computer
                vision.
              </h1>
              <p className="text-lg text-muted">
                MSc Artificial Intelligence graduate from Queen Mary University
                of London. I design deepfake defense pipelines, provenance
                verification, and full-stack ML platforms with real-world
                deployment in mind.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:-translate-y-0.5 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-2"
                  href="#projects"
                >
                  View Projects
                  <span className="transition group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
                <a
                  className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  href="#contact"
                >
                  Contact
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-muted">
                <span>📍 Bengaluru, India</span>
                <span>📧 daksh.chawla97@gmail.com</span>
                <span>📞 +91 9620866691</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-muted">
                <span className="h-5 w-5 animate-bounce rounded-full border border-border bg-surface/80" />
                Keep scrolling
              </div>
            </div>
            <div className="relative space-y-8 animate-fade-up animate-delay-150 motion-reduce:animate-none">
              <div className="absolute -left-8 top-4 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
              <div className="absolute right-0 top-32 h-56 w-56 rounded-full bg-accent-2/20 blur-3xl" />
              <TiltCard cardClassName="p-8">
                <p className="font-display text-lg font-semibold">
                  Recent Focus
                </p>
                <p className="mt-3 text-sm text-muted">
                  Leading AI engineering for detection, watermarking, and
                  provenance systems across audio, image, and video media.
                </p>
                <div className="mt-6 grid gap-4">
                  {highlights.map((item) => (
                    <TiltCard
                      key={item.title}
                      cardClassName="rounded-2xl border-border/70 bg-background/60 p-4 shadow-none"
                    >
                      <p className="font-display text-sm font-semibold">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm text-muted">
                        {item.description}
                      </p>
                    </TiltCard>
                  ))}
                </div>
              </TiltCard>
            </div>
          </div>
        </ScrollSection>

        <ScrollSection id="experience" className="border-b border-border/70">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Experience
              </p>
              <h2 className="font-display text-3xl font-semibold">
                Building real-world AI products
              </h2>
            </div>
            <div className="mt-10 space-y-8">
              {experience.map((role) => (
                <TiltCard key={role.role} cardClassName="p-8">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="font-display text-xl font-semibold">
                        {role.role}
                      </p>
                      <p className="text-sm text-muted">
                        {role.company} · {role.location}
                      </p>
                    </div>
                    <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted transition group-hover:border-accent/60 group-hover:text-foreground">
                      {role.period}
                    </span>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm text-muted">
                    {role.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 flex-none rounded-full bg-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              ))}
            </div>
          </div>
        </ScrollSection>

        <ScrollSection id="projects" className="border-b border-border/70">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Projects
              </p>
              <h2 className="font-display text-3xl font-semibold">
                Selected academic work
              </h2>
              <p className="max-w-2xl text-sm text-muted">
                Orbiting headlines hint at the work; click any project name to
                open a focused modal with the full story.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <TiltCard key={project.title} cardClassName="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
                      {project.period}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/70 text-accent">
                      <project.icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted">
                    {project.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {project.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <a
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-accent/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub
                    <span aria-hidden>↗</span>
                  </a>
                </TiltCard>
              ))}
            </div>
          </div>
        </ScrollSection>

        <ScrollSection id="skills" className="border-b border-border/70">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Skills
              </p>
              <h2 className="font-display text-3xl font-semibold">
                Tools and technologies
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {skillGroups.map((group) => (
                <TiltCard key={group.title} cardClassName="p-6">
                  <p className="font-display text-lg font-semibold">
                    {group.title}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted transition group-hover:border-accent/60 group-hover:text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </ScrollSection>

        <ScrollSection id="education" className="border-b border-border/70">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Education
              </p>
              <h2 className="font-display text-3xl font-semibold">
                Academic background
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {education.map((item) => (
                <TiltCard key={item.title} cardClassName="p-6">
                  <p className="font-display text-xl font-semibold">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    {item.institution} · {item.location}
                  </p>
                  <span className="mt-4 inline-flex rounded-full border border-border px-3 py-1 text-xs font-medium text-muted transition group-hover:border-accent/60 group-hover:text-foreground">
                    {item.period}
                  </span>
                </TiltCard>
              ))}
            </div>
          </div>
        </ScrollSection>

        <ScrollSection id="contact">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <div className="rounded-3xl border border-border bg-surface/80 p-10 shadow-[0_20px_60px_rgba(15,23,42,0.35)] backdrop-blur md:p-12">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                    Contact
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold">
                    Let’s build trusted AI together
                  </h2>
                  <p className="mt-3 text-sm text-muted">
                    Open to AI engineering roles, research collaborations, and
                    impactful product work.
                  </p>
                </div>
                <div className="flex flex-col gap-3 text-sm text-muted">
                  <a
                    className="text-foreground transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    href="mailto:daksh.chawla97@gmail.com"
                  >
                    daksh.chawla97@gmail.com
                  </a>
                  <a
                    className="text-foreground transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    href="tel:+919620866691"
                  >
                    +91 9620866691
                  </a>
                  <a
                    className="text-foreground transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    href="https://www.linkedin.com/in/dakshchawla18"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/dakshchawla18
                  </a>
                  <a
                    className="text-foreground transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    href="https://github.com/dr1zzy18"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/dr1zzy18
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollSection>
      </main>

      <footer className="border-t border-border/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <span>© 2026 Daksh Ramesh Chawla</span>
          <span className="font-mono text-xs">Built with Next.js</span>
        </div>
      </footer>
    </div>
  );
}
