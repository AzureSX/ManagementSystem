import axios from './axios'

//获取工作列表
export function list(page) {
  return axios({
    url: '/jobDetail/list',
    params: {
      page
    }
  })
}

//通过id获取单例
export function findByJid(jid) {
  return axios({
    url: '/jobDetail/'+jid
  })
}

//获取工作分类
export function listCategory() {
  return axios({
    url: '/job'
  })
}

//保存或者更新工作信息
export function saveOrUpdate(formData) {
  return axios({
    url: '/jobDetail',
    method: 'POST',
    data: 
      formData
  })
}

//删除工作信息
export function deleteByJid(jid) {
  return axios({
    url: '/jobDetail/'+jid,
    method: 'DELETE'
  })
}




