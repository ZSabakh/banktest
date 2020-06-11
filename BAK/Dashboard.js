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
                    <li>Accounts</li>
                    <li>Transactions</li>
                    <li>Documents</li>
                    <li>Wallet</li>
                    <li>Calendar</li>
                    <li>Settings</li>
                </ul>
            </nav>
            </div>
        )
    }
}

export default Dashboard;


