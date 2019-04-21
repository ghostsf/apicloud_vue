import request from '@/utils/request'

// demo api
export function demo(data) {
  return request({
    url:'api/demo',
    method:'post',
    data:data
  })
}

