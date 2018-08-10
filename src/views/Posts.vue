<!-- You can custom the "myQuillEditor" name used to find the quill instance in current component -->
<template>
  <!-- bidirectional data binding（双向数据绑定） -->
  <!-- <div class="quill-editor" v-model="content" v-quill:myQuillEditor="editorOption"></div> -->

  <!-- Or manually control the data synchronization（手动控制数据流）  -->
 <div>
  <div class="quill-editor" :content="content" @change="onEditorChange($event)" v-quill:myQuillEditor="editorOption">
  </div>
  </div>
</template>
 
<script>
// import { quillEditor } from 'vue-quill-editor/dist/ssr'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

export default {
  // directives: {
  //   quill: quillEditor
  // },
  data () {
    return {
      content: '<p>example content safsaf</p>',
      editorOption: { /* quill options */ }
    }
  },
  mounted () {
    console.log('this is current quill instance object', this.myQuillEditor)
  },
  methods: {
    onEditorChange (event) {
      console.log('onEditorChange')
    }
  }
  // Omit the same parts as in the following component sample code
  // ...
}
</script>