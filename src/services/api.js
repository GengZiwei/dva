import request from '../utils/request';


export function getUserData( {page=1}) {
  return request(`/api/users?_page=${page}&_limit=5`); // 这里是一个 promise 对象
}