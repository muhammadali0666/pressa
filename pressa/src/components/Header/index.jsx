import React from "react";
import Logo from "../../assets/img/logo.png";
import Search from "../../assets/img/search.png";
import "./header.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header_inner">
          <NavLink to='/home' className="header_logo">
            <img
              src={Logo}
              alt="logo"
              className="header_logo-img"
              width={108}
              height={35}
            />
          </NavLink>
          <form className="header_form">
            <img
              src={Search}
              alt="search"
              width={18}
              height={18}
              className="header_input_search"
            />
            <input type="text" className="header_input" placeholder="izlash"/>
          </form>
          <ul className="header_list">
            <li className="header_item">
              <NavLink to='/biz' className="header_item_link">
                Biz haqimizda
              </NavLink>
            </li>
            <li className="header_item">
              <NavLink to='/single' className="header_item_link">
                Savol va javoblar
              </NavLink>
            </li>
            <li className="header_item">
             <NavLink to="/elon">
             <button className="header_btn">
                <span className="header_btn_span">+</span>
                E’lon berish
              </button>
             </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
