import React from "react";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-body">
          <button className="login">Login</button>
          <div className="heading">
            <h2>Search Engines Of Construction Industry</h2>

            <div className="search">
              <input
                className="search-text"
                type="text"
                placeholder="search of anything anywhere  "
              />
              <i className="fa-solid fa-magnifying-glass" />
            </div>
            <div className="checkbox">
              <h5 className="boxes">
                {" "}
                Search By :
                <input className="box" type="checkbox" />
                Company Name
                <input className="box" type="checkbox" />
                Product/Services Name
                <input className="box" type="checkbox" />
                All Profile
              </h5>
            </div>
            <div className="icons">
              <img src="/icons/Group 1429.png" alt="car" />

              <img src="/icons/Group 1608.png" alt="cars" />
              <img src="/icons/Group 1610.png" alt="caru" />
              <img src="/icons/Group 1657.png" alt="carw" />
              <img src="/icons/Group 1694.png" alt="carq" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
