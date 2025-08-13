const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center p-4 z-50">
      <div onClick={onClose} className="fixed inset-0"></div>
      <div onClick={(e) => e.stopPropagation()} className="relative z-10 max-w-7xl w-full">
        {children}
      </div>
    </div>
  );
};