import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
// import Headerimg from '../../assets/image2.jpg'
import './Header.scss';

const Header = () => {
  return (
    <div id="section1" className="header">
        <div className="container">
            <div className="header-content">
                <h1>Nazywam się Kamil Pisula</h1>
                <div className="text">
                    Jestem specjalistą SEO i front-endu, z pasją do optymalizacji stron internetowych i tworzenia atrakcyjnych interfejsów użytkownika. Posiadam umiejętności w zakresie pozycjonowania, analizy ruchu oraz optymalizacji treści, co przekłada się na skuteczne strategie SEO. Moje umiejętności front-endowe obejmują biegłość w korzystaniu z technologii webowych, projektowaniu responsywnych i intuicyjnych stron internetowych. Jako specjalista SEO i front-endu, jestem gotów podejmować się nowych wyzwań i stale rozwijać swoje umiejętności, aby przyczyniać się do sukcesu projektów.                </div>
                <div className="header-social">
                    <a href="https://github.com/gentuuu" className="header-social__item"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/kamil-pisula-7099141aa/" className="header-social__item"><FaLinkedin /></a>
                </div>
            </div>
            {/* <div className="header-img">
                <img src={Headerimg} alt="" />
            </div> */}
        </div>
    </div>
  )
}

export default Header
