<template>
  <div class="upload-img-area">
    <p v-if="!this.info.imgHash"><input @change="handleUpload" type="file" name="" id=""></p>
    <p v-if="this.info.imgHash">
      <img :src="imgUri" alt=""><br />
      <a href="#" @click.prevent="reUpload">重新上传</a>
    </p>
    <p v-if="needTitle">图片说明：<input @change="updateTitle" v-model="info.title" type="text"></p>
    <a v-if="!isSingle" href="#" class="del" @click.prevent="del">X</a>
  </div>
</template>

<script>
import axios from 'axios'
import * as config from '@/config/config'
// import auth from '../../auth'

export default {
  data () {
    return {
      // imgHash: "",//七牛 hash
      preImgHash: []
    }
  },
  computed: {
    imgUri () {
      return config.baseImgUri + this.info.imgHash + '?imageView2/0/w/200'
    }
  },
  created () {
    console.log('this.info')
    console.log(this.info)
  },
  props: {
    info: {
      type: Object,
      default: function () {
        return {
          hash: Date.parse(new Date()),
          imgHash: '',
          title: ''
        }
      }
    },
    isSingle: {// 默认 有多个
      type: Boolean,
      default: false
    },
    needTitle: {// 默认 需要标题
      type: Boolean,
      default: true
    }
  },
  methods: {
    reUpload () {
      this.preImgHash.push(this.info.imgHash)
      this.info.imgHash = ''
      this.info.title = ''
      console.log(this.preImgHash)
      console.log(this.info.imgHash)
    },
    del (e) {
      this.$emit('delMe', this.info.hash)
    },
    updateTitle (e) {
      const titleInfo = {
        hash: this.info.hash,
        title: this.info.title
      }
      if (this.needTitle) {
        this.$emit('updateTitle', titleInfo)
      }
    },
    handleUpload (e) {
      const self = this
      if (/(\.jpg$|\.png$|\.gif$)/.test(e.target.value)) {
        self.$emit('uploading', '图片上传中...')
        // auth.getUploadToken()
        //   .then(function (uploadToken) {
        //     const fd = new FormData()
        //     fd.append('file', e.target.files[0])
        //     fd.append('token', uploadToken)
        //     axios.post('http://up.qiniu.com', fd)
        //       .then(function (res) {
        //         console.log(res)
        //         self.info.imgHash = res.data.key
        //         const imageHashInfo = {
        //           hash: self.info.hash,
        //           imgHash: self.info.imgHash
        //         }
        //         self.$emit('uploadDone', imageHashInfo)
        //       })
        //       .catch(function (error) {
        //         console.log(error)
        //       })
        //   })
        //   .catch(function (err) {
        //     console.log(err)
        //   })
      } else {
        self.$emit('notice', '只支持上传图片哦！')
      }
    }
  }
}
</script>

<style lang="scss">
.upload-img-area {
  position: relative;
  padding: 6px;
  margin: 6px 0;
  background: #eee;
  p {
    margin: 0.2em 0;
  }
  .del {
    position: absolute;
    top: 6px;
    right: 6px;
    color: #333;
  }
}
</style>

