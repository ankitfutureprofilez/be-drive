import React, { useState, useRef } from "react";
import { MdAdd } from "react-icons/md";

export default function FileUploadBox({ setStep, step }) {
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);

    const addInputRef = useRef(null);
    const folderInputRef = useRef(null);

    const handleFilesSelected = (files) => {
        const arr = Array.from(files);
        setSelectedFiles(arr);
        setStep(2);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const files = Array.from(e.dataTransfer.files);
        if (files.length > 0) handleFilesSelected(files);
    };

    return (
        <>
            {step === 1 && (
                <div
                    className={`box flex flex-col items-center justify-center !h-[576px] rounded-[15px] transition
            ${isDragging ? "border-green-500 bg-green-50" : "border-gray-300"}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <div className="manage-col text-center">
                        {/* Hidden inputs */}
                        <input
                            type="file"
                            multiple
                            webkitdirectory=""
                            ref={addInputRef}
                            className="hidden"
                            onChange={(e) => handleFilesSelected(e.target.files)}
                        />

                        <input
                            type="file"
                            webkitdirectory=""
                            ref={folderInputRef}
                            className="hidden"
                            onChange={(e) => handleFilesSelected(e.target.files)}
                        />

                        {/* Add button */}
                        <label
                            onClick={() => addInputRef.current.click()}
                            className="Add rounded-[35px] p-4 mb-6 cursor-pointer inline-block"
                        >
                            <MdAdd size={56} />
                        </label>

                        <p className="para mt-[10px]">Let's begin by adding some files or folders</p>

                        {/* Select folder link */}
                        <p
                            onClick={() => folderInputRef.current.click()}
                            className="transefer mt-1 inline-block cursor-pointer"
                        >
                            Or select folder
                        </p>

                        <p className="mt-4 transefer">
                            Or drag and drop files/folders here
                        </p>
                    </div>

                    {/* Preview */}
                    {selectedFiles.length > 0 && (
                        <div className="mt-4 w-full max-w-md px-4">
                            <h3 className="font-semibold mb-2 text-center">Selected:</h3>
                            <ul className="list-disc pl-5 text-left">
                                {selectedFiles.map((file, index) => (
                                    <li key={index}>
                                        {file.webkitRelativePath || file.name}{" "}
                                        <span className="text-gray-500 text-sm">
                                            {(file.size / 1024).toFixed(2)} KB
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}
