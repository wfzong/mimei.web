<template>
  <div class="post-area">
    <h2>{{ $route.query.id?'更新文章':'发表文章' }}</h2>
    <form @submit.prevent="postArticle">
      <ul class="data-cell">
        <li class="title">
          <label for="art-title">文章标题：</label>
        </li>
        <li><input v-model="artData.title" type="text" id="art-title" size="32"></li>
      </ul>

      <ul class="data-cell">
        <li class="title">
          <label for="art-desc">摘要：</label>
        </li>
        <li><input v-model="artData.desc" type="text" id="art-desc" size="32"></li>
      </ul>

      <ul class="data-cell">
        <li class="title">
          <label for="art-recommend">推荐至首页：</label>
        </li>
        <li><input v-model="artData.recommend" type="checkbox" id="art-recommend"></li>
      </ul>

      <ul class="data-cell">
        <li class="title">
          封面图片：
        </li>
        <li>
          <upload-image @notice="alertMsgBox" @uploading="showMsgBox" @uploadDone="imgShowUploadDone" :info="artData.imgShow" :needTitle="false" :isSingle="true"></upload-image>
        </li>
      </ul>

      <ul class="data-cell">
        <li class="title">
          文章类型：
        </li>
        <li>
          <label for="art_normal">普通文章</label> <input type="radio" name="artType" id="art_normal" value="normal" v-model="artData.artType" :disabled="isUpdate">
          <label for="art_photos">图集文章</label> <input type="radio" name="artType" id="art_photos" value="photos" v-model="artData.artType" :disabled="isUpdate">
        </li>
      </ul>

      <ul class="data-cell" v-if="artData.artType =='photos'">
        <li class="title">
          图集：
        </li>
        <li>
          <upload-image v-for="(item,index) in photoAreas" :info="item" :key="item.hash" @uploading="showMsgBox" @delMe="deletePhotoArea" @updateTitle="updateImageListTitle" @uploadDone="updateImageListImageHash"></upload-image>

          <p>
            <a href="#" @click.prevent="addPhotoArea">+增加图片区域</a>， 当前图片区域共：
            <strong>{{photoAreaCount}}</strong>个， 已经上传图片
            <strong>{{uploadedCount}}</strong>个
          </p>
        </li>
      </ul>

      <ul class="data-cell">
        <li class="title">
          <label for="art-desc">文章分类：</label>
        </li>
        <li>
          <label v-for="c in artData.category" :for="c.id" :key="c.id">
            {{c.title}}
            <input type="checkbox" :value="c.id" name="category" :id="c.id" v-model="artData.categorySelected">
          </label>
        </li>
      </ul>

      <ul class="data-cell">
        <li class="title">
          <label>内容：</label>
        </li>
        <li>

          <!-- <quill-editor v-model="artData.content" ref="myQuillEditor" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @ready="onEditorReady($event)">
          </quill-editor> -->

          <div ref="myQuillEditor" class="quill-editor" :content="artData.content" v-quill:myQuillEditor="editorOption" @change="onEditorChange($event)" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @ready="onEditorReady($event)"></div>
        </li>
      </ul>
      <ul class="data-cell">
        <li class="title">

        </li>
        <li>
          <input type="submit">
        </li>
      </ul>
    </form>
    <DialogueBox v-if="imgUploading" @close="closeMe">
      <h4 slot="header">{{uploadingMsg}}</h4>
      <p slot="button">
        <!-- <router-link v-for="item in this.uploadLinks" :key="item.title" :to="{path:item.path}">{{item.title}}</router-link> -->
        <router-link to="/">返回首页</router-link>
      </p>
    </DialogueBox>

  </div>
</template>


<script>
import { getArticleCategory, getArticleDetails, updateArticle, addArticle } from '@/api/article'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

// import axios from 'axios'
// import auth from "../auth"
// import store from '../store'
import * as config from '@/config/config'
import * as unity from '@/tools/unity'

import DialogueBox from '@/components/common/DialogueBox'
import UploadImage from '@/components/common/UploadImage'

