import React, { useRef } from "react";

const Menu = ({ onFilesSelected }) => {
  const fileInputRef = useRef(null);
  const folderInputRef = useRef(null);

  // File selection handler
  const handleFiles = (e) => {
    const files = e.target.files;
    if (files.length > 0 && onFilesSelected) {
      onFilesSelected(files);
    }
  };

  return (
    <div className="absolute right-1 top-10 mt-2 w-48 bg-white rounded-lg shadow-xl p-2 z-10">
      <input
        type="file"
        multiple
        ref={fileInputRef}
        className="hidden"
        onChange={handleFiles}
      />
      <input
        type="file"
        multiple
        webkitdirectory=""
        directory=""
        ref={folderInputRef}
        className="hidden"
        onChange={handleFiles}
      />

      {/* Import Files */}
      <div
        className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
        onClick={() => fileInputRef.current.click()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          />
        </svg>
        <span>Import files</span>
      </div>

      {/* Import Folder */}
      <div
        className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
        onClick={() => folderInputRef.current.click()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          />
        </svg>
        <span>Import folder</span>
      </div>
    </div>
  );
};

export default Menu;
