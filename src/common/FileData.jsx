import React, { useRef, useState } from 'react';
import { MdInsertDriveFile, MdClose } from 'react-icons/md';
import { IoMdDocument } from 'react-icons/io';
import { FaImage, FaFileAudio, FaFileVideo } from 'react-icons/fa';
import { RiEyeLine } from "react-icons/ri";
import { LuDownload } from "react-icons/lu";
import { formatFileSize } from './formatFileSize';
import NoData from './NoData';
import { useFileDrop } from './useFileDrop';

export default function FileData({ step, selectedFiles, setSelectedFiles, setStep }) {

  console.log("selectedFiles", selectedFiles)

  const handleFilesSelected = (files) => {
    const arr = Array.from(files);

    const folderMap = {};
    const individualFiles = [];

    arr.forEach((file) => {
      if (file.webkitRelativePath) {
        const pathParts = file.webkitRelativePath.split('/');
        const folderName = pathParts.length > 1 ? pathParts[0] : "Root";
        if (!folderMap[folderName]) folderMap[folderName] = [];
        folderMap[folderName].push(file);
      } else {
        // Individual file
        individualFiles.push(file);
      }
    });

    // Convert folderMap to array
    const groupedFolders = Object.keys(folderMap).map((folderName) => ({
      folderName,
      files: folderMap[folderName],
    }));

    // Combine individual files and folders
    setSelectedFiles((prev) => [...prev, ...individualFiles, ...groupedFolders]);
    setStep(2);
  };



  const handleDropAction = (newItems) => {
    setSelectedFiles((prev) => [...prev, ...newItems]);
    setStep(2);
  };
  const { isDragging, handleDragOver, handleDragLeave, handleDrop } = useFileDrop(handleDropAction);
  // File type icons
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

  const handleView = (file) => {
    if (file instanceof File) {
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL, '_blank');
    }
  };

  // Flatten all files for total size
  const allFiles = selectedFiles.flatMap(item => item.files ? item.files : item);
  const totalSizeAll = allFiles.reduce((acc, f) => acc + (f.size || 0), 0);

  return (
    <div
      className={`${isDragging ? " bg-green-50" : "bg-white"} ${step === 4 ? "min-h-[300px]" : "min-h-[160px]"}  overflow-y-auto custom-scroll mt-2`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {selectedFiles.length === 0 ? (
        <NoData />
      ) : (
        selectedFiles.map((file, index) => (
          <div key={index} className="flex justify-between items-center space-x-2 py-2">
            <div className="flex items-center space-x-2">
              <div>{fileIcons[getMime(file.type)]}</div>
              <div>
                <h6 className="heading !text-left font-bold">{file.name || file.folderName}</h6>
                <p className="normal-para !text-left">
                  {formatFileSize(file.size || totalSizeAll)}
                  {file.files?.length > 0 && <span className="ml-1">{file.files.length} files</span>}
                </p>
              </div>
            </div>
            <div className="ml-auto flex items-center gap-3">
              {step === 4 && !file.files && (
                <>
                  <button onClick={() => handleView(file)}><RiEyeLine size={24} className='text-gray-700 hover:text-gray-400' /></button>
                  <a href={URL.createObjectURL(file)} download={file.name}><LuDownload size={24} className='text-gray-700 hover:text-gray-400' /></a>
                </>
              )}
              {step !== 4 && <button onClick={() => handleRemove(index)}><MdClose size={24} className='text-gray-700 hover:text-gray-400' /></button>}
            </div>
          </div>
        ))
      )}


    </div>
  );
}
