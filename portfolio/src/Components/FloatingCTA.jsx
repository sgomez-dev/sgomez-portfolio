import { FaFileDownload } from "react-icons/fa";

const FloatingCTA = () => {
  return (
    <a
      href="../../public/Santiago Gómez de la Torre - CV.pdf"
      download
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 rounded-full border border-stone-50/30 bg-stone-200 px-4 py-3 font-medium text-stone-900 shadow-lg transition-all hover:bg-stone-300 hover:shadow-xl"
    >
      <FaFileDownload className="text-xl" />
      <span>Download CV</span>
    </a>
  );
};

export default FloatingCTA;