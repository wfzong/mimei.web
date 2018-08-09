import { getData } from '@/config/getData'
/**
 * @description 用户登录
 * @param {String} data.accounts - username
 * @param {String} data.password - password
 * @returns {JSON} {}
 */
export const loginRequest = data => getData('/api/v1/tokens/', data, 'post')

/**
 * @description 获取七牛云上传token
 * @returns {JSON} {}
 */
export const getUploadToken = () => getData('/api/v1/uploads/')
