import { GET_DATA } from '../types';
import axios from 'axios';

export const fetchData = (callback) => {
  return (dispatch) => {
    const apiUrl = 'https://raw.githubusercontent.com/amazing-co/ac-route/master/MP-123456-010219.json';

    return axios.get(apiUrl)
      .then(response => {
        dispatch({ type: GET_DATA, payload: response.data});
        callback();
      })
      .catch(error => {
        console.log("error", error);
      });
  };
};