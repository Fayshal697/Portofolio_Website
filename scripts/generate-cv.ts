import fs from 'fs';
import path from 'path';

/**
 * Syncs the user's updated CV (e.g. 'public/CV INGGRIS.pdf')
 * - Generates cvData.ts with the authentic document in base64 for offline & in-memory download
 * - Copies to standard aliases so all URL formats (/CV%20INGGRIS.pdf, /cv.pdf, etc.) work flawlessly
 * - Ensures production build dist/ includes the files
 */
async function syncCV() {
  const publicDir = path.resolve('public');
  
  // Possible names for the user's CV
  const candidateNames = [
    'CV INGGRIS.pdf',
    'cv inggris.pdf',
    'CV_INGGRIS.pdf',
    'cv-inggris.pdf',
    'Fayshal_Karan_Athilla_CV.pdf',
    'cv.pdf',
    'CV.pdf'
  ];

  let sourceFile: string | null = null;
  let sourceFileName = 'CV INGGRIS.pdf';

  for (const name of candidateNames) {
    const fullPath = path.join(publicDir, name);
    if (fs.existsSync(fullPath)) {
      sourceFile = fullPath;
      sourceFileName = name;
      break;
    }
  }

  // If none matched exact candidate list, look for any .pdf in public/
  if (!sourceFile && fs.existsSync(publicDir)) {
    const files = fs.readdirSync(publicDir);
    const pdfFile = files.find(f => f.toLowerCase().endsWith('.pdf'));
    if (pdfFile) {
      sourceFile = path.join(publicDir, pdfFile);
      sourceFileName = pdfFile;
    }
  }

  if (!sourceFile) {
    console.error('No CV PDF found in public directory!');
    process.exit(1);
  }

  console.log(`Using CV document: ${sourceFile} (${(fs.statSync(sourceFile).size / 1024).toFixed(1)} KB)`);

  const pdfBuffer = fs.readFileSync(sourceFile);
  const base64Pdf = pdfBuffer.toString('base64');
  const dataUri = `data:application/pdf;base64,${base64Pdf}`;

  // Make sure standard aliases exist in public/ so direct routes always work
  const aliases = [
    'CV INGGRIS.pdf',
    'cv.pdf',
    'CV.pdf',
    'Fayshal_Karan_Athilla_CV.pdf',
    'cv-fayshal-karan-athilla.pdf'
  ];

  for (const alias of aliases) {
    const targetPath = path.join(publicDir, alias);
    if (!fs.existsSync(targetPath) || alias !== sourceFileName) {
      try {
        fs.writeFileSync(targetPath, pdfBuffer);
      } catch (err) {
        console.warn(`Could not copy to ${targetPath}:`, err);
      }
    }
  }

  // Also ensure dist folder has the files if dist exists
  const distDir = path.resolve('dist');
  if (fs.existsSync(distDir)) {
    for (const alias of aliases) {
      try {
        fs.writeFileSync(path.join(distDir, alias), pdfBuffer);
      } catch (err) {
        // ignore
      }
    }
  }

  const primaryUrl = `/${encodeURIComponent(sourceFileName)}`;
  const displayName = sourceFileName;

  const cvDataTs = `// Auto-generated from user's authentic CV (${displayName})
export const CV_FILE_NAME = ${JSON.stringify(displayName)};
export const CV_PRIMARY_URL = ${JSON.stringify(primaryUrl)};
export const CV_FALLBACK_URLS = [
  ${JSON.stringify(primaryUrl)},
  '/CV%20INGGRIS.pdf',
  '/cv.pdf',
  '/Fayshal_Karan_Athilla_CV.pdf',
  './CV%20INGGRIS.pdf',
  './cv.pdf'
];
export const CV_FILE_SIZE_BYTES = ${pdfBuffer.length};
export const CV_BASE64 = ${JSON.stringify(base64Pdf)};
export const CV_DATA_URI = ${JSON.stringify(dataUri)};
`;

  fs.writeFileSync(path.resolve('cvData.ts'), cvDataTs, 'utf-8');
  console.log(`Successfully synced authentic CV to cvData.ts and public aliases! Size: ${pdfBuffer.length} bytes.`);
}

syncCV().catch(err => {
  console.error('Error syncing CV:', err);
  process.exit(1);
});
