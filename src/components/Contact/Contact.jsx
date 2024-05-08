import './Contact.scss';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div id='section7' className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="section-title"><span className="title">Kontakt</span></div>
          <div className="section-text">Kontakt do mnie </div>
          <div className="email"><MdEmail />gentuuu1993@gmail.com</div>
          <div className="social">
            <a href="https://github.com/gentuuu" className="header-social__item"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/kamil-pisula-7099141aa/" className="header-social__item"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact