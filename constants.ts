import { ExperienceItem, EducationItem, ProfileData, LinkItem } from "./types";

export const PROFILE: ProfileData = {
  name: "FAYSHAL KARAN ATHILLA",
  title: "UNITY GAME DEVELOPER",
  location: "Malang, Indonesia",
  email: "fayshalathilla@gmail.com",
  phone: "081232505308",
  linkedin: "https://www.linkedin.com/in/fayshalkaran/", // Placeholder as per text
  image: "https://files.catbox.moe/lxgkyw.JPG",
  summary:
    "Information Technology student at UNIDA Gontor, focusing on game development, with experience in grant research, OOP/Unity lab assistance, and study club mentoring. Integrates game design, 3D art, UI/UX, and data analysis to build playable 3D educational prototypes and structured learning flows; familiar with Unity and Git/GitHub. Creative, collaborative, and a fast learner, ready to contribute to a development team.",
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "Lecturer Research Assistant",
    company: "UNIDA Gontor (Ministry of Education Grant)",
    location: "Ponorogo",
    period: "June – November 2025",
    description: [
      "Designed the technical concept for a 3D English language educational game for fifth-grade students at an Islamic elementary school (SDIT), focusing on a structured and child-friendly learning flow.",
      "Developed evaluation features and an adventure mode that integrates learning materials into gameplay.",
      "Designed an intuitive and consistent user interface (UI) to support navigation and learning motivation.",
    ],
  },
  {
    title: "Practical Assistant (OOP & Game Programming)",
    company: "IT UNIDA Gontor",
    location: "Ponorogo",
    period: "June 2025 – January 2026",
    description: [
      "Developed practical materials in line with the curriculum and the lecturer's instructions (OOP, Git/GitHub, Unity 6).",
      "Guided students during practicals: using GitHub, initializing and structuring projects in Unity, and practicing debugging.",
      "Provided intensive guidance in completing final course assignments until they were ready for presentation.",
      "Developed assessment rubrics and provided structured feedback to improve the quality of student projects.",
    ],
  },
  {
    title: "Game Developer Mentor",
    company: "UNIDA Gontor IT Study Club",
    location: "Ponorogo",
    period: "June 2025 – Present",
    description: [
      "Mentored study club members in game development (programming, art, and game design) through intensive coaching.",
      "Organized project-based learning sessions and hands-on practice to produce playable prototypes.",
      "Motivated and prepared teams to participate in game development events or competitions.",
    ],
  },
  {
    title: "Participant (Project Leader)",
    company: "GameJam+ 2025",
    location: "Online Via Discord",
    period: "Nov 2025",
    description: [
      "Collaborated within a game development team and acted as project leader to produce a playable prototype within 48 hours.",
      "Contributed to the creation of game design documents, game mechanics, and game programming.",
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Darussalam Gontor Modern Islamic Boarding School",
    location: "Ponorogo",
    period: "April 2017 – April 2023",
  },
  {
    institution: "Darussalam Gontor University",
    location: "Ponorogo",
    period: "May 2023 – Present",
    degree: "Information Technology Student",
  },
];

export const SKILL_STATS = [
  { subject: "Unity", A: 95, fullMark: 100 },
  { subject: "Game Design", A: 85, fullMark: 100 },
  { subject: "UI/UX", A: 80, fullMark: 100 },
  { subject: "Data Analysis", A: 75, fullMark: 100 },
  { subject: "Leadership", A: 90, fullMark: 100 },
  { subject: "3D Art/AR", A: 70, fullMark: 100 },
];

export const TECHNICAL_SKILLS_LIST = [
  "Game Designer",
  "Augmented Reality",
  "Graphic Designer",
  "Secretariat",
  "UI Wireframe Prototype",
  "Data Analyst",
  "Audio & Visual FOH",
  "Team Leadership",
];

export const SOCIAL_LINKS: LinkItem[] = [
  { platform: "GitHub", url: "https://github.com/Fayshal697" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/fayshalkaran/" },
  { platform: "Instagram", url: "https://www.instagram.com/fayshalkaran/" },
  { platform: "Itch.io", url: "https://k-a-r-a-x-d.itch.io/" },
  { platform: "Pinterest", url: "https://id.pinterest.com/fayshalathilla/" },
];

export const BADGE_IMAGES = [
  { src: "https://files.catbox.moe/gt067c.png", name: "Unity Creative Core" },
  { src: "https://files.catbox.moe/7e0y5g.png", name: "Unity Essentials" },
  {
    src: "https://files.catbox.moe/sic3bx.png",
    name: "Unity AR Mobile Development",
  },
  { src: "https://files.catbox.moe/hv5u3r.png", name: "Unity VR Development" },
  {
    src: "https://files.catbox.moe/uccx6v.png",
    name: "Unity Junior Programmer",
  },
];
