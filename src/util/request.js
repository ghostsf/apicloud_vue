import axios from 'axios'
import Qs from 'qs'
import apiCloudAjax from './apicloudRequest'

// create an axios instance
var request;

const service = axios.create({
  baseURL: process.env.BASE_API,
  crossDomain: true,
  withCredentials: true,
  transformRequest: [function (data) {
    return Qs.stringify(data)
  }],
  headers: {}
  // .....
});


const apiCloudService = function (req) {
  return apiCloudAjax(process.env.BASE_API + req['url'], req['method'] ? req.method : 'get', req['data'])
}

// 若app生产环境 则切换使用apicloud请求方式
if (process.env.NODE_ENV === 'production') {
  request = apiCloudService
} else {
  request = service;
}
export default request
