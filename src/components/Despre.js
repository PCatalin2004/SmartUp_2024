import Header from "./Header.js";
import Footer from "./Footer.js";
import Team from "./Team";
import BackToTopButton from "../BackToTop";

function Despre() {
  return (<>
    <Header />
    <br />
    <div class="row" style={{ margin: '7vh' }}>
      <div class="col-md-6 col-sm-12" style={{ alignContent: 'center' }}>
        <center><img src="background.jpg" alt='banana' class='img-despre' /></center>
      </div>
      <div class="col-md-6 col-sm-12" style={{ alignContent: 'center' }}>
        <div>
          <center><h1>Cum a luat naștere SmartUP Timișoara</h1></center>
          <p style={{ marginTop: '1vw' }}>
            SmartUp a apărut ca o inițiativă a studenților din Organizația Studenților din Universitatea de Vest din Timișoara (OSUT), care și-au propus să dea o nouă înfățișare proiectului cunoscut ca Abecedarul Carierei. Scopul SmartUp este acela de a ajuta tinerii să-și construiască o carieră de succes și de a se dezvolta cât mai armonios, atât pe plan profesional, cât și personal. Obiectivele sunt atinse prin intermediul noilor evenimente aduse acestei ediții:
          </p>
        </div>

      </div>
    </div>
    <div class="row" style={{ margin: '7vh' }}>
      <div class="col-md-6 col-sm-12" style={{ alignContent: 'center' }}>
        <div style={{ marginBottom: '5vh' }}>
          <center><h1>Simularea de interviu</h1></center>
          <p>
            Este un instrument esențial în procesul de pregătire pentru angajare sau pentru alte evaluări profesionale. Sesiunile practice pe care le susținem, oferă participanților oportunitatea de a experimenta întrebări și scenarii similare cu cele dintr-un interviu real. Totodată, participarea la simulările de interviuri ajută la creșterea încrederii de sine și la acumularea experienței.
          </p>
        </div>

        <div style={{ marginBottom: '0vh' }}>
          <center><h1>Conferințe</h1></center>
          <p>
            Descoperă secretele succesului în antreprenoriat! Alătură-te conferinței noastre și conectează-te cu oameni de afaceri remarcabili, gata să împărtășească experiențe și sfaturi prețioase pentru drumul tău antreprenorial.
          </p>
        </div>

      </div>
      <div class="col-md-6 col-sm-12" style={{ alignContent: 'center' }}>
        <center><img src="background_2.jpg" alt='banana' class='img-despre' /></center>
        <a href="https://www.facebook.com/calin.oniea"><img src="./img/banana.png" class='banana' alt='banana' /></a>
      </div>
    </div>


    <div class="row" style={{ display: 'flex', justifyContent: 'center', marginBottom:60 }}>
      <div class="box-prize">
        <img src="prize.png" style={{ width: '7rem', margin: '5%' }} alt="banana"></img>
        <p style={{ fontSize: 20, marginInline: 15, textAlign: 'center' }}>Cel mai bun proiect în domeniul dezvoltare economică și socială (2015) Acordat de Fundația Județeană pentru Tineret Timiș</p>
      </div>
      <div class="box-prize">
        <img src="prize.png" style={{ width: '7rem', margin: '5%' }} alt="banana"></img>
        <p style={{ fontSize: 20, marginInline: 15, textAlign: 'center' }}>Cel mai bun proiect în domeniul muncă și angajabilitate (2016) Acordat de Fundația Județeană pentru Tineret Timiș</p>
      </div>
      <div class="box-prize">
        <img src="prize.png" style={{ width: '7rem', margin: '5%' }} alt="banana"></img>
        <p style={{ fontSize: 20, marginInline: 15, textAlign: 'center' }}>Cel mai bun proiect de și pentru tineret din județul Timiș la categoria Ocupare și antreprenoriat (2017) Acordat de Fundația Județeană pentru Tineret Timiș</p>
      </div>
    </div>
    <Team />
    <BackToTopButton />
    <Footer />
  </>);
}

export default Despre;