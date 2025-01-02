import request from './request.js';

// 登录接口
export const login = (url, data) => {
  return request({
    url: url,
    method: 'post',
    data: data
  });
};

// 修改密码
export const changePassword = (url, data) => {
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

// 查询借阅详情
export const showSend = (url)=>{
  return request({
    url: url,
    method: 'get',
  });
}

// 搜索借阅详情
export const searchSend = (url, data)=>{
  return request({
    url: url,
    method: 'post',
    data: data
  });
}

// 用户查询书籍
export const userShowBook = (url)=>{
  return request({
    url: url,
    method: 'get',
  });
}

// 用户搜索书籍
export const userSearchBook = (url, data)=>{
  return request({
    url: url,
    method: 'post',
    data: data
  });
}

// 用户借阅书籍
export const userSendBook = (url, data)=>{
  return request({
    url: url,
    method: 'post',
    data: data
  });
}

// 查看自己借阅书籍
export const showBackBook = (url, params)=>{
  return request({
    url: url,
    method: 'get',
    params: params
  });
}

// 归还书籍
export const userBackBook = (url, data)=>{
  return request({
    url: url,
    method: 'post',
    data: data
  });
}
