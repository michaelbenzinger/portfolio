import './Hero.css';
import portrait from './images/portrait.jpg'

function Hero() {
  return (
    <div className='hero'>
      <a className='anchor' id='home'/>
      <div className='contained'>
        <div className='hero__container'>
          <div>
            <h1 className='hero__title'>Michael Benzinger</h1>
            <h2 className='hero__subtitle'>Front-End Web Developer – Chicago</h2>
          </div>
          <div className='hero__line'/>
          <div>
            {/* <a href='#contact'> */}
              <img alt='Photo of Michael Benzinger' className='hero__img' src={portrait}/>
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
