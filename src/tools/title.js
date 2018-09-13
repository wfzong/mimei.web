function getTitle(vm) {
  const { title } = vm.$options
  if (title) {
    return typeof title === 'function' ? title.call(vm) : title
  }
}

const serverTitleMixin = {
  created() {
    const title = getTitle(this)
    if (title) {
      this.$ssrContext.title = `迷魅图片 | ${title}`
    }
  }
}

const clientTitleMixin = {
  mounted() {
    this.running()
  },
  watch: {
    $route: function() {
      this.running()
    }
  },
  methods: {
    running() {
      const title = getTitle(this)
      if (title) {
        document.title = `迷魅图片 | ${title}`
      }
    }
  }
}

export default (process.env.VUE_ENV === 'server'
  ? serverTitleMixin
  : clientTitleMixin)