export default {
  data () {
    return {
      isUpdate: false, // 默认为发布新文章，true为更新文章
      imgUploading: false,
      uploadingMsg: 'Default message',
      photoAreas: [],
      artData: { content: '' },
      editorOption: {// 编辑器配置
        modules: {
          toolbar: {
            container: config.toolbarOptionsFull,
            handlers: {
              image: this.appHandleImg
            }
          }
        },
        placeholder: '请输入文章内容'
      }
    }
  },
  components: {
    DialogueBox,
    UploadImage
  },
  computed: {
    editor () {
      return this.$refs.myQuillEditor.quill
    },
    token () {
      // return store.getters.getMyToken
      return this.$store.state.token
    },
    photoAreaCount () {
      return this.photoAreas.length
    },
    uploadedPhotos () {
      return this.photoAreas.filter((item) => {
        return !!item.imgHash
      })
    },
    uploadedCount () {
      return this.uploadedPhotos.length
    }
  },
  methods: {
    closeMe () {
      // alert('closeme')
      this.imgUploading = false
    },
    postArticle () { // 发布/更新 文章
      let pushData = { // 文章主体数据
        token: this.token,
        title: this.artData.title,
        artType: this.artData.artType,
        description: this.artData.desc,
        recommend: this.artData.recommend,
        content: this.artData.content,
        imgShow: JSON.stringify(this.artData.imgShow),
        imgContent: JSON.stringify(this.uploadedPhotos),
        categories: JSON.stringify(this.artData.categorySelected)

      }
      if (this.artData.categorySelected.length > 0) {
        // let postHandler = this.isUpdate ? axios.put(config.articleApi + this.$route.query.id, pushData) : axios.post(config.articleApi, pushData)
        let postHandler = this.isUpdate ? updateArticle(pushData, this.$route.query.id) : addArticle(pushData)
        postHandler.then((response) => {
          console.log(response)
          if (response.authorized) {
            let msg = this.isUpdate ? '更新成功！' : '发面成功！'
            this.showMsgBox(msg)
          } else {
            this.alertMsgBox(response.info)
          }
        })
          .catch((error) => {
            console.log(error)
          })
      } else {
        this.alertMsgBox('请选择文章分类')
      }
    },
    imgShowUploadDone (imgHashInfo) {
      this.artData.imgShow = imgHashInfo
      console.log('imgShowUploadDone----')
      console.log(this.artData.imgShow)
      this.hideMsgBox()
    },
    updateImageListTitle (info) {
      console.log(info)
      this.photoAreas.forEach(function (element) {
        if (element.hash === info.hash) {
          element.title = info.title
        }
      }, this)
      console.log(this.artData)
    },
    updateImageListImageHash (info) {
      console.log(info)
      this.photoAreas.forEach(function (element) {
        if (element.hash === info.hash) {
          element.imgHash = info.imgHash
        }
      }, this)
      console.log(this.artData)
      this.hideMsgBox()
    },
    hideMsgBox () {
      this.imgUploading = false
    },
    showMsgBox (msg, links = []) {
      this.imgUploading = true
      this.uploadingMsg = msg
    },
    alertMsgBox (msg, time = 2000) {
      this.uploadingMsg = msg
      this.imgUploading = true
      setTimeout(() => {
        this.imgUploading = false
      }, time)
    },
    appHandleImg () {
      unity.handleEditorUpload(this, this.editor)
    },
    addPhotoArea () {
      this.photoAreas.push({
        hash: Date.parse(new Date()) + Math.random(),
        imgHash: '',
        title: ''
      })
    },
    deletePhotoArea (hash) {
      // this.artData.photos.splice(index, 1)
      this.photoAreas = this.photoAreas.filter(item => {
        return item.hash !== hash
      })
      console.log(hash)
      console.log(this.photoAreas)
    },
    onEditorChange ({ quill, html, text }) {
      console.log('editor change!', quill, html, text)
      this.artData.content = html
    },
    onEditorBlur (e) {
      console.log('onEditorBlur', e)
    },
    onEditorFocus (e) {
      console.log('onEditorFocus', e)
    },
    onEditorReady (e) {
      console.log('onEditorReady', e)
    },
    fetchData () {
      // 初始化文章数据
      this.artData = {// 文章数据
        title: '',
        category: null,
        categorySelected: [],
        artType: 'normal',
        desc: '',
        recommend: 0,
        content: '',
        imgShow: { hash: Date.parse(new Date()) }// 图片show
      }
      this.isUpdate = false

      this.showMsgBox('数据初始化中...')
      let fetchPoll = [this.fetchCategory()]
      if (this.$route.query.id) {
        this.isUpdate = true
        fetchPoll.push(this.fetchArticleContent(this.$route.query.id))
      }
      Promise.all(fetchPoll)
        .then((res) => {
          console.log(res)
          this.hideMsgBox()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchCategory () { // 获取文章分类
      return getArticleCategory()
        .then((res) => {
          this.artData.category = res
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchArticleContent (id) {
      return getArticleDetails({ id })
        .then((res) => {
          console.log(res)
          this.artData.title = res.title

          res.categories.forEach(function (element) { // 将已经选择的文章分类回填回去
            this.artData.categorySelected.push(element.id)
          }, this)
          this.artData.artType = res.artType
          this.artData.desc = res.description
          this.artData.recommend = res.recommend
          this.artData.content = res.content
          this.artData.imgShow = JSON.parse(res.imgShow)
          this.photoAreas = JSON.parse(res.imgContent)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  created () {
    this.fetchData()
  },
  mounted () {
    // unity.setWebTitle("添加/修改文章 - memei.net")
  }
}
</script>

<style lang="scss">
@import '~@/scss/common/variable';
@import '~@/scss/common/mixin';
.post-area {
  @include min-screen($SECTION_WIDTH_MAXIMUM) {
    padding: $PADDING_MEDIUM $PADDING_XXX_LARGE;
  }
  @include screen($SECTION_WIDTH_MEDIUM, $SECTION_WIDTH_MAXIMUM) {
    padding: $PADDING_MEDIUM;
  }
  @include max-screen($SECTION_WIDTH_MEDIUM) {
    padding: $PADDING_XX_SMALL;
  }

  .data-cell {
    padding: 6px 0;
    .title {
      font-weight: bold;
    }
  }
  @include min-screen($SECTION_WIDTH_MEDIUM) {
    .data-cell {
      display: table;
      li {
        display: table-cell;
        &.title {
          min-width: 100px;
        }
      }
    }
  }
}
</style>
