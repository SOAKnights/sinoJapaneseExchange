import axios from 'axios';
import { CAMERA_API_URL, SUCCESS_CODE, TIMEOUT } from './config';

export const postPhoto = (file) => {
  const formdata = new FormData();
  formdata.append('imgFile',file);
  return axios.post(CAMERA_API_URL,formdata,{
    timeout: TIMEOUT
  }).then((res) => {
    if (res.data.status === SUCCESS_CODE) {
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
