<template>
  <line :x1="x1" :y1="y1" :x2="x2" :y2="y2" class="trainLine"></line>
</template>

<script type="text/javascript">
  export default {
    name: 'line',
    props: {
      start: {
        type: Object,
        required: true
      },
      end: {
        type: Object,
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
      x1: function () {
        return (this.radius + this.offset * this.start.x) + this.margin
      },
      y1: function () {
        return (this.radius + this.offset * this.start.y) + this.margin
      },

      x2: function () {
        return (this.radius + this.offset * this.end.x) + this.margin
      },
      y2: function () {
        return (this.radius + this.offset * this.end.y) + this.margin
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