<template>
  <div id="app">    
    <svg width="500" height="500" class="base">
      <station v-for="s in stations" 
        :x="s.x" :y="s.y" :visible='s.visible'
        :radius="radius" 
        :margin="margin" 
        :offset="offset" />
        
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
  export default {
    name: 'app',
    components: {station},
    data () {
      return {
        margin: 5,
        radius: 10,
        offset: 50,
        stations: []
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
      for (var st of this.stations) {
        st.px = (this.radius + this.offset * st.x) + this.margin
        st.py = (this.radius + this.offset * st.y) + this.margin
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
