import axios from 'axios'
import auth from '@/tools/auth'
import TWEEN from '@tweenjs/tween.js'

export function handleEditorUpload(self, editor) {
  const input = document.createElement('input')
  input.setAttribute('type', 'file')
  input.click()
  // Listen upload local image and save to server
  input.onchange = () => {
    const file = input.files[0]
    self.showMsgBox('图片上传中...')
    // file type is only image.
    if (/^image\//.test(file.type)) {
      auth
        .getUploadToken()
        .then(function(uploadToken) {
          const fd = new FormData()
          fd.append('file', file)
          fd.append('token', uploadToken)
          // saveToServer
          axios
            .post('http://up.qiniu.com', fd)
            .then(function(response) {
              console.log(response.data.key)
              const formatImage = '?imageView2/0/w/1400'
              editor.insertEmbed(
                editor.getSelection().index,
                'image',
                'http://static.fuzong.wang/' + response.data.key + formatImage
              )
              self.hideMsgBox()
            })
            .catch(function(error) {
              console.log(error)
              self.uploadingMsg = error
              setTimeout(() => {
                self.hideMsgBox()
              }, 2000)
            })
        })
        .catch(function(err) {
          console.log(err)
        })
    } else {
      // console.warn('You could only upload images.');
      self.uploadingMsg = '只允许上传图片！'
      setTimeout(() => {
        self.hideMsgBox()
      }, 2000)
    }
  }
}
export function setWebTitle(title) {
  if (title === undefined || window.document.title === title) {
    return
  }
  document.title = title
}
export function deepCopy(o) {
  // 数组及对象，深拷贝
  if (o instanceof Array) {
    let n = []
    for (let i = 0; i < o.length; ++i) {
      n[i] = deepCopy(o[i])
    }
    return n
  } else if (o instanceof Object) {
    let n = {}
    for (let i in o) {
      n[i] = deepCopy(o[i])
    }
    return n
  } else {
    return o
  }
}

export class Balls {
  constructor(id) {
    this.canvas = document.getElementById(id)
    this.ballsTween = []
    this.ballsPos = []
    this.ballsPosStore = []
    this.RNF = ''
    this.running = false

    this.canvas.addEventListener(
      'mouseenter',
      () => {
        if (this.running) return

        let tempPos = this.ballsPosStore // 取出之前存储的位置信息

        this.ballsTween = []
        this.ballsPos = []
        this.ballsPosStore = []

        tempPos.forEach(item => {
          this.addBall(JSON.parse(item))
        })

        this.start()
      },
      false
    )

    if (this.canvas.getContext) {
      this.ctx = this.canvas.getContext('2d')
      return true
    } else {
      return false
    }
  }
  start() {
    // console.log(this.ballsTween)
    this.running = true
    this.ballsTween.forEach(item => {
      item.start()
      item.onComplete(() => {
        // console.log("done")
      })
    })
    this.animation()
  }
  animation(time) {
    // console.log(this.ballsPos[0].init)

    // TWEEN.update();
    this.draw()

    let id = window.requestAnimationFrame(
      (function(handler) {
        return () => {
          handler.animation()
        }
      })(this)
    )

    var result = TWEEN.update(time)
    if (!result) {
      cancelAnimationFrame(id)
      this.running = false
    }
    // console.log(result)
  }
  draw() {
    this._clear()
    this.ballsPos.forEach(item => {
      this.ctx.beginPath()
      this.ctx.arc(
        item.init.x,
        item.init.y,
        item.init.radius,
        0,
        Math.PI * 2,
        false
      )
      this.ctx.fillStyle =
        'rgba(' +
        item.rgb.R +
        ',' +
        item.rgb.G +
        ',' +
        item.rgb.B +
        ',' +
        item.init.opacity +
        ')'
      this.ctx.fill()

      // console.log((item.x, item.y, item.radius, 0, Math.PI*2, false))
    })
  }
  _clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
  addBall(options) {
    this.ballsPos.push(options)
    this.ballsPosStore.push(JSON.stringify(options))

    let init = this.ballsPos[this.ballsPos.length - 1].init // 取出最后一个添加的ball
    this.ballsTween.push(this._generateTween(init, options.to))

    // console.log(Object.keys(options.to))
  }
  _generateTween(from, to) {
    let fromKeys = Object.keys(from)
    let toDestination = {}
    fromKeys.forEach(item => {
      toDestination[item] = to[item]
    })
    let track = new TWEEN.Tween(from)
    track.to(toDestination, to.duration).easing(TWEEN.Easing.Quadratic.InOut)
    if (to.delay) {
      track.delay(to.delay)
    }

    if (to.next) {
      track.chain(this._generateTween(from, to.next))
    }
    return track
  }
}
