import './Footer.css';
import links from './links.json';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__main contained'>
        <h3 className='footer-title'>Links</h3>
        <div className='footer-links'>
          {links.map(site => {
            return <a
              className='footer-link link-default'
              href={site.link}>{site.name}
            </a>
          })}
        </div>
        <h4 className='footer-copyright'>© 2021 Michael Benzinger</h4>
      </div>
    </div>
  );
}

export default Footer;
