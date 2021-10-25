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
    technologies,
    description,
    linkGithub,
    linkPreview
  } = props.props;

  return (
    <div className="project-small">
      <h3 className="project-small-title">{name}</h3>
      <a href={linkPreview} target='_blank'>
        <img src={images[imgSrc].default}/>
      </a>
      <p className='project-small-description'>{description}</p>
    </div>
  );
}

export default ProjectSmall;