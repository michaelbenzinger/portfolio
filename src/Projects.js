import './Projects.css';
import ProjectLarge from './ProjectLarge';
import projects from './projects.json';

function Projects() {
  return (
    <div className='projects'>
      <a className='anchor' id='work'/>
      <div className='projects__main contained'>
        <h2 className='section-title'>My Work</h2>
        <ProjectLarge props={projects[0]}/>
        <ProjectLarge props={projects[1]}/>
        <ProjectLarge props={projects[2]}/>
      </div>
    </div>
  );
}

export default Projects;
