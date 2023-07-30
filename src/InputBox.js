import React, { useState } from 'react';

const InputBox = () => {
  const [searchText, setSearchText] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchGoogle();
    }
  };

  const searchGoogle = () => {
    if (searchText.trim() !== '') {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchText)}`;
      window.location.href = searchUrl;
    }
  };

  return (
    <div className="flex justify-center items-center relative">
      <input
        type="text"
        className="w-5/12 rounded-full mt-10 px-10 py-2 shadow shadow-gray-400 focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Google 검색 또는 URL 입력"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default InputBox;
