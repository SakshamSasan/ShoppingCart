import React from 'react'

function Navbar(props) {

  return(

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container-fluid" >
        <a className="navbar-brand" href="#" style={{color:'white',fontFamily: 'Inner Vintage'}}><div>J<span style={{color:'red'}}>.</span>A<span style={{color:'green'}}>.</span>S</div>
        <div>SHOP</div></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav me-auto mb-2 py-3 py-lg-0 mb-lg-0" >

            <li className="my-3 search-margin my-lg-0">
              <form className="d-flex">
                <input className="form-control ml-lg-5 p-2 rounded-pill less" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-info" type="submit"><i className="fa-solid fa-magnifying-glass" ></i></button>
              </form>
            </li>
            <li className="nav-item mx-3 mx-lg-5 ">
              <div className="h-100 cart-icon">
                <div className="nav-link" >
                  <i style={{color:'white'}} className="fa-solid fa-2x fa-cart-shopping custom">
                    <div className="count d-flex justify-content-center align-items-center">
                      <span className="title"><small>{props.qty}</small></span>
                    </div>
                  </i>
                </div>
                
              </div>
              
              
            </li>
          </ul>
      
        </div>
      </div>
    </nav>

  );
}


export default Navbar;
