import React from "react";
import { NavLink } from "react-router-dom";
import "./SideMenu.css";

const SideMenu = () => {
  return (
    <div id="menu">
      <div className="main_logo">
        <NavLink to="/dashboard/accounts">
          <img
            src="https://online.cloud.com.ge/resources/icons/logo.svg"
            alt="DashboardLogo"
          />
        </NavLink>
      </div>
      <div className="menu_item">
        <NavLink to="/dashboard/accounts" activeClassName="menu__item_active">
          <img
            src="http://online.cloud.com.ge/resources/icons/accounts.svg"
            alt="Dashboard"
          />
          <p>Accounts</p>
        </NavLink>
      </div>
      <div className="menu_item">
        <NavLink
          to="/dashboard/expressions"
          activeClassName="menu__item_active"
        >
          <img
            src="http://online.cloud.com.ge/resources/icons/expressions.svg"
            alt="Expressions"
          />
          <p>expressions</p>
        </NavLink>
      </div>
      <div className="menu_item">
        <NavLink
          to="/dashboard/transactions"
          activeClassName="menu__item_active"
        >
          <img
            src="http://online.cloud.com.ge/resources/icons/transactions.svg"
            alt="Transactions"
          />
          <p>transactions</p>
        </NavLink>
      </div>
      <div className="menu_item">
        <NavLink to="/dashboard/cards" activeClassName="menu__item_active">
          <img
            src="http://online.cloud.com.ge/resources/icons/cards.svg"
            alt="Cards"
          />
          <p>cards</p>
        </NavLink>
      </div>
      <div className="menu_item">
        <NavLink to="/dashboard/salary" activeClassName="menu__item_active">
          <img
            src="http://online.cloud.com.ge/resources/icons/salary.svg"
            alt="Salary"
          />
          <p>salary</p>
        </NavLink>
      </div>
      <div className="menu_item">
        <NavLink to="/dashboard/currency" activeClassName="menu__item_active">
          <img
            src="http://online.cloud.com.ge/resources/icons/currency.svg"
            alt="Currency"
          />
          <p>Currency exchange</p>
        </NavLink>
      </div>
      <div className="menu_item">
        <NavLink to="/dashboard/settings" activeClassName="menu__item_active">
          <img
            src="http://online.cloud.com.ge/resources/icons/settings.svg"
            alt="Settings"
          />
          <p>settings</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideMenu;
