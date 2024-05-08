import './Projects.scss';
import { FaExternalLinkAlt } from "react-icons/fa";
import { ProjectData } from "../../database";

const Projects = () => {
  return (
    <div id='section6' className="project">
      <div className="container">
        <div className="project-cotnent">
          <div className="section-title"><span className="title">Projekty</span></div>
          <div className="section-text">Projekty nad którymi pracowałem</div>
          <div className="project-items">
            {ProjectData.map((val) => (
              <div key={val.title} className="project-item">
                <div className="project-item__img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="project-item__details">
                  <div className="project-item__title">{val.title}</div>
                  <div className="project-item__text text">{val.text}</div>
                  <div className="project-item__skills">
                    {val.skills.map((skill, index) => (
                      <span key={index}>{skill}</span>
                    ))}
                  </div>
                  <a href={val.link} ><FaExternalLinkAlt /></a>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects