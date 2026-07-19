import Header from "./Header.js";
import Footer from "./Footer.js";
import BackToTopButton from "../BackToTop";

function Angajabilitate() {
    return (<>
    <Header/>
    <h1 style={{margin:'2vw'}}><center>Angajabilitate</center></h1>
    <div class="row" style={{marginLeft:'5vw', marginRight:'5vw'}}>
        <div class="col-md-4 col-sm-8">
            <center>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeeXXmOi79JOTpljU_qBZveyUP-oWzb3J_J-4bwBDI2G3Z3uA/viewform">
                    <img src="./evenimente/tudor_cojocariu.png" alt='banana' class='img-sectiune'/>
                </a>
            </center>
        </div>
        <div class="col-md-4 col-sm-8">
            <center>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSffugTh5S-mCTqJcCmombggyazJ1S9b4cvWe3JmwkX33kfQSw/viewform">
                    <img src="./evenimente/erica_neagu.png" alt='banana' class='img-sectiune'/>
                </a>
            </center>
        </div>
        <div class="col-md-4 col-sm-8">
            <center>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeoeWRz3F8SKnOwbTrcRVLlQHAJwqI_krSUdeF3rU22lpdK-g/viewform">
                    <img src="./evenimente/ccoc.png" alt='banana' class='img-sectiune'/>
                </a>
            </center>
        </div>
        <div class="col-md-4 col-sm-8">
            <center>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfu3HwxOBaiSPIfF4ceed9JZFRZFHu1BS0Y_rkHho1cqYgkcA/viewform">
                    <img src="./evenimente/camelia_macsim.png" alt='banana' class='img-sectiune'/>
                </a>
            </center>
        </div>
    </div>
    <BackToTopButton />
    <Footer/>
    
    </>);
}
 
export default Angajabilitate;