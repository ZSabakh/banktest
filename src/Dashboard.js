import React, {Component} from 'react';
import './Dashboard.css';
import Logo from './logo.svg';
class Dashboard extends Component {
    render(){
        return(
            <div className="Dashboard">
            <nav className="SideBox">
                <img className="SideLogo" src={Logo}></img>
                <ul>
                    <li><img src={Logo}/>Accounts</li>
                    <li><img src={Logo}/>Transactions</li>
                    <li><img src={Logo}/>Documents</li>
                    <li><img src={Logo}/>Wallet</li>
                    <li><img src={Logo}/>Calendar</li>
                    <li><img src={Logo}/>Settings</li>
                </ul>
            </nav>
            </div>
        )
    }
}

export default Dashboard;


