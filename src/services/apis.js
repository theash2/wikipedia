import { http } from './http';

export function getLoginData(){
    return http.get('/static/logindata.json');
  }