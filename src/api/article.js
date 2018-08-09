import { getData } from '@/config/getData'
// import { resolve } from 'url'

/**
 * @description 查询文章列表
 * @param {String} data.artType - 文章类型
 * @param {Number} data.recommend - 是否推荐
 * @param {Number} data.limit - 取多少条
 * @returns {JSON} {}
 */
export const getArticleList = data => getData('/api/v1/article/', data)

/**
 * @description 查询详细信息
 * @param {Number} data.id - 文章id
 * @returns {JSON} {}
 */
export const getArticleDetails = data => getData('/api/v1/article/' + data.id)
