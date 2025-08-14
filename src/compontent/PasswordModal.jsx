import React, { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5'; // Using an icon from Ionicons for the close button

const PasswordModal = ({ onClose, onConfirm }) => {
  const [password, setPassword] = useState('');

  const handleInputChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmClick = () => {
    // if (password) {
    //   onConfirm(password);
    // } else {
    //   toast.err('Please enter a password.');
    // }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="box">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-bold text-gray-800">Enter the password</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <IoCloseSharp className="h-6 w-6" />
          </button>
        </div>
        {/* Modal Body */}
        <div className="p-4">
          <p className="text-sm text-gray-600 mb-4">
            To access this link, you will need its password. If you do not have
            the password, contact the creator of the link.
          </p>
          <input
            type="password"
            placeholder="Enter the password"
            value={password}
            onChange={handleInputChange}
            className="inut-sm  sm:input"
          />
        </div>
        {/* Modal Footer */}
        <div className="flex justify-end items-center p-4 space-x-2 border-t">
          <button onClick={onClose} className="px-4 py-2 text-white bg-red-600 rounded-lg font-medium hover:bg-red-500 transition-colors">
            Cancel
          </button>
          <button
            onClick={handleConfirmClick}
            className="button-sm md:button-md lg:button-lg "
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordModal;