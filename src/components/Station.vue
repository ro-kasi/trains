<template>
  <g v-bind:transform="'translate(' + px + ',' + py + ')'"  v-on:click="stationClick($event)">
    <circle v-bind:r="radius" class="station"/>
    <text v-bind:x="radius" v-bind:y="-1 * radius">( {{x}}, {{y}})</text>
  </g>
</template>

<script type="text/javascript">
  export default {
    name: 'station',
    props: {
      x: {
        type: Number,
        required: true
      },
      y: {
        type: Number,
        required: true
      },
      radius: {
        type: Number,
        required: true
      },
      offset: {
        type: Number,
        required: true
      },
      margin: {
        type: Number,
        required: true
      },
      visible: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      px: function () {
        return (this.radius + this.offset * this.x) + this.margin
      },
      py: function () {
        return (this.radius + this.offset * this.y) + this.margin
      },
      show: function () {
        return this.visible ? 'yes' : 'hidden'
      }
    },
    methods: {
      toggle: function () {
        this.visible = !this.visible
      },
      stationClick: function (event) {
        console.log('station-click emited')
        this.$emit('station_click', event)
      }
    }
  }
</script>

<style type="text/css">  
  .station {
    fill: #d8d8d8;
    stroke: #000000;
    stroke-width: 2;
  }
</style>