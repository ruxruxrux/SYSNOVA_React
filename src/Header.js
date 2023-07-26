import './Header.css';
import Circle from './Circle';


function Header() {
  return (
    <div className='head-container'>
      <div className='textBox1'>
        Gmail
      </div>
      <div className='textBox2'>
        이미지
      </div>
      
      <img className='imageBox' src={process.env.PUBLIC_URL + '/menu.png'} alt="Menu"></img>

      <div className='circleBox'>
        <Circle/>
      </div>
      
    </div>
  );
}

export default Header;
