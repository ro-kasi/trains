<template>
  <g>
    <line v-for="l in lines" 
      :x1="l.x1" :y1="l.y1" 
      :x2="l.x2" :y2="l.y2" 
      class="trainLine" />
    </line>
  </g>
</template>

<script type="text/javascript">
  export default {
    name: 'line',
    props: {
      shape: {
        type: Array,
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
      lines: function () {
        var lines = []
        for (var i = 0; i < (this.shape.length - 1); i++) {
          var start = this.shape[i]
          var end = this.shape[i + 1]
          var temp = {
            'x1': this.getPoint(start.x),
            'y1': this.getPoint(start.y),

            'x2': this.getPoint(end.x),
            'y2': this.getPoint(end.y)
          }
          lines.push(temp)
        }
        return lines
      }
    },
    methods: {
      getPoint: function (i) {
        return (this.radius + this.offset * i) + this.margin
      }
    }
  }

</script>

<style type="text/css">
  .trainLine {
    stroke-width: 2px;
    stroke: black;
  }
</style>