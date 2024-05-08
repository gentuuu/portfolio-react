import './Skills.scss';
import HTML from '../../assets/html-5.png';
import CSS from '../../assets/css-3.png';
import SASS from '../../assets/sass.png';
import JS from '../../assets/js.png';
import REACT from '../../assets/react.png';
import PHP from '../../assets/php.png';
import VS from '../../assets/visual-studio.png';
import WP from '../../assets/wordpress.png';
import FIGMA from '../../assets/figma.png';
import PHOTOSHOP from '../../assets/photoshop.png';
import GIT from '../../assets/social.png';
import SEO from '../../assets/seo.png';
import TRELLO from '../../assets/trello.png';

const Skills = () => {
  return (
    <div id="section3" className="skills">
      <div className="container">
        <div className="skills-content">
          <div className="section-title"><span className="title">Umiejętności</span></div>
          <div className="section-text">Umiejętności, narzędzia i technologie pozwalające na efektywne wykonywanie zadań i optymalizację procesów</div>
          <div className="skills-items">
            <div className="skills-item">
              <img src={HTML} alt="" />
              <div className="skills-item__title">HTML</div>
            </div>
            <div className="skills-item">
              <img src={CSS} alt="" />
              <div className="skills-item__title">CSS</div>
            </div>
            <div className="skills-item">
              <img src={SASS} alt="" />
              <div className="skills-item__title">SASS</div>
            </div>
            <div className="skills-item">
              <img src={JS} alt="" />
              <div className="skills-item__title">JavaScript</div>
            </div>
            <div className="skills-item">
              <img src={REACT} alt="" />
              <div className="skills-item__title">React</div>
            </div>
            <div className="skills-item">
              <img src={PHP} alt="" />
              <div className="skills-item__title">PHP</div>
            </div>
            <div className="skills-item">
              <img src={WP} alt="" />
              <div className="skills-item__title">Wordpress</div>
            </div>
            <div className="skills-item">
              <img src={VS} alt="" />
              <div className="skills-item__title">VS</div>
            </div>
            <div className="skills-item">
              <img src={FIGMA} alt="" />
              <div className="skills-item__title">Figma</div>
            </div>
            <div className="skills-item">
              <img src={PHOTOSHOP} alt="" />
              <div className="skills-item__title">Photoshop</div>
            </div>
            <div className="skills-item">
              <img src={GIT} alt="" />
              <div className="skills-item__title">Git</div>
            </div>
            <div className="skills-item">
              <img src={SEO} alt="" />
              <div className="skills-item__title">SEO</div>
            </div>
            <div className="skills-item">
              <img src={TRELLO} alt="" />
              <div className="skills-item__title">Trello</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills