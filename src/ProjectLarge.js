import techInfo from './techInfo';
import github from './images/github-32.png';

function importAll(r) {
  let images = {};
   r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

function ProjectLarge(props) {
  const {
    imgSrc,
    name,
    technologies,
    description,
    linkGithub,
    linkPreview
  } = props.props;

  return (
    <div className="project-large">
      <div className='project-large__left'>
        <a href={linkPreview} target='_blank' rel='noreferrer'>
          <img alt={`Preview of ${name}`}src={images[imgSrc].default}/>
        </a>
      </div>
      <div className='project-large__right'>
        <h2 className='project-large__title'>{name}</h2>
        <div className='project-large__technologies'>
        {technologies.map(tech => {
          return <div className='project-large__technology'
          style={{
              'background-color': techInfo[tech].colors[0],
              'color': techInfo[tech].colors[1]
            }}>{tech}</div>
        })}
        </div>
        <p className='project-large__description'>{description}</p>
        <a tabIndex="-1" href={linkPreview} target='_blank' rel='noreferrer'>
          <button className='project-large__preview button__yellow'>Live Preview</button>
        </a>
        <a tabIndex="-1" href={linkGithub} target='_blank' rel='noreferrer'>
          <button className='project-large__github'>
            <img alt='' src={github}/> <span>Github</span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectLarge;