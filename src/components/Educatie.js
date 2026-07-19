import Header from "./Header.js";
import Footer from "./Footer.js";
import BackToTopButton from "../BackToTop";

function Educatie() {
    return (<>
    <Header/>
    <h1 style={{margin:'2vw'}}><center>Educație</center></h1>
    <div class="row" style={{marginLeft:'5vw', marginRight:'5vw'}}>
        <div class="col-md-4 col-sm-8">
            <center>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe_66V4KpGDBpcR65lnDaQ1hRfqvNUOuMS0gPg3IMR9mUatQQ/viewform">
                    <img src="./evenimente/megan.png" alt='banana' class='img-sectiune'/>
                </a>
            </center>
        </div>
        <div class="col-md-4 col-sm-8">
            <center>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeSkmwBRorGWVyouojQ91PoC4LKb1yPONSeZReYq0s0VDh46g/viewform">
                    <img src="./evenimente/lch_gamer.png" alt='banana' class='img-sectiune'/>
                </a>
            </center>
        </div>
    </div>
    <BackToTopButton />
    <Footer/>
    
    </>);
}
 
export default Educatie;