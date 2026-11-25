// Edit everything here. Replace the TODO values with your own.
export const site = {
  name: "Leago",
  title: "Leago | Mobile developer",
  description: "Mobile developer who thinks three moves ahead.",
  email: "hello@example.com", // TODO
  github: "https://github.com/your-username", // TODO
  linkedin: "https://www.linkedin.com/in/your-username", // TODO
};

export const hero = {
  eyebrow: "Mobile developer. Product thinker.",
  lines: ["I think", "three moves"],
  italic: "ahead.",
  cta: "See my work",
};

export const about = {
  label: "About me",
  heading: ["Developer.", "Builder.", "Problem-solver."],
  body: "I build mobile apps with intention, pairing clean code with product thinking to make things people actually use.",
  cta: "Learn more",
};

export const steps = [
  { title: "Observe", text: "I study the problem." },
  { title: "Think", text: "I weigh the options." },
  { title: "Create", text: "I ship it." },
];

export type Project = {
  title: string;
  tag: string;
  href: string;
  image?: string; // e.g. "/images/project-one.png" (drop the file in /public/images)
  tone: string; // placeholder gradient until you add an image
};

export const projects: Project[] = [
  { title: "Project one", tag: "Mobile app", href: "#", tone: "from-[#d8c8ba] to-[#a89686]" },
  { title: "Project two", tag: "Web app", href: "#", tone: "from-[#cbb9aa] to-[#7d6a5c]" },
  { title: "Project three", tag: "Design system", href: "#", tone: "from-[#6b3f2e] to-[#2a1b15]" },
  { title: "Project four", tag: "Open source", href: "#", tone: "from-[#e3d6ca] to-[#b7a595]" },
];

export const footer = { line: "Let's build something remarkable together.", cta: "Get in touch" };
