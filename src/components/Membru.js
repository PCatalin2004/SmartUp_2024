import React, {useState} from "react";

export default function Membru(props) {
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  return (
    <>
        <div class="col-lg-3 col-md-6 col-xs-12">
            <div class="om">
                <img 
                  src={hovered ? props.hoverImage : props.poza}
                  className="persoana-echipa"
                  style={{ borderRadius: "50%" }}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  alt="banana"
                />
                <a href={props.profil} style={{display: 'inline-block', width: 'auto', height: 0}} target="react/jsx-no-target-blank">
                <h4>{props.nume}</h4></a>
                  <br/>
                   <p>{props.functie}</p>
                
            </div>
        </div>
    </>
  );
}
