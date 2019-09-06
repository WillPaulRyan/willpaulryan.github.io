import React from 'react';
import './Contact.css';


class Contact extends React.Component {
  render () {
    return (
      <div id="contact-content">
        <h1>Contact</h1><br />
        <p>Drop me a line at</p>
        <a href="mailto:willpaulryan@gmail.com"><h3><span className="big">willpaulryan</span>@<span className="big">gmail</span>.com</h3></a>
        <br />
        <p>Find me at</p>
        <a href="https://www.linkedin.com/in/willpaulryan/"><h4><span className="big">linkedin</span>.com/in/<span className="big">willpaulryan</span></h4></a>
        <a href="https://github.com/WillPaulRyan"><h4><span className="big">github</span>.com/<span className="big">willpaulryan</span></h4></a>
        <a href="https://codepen.io/willpaulryan"><h4><span className="big">codepen</span>.io/<span className="big">willpaulryan</span></h4></a>
      </div>
    )
  }
}

export default Contact;