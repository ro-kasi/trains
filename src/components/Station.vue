<template>
  <g v-bind:transform="'translate(' + px + ',' + py + ')'">
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
      }
    },
    computed: {
      px: function () {
        console.log('px change')
        return (this.radius + this.offset * this.x) + this.margin
      },
      py: function () {
        return (this.radius + this.offset * this.y) + this.margin
      }
    },
    created () {
      console.log('hi')
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