/**
 * 用户
 */
import axios from '../axios';

// 登录
export const login = (data) => {
  return axios.post('/user/login', data)
}

// 获取登录用户信息
export const getUserInfo = () => {
  return axios.get('/user')
}

// 退出登录
export const logout = () => {
  return axios.post('/user/logout')
}

// 获取已发布房源 
export const getUserHouses = () => {
  return axios.get('/user/houses')
}