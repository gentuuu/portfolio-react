import './Experience.scss';
import { ExperienceData } from "../../database";


const Experience = () => {
  return (
    <div id="section4" className="section">
      <div className="container">
        <div className="section-content">
          <div className="section-title"><span className="title">Doświadczenie</span></div>
          <div className="section-text">Stanowiska na których pracowałem</div>
          <div className="section-items">
            {ExperienceData.map((val, index) => (
              <div key={index} className="section-item">
                <div className="section-item__name">{val.company}</div>
                <div className="section-item__text">
                  <h2>{val.title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: val.text }} />
                </div>
                <div className="section-item__date">{val.data}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience