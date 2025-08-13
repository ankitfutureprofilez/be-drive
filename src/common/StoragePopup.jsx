import React, { useState } from 'react';
import { FaCloudUploadAlt, FaLock, FaLink, FaChartBar, FaFilePdf, FaCheck } from 'react-icons/fa';
import { RiCloseFill } from 'react-icons/ri';
import { IoShareSocialSharp } from 'react-icons/io5';

const StoragePopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [passwordProtected, setPasswordProtected] = useState(false);
    const [linkExpiration, setLinkExpiration] = useState(false);
    const [track, setTrack] = useState(false);

    const handleCopyLink = () => {
        navigator.clipboard.writeText('https://app.drime.cloud/drive/is/qy964TP1C7dO1F...');
        alert('Link copied to clipboard!');
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
            >
                Open Popup
            </button>

            {isOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-40"
                        onClick={() => setIsOpen(false)}
                    ></div>

                    {/* Popup Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col lg:flex-row">

                            {/* Left Section */}
                            <div className="flex-1 p-8 lg:p-12 flex flex-col space-y-6 relative bg-[#8282e9]">
                                <button
                                    className="absolute top-6 left-6 text-gray-400 hover:text-gray-600"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <RiCloseFill className="w-6 h-6" />
                                </button>

                                {/* Storage Card */}
                                <div className="bg-white p-6 rounded-2xl flex flex-col items-center">
                                    <div className="flex items-center space-x-4 mb-4 ">
                                        <FaCloudUploadAlt className="w-12 h-12 text-indigo-600 opacity-70" />
                                        <div className="text-xl font-semibold">1.3 TB / 2 TB</div>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                                    </div>
                                </div>

                                {/* Link Management Card */}
                                <div className="bg-gray-50 p-6 rounded-2xl space-y-4">
                                    {[
                                        { icon: FaLock, label: 'Password protect', state: passwordProtected, setter: setPasswordProtected },
                                        { icon: FaLink, label: 'Link expiration', state: linkExpiration, setter: setLinkExpiration },
                                        { icon: FaChartBar, label: 'Track', state: track, setter: setTrack },
                                    ].map((item, index) => (
                                        <div key={index} className="flex justify-between items-center">
                                            <div className="flex items-center space-x-3">
                                                <item.icon className="text-gray-400" />
                                                <span>{item.label}</span>
                                            </div>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="sr-only peer"
                                                    checked={item.state}
                                                    onChange={() => item.setter(!item.state)}
                                                />
                                                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-indigo-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                                            </label>
                                        </div>
                                    ))}

                                    {/* Copy Link */}
                                    <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden mt-4">
                                        <input
                                            type="text"
                                            readOnly
                                            value="https://app.drime.cloud/drive/is/qy964TP1C7dO1F..."
                                            className="flex-grow p-4 text-sm font-mono bg-white focus:outline-none"
                                        />
                                        <button
                                            onClick={handleCopyLink}
                                            className="p-4 bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                                            title="Copy link"
                                        >
                                            <IoShareSocialSharp className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Document Preview Card */}
                                <div className="bg-gray-50 p-6 rounded-2xl flex items-center justify-between space-x-4">
                                    <FaFilePdf className="w-16 h-16 text-gray-400" />
                                    <div className="flex-grow space-y-2">
                                        <div className="w-full h-3 bg-gray-300 rounded-full"></div>
                                        <div className="w-3/4 h-3 bg-gray-300 rounded-full"></div>
                                    </div>
                                    <div className="font-semibold text-lg text-gray-800" style={{ fontFamily: 'Dancing Script, cursive' }}>
                                        Peter Smith
                                    </div>
                                </div>
                            </div>

                            {/* Right Section */}
                            <div className="bg-white text-black p-8 lg:p-12 flex-1 flex flex-col justify-center space-y-6">
                                <h2 className="text-4xl font-bold mb-6">Want to store your content?</h2>
                                {[{
                                    title: '20GB of secure, high-quality storage',
                                    description: 'No compression. No clutter. Just reliable cloud storage built for your biggest ideas.',
                                }, {
                                    title: 'Custom share links with full control',
                                    description: 'Set passwords, expiration dates, and track every document you share.',
                                }, {
                                    title: 'PDF-ready. Feedback-ready.',
                                    description: 'Fill, sign, edit and comment, all in one place, no tool switching.',
                                }].map((item, idx) => (
                                    <div key={idx} className="flex items-start space-x-3">
                                        <FaCheck className="w-6 h-6 text-green-400 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-xl">{item.title}</h3>
                                            <p className="text-gray-600 mt-1">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                                <button className="button-sm md:button-md lg:button-lg ">
                                    Get started for free
                                </button>
                            </div>

                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default StoragePopup;
