import Header from "./Header.js";
import Footer from "./Footer.js";
import BackToTopButton from "../BackToTop";

function Antreprenoriat() {
    return (<>
    <Header/>
    <h1 style={{margin:'2vw'}}><center>Antreprenoriat</center></h1>
    <div class="row" style={{marginLeft:'5vw', marginRight:'5vw'}}>
        <div class="col-md-4 col-sm-8">
            <center>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScoLTaHwdRzhYvXbuRL7on1RrxgxLbSzntVQB_7BF4TSM8wqg/viewform">
                    <img src="./evenimente/sandy.png" alt='banana' class='img-sectiune'/>
                </a>
            </center>
        </div>
        <div class="col-md-4 col-sm-8">
            <center>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdbNSGdJL-lxicnmEIQjEdS0opW4NofP61apiLFRornnI7hGQ/viewform">
                    <img src="./evenimente/tombabe.png" alt='banana' class='img-sectiune'/>
                </a>
            </center>
        </div>
    </div>
    <BackToTopButton />
    <Footer/>
    
    </>);
}
 
export default Antreprenoriat;