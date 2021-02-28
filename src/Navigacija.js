
import React from 'react';
import { Link } from "react-router-dom";
import './Navigacija.scss';

function returnNavs(navs) {
  let navsResult = [];
  navs.forEach((element, index) => {
    if (element.dropdown) {
      let dropdowns = [];
      element.dropdown.forEach((dropItm, index) => {
        dropdowns.push(
          <Link className="dropdown-item" key={dropItm.path + index} to={element.path + dropItm.path}>{dropItm.title}</Link>
        )

      });
      navsResult.push(
        <li key={element.path} className="nav-item dropdown px-3">
          <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to={element.path}>{element.title}</Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            {dropdowns}
          </div>
        </li>
      )

    } else {
      navsResult.push(
        <li key={"nav-el" + index} className="nav-item px-3">
          <Link className="nav-link" to={element.path}>{element.title}</Link>
        </li>
      )
    }

  });
  return navsResult;
}
function Navigacija({ left, right, logo }) {
  let navLeft = [];
  let navRight = [];
  if (left) {
    navLeft = returnNavs(left)
  }
  if (right) {
    navRight = returnNavs(right)
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <Link className="navbar-brand" to={logo.path}><img className="ikona" src={logo.src} alt="ikona" /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {navLeft}
            </ul>
            <ul className="navbar-nav ml-auto">
              {navRight}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigacija;
