import React, { useState } from 'react'
import Download from '../common/Download'
import FileData from '../common/FileData'
import PasswordModal from '../common/PasswordModal';
import StoragePopup from '../common/StoragePopup';

export default function ReceivedItem({ step }) {
    const [ispassowrd, setIspassword] = useState(false)
    const handleDownload = () => {
        console.log('Download button clicked!');
        setIspassword(true)
    };

    const handleCreateTransfer = () => {
        console.log('Create a transfer link clicked!');
    };
    return (
        <>
            {step === 5 && (
                <div className="box">
                    <Download />
                    <div className='!pt-0 p-[20px] md:p-[30px]'>
                        <FileData step={4} />
                        <div className="flex justify-between items-center mt-6 pb-4">
                            <button onClick={handleCreateTransfer} className="text-[14px] md:text-[18px] text-black font-[600] leading-5 underline">
                                Create a transfer
                            </button>
                            <button
                                onClick={handleDownload}
                                className="button-sm md:button-md lg:-button-lg"
                            >
                                Download
                            </button>
                        </div>
                        <StoragePopup/>
                    </div>
                </div>
            )}
            {ispassowrd && (
                <PasswordModal
                    onClose={() => setIspassword(false)}
                    onConfirm={(enteredPassword) => {
                        console.log('Password entered:', enteredPassword);
                        // Add your password validation logic here
                        setIspassword(false);
                    }}
                />
            )}
        </>
    )
}
