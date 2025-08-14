import React from 'react';
import { MdInsertDriveFile, MdClose } from 'react-icons/md';
import { IoMdDocument } from 'react-icons/io';
import { FaImage, FaFileAudio, FaFileVideo } from 'react-icons/fa';
import { RiEyeLine } from "react-icons/ri";
import { LuDownload } from "react-icons/lu";
import { formatFileSize } from './formatFileSize';

export default function FileData({ step }) {
  const files = [
    { name: "Vault.png", size: 115300, type: "image" }, // size in bytes
    { name: "Demo.mp4", size: 90200, type: "video" },
    { name: "Clip.mp4", size: 200000, type: "video" },
    { name: "Sample.mp4", size: 150800, type: "video" },
    { name: "Final.mp4", size: 300500, type: "video" },
    { name: "bedrive.docx", size: 300500, type: "doc" },
    { name: "image.png", size: 150800, type: "image" },
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
          className="flex justify-between items-center text-center space-x-2 p-2"
        >
          <div className='flex items-center space-x-1' >
            <div className='mr-1'>
              {fileIcons[getMime(file.type)]}
            </div>

            <div>
              <h6 className="heading !font-[700]">
                {file.name}
              </h6>
              <p className="normal-para !text-left">
                {formatFileSize(file.size)}
              </p>

            </div>
          </div>
          <button className="ml-auto ">
            {step === 4 ? (
              <div className="flex gap-3">
                <RiEyeLine size={24} className='text-gray-700 hover:text-gray-400' />
                <LuDownload size={24} className='text-gray-700 hover:text-gray-400' />
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
