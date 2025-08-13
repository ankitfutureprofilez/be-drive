
const TransferSettingsModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-end justify-center p-[160px] z-50">
            <div className="bg-white w-full max-w-[435px] rounded-t-2xl shadow-xl p-6 animate-slideUp">
                <h3 className="normal-heading mb-4">Transfer settings</h3>
                <div className="mb-4 flex items-center justify-between">
                    <label className="text-[18px] font-medium text-black font-bold w-1/3 font-schibsted">
                        Expiration
                    </label>
                    <div className=" w-2/3">
                        <input
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
                        placeholder="Enter a new password..."
                        className="w-2/3 input-sm sm:input px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>


                {/* Done Button */}
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
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