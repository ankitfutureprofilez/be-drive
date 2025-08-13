import React from 'react';
import { MdInsertDriveFile, MdClose, MdDownload, MdDock } from 'react-icons/md';
import { IoMdDocument, IoMdEye } from 'react-icons/io';
import { FaImage, FaFileAudio, FaFileVideo } from 'react-icons/fa';
export default function FileData({ step }) {
  const files = [
    { name: "Vault.png", size: "115.3 KB", type: "image" },
    { name: "Demo.mp4", size: "90.2 KB", type: "video" },
    { name: "Clip.mp4", size: "200.0 KB", type: "video" },
    { name: "Sample.mp4", size: "150.8 KB", type: "video" },
    { name: "Final.mp4", size: "300.5 KB", type: "video" },
    { name: "bedrive.docx", size: "300.5 KB", type: "doc" },
    { name: "image.png", size: "150.8 KB", type: "image" },
  ];

  const getMime = (type) => {
    const isImage = type.includes('image');
    const isVideo = type.includes('video');
    const isAudio = type.includes('audio');
    const isDoc = type.includes('doc');
    if (isImage) {
      return 'image';
    } else if (isAudio) {
      return 'audio';
    } else if (isVideo) {
      return 'video';
    } else if (isDoc) {
      return 'doc';
    } else {
      return 'other';
    }
  };

  const fileIcons = {
    video: <FaFileVideo className="text-red-600" size={28} />,
    image: <FaImage className="text-blue-600" size={28} />,
    audio: <FaFileAudio className="text-purple-600" size={28} />,
    other: <MdInsertDriveFile className="text-gray-600" size={28} />,
    doc: <IoMdDocument className="text-blue-600" size={28} />,
  };
  return (
    <div
      className={`${step === 4 ? "max-h-[300px]" : "max-h-[160px]"
        } overflow-y-auto custom-scroll mt-2 `}
    >
      {files && files?.map((file, index) => (
        <div
          key={index}
          className="flex justify-between items-center text-center space-x-2"
        >
          <div className="flex items-center space-x-3 p-1">
            {fileIcons[getMime(file.type)]}
            <div>
              <h6 className="heading">{file.name}</h6>
              <p className="para">{file.size}</p>
            </div>
          </div>

          <button className="ml-auto ">
            {step === 4 ? (
              <div className="flex gap-3">
                <IoMdEye size={24} className='text-gray-700 hover:text-gray-400' />
                <MdDownload size={24} className='text-gray-700 hover:text-gray-400' />
              </div>
            ) : (
              <MdClose size={24} className='text-gray-700 hover:text-gray-400' />
            )}
          </button>
        </div>
      ))}
    </div>
  );
}
