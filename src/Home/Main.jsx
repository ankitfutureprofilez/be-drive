import { useState } from 'react';
import Layout from '../Layout/Layout';
import { MdAdd, MdSettings } from 'react-icons/md';
import { Link } from 'react-router-dom';
import FileData from '../common/FileData';
import { FaLink } from "react-icons/fa";
import { AiOutlineCopy, AiOutlineMail } from 'react-icons/ai';
import toast from 'react-hot-toast';
import Download from '../common/Download';
import TransferSettingsModal from '../common/TransferSettingsModal';
import { IoSparklesSharp } from 'react-icons/io5';
export default function Main() {
  const [step, setStep] = useState(2);
  const [activeTab, setActiveTab] = useState('Link');
  const [showSettings, setShowSettings] = useState(false);

  const handleDownload = () => {
    console.log('Download button clicked!');
  };

  const handleCreateTransfer = () => {
    console.log('Create a transfer link clicked!');
  };

  const copyToClipboard = async () => {
    try {
      const textToCopy = "hello";
      await navigator.clipboard.writeText(textToCopy);
      toast.success("Copied successfully!");
    } catch (err) {
      console.error("Failed to copy: ", err);
      toast.error("Failed to copy text.");
    }
  };

  const handleSettingsClick = () => {
    setShowSettings(true);
  };

  const handleModalClose = () => {
    setShowSettings(false);
  };
  const progress = 25;
  const currentSize = '16.0 MB';
  const totalSize = '612.1 MB';
  const remainingTime = '3m25s';

  const strokeWidth = 8;
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  return (

    <Layout>
      <div className="boxmodel">
        {step === 1 && (
          <div className="box flex items-center justify-center h-[436px]">
            <div className="manage-col">
              <div className='Add rounded-[30px] p-4 mb-6'>
                <MdAdd size={48} />
              </div>
              <p className="para mt-[10px] text-center">
                Let's begin by adding some files
              </p>
              <Link to="#" className="transefer mt-1">
                Or select folder
              </Link>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="box ">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="heading-md mb-1">1 items</h2>
                <p className="para">115.3 KB out of 100 GB</p>
              </div>
              <div className="Add rounded-[5px] flex items-center justify-center">
                <MdAdd size={24} />
              </div>
            </div>
            <div className="flex space-x-8 border-b-2 border-[#0000001F] mt-3">
              {/* Link Tab */}
              <div
                className="manage-col cursor-pointer"
                onClick={() => setActiveTab('Link')}
              >
                <span className={`text-lg font-medium transition-colors duration-200 ${activeTab === 'Link' ? 'text-green-500' : 'text-gray-500'}`}
                >
                  Link
                </span>
                <div className={`mt-1 h-0.5 transition-all duration-200 ${activeTab === 'Link' ? 'bg-green-500 w-full' : 'w-full'}`} >
                  Email
                </div>
              </div>
              {/* Email Tab */}
              <div
                className="manage-col cursor-pointer"
                onClick={() => setActiveTab('Email')}
              >
                <span
                  className={`text-lg font-medium transition-colors duration-200 ${activeTab === 'Email' ? 'text-green-500' : 'text-gray-500'
                    }`} >
                  Email
                </span>
                <div className={`mt-1 h-0.5 transition-all duration-200 ${activeTab === 'Email' ? 'bg-green-500 w-full' : 'w-full'}`}> Link </div>
              </div>
            </div>
            <FileData />
            {activeTab === "Email" && (
              <>
                <input
                  type="email"
                  placeholder="please provide email"
                  className="input"
                />
              </>
            )}

            <input
              type="text"
              placeholder="please provide Title"
              className="input"
            />
            <textarea
              rows={5}
              placeholder="Message"
              className="border-[#646A73] border rounded-[15px] p-2 w-full  resize-none"
            />
            <div className='flex justify-between items-center text-center p-1'>
              <div className="flex items-center space-x-3 p-2" onClick={handleSettingsClick}>
                <MdSettings className="text-black text-xl" />
                <div>
                  <h6 className="heading">
                    Expire on 2/6/2025
                  </h6>
                  <p className="para">
                    No password added
                  </p>
                </div>
              </div>
              <button className="button-sm md:button-md lg:button-lg" onClick={() => activeTab === "Link" ? setStep(3) : setStep(9)}
>
                Create Transfer
              </button>
            </div>
          </div>
        )}
        {showSettings && <TransferSettingsModal onClose={handleModalClose} />}
        {activeTab === "Link" && (
          <>
            {step === 3 && (
              <div className="box flex items-center justify-center ">
                <div className="manage-col p-3 md:p-6  ">
                  <div className="flex justify-center mb-6 relative">
                    <FaLink className="h-28 w-28 text-gray-400 mb-6 " />
                    <IoSparklesSharp className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-gray-400" />
                    <IoSparklesSharp className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 text-gray-400" />
                  </div>
                  <div className="mb-6 text-center">
                    <h2 className="normal-heading">
                      Your link is ready
                    </h2>
                  </div>
                  <p className="para mb-8">
                    The download link for your transfer is available for X days.
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        readOnly
                        value=""
                        className="w-full p-3 pl-6 pr-16 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 font-mono text-sm "
                      />
                      <button
                        onClick={copyToClipboard}
                        className="absolute right-0 top-0 h-full px-4 rounded-r-lg bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors"
                      >
                        <AiOutlineCopy className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <p className="mt-8 para">
                    Need to send more files? <Link to="#" onClick={() => setStep(4) } className="hover:underline">Start new transfer</Link>
                  </p>
                </div>
              </div>
            )}
          </>
        )}
        {step === 4 && (
          <div className="box">
            <Download />
            <FileData step={4} />
            <div className="flex justify-between items-center mt-6 pb-4">
              <button onClick={handleCreateTransfer} className="transefer">
                Create a transfer
              </button>
              <button
                onClick={handleDownload}
                className="button-sm md:button-md lg:-button-lg"
              >
                Download
              </button>
            </div>
          </div>
        )}
        {step === 8 && (
          <div className="box">
            <div className="relative h-40 w-40 mx-auto mb-6">
              <svg className="w-full h-full" viewBox="0 0 140 140">
                <circle
                  cx="70"
                  cy="70"
                  r={radius}
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth={strokeWidth}
                />
                <circle
                  cx="70"
                  cy="70"
                  r={radius}
                  fill="none"
                  stroke="#10B981"
                  strokeWidth={strokeWidth}
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  transform="rotate(-90 70 70)"
                />
              </svg>
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-gray-800">
                {progress}%
              </span>
            </div>

            {/* Text and Button */}
            <div className='manage-col'>
              <h3 className="text-lg font-semibold text-gray-800">Creating your transfer</h3>
              <p className="text-sm text-gray-500 my-1">{currentSize} out of {totalSize}</p>
              <p className="text-xs text-gray-400 mb-6">{remainingTime} remaining</p>
              <button className="button-sm sm:button-md md:button-lg" onClick={()=>{setStep(4)}}>
                Cancel
              </button>
            </div>
          </div>
        )}

        {step === 9 && (
          <div className="box flex items-center justify-center ">
            <div className="manage-col p-3 md:p-6  ">
              <div className="flex flex-col items-center text-center">
                <div className="flex justify-center mb-6 relative">
                  <AiOutlineMail className="h-24 w-24 text-gray-400" />
                  <IoSparklesSharp className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-gray-400" />
                  <IoSparklesSharp className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 text-gray-400" />
                </div>
                <h4 className="normal-heading mb-6">
                  Your transfer has been sent to your recipient(s)
                </h4>
                <button className="button-sm sm:button-md md:button-lg">
                  View transfer
                </button>
              </div>
              <p className="mt-8 para">
                Need to send more files? <Link to="#" className="hover:underline">Start new transfer</Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
