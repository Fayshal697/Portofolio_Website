import React from 'react';
import { X, Download, ExternalLink, Copy, Check, FileText } from 'lucide-react';
import { CV_DATA_URI, CV_PRIMARY_URL, CV_FILE_NAME } from '../cvData';
import { triggerCvDownload } from '../cvDownload';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    const fullUrl = `${window.location.origin}${CV_PRIMARY_URL}`;
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = (e: React.MouseEvent) => {
    triggerCvDownload(e);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-cyber-card border border-cyber-primary/40 rounded-lg shadow-[0_0_50px_rgba(0,240,255,0.2)] overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-black/60">
          <div className="flex items-center gap-3">
            <FileText className="text-cyber-primary" size={20} />
            <div>
              <h3 className="font-mono text-sm md:text-base font-bold text-white tracking-wide">
                CURRICULUM VITAE PREVIEW
              </h3>
              <p className="text-xs text-gray-400 font-mono">
                {CV_FILE_NAME}
              </p>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-colors"
            title="Tutup"
          >
            <X size={20} />
          </button>
        </div>

        {/* Action Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3 border-b border-gray-800/60 bg-[#0d0d0d] text-xs font-mono">
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-cyber-accent hover:bg-red-600 text-white font-bold transition-all shadow-[0_0_10px_rgba(255,0,60,0.3)]"
            >
              <Download size={14} />
              <span>UNDUH PDF</span>
            </button>
            
            <a
              href={CV_PRIMARY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-cyber-primary/10 hover:bg-cyber-primary hover:text-black text-cyber-primary border border-cyber-primary/40 font-bold transition-all"
            >
              <ExternalLink size={14} />
              <span>BUKA TAB BARU</span>
            </a>

            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-gray-800 hover:bg-gray-700 text-gray-300 transition-all border border-gray-700"
              title="Salin tautan langsung file PDF"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? 'TERSALIN!' : 'SALIN LINK'}</span>
            </button>
          </div>

          <span className="text-gray-500 hidden sm:inline-block">
            Tekan ESC atau tombol silang untuk menutup
          </span>
        </div>

        {/* PDF Viewer Body */}
        <div className="flex-1 bg-[#1a1a1a] min-h-[480px] p-2 relative flex flex-col items-center justify-center">
          <object
            data={`${CV_PRIMARY_URL}#toolbar=1&navpanes=0`}
            type="application/pdf"
            className="w-full h-full min-h-[460px] rounded border border-gray-800 bg-white"
          >
            {/* Fallback if browser PDF viewer plugin is disabled */}
            <div className="text-center p-8 bg-cyber-card rounded border border-gray-800 max-w-md">
              <FileText size={48} className="mx-auto text-cyber-primary mb-3" />
              <h4 className="text-white font-bold mb-2">Pratinjau PDF di Browser</h4>
              <p className="text-xs text-gray-400 mb-6">
                Browser Anda memerlukan izin untuk menampilkan file PDF langsung di dalam frame. Anda dapat mengunduh atau membukanya di tab baru secara langsung.
              </p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={handleDownload}
                  className="px-4 py-2 bg-cyber-accent text-white font-bold rounded text-xs flex items-center gap-2"
                >
                  <Download size={14} /> Unduh PDF
                </button>
                <a
                  href={CV_PRIMARY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-cyber-primary text-black font-bold rounded text-xs flex items-center gap-2"
                >
                  <ExternalLink size={14} /> Buka Tab Baru
                </a>
              </div>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
};
