import type React from 'react';
import { CV_BASE64, CV_FILE_NAME, CV_PRIMARY_URL } from './cvData';

/**
 * Converts the base64 CV into a Blob in memory.
 * This guarantees zero reliance on network availability or server routing paths.
 */
export function getCvBlob(): Blob {
  const binaryString = atob(CV_BASE64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return new Blob([bytes], { type: 'application/pdf' });
}

/**
 * Downloads the CV using multi-tiered fallback:
 * 1. Programmatic Blob download (works offline & regardless of relative host paths)
 * 2. Static link trigger
 * 3. Fallback window.open if iframe security blocks silent downloads
 */
export function triggerCvDownload(e?: React.MouseEvent): { success: boolean; message: string } {
  if (e) {
    // Prevent default anchor navigation to avoid breaking in sandboxed iframes
    e.preventDefault();
  }

  try {
    const blob = getCvBlob();
    const blobUrl = URL.createObjectURL(blob);

    const downloadLink = document.createElement('a');
    downloadLink.href = blobUrl;
    downloadLink.download = CV_FILE_NAME;
    downloadLink.rel = 'noopener noreferrer';
    downloadLink.target = '_blank';
    downloadLink.style.display = 'none';

    document.body.appendChild(downloadLink);
    downloadLink.click();

    setTimeout(() => {
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(blobUrl);
    }, 4000);

    return {
      success: true,
      message: 'CV PDF berhasil diunduh!'
    };
  } catch (err) {
    console.warn('Blob download error, trying direct link fallback:', err);
    try {
      // Fallback 1: open static route in new tab
      window.open(CV_PRIMARY_URL, '_blank', 'noopener,noreferrer');
      return {
        success: true,
        message: 'Membuka CV di tab baru untuk disimpan...'
      };
    } catch {
      // Fallback 2: Direct location assign
      window.location.href = CV_PRIMARY_URL;
      return {
        success: false,
        message: 'Gagal mengunduh otomatis. Silakan coba buka di tab baru.'
      };
    }
  }
}
