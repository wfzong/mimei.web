import { getData } from '@/config/getData'
/**
 * @description 用户登录
 * @param {String} data.accounts - username
 * @param {String} data.password - password
 * @returns {JSON} {}
 */
export const loginRequest = data => getData('/tokens/', data, 'post')
