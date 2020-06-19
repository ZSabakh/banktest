import React, {useState, useEffect} from 'react';
import './Dashboard.css';
import {Redirect} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {GetData} from './services/GetData';
import SideMenu from './components/SideMenu/SideMenu';
import HeaderContainer from './components/HeaderContainer/HeaderContainer';

function Dashboard(props) {

    const [redirect, setRedirect] = useState(false)
    const [currencyData, setCurrencyData] = useState([])
    const [accountData, setAccountData] = useState([])

    useEffect(() => {
      GetData('rates/CurrencyRates').then ((result) => {
        let responseJson = result;
        if(!responseJson.error) {
        // console.log(sessionStorage.getItem('token'))
        console.log(responseJson);
        setCurrencyData(responseJson)
        }
        else {
            console.log(result)
            console.log('Login Error')
        }
    })

    GetData('accounts').then ((result1) => {
      let responseJson1 = result1;
      if(!responseJson1.error) {
      // console.log(sessionStorage.getItem('token'))
      console.log(responseJson1);
      setAccountData(responseJson1)
      }
      else {
          console.log(result1)
          setRedirect(true)
          console.log('Login Error')

      }
  })
  if(!sessionStorage.getItem('token')){
    setRedirect(false);
  }
    }, [])


    //LOGOUT MANAGER ! NOT DONE YET
    // function logout() {
    //     sessionStorage.setItem('token', '');
    //     sessionStorage.clear();
    // }

    
        let currencies = null;
        const cutCur = currencyData.slice(0, 4);
        currencies = cutCur.map(
          currenc => {
            return (
                <div className="CurrencyInfo" key={currenc.currency}>
                  <img src={currenc.currencyCountryFlag} alt="Flag"/>
                  <ul>
                    <li>{currenc.currency}</li>
                    <li>{currenc.currencyName}</li>
                  </ul>
                  <p className="currencbuy">{currenc.buyRate}</p>
                  <p className="currencsell">{currenc.sellRate}</p>
                </div>
            )
          }
        )


        let bdata = null;
        const cutCur1 = accountData;
        bdata = cutCur1.map(
          bdataa => {
            return (
              <div className="AccountInfo" key={bdataa.id}>
              <ul>
                <li>{bdataa.friendlyName}</li>
                <li>{bdataa.iban}</li>
              </ul>
              <p><i>{+bdataa.availableBalance / 100}</i> {bdataa.primaryCurrency}</p>
              </div>
            )
          }
        )

        if(redirect){
            return(<Redirect to={'/login'} />)
        }
        

        return(
            <div className="App">

            <Router>
      

                
                <SideMenu />

                <div id="content">
                <HeaderContainer name='Kostava' subName='Mr Gorbachev'/>
                <div className="right">
                <div className="CurrencyHolder">
                <div className="CurrencyHolderTitle"><p>Exchange Rates of NBG</p></div>
                <div className="CurrencyInfo">
                  <img src="https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-usa2x.png" alt="flag"></img>
                  <ul>
                    <li>USD</li>
                    <li>One US Dollar</li>
                  </ul>
                  <p className="currencbuy">2.322</p>
                  <p className="currencsell">2.420</p>
                </div>
                {currencies}
                </div>
                </div>
                <div className="left">
                <div className="AccountHolder">
                <div className="CurrencyHolderTitle"><p>My Accounts</p></div>
                
                <div className="AccountInfo">
                <ul>
                  <li>Current</li>
                  <li>GE000850514231GEL</li>
                </ul>
                <p><i>20,523</i> USD</p>
                </div>
                {bdata}
                
                </div>
                </div>
              </div>
      
            </Router>
          </div>
        )
    
}

export default Dashboard;


