import request from './request.js';

// 登录接口
export const login = (url, data) => {
  return request({
    url: url,
    method: 'post',
    data: data
  });
};
// export const fetchData = (url, params) => {
//   return request({
//     url: url,
//     method: 'get',
//     params: params
//   });
// };

// export const postData = (url, data) => {
//   return request({
//     url: url,
//     method: 'post',
//     data: data
//   });
// };