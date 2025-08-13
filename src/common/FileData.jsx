import React from "react";
import { BiLogoYoutube } from "react-icons/bi";
import { IoMdEye } from "react-icons/io";
import { MdClose, MdDownload } from "react-icons/md";

export default function FileData({ step }) {
  // Example file list
  const files = [
    { name: "Vault.mp4", size: "115.3 KB", type: "video" },
    { name: "Demo.mp4", size: "90.2 KB", type: "video" },
    { name: "Clip.mp4", size: "200.0 KB", type: "video" },
    { name: "Sample.mp4", size: "150.8 KB", type: "video" },
    { name: "Final.mp4", size: "300.5 KB", type: "video" },
  ];

  return (
    <div
      className={`${
        step === 4 ? "max-h-[300px]" : "max-h-[160px]"
      } overflow-y-auto custom-scroll p-2`}
    >
      {files.map((file, index) => (
        <div
          key={index}
          className="flex justify-between items-center text-center mb-2 space-x-2 mt-1"
        >
          <div className="flex items-center space-x-3 p-2">
            <BiLogoYoutube className="text-red-600 text-xl" />
            <div>
              <h6 className="heading">{file.name}</h6>
              <p className="para">{file.size}</p>
            </div>
          </div>

          <button className="ml-auto text-gray-700 hover:text-gray-400">
            {step === 4 ? (
              <div className="flex gap-3">
                <IoMdEye size={24} />
                <MdDownload size={24} />
              </div>
            ) : (
              <MdClose size={24} />
            )}
          </button>
        </div>
      ))}
    </div>
  );
}
