import React from 'react';

const NotFoundMessage = props => {
   return (
      <div className="text-muted display-4 mt-4">{props.message}</div>
   );
}

export default NotFoundMessage