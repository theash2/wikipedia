import { http } from './http';

export function LoginTo(params){
    return http.get('/static/login.json',params);
  }
export function Register(params){
  return http.get('/static/register.json',params)
}
export function SearchData(params){
  return http.get('/static/index.json',params)
}