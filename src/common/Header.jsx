import React from 'react'

export default function Header() {
    return (
        <>
            <div className="absolute top-6 left-6 flex items-center space-x-2 bg-white rounded-[15px] px-3 py-2 text-center">
                <img src="/logo.png" alt="Drime Logo" className="w-15 h-15 object-cover " />
            </div>

            {/* Top right buttons */}
            <div className="absolute top-6 right-6 flex space-x-3 bg-white px-3 py-2 rounded-[15px]">
                <button className="font-schi py-2 lg:px-3 lg:py-1 md:px-5 md:py-2.5 sm:px-4 sm:py-1.5 w-full font-[600] rounded-md text-black text-center cursor-pointer">
                    Learn more
                </button>
                <button className="button lg:button-lg md:button-md whitespace-nowrap">
                    Get Started for Free
                </button>
            </div>

        </>
    )
}
