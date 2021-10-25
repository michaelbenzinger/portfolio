import './MoreProjects.css';
import ProjectSmall from './ProjectSmall';
import projects from './projects.json';

function MoreProjects() {
  return (
    <div className='more-projects'>
      <div className='more-projects__main contained'>
        <h2 className='section-title'>More Projects</h2>
        {/* <a tabIndex="-1" href='https://github.com/michaelbenzinger' target='_blank'>
          <button className='button__large button__blue'>Michael's GitHub</button>
        </a> */}
        <div className='more-projects-showcase'>
          <ProjectSmall props={projects[3]}/>
          <ProjectSmall props={projects[4]}/>
          <ProjectSmall props={projects[5]}/>
          <ProjectSmall props={projects[6]}/>
        </div>
      </div>
    </div>
  );
}

export default MoreProjects;
