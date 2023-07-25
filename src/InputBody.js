import './InputBody.css';

function InputBody(){
    return(
        <div className='main-input-container'>
            <input className='inputBox' type='text' placeholder="Google 검색 또는 URL 입력"/>
        </div>
    );
}

export default InputBody;