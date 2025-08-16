import React from 'react'

export default function TransferFile({ step, setStep }) {
    const progress = 25;
    const currentSize = '16.0 MB';
    const totalSize = '612.1 MB';
    const remainingTime = '3m25s';

    const strokeWidth = 8;
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;
    return (
        <>
            {step === 4 && (
                <div className=" center-align !h-[576px]">
                    <div className=' '>
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
                                    stroke="#08CF65"
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
                            <h3 className="normal-heading">Creating your transfer</h3>
                            <p className="normal-para mt-2">{currentSize} out of {totalSize}</p>
                            <p className="normal-para  !mb-6">{remainingTime} remaining</p>
                            <button className="button-sm sm:button-md md:button-lg" onClick={() => { setStep(5) }}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
