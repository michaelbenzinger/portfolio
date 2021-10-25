import './Contact.css';

function Contact() {
  return (
    <div className='contact'>
      <a className='anchor' id='contact'/>
      <div className='contact__main contained'>
        <h2 className='contact-title'>Contact Me</h2>
        {/* <form>
        <input className='contact-name' type='text' placeholder='Full Name'/>
        <input className='contact-email' type='text' placeholder='Email'/>
        <textarea className='contact-message' placeholder='Message'/>
        <a tabIndex="-1"  href=''>
          <button type='submit' className='button__large button__yellow'>Send Message</button>
        </a>
        </form> */}
        <a className='contact-address link-default' href='mailto:michael@benzinger.co'>
          michael@benzinger.co
        </a>
      </div>
    </div>
  );
}

export default Contact;
