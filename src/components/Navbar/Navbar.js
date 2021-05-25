import React from "react";
import "../../App.css"
import { Link } from "react-router-dom";
import Logo from "../../assets/images/atom.svg";
import { useGeneralContext } from "../../contexts/general-context";

export function Navbar() {
  const data = useGeneralContext();
  console.log(data)
  const { dispatchgeneral } = useGeneralContext();
  
  
  return (
    <>
      <nav className="nav">
        <div className="nav--logo">
          <div
            className="ham-menu"
            onClick={() => dispatchgeneral({ type: "MENU_TOGGLE" })}>
            <ion-icon name="menu-outline"></ion-icon>
          </div>
          <p>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}> 
              AD ASTRA
            </Link>
          </p>
          <div>
                <img alt="Hour Glass logo" srcSet={Logo} className="avatar"/>
          </div>
        </div>
      </nav>
    </>
  );
}