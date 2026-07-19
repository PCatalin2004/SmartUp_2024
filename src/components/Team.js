import React from "react";
import Membru from "./Membru";

export default function Team() {
  return (
    <>
        <div className="echipa">
            <h1 style={{textAlign: 'center', margin:"3%", fontSize:50}}>Echipa de management</h1>
              <div class="row" style={{display:'flex', justifyContent:'center', margin:"3%"}}>

                <Membru profil="https://web.facebook.com/cristi.untaru.1" target="react/jsx-no-target-blank" poza="./echipa_2/Cristi.png" hoverImage="./echipa_2/Cristi_Hover.png" nume="Cristian Untaru" functie="Coordonator General" /> 

                <Membru profil="https://web.facebook.com/selaru.denisaandreea" poza="./echipa_2/Selly.png" hoverImage="./echipa_2/Selly_Hover.png" nume="Denisa Șelaru" functie="Secretar General" />

                <Membru profil="https://web.facebook.com/daria.jdhdjdns" poza="./echipa_2/Maria.png" hoverImage="./echipa_2/Maria_Hover.png" nume="Maria Stănoiu" functie="Responsabil Program" />

                <Membru profil="https://web.facebook.com/Robert.Sauca.2004" poza="./echipa_2/Bobert.png" hoverImage="./echipa_2/Bobert_Hover.png" nume="Robert Sauca" functie="Responsabil PR" />

                <Membru profil="https://web.facebook.com/narcis.baltag" poza="./echipa_2/Narcis.png" hoverImage="./echipa_2/Narcis_Hover.png" nume="Narcis Baltag" functie="Responsabil Imagine" /> 

                <Membru profil="https://web.facebook.com/catalin.pavel.319" poza="./echipa_2/Cata.png" hoverImage="./echipa_2/Cata_Hover.png" nume="Cătălin Pavel" functie="Responsabil IT&Logistică" /> 

                <Membru profil="https://web.facebook.com/roxana.roxi.940" poza="./echipa_2/Poxi.png" hoverImage="./echipa_2/Poxi_Hover.png" nume="Roxana Matei" functie="Președinte OSUT" /> 
              </div>
        </div>
    </>
  );
}
