import { useState } from "react";
import { MdClose } from "react-icons/md";
const TransferSettingsModal = ({ onClose }) => {
    const [data, setData] = useState({
        password: "",
        date: "",
    })
    const handleChange = (e) => {
        setData((prevalue) => {
            return {
                ...prevalue,
                [e.target.name]: e.target.value
            }
        })
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        onClose();
    }

    return (
        <div className="fixed inset-0 w-full max-w-[435px]  bg-gray-600 bg-opacity-50 flex items-end justify-center p-[3px] z-50 absolute">
            <div className="bg-white w-full max-w-[435px]  rounded-[15px] shadow-xl p-6 animate-slideUp">
                <div className="flex items-center justify-between space-x-3 text-center mb-2">
                    <h3 className="normal-heading text-lg font-semibold text-gray-800">Transfer settings</h3>
                    <div onClick={onClose} className="cursor-pointer text-gray-500 hover:text-gray-700 transition">
                        <MdClose size={24} />
                    </div>
                </div>
                <div className="mb-4 flex items-center justify-between">
                    <label className="text-[18px] font-medium text-black font-bold w-1/3 font-schibsted">
                        Expiration
                    </label>
                    <div className=" w-2/3">
                        <input
                            name="date"
                            value={data?.date}
                            onChange={handleChange}
                            onClick={(e) => e.target.showPicker && e.target.showPicker()}
                            type="date"
                            placeholder="dd/mm/yyyy"
                            className="w-full input-sm sm:input px-3  py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="mb-6 flex items-center justify-between">
                    <label className="text-[18px] font-medium text-black font-bold w-1/3 font-schibsted">
                        Password
                    </label>
                    <input
                        type="text"
                        name="password"
                        value={data?.password}
                        onChange={handleChange}
                        placeholder="Enter a new password..."
                        className="w-2/3 input-sm sm:input px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        onClick={handlesubmit}
                        className=" button-sm md:button-md lg:button-lg"
                    >
                        Done
                    </button>
                </div>
            </div>

        </div>
    );
};

export default TransferSettingsModal;