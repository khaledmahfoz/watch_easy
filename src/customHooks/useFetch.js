import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (url, condition = []) => {
   const [loadingState, changeLoadingState] = useState(false);
   const [dataState, changeDataState] = useState(null);

   useEffect(() => {
      (async () => {
         changeLoadingState(true);
         try {
            const resData = await axios(url);
            changeDataState(resData.data);
         } catch{
            changeDataState(null);
         }
         changeLoadingState(false);
      })();
   }, condition);

   return [loadingState, dataState];
}

export default useFetch;