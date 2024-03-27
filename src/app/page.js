import './globals.css'; 
import Image from 'next/image'; 
import image from '/public/pumpkin.png'; 

export default function Home() {
  return (
    <div className='container'>
      <header className='header'>
        <div className='header-logo'>
          <h1>K</h1>
          <span>Kreed</span>
        </div>
        <nav>
          <a href='#'>Home</a>
          <a href='/about'>About us</a>
          <a href='#'>How it Works</a>
          <a href='#'>Contact</a>
        </nav>

        <button>Login</button>
      </header>
      <div className='section-wrapper'>  
        <div className='left-section' >
          <h1>ghost in the shell</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>

          <button>Watch Now</button>
        </div>

        <div className='section-img'>
          <Image src={image} alt="Pumpkin Rasm" width={300} height={200} />
        </div>
      </div>
    </div>
  );
}
