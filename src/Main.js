import React from 'react';
import logo from './logo.svg';
import './Main.css';
import {Redirect} from 'react-router-dom'
//Main page not done yet ! Redirecting to login page

function Mainp() {
    return (
      <div className="Main">
  <header>
    <div className="logo"><img src={logo} alt="logo"></img></div>
    <ul className="ul1">
    <li>Kerdzo</li>
    <li>patbiz</li>
    <li>Corporate</li>
    </ul>
    <ul className="ul2">
    <li>Cards</li>
    <li>Deposit</li>
    <li>Credits</li>
    <li>Mortgage</li>
    <li>Investitions</li>
    <li>More</li>
    </ul>
    <div className="srch">srch</div>
    <div className="gancx">gancx</div>
    <div className="ebank">Ebank</div>
  </header>

  {/* Main page not done yet ! Redirecting to login page */}
  
  <Redirect to={'/login'}/>
      </div>
    );
  }
  
  export default Mainp;