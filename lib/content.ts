
export const site = {
  name: "Galaletsang Modise",
  title: "Galaletsang Modise | Fullstack developer",
  description: "Fullstack developer who thinks three moves ahead.",
  email: "galaletsangmodise71@gmail.com", 
  github: "https://github.com/galaletsangmodise", 
  linkedin: "https://www.linkedin.com/in/galaletsangmodise", 
};

export const hero = {
  eyebrow: "Mobile developer. Product thinker.",
  lines: ["Thinking", "three moves"],
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
  image?: string; 
  tone: string; 
};

export const projects: Project[] = [
  { title: "Pholo", tag: "Mobile app", href: "https://github.com/galaletsangmodise/PHOLO.git", image:"/images/pholo.jpg", tone: "from-[#d8c8ba] to-[#a89686]" },
  { title: "Career Coach", tag: "Web app", href: "https://github.com/galaletsangmodise/Career-Coach-App.git", image:"/images/coach.jpeg", tone: "from-[#cbb9aa] to-[#7d6a5c]" },
  { title: "Rooms&Rights", tag: "Web app", href: "https://github.com/galaletsangmodise/Rooms-Rights.git", image:"/images/rooms.png", tone: "from-[#6b3f2e] to-[#2a1b15]" },
  { title: "Light In The Abyss", tag: "Professional Website", href: "https://github.com/galaletsangmodise/light-in-the-abyss.git", image:"/images/light.jpeg", tone: "from-[#e3d6ca] to-[#b7a595]" },
];

export const footer = { line: "Let's build something remarkable together.", cta: "Get in touch" };
