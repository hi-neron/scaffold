'use strict'

export default class Clock {
  constructor (context, sizes) {
    this.context = context
    this.width = sizes.width
    this.height = sizes.height
    this.RADIUS = sizes.RADIUS
    this.color = sizes.color
  }

  drawClock () {
    let date = new Date()
    let hour = date.getHours()
    hour = hour > 12 ? hour - 12 : hour
    let seconds = date.getSeconds()
    let minutes = date.getMinutes()
    this.context.clearRect(0,0, this.width, this.height);

    this.drawCircle()
    this.drawCenter()
    this.drawHand(hour, 4, 12)
    this.drawHand(seconds, 2, 60)
    this.drawHand(minutes, 2, 60)
  }

  drawCircle () {
    this.context.beginPath()
    this.context.arc(this.width / 2, this.height / 2, this.RADIUS, 0, Math.PI*2, true)
    this.context.strokeStyle = this.color
    this.context.stroke()
    this.context.closePath()
  }
  
  drawCenter () {
    this.context.beginPath()
    this.context.arc(this.width / 2, this.height / 2, this.RADIUS * 0.05, 0, Math.PI*2, true)
    this.context.fillStyle = this.color
    this.context.fill()
  }
  
  drawHand (quant, size, steps) {
    let angle = (Math.PI * 2) * (quant / steps) - Math.PI/2
    this.context.beginPath()
    this.context.moveTo(this.width / 2, this.height / 2)
    this.context.lineTo(this.width / 2 + Math.cos(angle) * (this.RADIUS - 5), this.height / 2 + Math.sin(angle) *  (this.RADIUS - 5))
    this.context.lineWidth = size
    this.context.stroke()
    this.context.closePath()
  }

  animateClock () {
    this.drawClock()
  }
}