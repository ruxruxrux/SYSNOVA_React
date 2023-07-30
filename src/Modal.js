import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  if (!isOpen) return null;

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleCancel = () => {
    setName('');
    setUrl('');
    onClose();
  };

  const handleSubmit = () => {
    setName('');
    setUrl('');
    onClose();
  };


  const isSubmitDisabled = name.trim() === '' || url.trim() === '';

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded-lg w-2/6">
            
            <p>바로가기 추가</p>

            <p className='text-xs mt-1 mb-1'>이름</p>
            <input
              className="w-full bg-neutral-100 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-500 px-2 text-sm"
              type='text'
              value={name}
              onChange={handleNameChange}
            />
            
            <p className='text-xs mt-3 mb-1'>URL</p>
            <input
              className="w-full bg-neutral-100 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-500 px-2 text-sm"
              type='text'
              value={url}
              onChange={handleUrlChange}
            />

            <div className="flex justify-end mt-4">
              
              <button className="border border-gray-300 text-blue-500 px-4 py-2 rounded-lg text-xs w-16 h-8 mr-2" onClick={handleCancel}>
                취소
              </button>

              <button
                disabled={isSubmitDisabled}
                className={`mr-2 ${isSubmitDisabled ? 'bg-gray-200 text-gray-500' : 'bg-blue-500 text-white'} px-4 py-2 rounded-lg text-xs w-16 h-8`}
                onClick={handleSubmit}
              >
                완료
              </button>
            </div>
        </div>
    </div>
  );
};

export default Modal;
