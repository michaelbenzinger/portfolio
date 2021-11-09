import ProjectSmall from './ProjectSmall';
import projects from './projects.json';

function MoreProjects() {
  return (
    <div className='more-projects'>
      <div className='more-projects__main contained'>
        <h3 className='section-title'>More Projects</h3>
        {/* <a tabIndex="-1" href='https://github.com/michaelbenzinger' target='_blank' rel='noreferrer'>
          <button className='button__large button__blue'>Michael's GitHub</button>
        </a> */}
        <div className='more-projects-showcase'>
          <ProjectSmall props={projects[3]}/>
          <ProjectSmall props={projects[4]}/>
        </div>
      </div>
    </div>
  );
}

export default MoreProjects;
