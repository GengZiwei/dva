import request from '../utils/request';


export function getUserData() {
  return request('api/users'); // 这里是一个 promise 对象
}