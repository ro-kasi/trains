// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

window.bus = new Vue()
window.trainLineColors = ['#071E22', '#6279B8', '#1D7874', '#F4C095', '#EE2E31']

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

function rnd (min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

class EventGenerator {
  constructor (vueBus) {
    this.event_bus
    this.timer = null
  }

  start () {
    this.timer = window.setInterval(this.run, 5000)
  }

  run () {
    var min = 0
    var max = 9
    var action = Math.random() * (max - min) + min
    action = 1
    var cord = {
      'x': rnd(0, 5),
      'y': rnd(0, 5)
    }

    if (action > 0 && action <= 7) {
      cord['group'] = window.trainLineColors[rnd(0, 5)]
      console.log('adding passenger', cord)
      window.bus.$emit('add-passenger', cord)
    } else {
      console.log('adding new stop', cord)
      window.bus.$emit('add-station', cord)
    }
  }
}

var eventGen = new EventGenerator(window.bus)
eventGen.start()
