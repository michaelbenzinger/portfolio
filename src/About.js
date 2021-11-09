import './About.css';
import about from './about.json';
// import techInfo from './techInfo.json';
// import resume from './files/Resume_Benzinger_2021November06.pdf'

function About() {
  return (
    <div className='about'>
      <div className='anchor' id='about'/>
      <div className='about__main contained'>
        <h3 className='section-title'>About Me</h3>
        <h2 className='about__headline'>{about.headline}</h2>
      </div>
      <div className='about__traits__container'>
        <div className='about__traits about__traits-1'>
          {about.traits1.map(trait => {
            return <div className='about__trait'>{trait}</div>
          })}
        </div>
        <div className='about__traits about__traits-2'>
          {about.traits2.map(trait => {
            return <div className='about__trait'>{trait}</div>
          })}
        </div>
        <div className='about__traits about__traits-3'>
          {about.traits3.map(trait => {
            return <div className='about__trait'>{trait}</div>
          })}
        </div>
      </div>
      {/* <div className='anchor' id='about'/>
      <div className='about__main contained'>
        <div className='about__left'>
          <h2 className='about__headline'>{about.headline}</h2>
          <article className='about__article'>
          {about.article.split('\n').map(i => {
            return <p>{i}</p>
          })}
          </article>
        </div>
        <div className='about__right'>
        <div className='about__technologies'>
          {about.technologies.map(tech => {
            return <div className='about__technology'
            style={{
                'background-color': techInfo[tech].colors[0],
                'color': techInfo[tech].colors[1]
              }}>{techInfo[tech].full}</div>
          })}
        </div>
        <h3 className='about__tagline'>{about.tagline}</h3>
        <a tabIndex="-1" href={about.emailLink}>
          <button className='about__email button__large button__yellow'>Email</button>
        </a>
        <a href={resume} className='about__resume link-default' target='_blank' rel='noreferrer'>
          Resume (63 kB)
        </a>
        </div>
      </div> */}
    </div>
  );
}

export default About;