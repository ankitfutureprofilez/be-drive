import React, { useState } from 'react'
import TransferSettingsModal from '../common/TransferSettingsModal'
import { MdAdd } from 'react-icons/md';
import FileData from '../common/FileData';
import { CiSettings } from 'react-icons/ci';

export default function FileTransferForm({ step, setStep  , activeTab, setActiveTab }) {
    const [showSettings, setShowSettings] = useState(false);
    const handleSettingsClick = () => {
        setShowSettings(true);
    };
    const handleModalClose = () => {
        setShowSettings(false);
    };
    return (
        <>
            {step === 2 && (
                <div className="box ">
                    <div className='p-[20px] md:p-[30px]'>
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="heading-md mb-1">1 items</h2>
                                <p className="para !text-[#999999]">115.3 KB out of 100 GB</p>
                            </div>
                            <div className="Add rounded-[15px] flex items-center justify-center p-2">
                                <MdAdd size={24} />
                            </div>
                        </div>
                        <div className="flex space-x-8 border-b-2 border-[#999999] mt-3">
                            {/* Link Tab */}
                            <div
                                className="manage-col cursor-pointer"
                                onClick={() => setActiveTab('Link')}
                            >
                                <span className={`text-[18px] font-medium transition-colors duration-200 ${activeTab === 'Link' ? 'text-[#08CF65]' : 'text-[#999999]'}`}
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
                                    className={`text-lg font-medium transition-colors duration-200 ${activeTab === 'Email' ? 'text-[#08CF65]' : 'text-[#999999]'
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
                            className="border-gray-300 border rounded-[15px] p-2 w-full resize-none"
                        />
                        <div className='flex justify-between items-center text-center pt-[20px]'>
                            <div className='flex items-top space-x-1' onClick={handleSettingsClick}>
                                <CiSettings size={28} className="text-black" />
                                <div>
                                    <h6 className="heading !font-[700]">
                                        Expire on 2/6/2025
                                    </h6>
                                    <p className="normal-para ">
                                        No password added
                                    </p>
                                </div>
                            </div>
                            <button className="button-sm md:button-md lg:button-lg"
                                onClick={() => setStep(3)}>
                                Create Transfer
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {showSettings && <TransferSettingsModal onClose={handleModalClose} />}
        </>
    )
}
