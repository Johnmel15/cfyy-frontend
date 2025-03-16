import React, { useState, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [showModal, setShowModal] = useState(isOpen);
  const [animateModal, setAnimateModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setTimeout(() => setAnimateModal(true), 10); // Trigger fadeIn shortly after render
    } else {
      setAnimateModal(false); // Start fadeOut
      setTimeout(() => setShowModal(false), 300); // Match fadeOut duration
    }
  }, [isOpen]);

  if (!showModal) return null;

  return (
    <div className={`fixed inset-0 flex justify-center items-center bg-opacity-50 backdrop-blur-sm z-50 transition-opacity duration-300 ${animateModal ? 'opacity-100' : 'opacity-0'}`}>
      <div
        className={`bg-white p-6 rounded-lg shadow-xl w-full max-w-lg relative transform transition-transform duration-300 ${
          animateModal ? "scale-100" : "scale-95"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
