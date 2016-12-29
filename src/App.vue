<template>
  <div id="app">    
    <svg width="500" height="500" class="base">      
      <trainLine v-for="line in lines"
        :shape="line"
        :radius="radius" 
        :margin="margin" 
        :offset="offset" />
      <station v-for="s in stations" 
        :x="s.x" :y="s.y" :visible='s.visible'
        :radius="radius" 
        :margin="margin" 
        :offset="offset" 
        v-on:station_click="station_click($event)"/>
    </svg>
    <br />
    
    <div class="block_parent">
      <div class="block_item">  
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
      
      <div class="block_item">
        <label>Add New Path</label><br />
        <span v-for="p in selectedPointsList"> ({{ p.x }}, {{ p.y }}), </span> <br />
        <select v-model="selectedPoint">
          <option v-for="(st, index) in stations" v-bind:value="index">
            {{ st. x }}, {{ st.y }}
          </option>
        </select>
        <button @click="addPoint"> add point </button> <br />
        <button @click="addLine"> finish line </button>
      </div> 
    </div>

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
        margin: 80,
        radius: 10,
        offset: 50,
        stations: [],
        selectedPoint: null,
        selectedPointsList: [],
        lines: []
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
      },
      addPoint: function () {
        this.selectedPointsList.push(this.stations[this.selectedPoint])
      },
      addLine: function () {
        this.lines.push(this.selectedPointsList)
        this.selectedPointsList = []
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

  .block_parent{
    display: inline;
  }

  .block_item {
    display: inline-block;
    width: 220px;
  }

  .base {  
    background: #f7f7f7;
  }

</style>
