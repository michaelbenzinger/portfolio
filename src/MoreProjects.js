import './MoreProjects.css';
import ProjectLarge from './ProjectLarge';
import projects from './projects.json';

function MoreProjects() {
  return (
    <div className='more-projects'>
      <div className='more-projects__main contained'>
        <h2 className='section-title'>More Projects</h2>
        <a href='https://github.com/michaelbenzinger' target='_blank'>
          <button className='button__large button__blue'>Michael's GitHub</button>
        </a>
      </div>
    </div>
  );
}

export default MoreProjects;
