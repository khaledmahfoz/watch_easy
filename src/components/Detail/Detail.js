import React from 'react';

import classes from './Detail.module.css';

const Detail = props => {
   return (
      <div className={classes.Detail}>
         {props.children}
      </div>
   );
}

Detail.Name = ({children}) => {
   return (
      <span>{children}</span>
   );
}

Detail.Data = ({data}) => {
   return (
      <div>{data}</div>
   );
}

Detail.ListData = ({data}) => {
   return (
      <ul className={classes.List}>
         {
            data.map(elem => <li className={classes.ListItem} key={elem.id}>#{elem.name}</li>)
         }
      </ul>
   );
}

export default Detail;