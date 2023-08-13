import React, { useState } from 'react';
import { Button, Space } from 'antd';

const Header = () => {

    const goTomail = () => {
        window.location.href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox";
    }

    const goToImage = () => {
        window.location.href="https://www.google.com/imghp?hl=ko&tab=ri&ogbl";
    }

    return(
        <div class="flex justify-end mt-4"> 
            <div class="text-sm mr-5 mt-2 hover:underline" onClick={goTomail}>Gmail</div> 
            <div class="text-sm mr-5 mt-2 hover:underline" onClick={goToImage}>이미지</div>
            <div class="text-sm mr-5">
                <img className="w-7 h-7 mt-1 " src="./menu.png" ></img>
            </div>
            <div class="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center mr-5 text-white">
                가영
            </div>
        </div>
    );  
}

export default Header;