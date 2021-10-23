function ProjectLarge(props) {
  const {
    imgSrc,
    name,
    technologies,
    description,
    linkGithub,
    linkPreview
  } = props.props;

  function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

  console.log(images[imgSrc].default);

  return (
    <div className="project-large">
      <div className='project-large__left'>
        <img src={images[imgSrc].default}></img>
      </div>
      <div className='project-large__right'>
        <h2 className='project-large__title'>{name}</h2>
        <div className='project-large__technologies'>
        {technologies.map(tech => {
          return <div className='project-large__technology'
            style={{
              'background-color': tech.colors[0],
              'color': tech.colors[1]
            }}>{tech.name}</div>
        })}
        </div>
        <p className='project-large__description'>{description}</p>
        <button className='project-large__github' href={linkGithub}>View on Github</button>
        <button className='project-large__preview' href={linkPreview}>Live Preview</button>
      </div>
    </div>
  );
}

export default ProjectLarge;