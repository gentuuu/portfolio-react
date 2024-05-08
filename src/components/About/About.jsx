import './About.scss';
import Omnie from '../../assets/section_01.png';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div id='section2' className="about">
      <div className="container">
        <div className="about-content">
          <div className="section-title"><span className='title'>O mnie</span></div>
          <div className="about-row">
            <div className="about__img">
              <img src={Omnie} alt="" />
            </div>
            <div className="about__text text">
              <h2>Kim jestem</h2>
              Jestem specjalistą w dziedzinie SEO oraz front-endu, z wieloletnim doświadczeniem i zamiłowaniem do optymalizacji stron internetowych oraz tworzenia estetycznych, funkcjonalnych interfejsów użytkownika. Moją pasją jest analizowanie i poprawianie widoczności stron w wyszukiwarkach oraz zapewnianie doskonałych wrażeń dla użytkowników.
              <br /> <br />
              Moje doświadczenie w SEO obejmuje skuteczne pozycjonowanie stron, szczegółową analizę ruchu internetowego oraz opracowywanie strategii optymalizacji treści, które przyciągają i angażują użytkowników. Dzięki tym umiejętnościom mogę zwiększyć widoczność stron internetowych w wynikach wyszukiwania, co przekłada się na wzrost ruchu i konwersji.
              <br /> <br />
              W zakresie front-endu jestem biegły w korzystaniu z nowoczesnych technologii webowych, co pozwala mi tworzyć responsywne i intuicyjne strony internetowe. Dążę do tego, aby każda strona, nad którą pracuję, była nie tylko atrakcyjna wizualnie, ale również łatwa w obsłudze i dostępna na różnych urządzeniach.
              <br /> <br />
              Jako specjalista SEO i front-endu, jestem otwarty na nowe wyzwania i zawsze staram się poszerzać swoje umiejętności. Moje podejście do pracy opiera się na ciągłym doskonaleniu, eksperymentowaniu i uczeniu się nowych technologii oraz trendów w branży. Jestem gotów podjąć się każdego projektu, który wymaga kreatywności, innowacyjności i zaangażowania, aby zapewnić sukces zarówno klientom, jak i użytkownikom końcowym.

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
