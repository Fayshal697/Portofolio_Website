import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateCV() {
  const pdfDoc = await PDFDocument.create();
  
  // A4 size: 595.28 x 841.89 points
  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const page = pdfDoc.addPage([pageWidth, pageHeight]);

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Colors
  const darkNavy = rgb(15 / 255, 23 / 255, 42 / 255);       // #0f172a
  const cyanAccent = rgb(0 / 255, 180 / 255, 216 / 255);    // #00b4d8
  const textDark = rgb(30 / 255, 41 / 255, 59 / 255);       // #1e293b
  const textMuted = rgb(100 / 255, 116 / 255, 139 / 255);   // #64748b
  const lightBg = rgb(248 / 255, 250 / 255, 252 / 255);     // #f8fafc
  const borderGray = rgb(226 / 255, 232 / 255, 240 / 255); // #e2e8f0

  let y = pageHeight - 36;
  const marginX = 40;
  const contentWidth = pageWidth - marginX * 2;

  // Header background banner
  page.drawRectangle({
    x: 0,
    y: pageHeight - 100,
    width: pageWidth,
    height: 100,
    color: darkNavy,
  });

  // Top cyan decorative line
  page.drawRectangle({
    x: 0,
    y: pageHeight - 4,
    width: pageWidth,
    height: 4,
    color: cyanAccent,
  });

  // Name
  page.drawText('FAYSHAL KARAN ATHILLA', {
    x: marginX,
    y: pageHeight - 42,
    size: 20,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  // Role / Title
  page.drawText('UNITY GAME DEVELOPER | INFORMATICS ENGINEERING', {
    x: marginX,
    y: pageHeight - 60,
    size: 10,
    font: fontBold,
    color: cyanAccent,
  });

  // Contact info
  const contactText = 'Malang, Indonesia   •   faykara.official@gmail.com   •   +62 812-3250-5308 (WA)   •   linkedin.com/in/faykara';
  page.drawText(contactText, {
    x: marginX,
    y: pageHeight - 80,
    size: 8.5,
    font: fontRegular,
    color: rgb(226 / 255, 232 / 255, 240 / 255),
  });

  y = pageHeight - 118;

  function drawSectionHeader(title: string) {
    page.drawText(title.toUpperCase(), {
      x: marginX,
      y: y,
      size: 11,
      font: fontBold,
      color: darkNavy,
    });
    
    // Cyan underline
    page.drawLine({
      start: { x: marginX, y: y - 4 },
      end: { x: marginX + 32, y: y - 4 },
      thickness: 2,
      color: cyanAccent,
    });
    page.drawLine({
      start: { x: marginX + 34, y: y - 4 },
      end: { x: marginX + contentWidth, y: y - 4 },
      thickness: 0.5,
      color: borderGray,
    });
    y -= 16;
  }

  // --- PROFESSIONAL SUMMARY ---
  drawSectionHeader('Professional Summary');
  const summaryLines = [
    'Informatics Engineering student at UNIDA Gontor specializing in Unity game development with verified industry',
    'and research experience. Skilled in C# scripting, interactive game mechanics, and integrating educational pedagogical elements',
    'into engaging game systems. Creative, collaborative leader with practical experience in game jams and cross-functional teams.',
  ];
  for (const line of summaryLines) {
    page.drawText(line, {
      x: marginX,
      y: y,
      size: 8.5,
      font: fontRegular,
      color: textDark,
    });
    y -= 12;
  }
  y -= 6;

  // --- EXPERIENCE ---
  drawSectionHeader('Professional & Academic Experience');

  const experiences = [
    {
      role: 'Unity Game Programmer',
      org: 'Joy Leap Studio - FUNTASYA World',
      period: 'April 2026 – November 2026',
      loc: 'Sidoarjo (Remote via Discord)',
      bullets: [
        'Collaborated within an agile game development team to design core gameplay mechanics and interactive systems in Unity.',
        'Contributed to game design documents (GDD), programmed player mechanics, and optimized UI and performance workflows.',
      ],
    },
    {
      role: 'Lecturer Research Assistant',
      org: 'UNIDA Gontor (Ministry of Education Grant)',
      period: 'June – November 2025',
      loc: 'Ponorogo',
      bullets: [
        'Designed technical concepts for a 3D English educational game for elementary students with a child-friendly learning flow.',
        'Engineered adventure mode and progressive evaluation features integrating curriculum materials directly into gameplay.',
      ],
    },
    {
      role: 'Practical Assistant (OOP & Game Programming)',
      org: 'IT UNIDA Gontor',
      period: 'June 2025 – January 2026',
      loc: 'Ponorogo',
      bullets: [
        'Developed course materials and supervised laboratory practicals on Object-Oriented Programming, Git/GitHub, and Unity 6.',
        'Guided students through project architecture, debugging, and final game project readiness.',
      ],
    },
    {
      role: 'Game Developer Mentor',
      org: 'UNIDA Gontor IT Study Club',
      period: 'June 2025 – Present',
      loc: 'Ponorogo',
      bullets: [
        'Mentored members across game programming, pixel/3D art, and game design through project-based prototype workshops.',
      ],
    },
    {
      role: 'Project Leader & Developer',
      org: 'GameJam+ 2025',
      period: 'November 2025',
      loc: 'Online Event',
      bullets: [
        'Led a cross-functional game development team to build and submit a playable prototype within 48 hours.',
      ],
    },
  ];

  for (const exp of experiences) {
    // Role & Org
    page.drawText(`${exp.role}`, {
      x: marginX,
      y: y,
      size: 9.5,
      font: fontBold,
      color: textDark,
    });
    page.drawText(` | ${exp.org}`, {
      x: marginX + fontBold.widthOfTextAtSize(exp.role, 9.5),
      y: y,
      size: 9.5,
      font: fontOblique,
      color: cyanAccent,
    });

    // Date
    const periodText = `${exp.period} (${exp.loc})`;
    const periodWidth = fontRegular.widthOfTextAtSize(periodText, 8);
    page.drawText(periodText, {
      x: marginX + contentWidth - periodWidth,
      y: y,
      size: 8,
      font: fontRegular,
      color: textMuted,
    });
    y -= 12;

    for (const b of exp.bullets) {
      page.drawText('•', {
        x: marginX + 6,
        y: y,
        size: 8,
        font: fontBold,
        color: cyanAccent,
      });
      page.drawText(b, {
        x: marginX + 16,
        y: y,
        size: 8,
        font: fontRegular,
        color: textDark,
      });
      y -= 11;
    }
    y -= 3;
  }

  y -= 4;

  // --- EDUCATION ---
  drawSectionHeader('Education');
  const education = [
    {
      school: 'Universitas Darussalam Gontor',
      degree: 'Informatics Engineering Student',
      score: 'GPA: 3.78',
      period: 'May 2023 – August 2026',
    },
    {
      school: 'Pondok Modern Darussalam Gontor',
      degree: 'High School Diploma',
      score: 'Final Grade: 8.97',
      period: 'April 2017 – April 2023',
    },
  ];

  for (const edu of education) {
    page.drawText(edu.school, {
      x: marginX,
      y: y,
      size: 9,
      font: fontBold,
      color: textDark,
    });
    page.drawText(`  •  ${edu.degree}  •  `, {
      x: marginX + fontBold.widthOfTextAtSize(edu.school, 9),
      y: y,
      size: 8.5,
      font: fontRegular,
      color: textMuted,
    });
    page.drawText(edu.score, {
      x: marginX + fontBold.widthOfTextAtSize(edu.school, 9) + fontRegular.widthOfTextAtSize(`  •  ${edu.degree}  •  `, 8.5),
      y: y,
      size: 8.5,
      font: fontBold,
      color: cyanAccent,
    });

    const eduPeriod = edu.period;
    const eduPeriodWidth = fontRegular.widthOfTextAtSize(eduPeriod, 8);
    page.drawText(eduPeriod, {
      x: marginX + contentWidth - eduPeriodWidth,
      y: y,
      size: 8,
      font: fontRegular,
      color: textMuted,
    });
    y -= 13;
  }

  y -= 4;

  // --- SELECTED GAME PROJECTS ---
  drawSectionHeader('Featured Game Development Projects');
  const projects = [
    {
      title: 'Manual Brewing Kopi',
      tech: 'Unity WebGL • Physics Simulation',
      desc: 'Interactive coffee brewing simulator modeling realistic dripper, filter, kettle water extraction physics, and digital scale.',
    },
    {
      title: 'FUNLISH',
      tech: 'Unity 3D • EdTech',
      desc: '3D object-hunting educational game for elementary students featuring interactive audio, vocabulary challenges, and mini-games.',
    },
    {
      title: 'AMANAH',
      tech: 'Unity 2D • Narrative Choice',
      desc: 'Anti-corruption narrative drama centered on political dilemma, featuring branching dialogue and multiple story endings.',
    },
    {
      title: 'Qolbuna',
      tech: 'Unity 2D • Audio-First / Accessibility',
      desc: 'Accessible Quran memorization game engineered for visually impaired learners with 100% voice audio navigation and dual-input.',
    },
  ];

  for (const proj of projects) {
    page.drawText(proj.title, {
      x: marginX,
      y: y,
      size: 8.5,
      font: fontBold,
      color: textDark,
    });
    page.drawText(` [${proj.tech}]: `, {
      x: marginX + fontBold.widthOfTextAtSize(proj.title, 8.5),
      y: y,
      size: 8,
      font: fontOblique,
      color: cyanAccent,
    });
    const prefixWidth = fontBold.widthOfTextAtSize(proj.title, 8.5) + fontOblique.widthOfTextAtSize(` [${proj.tech}]: `, 8);
    page.drawText(proj.desc, {
      x: marginX + prefixWidth,
      y: y,
      size: 8,
      font: fontRegular,
      color: textDark,
    });
    y -= 12;
  }

  y -= 4;

  // --- SKILLS & CERTIFICATIONS ---
  drawSectionHeader('Technical Skills & Unity Certifications');
  
  const skillRow1 = 'Core Skills: Unity (95%), C# Scripting, Game Mechanics, UI/UX Wireframing, 2D/3D Art & AR, Git/GitHub, Team Leadership';
  const skillRow2 = 'Unity Badges: Unity Creative Core • Unity Essentials • Unity AR Mobile Dev • Unity VR Dev • Unity Junior Programmer';
  
  page.drawText(skillRow1, {
    x: marginX,
    y: y,
    size: 8,
    font: fontRegular,
    color: textDark,
  });
  y -= 11;
  page.drawText(skillRow2, {
    x: marginX,
    y: y,
    size: 8,
    font: fontBold,
    color: darkNavy,
  });

  // Footer bar
  page.drawRectangle({
    x: 0,
    y: 0,
    width: pageWidth,
    height: 18,
    color: lightBg,
  });
  page.drawLine({
    start: { x: 0, y: 18 },
    end: { x: pageWidth, y: 18 },
    thickness: 0.5,
    color: borderGray,
  });
  page.drawText('Portfolio: https://k-a-r-a-x-d.itch.io/   •   GitHub: https://github.com/Fayshal697   •   Generated Curriculum Vitae', {
    x: marginX,
    y: 5,
    size: 7,
    font: fontRegular,
    color: textMuted,
  });

  const pdfBytes = await pdfDoc.save();
  const pdfBuffer = Buffer.from(pdfBytes);
  const base64Pdf = pdfBuffer.toString('base64');
  const dataUri = `data:application/pdf;base64,${base64Pdf}`;

  const outputFiles = [
    'public/cv-fayshal-karan-athilla.pdf',
    'public/cv.pdf',
    'public/CV.pdf',
    'public/Fayshal_Karan_Athilla_CV.pdf',
    'public/fayshal-cv.pdf'
  ];

  for (const file of outputFiles) {
    const fullPath = path.resolve(file);
    fs.writeFileSync(fullPath, pdfBytes);
  }

  // Also write into dist if dist exists
  if (fs.existsSync(path.resolve('dist'))) {
    for (const file of outputFiles) {
      const fileName = path.basename(file);
      fs.writeFileSync(path.resolve(`dist/${fileName}`), pdfBytes);
    }
  }

  // Write cvData.ts for 100% offline and in-memory download capability
  const cvDataTs = `// Auto-generated CV base64 data
export const CV_FILE_NAME = 'Fayshal_Karan_Athilla_CV.pdf';
export const CV_PRIMARY_URL = '/cv-fayshal-karan-athilla.pdf';
export const CV_FALLBACK_URLS = [
  '/cv-fayshal-karan-athilla.pdf',
  './cv-fayshal-karan-athilla.pdf',
  '/cv.pdf',
  './cv.pdf',
  '/Fayshal_Karan_Athilla_CV.pdf'
];
export const CV_BASE64 = ${JSON.stringify(base64Pdf)};
export const CV_DATA_URI = ${JSON.stringify(dataUri)};
`;
  fs.writeFileSync(path.resolve('cvData.ts'), cvDataTs);

  console.log('CV PDF successfully generated and exported to all public paths and cvData.ts! Size:', pdfBytes.length);
}

generateCV().catch(err => {
  console.error('Error generating CV:', err);
  process.exit(1);
});
