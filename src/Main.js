import Hero from './Hero'
import Projects from './Projects'
import MoreProjects from './MoreProjects'
import About from './About'

function Main() {
  return (
    <div className='main'>
      <Hero />
      <Projects />
      <MoreProjects />
      <About />
    </div>
  );
}

export default Main;