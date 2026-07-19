import React, { useState } from 'react';
import "../App.css";
import { Link } from 'react-router-dom';

export default function Header() {
  const [show, setShow] = useState(false);
  
  const rotateStyle = {
    transform: show ? 'rotate(-90deg)' : 'rotate(0)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  };

  const menuStyle = {
    alignItems: 'center',
    flexDirection: 'column',
    height: show ? '100%' : 0,
    overflow: 'hidden',
    display: show?'flex':'none'
  };
  return (
    <>
      <div class="header" style={{display:'flex', alignItems: 'center'}}>
        <Link to="/">
          <img src="logo_smartup.png" class="logo" alt="banana" style={{width: 230, display: 'block', margin: '0 auto'}}/>
        </Link>
        <div style={{display:'flex', flex: 1, justifyContent: 'flex-end'}}> 

          <Link to="/">
            <button class="btn6">Acasă</button>
          </Link>

          <Link to="/events">
            <button class="btn6">Evenimente </button>
          </Link>

          <Link to="/despre">
            <button class="btn6">Despre noi</button>
          </Link>

          <Link to="/oport">
            <button class="btn6">Oportunități de job</button>
          </Link>
          
          <img class="burger" style={{...rotateStyle}} src="menu.png" alt="banana" onClick={() => setShow(!show)}></img>
        </div>
      </div>

      <div class='menu' style={menuStyle}>
        <Link to='/'>
          <button class="btn6" style={{marginTop:'12px'}}>Acasă</button>
        </Link>

        <Link to='/events'> 
          <button class="btn6" style={{marginTop:'7px', marginBottom:'12px'}}>Evenimente </button>
        </Link>

        <Link to='/despre'>
          <button class="btn6" style={{marginTop:'7px'}}>Despre noi</button>
        </Link>

        <Link to='/oport'>
          <button class="btn6" style={{marginTop:'7px'}}>Oportunități de job</button>
        </Link>
      </div>
    </>
  );
}
