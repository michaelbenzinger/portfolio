import './About.css';
import about from './about.json';
import techInfo from './techInfo.json';
import resume from './files/Resume_Benzinger_2021November06.pdf'

function About() {
  return (
    <div className='about'>
      <div className='anchor' id='about'/>
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
      </div>
    </div>
  );
}

export default About;