import './Hero.css';
import portrait2 from './images/portrait3.JPG';
import about from './about.json';
import techInfo from './techInfo.json';

function Hero() {
  return (
    <div className="hero">
      <div className="anchor" id="home" />
      <div className="contained">
        <div className="hero__container">
          <div className="hero__text">
            <h3 className="hero__title">Michael Benzinger</h3>
            <h1 className="hero__subtitle">Frontend Web Developer</h1>
            <div className="hero__technologies">
              {about.technologies.map(tech => {
                return (
                  <div
                    className="hero__technology"
                    style={{
                      border: '2px solid ' + techInfo[tech].colors[0],
                      color: 'white',
                    }}
                  >
                    {techInfo[tech].full}
                  </div>
                );
              })}
            </div>
            <a href="mailto:michael@benzinger.co">
              <button className="hero__button button__large button__orange">
                michael@benzinger.co
              </button>
            </a>
          </div>
          <div className="hero__img">
            {/* <a href='#contact'> */}
            <img alt="Michael Benzinger" src={portrait2} />
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
