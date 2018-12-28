'use strict'

import './scss/main.scss'

import Clock from './libs/clock'

let canvas  = document.createElement('canvas')
let app = document.getElementById('app')

app.appendChild(canvas)

let width = app.clientWidth
let height = app.clientHeight

canvas.setAttribute('width', width)
canvas.setAttribute('height', height)

let RADIUS = '215'

let context = canvas.getContext('2d')
let color = '#4040ff'

let myClock = new Clock(context, {width, height, RADIUS, color})

myClock.drawClock()

function animate () {
  myClock.animateClock()
  requestAnimationFrame(animate)
}

animate()