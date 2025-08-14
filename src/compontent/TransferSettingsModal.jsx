import { useState } from "react";

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
                <h3 className="normal-heading mb-4">Transfer settings</h3>
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
                            className="w-full input-sm sm:input pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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


                {/* Done Button */}
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