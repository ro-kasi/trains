<template>
  <div id="app">    
    <svg width="500" height="500" class="base">      
      <trainLine v-for="l in links"
        :start='stations[l[0]]' 
        :end='stations[l[1]]' 
        :radius="radius" 
        :margin="margin" 
        :offset="offset" />
      <line :x1='lineX1' :y1='lineY1' :x2='lineX2' :y2='lineY2'></line>
      <station v-for="s in stations" 
        :x="s.x" :y="s.y" :visible='s.visible'
        :radius="radius" 
        :margin="margin" 
        :offset="offset" 
        v-on:station_click="station_click($event)"/>
    </svg>
    <br />

    <label>Margin</label>
    <input type="range" v-model.number="margin" min="0" max="100">
    <span>{{margin}}</span>
    <br />
    
    <label>Radius</label>
    <input type="range" v-model.number="radius" min="0" max="100">
    <span>{{radius}}</span>
    <br />

    <label>Offset</label>
    <input type="range" v-model.number="offset" min="0" max="100">
    <span>{{offset}}</span>
  </div>
</template>

<script>
  import station from './components/Station.vue'
  import trainLine from './components/TrainLine.vue'
  export default {
    name: 'app',
    components: {station, trainLine},
    data () {
      return {
        margin: 5,
        radius: 10,
        offset: 50,
        stations: [],
        links: [
          [0, 11],
          [11, 3]
        ],
        lineX1: null,
        lineY1: null,
        lineX2: null,
        lineY2: null
      }
    },
    created () {
      for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
          var sta = {
            'x': i,
            'y': j,
            'px': null,
            'py': null,
            'visible': true
          }
          this.stations.push(sta)
        }
      }
    },
    methods: {
      station_click: function (event) {
        console.log('station_click rcv', event.clientX)
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .base {  
    background: #f7f7f7;
  }

</style>
