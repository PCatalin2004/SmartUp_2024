import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div class="row">
          <div class="col-md-4 col-sm-3">
            <center><p>Proiect marca:</p></center>
            <center><img src="Logo OSUT alb.png" class='img-footer' alt="banana" style={{width: 200, position: 'relative', top: '-15px', margin: 0, padding: 0 }}/></center>
          </div>

          <div class="col-md-4 col-sm-4">
            <h2 style={{marginBottom:'2%'}}>Contactează-ne</h2>
            <p style={{fontFamily:'Kanit', textAlign:'left', fontSize:18}}>
              <img src="phone-icon.png" style={{height:17, marginRight:'2%'}} alt="banana"></img>(+40) 759 873 075
              <br/>
              <img src="icon_mail.png" style={{height:20, marginRight:'2%', marginTop:'3%', marginBottom:'3%'}} alt="banana"></img>smartup.timisoara@osut.ro
              <br/>
              <img src="location.png" style={{height:19, marginRight:'2%'}} alt="banana"></img>bd. Vasile Pârvan nr. 4, etaj 2, cam.247
            </p>
          </div>

          <div class="col-md-1 col-sm-1" style={{margin:'3%', display:"flex", justifyContent:"center"}}>

            <div style={{marginRight:'7vh'}}>
              <a href="https://www.facebook.com/smartup.timisoara" target="react/jsx-no-target-blank"><img src="./logo social media/facebook_new.png" style={{height:30, width:30}} class="logo-social" alt="banana"></img></a>
            </div>

            <div style={{marginRight:'7vh'}}>
              <a href="https://www.instagram.com/smartup.timisoara/" target="react/jsx-no-target-blank"><img src="./logo social media/instagram1.png" style={{height:30, width:30}} class="logo-social" alt="banana"></img></a>
            </div>
            
            <div style={{marginRight:'7vh'}}>
              <a href="https://www.tiktok.com/@smartup_timisoara" target="react/jsx-no-target-blank"><img src="./logo social media/logo tiktok.png" style={{height:30, width:30}} class="logo-social" alt="banana"></img></a>
            </div>

            <div>
              <a href="https://www.linkedin.com/company/smart-up-timișoara/" target="react/jsx-no-target-blank"><img src="./logo social media/linkedin.png" style={{height:30, width:30}} class="logo-social" alt="banana"></img></a>
            </div>

          </div>

        </div>
      </footer>
    </>
  );
}
