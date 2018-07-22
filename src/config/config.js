const host =
  process.env.NODE_ENV === 'production'
    ? 'https://api.mimei.net.cn'
    : 'http://api.limpid.local'

export const loginApi = host + '/api/v1/tokens/'
export const registerApi = host + '/api/v1/user/'
export const getUploadTokenApi = host + '/api/v1/uploads/'
export const articleApi = host + '/api/v1/article/'
export const articleCategoryApi = host + '/api/v1/category/'

export const baseImgUri = 'http://static.fuzong.wang/'

export const toolbarOptionsFull = [
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  ['blockquote', 'code-block', 'image'],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
  [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
  [{ direction: 'rtl' }], // text direction

  [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ['clean'] // remove formatting button
]
