import React from 'react';
import { MdInsertDriveFile, MdClose } from 'react-icons/md';
import { IoMdDocument } from 'react-icons/io';
import { FaImage, FaFileAudio, FaFileVideo } from 'react-icons/fa';
import { RiEyeLine } from "react-icons/ri";
import { LuDownload } from "react-icons/lu";
import { formatFileSize } from './formatFileSize';
import NoData from './NoData';

export default function FileData({ step, selectedFiles, setSelectedFiles }) {
  console.log("selectedFiles", selectedFiles)
  const getMime = (type) => {
    if (!type) return 'other';
    if (type.includes('image')) return 'image';
    if (type.includes('video')) return 'video';
    if (type.includes('audio')) return 'audio';
    if (type.includes('doc')) return 'doc';
    return 'other';
  };


  const fileIcons = {
    video: <FaFileVideo className="text-red-600" size={28} />,
    image: <FaImage className="text-blue-600" size={28} />,
    audio: <FaFileAudio className="text-purple-600" size={28} />,
    other: <MdInsertDriveFile className="text-gray-600" size={28} />,
    doc: <IoMdDocument className="text-blue-600" size={28} />,
  };

  const handleRemove = (index) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // Open file in new tab
  const handleView = (file) => {
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL, '_blank');
  };

  const allFiles = selectedFiles.flatMap(item => item.files ? item.files : item);

  console.log("allFiles", allFiles)

  const totalSizeAll = allFiles.reduce((acc, f) => acc + f.size, 0);


  return (
    <div className={`${step === 4 ? "max-h-[300px]" : "max-h-[160px]"} overflow-y-auto custom-scroll mt-2`}>
      {selectedFiles && selectedFiles?.length === 0 ? (
        <NoData />
      ) : selectedFiles.map((file, index) => (
        <div key={index} className="flex justify-between items-center text-center space-x-2 p-2">
          <div className='flex items-center space-x-1'>
            <div className='mr-1'>{fileIcons[getMime(file.type)]}</div>
            <div>
              <h6 className="heading !font-[700]">{file.name ? file.name : file?.folderName}</h6>
              <p className="normal-para !text-left">{formatFileSize(file.size || totalSizeAll || 0)}</p>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-3">
            {step === 4 ? (
              <>
                {!file.files && (
                  <>
                    <button onClick={() => handleView(file)}>
                      <RiEyeLine size={24} className='text-gray-700 hover:text-gray-400' />
                    </button>
                    <a href={URL?.createObjectURL(file)} download={file.name}>
                      <LuDownload size={24} className='text-gray-700 hover:text-gray-400' />
                    </a>
                  </>
                )}
              </>
            ) : (
              <button onClick={() => handleRemove(index)}>
                <MdClose size={24} className='text-gray-700 hover:text-gray-400' />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
