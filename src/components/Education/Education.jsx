import { EducationData } from "../../database";


const Education = () => {
  return (
    <div id="section5" className="section">
      <div className="container">
        <div className="section-content">
          <div className="section-title"><span className="title">Edukacja</span></div>
          <div className="section-text">Edukacja to podstawa mojego zawodowego rozwoju</div>
          <div className="section-items">
            {EducationData.map((val) => (
              <div key={val.title} className="section-item">
                <div className="section-item__name">{val.name}</div>
                <div className="section-item__text">
                  <h2>{val.title}</h2>
                  <p className='text'>{val.text}</p>
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

export default Education