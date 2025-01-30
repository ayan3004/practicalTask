import React from "react";

function Header() {
  return (
    <div className="container mt-5">
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div className="container-fluid">
        
        <a
          className="navbar-brand text-danger fw-bold ms-3"
          href="#"
          style={{ fontSize: "1.5rem" }}
        >
          GALLERY_BOX
        </a>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0" style={{ fontSize: "1rem" }}>
           
            <li className="nav-item me-3">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>

   
            <li className="nav-item dropdown me-3">
              <a
                className="nav-link dropdown-toggle active"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Products 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Products 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Products 3
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Products 4
                  </a>
                </li>
              </ul>
            </li>

          
            <li className="nav-item me-3">
              <a className="nav-link active" href="/gallery">
                Gallery
              </a>
            </li>

            
            <li className="nav-item">
              <a className="nav-link active" href="/Admin">
                Admin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Header;
