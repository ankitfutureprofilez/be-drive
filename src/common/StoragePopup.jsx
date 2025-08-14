import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa'; // Assuming you have this installed
import { RiCloseFill } from 'react-icons/ri';

const StoragePopup = () => {
    const features = [
        {
            title: '20GB of secure, high-quality storage',
            description: 'No compression. No clutter. Just reliable cloud storage built for your biggest ideas.',
        },
        {
            title: 'Custom share links with full control',
            description: 'Set passwords, expiration dates, and track every document you share.',
        },
        {
            title: 'PDF-ready. Feedback-ready.',
            description: 'Fill, sign, edit and comment, all in one place, no tool switching.',
        },
    ];

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
            >
                Open Popup
            </button>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-auto flex flex-col lg:flex-row max-h-[90vh]">
                        <div className="flex-1 flex flex-col relative  ">
                            {/* Close icon */}
                            <button
                                className="absolute top-6 left-6 text-black hover:text-red-500"
                                onClick={() => setIsOpen(false)}
                            >
                                <RiCloseFill size={32} />
                            </button>

                            <img
                                src="/unnamed.png"
                                alt="A visual representation of cloud storage"
                                className="w-full h-full object-cover"
                            />
                        </div>


                        <div className="bg-white text-black p-4 md:p-8 lg:p-12 flex-1 flex flex-col justify-center space-y-6">
                            <h2 className="text-4xl font-bold mb-3 md:mb-6">Want to store your content?</h2>
                            {features.map((item, idx) => (
                                <div key={idx} className="flex items-start md: space-x-3">
                                    <FaCheck className="w-6 h-6 text-green-400 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-xl">{item.title}</h3>
                                        <p className="text-gray-600 mt-1">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                            <button className="button-sm md:button-md lg:button-lg">
                                Get started for free
                            </button>
                        </div>

                    </div>
                </div>)
            }
        </>
    );
};

export default StoragePopup;