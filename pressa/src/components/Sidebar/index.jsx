import React from 'react'
import "./sidebar.css"
import HomeIcon from "../../assets/img/dash_home.png" 

export const Sidebar = () => {
  return (
    <div>
      <a href="#">
        Pressa
      </a>

      <ul className="sidebar_list">
        <li className="sidebar_item">
          <a href="#" className="sidebar_link">
            <img src={HomeIcon} alt="icon" className="sidebar_img" />
            <p className="sidebar_p">
            Bosh sahifa
            </p>
          </a>
        </li>
      </ul>
    </div>
  )
}
