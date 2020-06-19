import React from 'react';
import {NavLink} from 'react-router-dom';
import './SideMenu.css';

const SideMenu = () => {

    return(
                
                <div id="menu">
                  <div className="main_logo">
                    <NavLink to="/dashboard" >
                      <img src="https://online.cloud.com.ge/resources/icons/logo.svg" alt="DashboardLogo"/>
                    </NavLink>
                  </div>
                  <div className="menu_item" >
                    <NavLink to="/dashboard" activeClassName="menu__item_active">
                      <img src="http://online.cloud.com.ge/resources/icons/accounts.svg" alt="Dashboard"/>
                      <p>Accounts</p>
                    </NavLink>
                  </div>
                  <div className="menu_item">
                    <NavLink to="/expressions">
                      <img src="http://online.cloud.com.ge/resources/icons/expressions.svg" alt="Expressions" />
                      <p>expressions</p>
                    </NavLink>
                  </div>
                  <div className="menu_item">
                    <NavLink to="/transactions">
                      <img src="http://online.cloud.com.ge/resources/icons/transactions.svg" alt="Transactions" />
                      <p>transactions</p>
                    </NavLink>
                  </div>
                  <div className="menu_item">
                    <NavLink to="/cards">
                      <img src="http://online.cloud.com.ge/resources/icons/cards.svg" alt="Cards"/>
                      <p>cards</p>
                    </NavLink>
                  </div>
                  <div className="menu_item">
                    <NavLink to="/salary">
                      <img src="http://online.cloud.com.ge/resources/icons/salary.svg" alt="Salary" />
                      <p>salary</p>
                    </NavLink>
                  </div>
                  <div className="menu_item">
                    <NavLink to="/currency">
                      <img src="http://online.cloud.com.ge/resources/icons/currency.svg" alt="Currency"/>
                      <p>Currency exchange</p>
                    </NavLink>
                  </div>
                  <div className="menu_item">
                    <NavLink to="/settings">
                      <img src="http://online.cloud.com.ge/resources/icons/settings.svg" alt="Settings"/>
                      <p>settings</p>
                    </NavLink>
                  </div>
                </div>


    )
}

export default SideMenu;