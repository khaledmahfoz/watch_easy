import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import classes from './ErrorHandler.module.css';

const ErrorHandler = () => {
   const [errBoolState, changeErrBoolState] = useState(false);
   const [errState, changeErrorState] = useState(null);

   const onHide = () => {
      changeErrBoolState(false);
      changeErrorState(null);
   }

   useEffect(() => {
      const responseInterceptor = axios.interceptors.response.use(res => res, err => {
         changeErrorState(err);
         changeErrBoolState(true);
      });
      return () => {
         axios.interceptors.response.eject(responseInterceptor);
      }
   }, [errBoolState]);


   return (
      <Modal
         show={errBoolState}
         onHide={() => changeErrBoolState(false)}
         backdrop={true}
         contentClassName={classes.Modal}
         size="md"
         aria-labelledby="contained-modal-title-vcenter"
         centered
      >
         {
            errState
               ? (
                  <>
                     <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                           something went wrong
                           </Modal.Title>
                     </Modal.Header>
                     <Modal.Body>
                        <p>
                           {errState.message}
                        </p>
                     </Modal.Body>
                     <Modal.Footer>
                        <Button className="text-right" variant="outline-danger" onClick={onHide}>Dismiss</Button>
                     </Modal.Footer>
                  </>
               )
               : null
         }
      </Modal>
   );
}

export default ErrorHandler;