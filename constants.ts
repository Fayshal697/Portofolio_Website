import { ExperienceItem, EducationItem, ProfileData, LinkItem, ProjectItem } from "./types";

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

export const PROJECTS: ProjectItem[] = [
  {
    id: "manual-brewing-kopi",
    title: "Manual Brewing Kopi",
    category: "Interactive Simulation • EdTech",
    engine: "Unity WebGL / Interactive Web",
    image: "https://files.catbox.moe/n2elc0.png",
    summary:
      "An interactive web-based simulation dedicated to the craft of manual coffee brewing. Players master precision brewing mechanics—dripper, filter, gooseneck kettle, and digital scale—to understand tool dynamics and extract consistent, high-quality coffee flavor profiles.",
    fullDescription:
      "The Manual Coffee Brewing Game is an interactive web-based project that offers a learning experience centered on the art of manual coffee brewing. Players explore the nuances of flavor through simulations involving a dripper, filter, gooseneck kettle, and coffee scale, while also learning the function of each tool in achieving a consistent, high-quality brew. Combining realistic gameplay, detailed visuals, and an informative interface, the project makes the learning process accessible, enjoyable, and effective, serving as a showcase for educational game development.",
    features: [
      "Simulated manual coffee tools (dripper, paper filter, gooseneck kettle, precision scale)",
      "Realistic extraction physics, water pouring control, and brew timing",
      "Informative UI visualizing aroma notes, extraction strength, and brewing feedback",
      "Educational curriculum designed for both coffee enthusiasts and students"
    ],
    tags: ["Unity WebGL", "Physics Simulation", "Educational Game", "Interactive UI"],
    playUrl: "https://k-a-r-a-x-d.itch.io/",
    downloadUrl: "https://k-a-r-a-x-d.itch.io/"
  },
  {
    id: "funlish",
    title: "FUNLISH",
    category: "3D Object Hunting • English Learning",
    engine: "Unity 3D / C#",
    image: "https://files.catbox.moe/1q7zmq.png",
    summary:
      "A vibrant 3D object-hunting educational game designed for elementary school students. Children explore interactive 3D environments to learn everyday English—covering clothing, sense of taste, ailments, human anatomy, and comparative adjectives through voice audio and mini-games.",
    fullDescription:
      "FUNLISH is a 3D hunting objects and interactive educational game for elementary school students that makes learning English fun and easy to understand. Through bright visuals and simple games, children are invited to learn everyday concepts about clothing, the sense of taste, diseases and medicines, body parts, adjectives, and comparative adjectives. With a combination of images, audio, and mini game. FUNLISH! Helps children master comprehension, practice pronunciation, and understand English in real-world contexts in a fun way.",
    features: [
      "Explorative 3D object-hunting mechanics with child-friendly controls",
      "Curriculum-aligned English units: Clothing, Tastes, Health, Anatomy, Adjectives",
      "Interactive mini-games reinforcing retention and active recall",
      "Native audio voiceover and pronunciation guides for real-world contextual learning"
    ],
    tags: ["Unity 3D", "Object Hunting", "EdTech / Elementary", "Audio Pronunciation"],
    playUrl: "https://k-a-r-a-x-d.itch.io/",
    downloadUrl: "https://k-a-r-a-x-d.itch.io/"
  },
  {
    id: "amanah",
    title: "AMANAH",
    category: "2D Narrative Drama • Anti-Corruption",
    engine: "Unity 2D / Branching Story",
    image: "https://files.catbox.moe/luy9pl.png",
    summary:
      "A tense 2D interactive narrative exploring political morality and anti-corruption. As Infrastructure Minister Andi, players confront weighty ethical decisions—balancing personal family needs, systemic political pressure, and insidious bribes where every choice permanently alters the fate of the nation.",
    fullDescription:
      "Amanah is a 2D interactive narrative game with an anti-corruption theme that immerses players in the dilemma of a Minister of Infrastructure named Andi. Behind position, power, and the demands of life, players will be faced with difficult choices that determine the fate of their families, communities, and even the future of the nation. Every decision has consequences. Not all choices lead to good, and not all regrets come early. Experience the inner conflict of a father, political pressure, the temptation of money, and the voice of the people slowly turning to anger. Will you uphold your mandate… or will you succumb to greed",
    features: [
      "Branching narrative tree where every moral decision leaves lasting consequences",
      "Compelling psychological drama highlighting political pressure and family stakes",
      "Atmospheric dialogue system, expressive 2D art direction, and thematic soundscapes",
      "Multiple story conclusions testing whether you uphold your mandate or succumb to greed"
    ],
    tags: ["Unity 2D", "Narrative Drama", "Serious Game", "Branching Dialogue"],
    playUrl: "https://k-a-r-a-x-d.itch.io/",
    downloadUrl: "https://k-a-r-a-x-d.itch.io/"
  },
  {
    id: "qolbuna",
    title: "Qolbuna",
    category: "2D Audio-Driven Game • Inclusive Accessibility",
    engine: "Unity 2D / Spatial Audio",
    image: "https://files.catbox.moe/ulxq5z.png",
    summary:
      "An inclusive 2D audio-driven educational game engineered for Quran memorization, specifically designed for visually impaired users. Features full voice narration, dual input controls (keyboard for learners, mouse for assistants), memorization testing protocols, inspirational narratives, and tafsir insights.",
    fullDescription:
      "Qolbuna is an interactive 2D audio-based educational game for Quran memorization, specifically designed for visually impaired users with a strong desire to memorize the Quran. The game focuses on providing an audio-driven learning experience, where all interactions occur via voice narration, utilizing keyboard controls for visually impaired users and mouse controls for their assistants. Beyond its core memorization features, the game offers a memorization test mode, a collection of inspiring stories, and deeper insights into the tafsir (exegesis) and meaning of the Quran. Through this interactive audio approach, the project serves as an inclusive learning tool that promotes accessibility and demonstrates the potential for developing educational games tailored to specific needs.",
    features: [
      "100% audio-driven navigation & immersive voice narration for total accessibility",
      "Collaborative dual-control scheme (keyboard for visually impaired, mouse for assistants)",
      "Interactive Quran memorization test modes with responsive acoustic cues",
      "Rich library of inspirational stories and contextual tafsir (exegesis) insights"
    ],
    tags: ["Accessibility (a11y)", "Audio-Driven", "Quran Memorization", "Inclusive Gaming"],
    playUrl: "https://k-a-r-a-x-d.itch.io/",
    downloadUrl: "https://k-a-r-a-x-d.itch.io/"
  }
];
