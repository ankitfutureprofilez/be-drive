import { useRef } from "react";
import { MdAdd } from "react-icons/md";
import { useFileDrop } from "../common/useFileDrop";

export default function FileUploadBox({ setStep, step, selectedFiles, setSelectedFiles }) {
    const addInputRef = useRef(null);
    const folderInputRef = useRef(null);

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



    return (
        <>
            {step === 1 && (
                <div
                    className={`box flex flex-col items-center justify-center h-[450px] md:!h-[576px] rounded-[15px] transition
            ${isDragging ? "border-green-500 bg-green-50" : "border-gray-300"}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <div className="manage-col text-center">
                        <input
                            type="file"
                            multiple
                            ref={addInputRef}
                            className="hidden"
                            onChange={(e) => handleFilesSelected(e.target.files)}
                        />
                        <input
                            type="file"
                            webkitdirectory=""
                            directory=""
                            multiple
                            ref={folderInputRef}
                            className="hidden"
                            onChange={(e) => handleFilesSelected(e.target.files)}
                        />
                        <label
                            onClick={() => addInputRef.current.click()}
                            className="Add rounded-[35px] p-4 mb-6 cursor-pointer inline-block"
                        >
                            <MdAdd size={56} />
                        </label>


                        <p className="para mt-[10px]">Let's begin by adding some files or folders</p>

                        <p
                            onClick={() => folderInputRef.current.click()}
                            className="transefer mt-1 inline-block cursor-pointer"
                        >
                            Or select folder
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
