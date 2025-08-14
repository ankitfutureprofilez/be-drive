import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";

export default function FileUploadBox({ setStep, step }) {
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);

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
        if (files.length > 0) {
            console.log("Dropped:", files);
            setSelectedFiles(files); // Store files for display
        }
    };

    const handleFileSelect = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            console.log("Selected:", files);
            setSelectedFiles(files); // Store files for display
        }
    };

    return (
        <>
            {step === 1 && (
                <div
                    className={`box flex flex-col items-center justify-center !h-[576px]  rounded-[15px] transition 
                        ${isDragging ? "border-green-500 bg-green-50" : "border-gray-300"}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <div className="manage-col text-center">
                        {/* Hidden input for files & folders */}
                        <input
                            type="file"
                            multiple
                            id="fileInput"
                            webkitdirectory=""
                            directory=""
                            className="hidden"
                            onChange={handleFileSelect}
                        />

                        {/* Add button */}
                        <label
                            htmlFor="fileInput"
                            className="Add rounded-[35px] p-4 mb-6 cursor-pointer  inline-block"
                        >
                            <MdAdd size={56} />
                        </label>

                        <p className="para mt-[10px]">Let's begin by adding some files or folders</p>

                        <Link
                            to="#"
                            onClick={() => setStep(2)}
                            className="transefer mt-1 inline-block"
                        >
                            Or select folder
                        </Link>
                    </div>

                    {selectedFiles.length > 0 && (
                        <div className="mt-4 w-full max-w-md px-4">
                            <h3 className="font-semibold mb-2 text-center">Selected:</h3>
                            <ul className="list-disc pl-5 text-left">
                                {selectedFiles.map((file, index) => (
                                    <li key={index}>
                                        {file.webkitRelativePath || file.name}{" "}
                                        <span className="text-gray-500 text-sm">
                                            ({(file.size / 1024).toFixed(2)} KB)
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
