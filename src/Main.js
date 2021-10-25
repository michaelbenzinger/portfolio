import Hero from './Hero'
import Projects from './Projects'
import MoreProjects from './MoreProjects'
import About from './About'
import Contact from './Contact'

function Main() {
  return (
    <div className='main'>
      <Hero />
      <Projects />
      <MoreProjects />
      <About />
      <Contact />
    </div>
  );
}

export default Main;