import React, { useState } from 'react';
import Modal from './Modal';

const Shortcut = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    
  };

  return (
    <div className="flex justify-center items-center">
        <div className="w-24 h-24 mt-10 flex flex-col items-center hover:bg-gray-100 cursor-pointer" onClick={openModal}>
            <div className="w-12 h-12 mt-3 rounded-full bg-gray-200 text-xl flex items-center justify-center">+</div>
            <div className="text-sm mt-3 text-gray-600">바로가기 추가</div>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Shortcut;
