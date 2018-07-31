<template>
  <div id="x" class="full-screen-message">
      <div class="info">
        <slot>Welcome to my corner!</slot>
    </div>
    <canvas :width="windowWidth" :height="windowHeight" class="canvas-bg" id="canvasId"></canvas>
 </div>
</template>
<script>
export default {
  data() {
    return {
      windowHeight: 100,
      windowWidth: 100,
      canvasBg: null,
      canvasCtx: null
    }
  },
  methods: {
    changeInfoPosition() {
      this.windowHeight = document.documentElement.clientHeight
      this.windowWidth = document.documentElement.clientWidth
    },
    canvasMove(e) {
      let x = e.clientX
      let y = e.clientY

      this.canvasCtx.clearRect(0, 0, this.canvasBg.width, this.canvasBg.height)

      this.lineMe(0, 0, x, y)
      this.lineMe(this.canvasBg.width, 0, x, y)
      this.lineMe(0, this.canvasBg.height, x, y)
      this.lineMe(this.canvasBg.width, this.canvasBg.height, x, y)
    },
    lineMe(startX, startY, endX, endY) {
      this.canvasCtx.beginPath()

      this.canvasCtx.moveTo(startX, startY)
      this.canvasCtx.lineTo(endX, endY)
      this.canvasCtx.strokeStyle = '#444'
      this.canvasCtx.stroke()
    }
  },
  mounted() {
    this.canvasBg = document.getElementById('canvasId')
    this.canvasCtx = this.canvasBg.getContext('2d')
    this.changeInfoPosition()

    window.addEventListener('resize', this.changeInfoPosition, false)

    window.addEventListener('mousemove', this.canvasMove, false)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.changeInfoPosition)
  }
}
</script>

<style lang="scss">
.full-screen-message {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  //background: #555;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  .canvas-bg {
    position: absolute;
    background: #555;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .info {
    text-align: center;
    a {
      color: white;
      &:hover {
        color: red;
        text-decoration: underline;
      }
    }
    h3 {
      color: white;
    }
  }
}
</style>
