import React from 'react'
import {Link} from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
   return (
      <Navbar collapseOnSelect expand="md" variant="dark" sticky="top" className="d-flex justify-content-between align-items-center py-3" style={{backgroundColor: "var(--green)"}}>
         <div className="container">
            <Navbar.Brand className="link align-items-center">
               <Link to="/">
                  <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-film mx-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                     <path fillRule="evenodd" d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0h8v6H4V1zm8 8H4v6h8V9zM1 1h2v2H1V1zm2 3H1v2h2V4zM1 7h2v2H1V7zm2 3H1v2h2v-2zm-2 3h2v2H1v-2zM15 1h-2v2h2V1zm-2 3h2v2h-2V4zm2 3h-2v2h2V7zm-2 3h2v2h-2v-2zm2 3h-2v2h2v-2z" />
                  </svg>
                  Movies
               </Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
               <Nav className="ml-auto link">

                  <Link to="/upcoming-movies" className="mr-3">
                     Up coming
                     </Link>

                  <Link to="/toprated-movies" className="mr-3">
                     Top rated
                     </Link>
               </Nav>
            </Navbar.Collapse>
         </div>
      </Navbar>

   );
}

export default NavBar;