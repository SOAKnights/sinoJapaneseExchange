import axios from 'axios';
import {SEARCH_API_URL,SUCCESS_CODE,TIMEOUT} from './config';

export const getJpanese = (word) => {
  return axios.get(SEARCH_API_URL+word, {
    timeout: TIMEOUT
  }).then((res) => {
    if(res.data.status === SUCCESS_CODE){
      return res.data.message;
    }

  }).catch((err) => {
    if (err) {
      console.log(err);
    }
  }).then((data) => {

    return new Promise((resolve) => {
      resolve(data);
    });
  });
};
