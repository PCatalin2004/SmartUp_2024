import Header from "./Header.js";
import Footer from "./Footer.js";
import BackToTopButton from "../BackToTop.js";

function Evenimente() {
    return (<>
        <Header />
        <div>
            <center><h1 style={{ marginInline: '11%', marginTop: 30, textAlign: 'center', fontSize: 60 }}>
                Oportunități de job
            </h1>
            </center>
            <div class="row" style={{ marginLeft: '5vw', marginRight: '5vw', marginTop: '3vw' }}>

                <div class="col-md-3 col-sm-12">
                    <center>
                        <a href="https://www.autonom.ro/cariere/job/agent-servicii-client/timisoara" target="_blank" rel="noopener noreferrer">
                            <img src="./parteneri/Autonom_1.png" alt='banana' class='img-sectiune' />
                        </a>
                    </center>   
                    
                </div>  
                <div class="col-md-3 col-sm-12">
                    <center>
                        <a href="https://docs.google.com/document/d/1PoWvDtCveAj0GMzedZ_0ZW6IXCYiIvLm/edit?usp=drive_link&ouid=101544133094313532666&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                            <img src="./parteneri/UniCredit_1.png" alt='banana' class='img-sectiune' />
                        </a>
                    </center>
                    
                </div> 
                
            </div>
        </div>
        <BackToTopButton />
        <Footer />
    </>);
}

export default Evenimente;