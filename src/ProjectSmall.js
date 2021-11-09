import techInfo from './techInfo';
import github from './images/github-32-white.png';

function importAll(r) {
  let images = {};
   r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

function ProjectSmall(props) {
  const {
    imgSrc,
    name,
    technologiesShort,
    descriptionShort,
    linkGithub,
    linkPreview
  } = props.props;

  return (
    <a href={linkPreview} target='_blank' rel='noreferrer'>
      <div className="project project-small">
        <div className="project__left">
          <div className="project__left__title-bar">
            <h2 className='project__title'>{name}</h2>
            <div className='project__technologies'>
              {technologiesShort.map(tech => {
                return <div className='project__technology'
                style={{
                    'background-color': techInfo[tech].colors[0],
                    'color': techInfo[tech].colors[1]
                  }}>{tech}</div>
              })}
            </div>
            <a href={linkGithub} target='_blank' rel='noreferrer' className='project-small__github'>
              <img alt='' src={github}/>
            </a>
          </div>
          <p className='project__description'>{descriptionShort}</p>
        </div>
        <div className="project__right">
          <div style={{'background-image': `url("${images[imgSrc].default}")`}} className='project__img__container'>
            {/* <img className='project-large__img' alt={`Preview of ${name}`}src={images[imgSrc].default}/> */}
          </div>
        </div>
      </div>
    </a>
  );
}

export default ProjectSmall;