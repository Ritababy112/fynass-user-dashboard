import React, { useState } from "react";
import {
    FaTh,
    FaBars,
    FaHome,
    FaUserAlt,
    FaShoppingBag

}from "react-icons/fa"
import { NavLink } from "react-router-dom";

const Sidebar = ({Children}) => {
    const[isOpen ,setisOpen] = useState(false);
    const toggle = () => setisOpen(!isOpen);
     const menuItem=[
         {
          path:"/",
          name:"dashboard",
          icon:<FaTh/>
         },
         {
            path:"/Home",
            name:"Home",
            icon:<FaHome/>
           },
         {
            path:"/About",
            name:"About",
            icon:<FaUserAlt/>
           },
         {
            path:"/Product",
            name:"Product",
            icon:<FaShoppingBag/>,
           }
     ]
    return(
        <div className="container">
            <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
               <div className="top_section">
                  <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                  <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                      <FaBars onClick={toggle}/>
                  </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
            </div>
            <main>{Children}</main>
        </div>
    );
};
export default Sidebar;