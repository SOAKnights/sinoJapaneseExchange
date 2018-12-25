import axios from 'axios';
import { TIMEOUT, SUCCESS_CODE, IP} from './config';

export const getFragments = (id) => {
  return axios.get(`http://${IP}:8088/DB/fragments?fragment=${id}`, {
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

export const getWordAudio = (word) => {
  return axios.get(`http://${IP}:8088/api/voice/japanese?text=${word}`, {
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
