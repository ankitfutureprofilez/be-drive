// Your consolidated component file: TransferSuccessPage.jsx

import React from 'react';
import { FaLink } from 'react-icons/fa';
import { AiOutlineMail, AiOutlineCopy } from 'react-icons/ai';
import { IoSparklesSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const TransferSuccessPage = ({ type = 'Email', downloadLink, step, setStep }) => {
    const headingText = type === 'Link'
        ? 'Your link is ready'
        : 'Your transfer has been sent to your recipient(s)';

    const icon = type === 'Link' ? (
        <FaLink className="h-28 w-28 text-gray-400 mb-6" />
    ) : (
        <AiOutlineMail className="h-24 w-24 text-gray-400" />
    );

  
  
    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(downloadLink);
        toast.success("Copied successfully!");
      } catch (err) {
        console.error("Failed to copy: ", err);
        toast.error("Failed to copy text.");
      }
    };

    return (
        <>
            {step === 3 && (
                <div className="box flex items-center justify-center ">
                    <div className="manage-col p-4 md:p-[40px]">
                        <div className="flex justify-center mb-6 relative">
                            {icon}
                            <IoSparklesSharp className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-gray-400" />
                            <IoSparklesSharp className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 text-gray-400" />
                        </div>
                        <div className="mb-3 md:mb-6 text-center">
                            <h2 className="normal-heading">{headingText}</h2>
                        </div>

                        {type === 'Link' && (
                            <>
                                <p className="normal-para mb-4 md:mb-8 p-1 md:p-3">
                                    The download link for your transfer is available for X days.
                                </p>
                                <div className="flex items-center space-x-2 p-2 md:p-5">
                                    <div className="relative flex-1">
                                        <input
                                            type="text"
                                            readOnly
                                            value={downloadLink}
                                            className="w-full p-4 pl-12 pr-20 rounded-lg border border-gray-300 font-mono text-sm"
                                        />
                                        <button
                                            onClick={copyToClipboard}
                                            className="absolute right-0 top-0 h-full px-4 rounded-r-lg bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors"
                                        >
                                            <AiOutlineCopy className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                        {type === 'Email' && (
                            <div className="flex flex-col items-center text-center mt-3 mb-4 md:mb-8 p-1 md:p-3">
                                <button className="button-sm sm:button-md md:button-lg ">
                                    View transfer
                                </button>
                            </div>
                        )}
                        <p className="pt-[30px] md:pt-[69px] text-[14px] md:text-[16px] text-black font-[600] leading-5 text-center">
                            Need to send more files?{' '}
                            <Link to="#" onClick={() => {setStep(4)}} className="underline">
                                Start new transfer
                            </Link>
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default TransferSuccessPage;