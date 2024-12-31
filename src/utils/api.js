import request from './request.js';

// 登录接口
export const login = (url, data) => {
  return request({
    url: url,
    method: 'post',
    data: data
  });
};

// 新增用户
export const addUser = (url, data)=>{
  return request({
    url: url,
    method: 'post',
    data: data
  });
}

// 展示用户
export const showUser = (url)=>{
  return request({
    url: url,
    method: 'get',
  });
}

// 搜索用户
export const searchUser = (url, data)=>{
  return request({
    url: url,
    method: 'post',
    data: data
  });
}

// 删除用户
export const deleteUser = (url, data)=>{
  return request({
    url: url,
    method: 'post',
    data: data
  });
}

// 新增书籍
export const addBook = (url, data)=>{
  return request({
    url: url,
    method: 'post',
    data: data
  });
}

// 查询书籍
export const showBook = (url)=>{
  return request({
    url: url,
    method: 'get',
  });
}

// 搜索书籍
export const searchBook = (url, data)=>{
  return request({
    url: url,
    method: 'post',
    data: data
  });
}

// 删除书籍
export const deleteBook = (url, data)=>{
  return request({
    url: url,
    method: 'post',
    data: data
  });
}


// export const fetchData = (url, params) => {
//   return request({
//     url: url,
//     method: 'get',
//     params: params
//   });
// };
