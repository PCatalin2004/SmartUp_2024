import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
///import { Link } from 'react-router-dom';
import BackToTopButton from "../BackToTop";

function Sectiuni() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024, // Large devices like desktops
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768, // Medium devices like tablets
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500, // Small devices like phones
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  
  return (<>
    <Header />
    <div className="main-content">
      <center><h1 style={{ marginInline: '11%', marginTop: 30, textAlign: 'center', fontSize: 60 }}>SmartUp Timișoara</h1></center>
      <p style={{ marginInline: '11%', marginTop: 20, textAlign: 'center', fontSize: 20 }}>
        SmartUp Timișoara reprezintă determinarea de a explora inovația, curajul de a-ți construi cariera visurilor tale și oportunitatea de a te dezvolta, devenind cea mai bună versiune a ta! Ediția cu numărul 10 este una cu totul specială: venim de această dată cu o formă actualizată a proiectului, care aduce o schimbare radicală prin intermediul noilor noastre evenimente:
      </p>
      <div class="row" style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>

        <div class="box">
          <img src="angajabilitate.png" style={{ width: 150, marginBottom: 10, marginTop: 10 }} alt="banana"></img>
          <h2>Simulări de<br></br>interviuri</h2>
          <div style={{ height: '160px', display: 'grid', placeItems: 'center' }}>
            <p style={{ marginInline: 30, textAlign: "center" }}>
              Testează-ți cunoștințele în fața angajatorilor care doresc sa îți ofere oportunitatea de a-ți urma visul!
            </p>
          </div>
          {/* <Link to="/angajabilitate"><button class="btn6">Vezi mai multe</button></Link> */}
        </div>

        <div class="box">
          <img src="educatie.png" style={{ width: 150, marginBottom: 10, marginTop: 10 }} alt="banana"></img>
          <h2 style={{ marginTop: 15 }}>Conferințe</h2>
          <div style={{ height: '160px', display: 'grid', placeItems: 'center' }}>
            <p style={{ marginInline: 30, textAlign: "center", marginTop: 36 }}>
              Învață de la antreprenori de succes, pregătiți să împărtășească ideile și experiențele în afaceri.
            </p>
          </div>
          {/* <Link to="/antreprenoriat"><button class="btn6">Vezi mai multe</button></Link>  */}
        </div>

        <div class="box">
          <img src="antreprenoriat.png" style={{ width: 150, marginBottom: 10, marginTop: 10 }} alt="banana"></img>
          <h2>Oportunități de<br></br>job</h2>
          <div style={{ height: '160px', display: 'grid', placeItems: 'center' }}>
            <p style={{ marginInline: 30, textAlign: "center", marginTop: -35 }}>
              To be announced....
            </p>
          </div>
          {/* <Link to="/educatie"><button class="btn6">Vezi mai multe</button></Link>  */}
        </div>

      </div>



      <div className="slider-container">
        <Slider {...settings}>

          <center>
            <a href={"https://careers.theaccessgroup.com/"} target="_blank" rel="noopener noreferrer">
              <img src="./parteneri/Access_1.png" className="carousel-image" alt="Antreprenoriat" />
            </a>
          </center>

          <center>
            <a href={"https://www.adecco.ro/"} target="_blank" rel="noopener noreferrer">
              <img src="./parteneri/Adecco_1.png" className="carousel-image" alt="Antreprenoriat" />
            </a>
          </center>

          <center>
            <a href={"https://amdaris.com/job-location/romania/timisoara/"} target="_blank" rel="noopener noreferrer">
              <img src="./parteneri/Amdaris_1.png" className="carousel-image" alt="Antreprenoriat" />
            </a>
          </center>

          <center>
            <a href={"https://atos.net/ro/romania/"} target="_blank" rel="noopener noreferrer">
              <img src="./parteneri/Atos_1.png" className="carousel-image" alt="Antreprenoriat" />
            </a>
          </center>

          <center>
            <a href={"https://www.autonom.ro/"} target="_blank" rel="noopener noreferrer">
              <img src="./parteneri/Autonom_1.png" className="carousel-image" alt="Antreprenoriat" />
            </a>
          </center>

          <center>
            <a href={"https://www.continental.com/ro-ro/cariera/myjobisdone/testimoniale-romania/timisoara/"} target="_blank" rel="noopener noreferrer">
              <img src="./parteneri/Conti_1.png" className="carousel-image" alt="Antreprenoriat" />
            </a>
          </center>

          <center>
            <a href={"https://www2.deloitte.com/ro/ro.html"} target="_blank" rel="noopener noreferrer">
              <img src="./parteneri/Deloitte_1.png" className="carousel-image" alt="Antreprenoriat" />
            </a>
          </center>

          <center>
            <a href={"https://fitt.ro/"} target="_blank" rel="noopener noreferrer">
              <img src="./parteneri/FITT_1.png" className="carousel-image" alt="Antreprenoriat" />
            </a>
          </center>

          <center>
            <a href={"https://globalmediaproduction.eu/"} target="_blank" rel="noopener noreferrer">
              <img src="./parteneri/GMP_1.png" className="carousel-image" alt="Antreprenoriat" />
            </a>
          </center>

          <center>
            <a href={"https://jobs.hamilton.ch/ro/locations/timisoara-romania/"} target="_blank" rel="noopener noreferrer">
              <img src="./parteneri/Hamilton_1.png" className="carousel-image" alt="Antreprenoriat" />
            </a>
          </center>

          <center>
            <a href={"https://www.haufegroup.com/en"} target="_blank" rel="noopener noreferrer">
              <img src="./parteneri/haufegroup_1.png" className="carousel-image" alt="Antreprenoriat" />
            </a>
          </center>

          <center>
            <a href={"https://www.lifeinjob.ro/ro/"} target="_blank" rel="noopener noreferrer">
              <img src="./parteneri/LifeInJobs_1.png" className="carousel-image" alt="Antreprenoriat" />
            </a>
          </center>

          <center>
            <a href={"https://www.msg-systems.ro/"} target="_blank" rel="noopener noreferrer">
              <img src="./parteneri/MSG_1.png" className="carousel-image" alt="Antreprenoriat" />
            </a>
          </center>

          <center>
            <a href={"https://norvismusic.com/"} target="_blank" rel="noopener noreferrer">
              <img src="./parteneri/NorvisMusic_1.png" className="carousel-image" alt="Antreprenoriat" />
            </a>
          </center>

          <center>
            <a href={"https://www.te.com/en/home.html/"} target="_blank" rel="noopener noreferrer">
              <img src="./parteneri/TE conectivity_1.png" className="carousel-image" alt="Antreprenoriat" />
            </a>
          </center>

          <center>
            <a href={"https://www.tombabe.ro/"} target="_blank" rel="noopener noreferrer">
              <img src="./parteneri/Tombabe_alb_1.png" className="carousel-image" alt="Antreprenoriat" />
            </a>
          </center>

          <center>
            <a href={"https://www.unicredit.ro/"} target="_blank" rel="noopener noreferrer">
              <img src="./parteneri/UniCredit_1.png" className="carousel-image" alt="Antreprenoriat" />
            </a>
          </center>

        </Slider>
      </div>
    </div>





    <BackToTopButton />
    <Footer />
  </>);
}

export default Sectiuni;