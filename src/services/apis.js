import { http } from './http';

export function LoginTo(params){
    return http.get('/login',params);
  }
export function Register(params){
  return http.get('/register',params)
}
export function SearchData(params){
  return http.get('/search',params)
}