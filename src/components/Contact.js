import React from 'react';
import './Contact.css';


class Contact extends React.Component {
  render () {
    return (
      <div id="contact-container">
        <div id="contact-content">
          <h1>Contact</h1><br />
          <p>Drop me a line at</p>
          <h3><a href="mailto:willpaulryan@gmail.com"><span className="big">willpaulryan</span>@<span className="big">gmail</span>.com</a></h3>
          <br />
          <p>Find me at</p>
          <h4><a href="https://www.linkedin.com/in/willpaulryan/" target="_blank"><span className="big">linkedin</span>.com/in/<span className="big">willpaulryan</span></a></h4>
          <h4><a href="https://github.com/WillPaulRyan" target="_blank"><span className="big">github</span>.com/<span className="big">willpaulryan</span></a></h4>
          <h4><a href="https://codepen.io/willpaulryan" target="_blank"><span className="big">codepen</span>.io/<span className="big">willpaulryan</span></a></h4>
        </div>
      </div>
    )
  }
}

export default Contact;