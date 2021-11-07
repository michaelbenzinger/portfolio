import './Footer.css';
import links from './links.json';
import resume from './files/Resume_Benzinger_2021November06.pdf'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__main contained'>
        <h3 className='footer-title'>Links</h3>
        <div className='footer-links'>
          {links.map(site => {
            return <a
              className='footer-link link-default'
              target='_blank'
              rel='noreferrer'
              href={site.link}>{site.name}
            </a>
          })}
          <a href={resume} className='footer-link link-default' target='_blank' rel='noreferrer'>
            Resume (63 kB)
          </a>
        </div>
        <h4 className='footer-copyright'>© 2021 Michael Benzinger | Built with React</h4>
      </div>
    </div>
  );
}

export default Footer;
