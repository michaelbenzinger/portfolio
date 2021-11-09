import './Projects.css';
import ProjectLarge from './ProjectLarge';
import projects from './projects.json';

function Projects() {
  return (
    <div className='projects'>
      <div className='anchor' id='work'/>
      <div className='projects__main contained'>
        <h3 className='section-title'>Projects</h3>
        <ProjectLarge props={projects[0]}/>
        <ProjectLarge props={projects[1]}/>
        <ProjectLarge props={projects[2]}/>
      </div>
    </div>
  );
}

export default Projects;
