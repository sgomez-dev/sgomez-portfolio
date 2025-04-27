"use client";

import { FaFileDownload } from "react-icons/fa";

const PDF_FILE = "/CV_Santiago_Gómez_de_la_Torre_Romero.pdf"

const FloatingCTA = () => {

  const downloadFile = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a")
    aTag.href = url;
    aTag.setAttribute("download", fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }

  return (
    <button onClick={() => downloadFile(PDF_FILE)}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 rounded-full border border-stone-50/30 bg-stone-200 px-4 py-3 font-medium text-stone-900 shadow-lg transition-all hover:bg-stone-300 hover:shadow-xl"
    >
      <FaFileDownload className="text-xl" />
      <span>Download CV</span>
    </button>
  );
};

export default FloatingCTA;