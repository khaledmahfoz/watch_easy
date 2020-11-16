import React from 'react';

import NavBar from '../NavBar/NavBar';
import SearchBar from '../../containers/SearchBar/SearchBar';
import ErrorHandler from '../../containers/ErrorHandler/ErrorHandler';

import classes from './Layout.module.css';

const Layout = props => {
   return (
      <>
         <NavBar />
         <ErrorHandler />
         <SearchBar />
         <main className={classes.Main}>
            {props.children}
         </main>
      </>
   );
}

export default Layout;