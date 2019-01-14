<template>
  <div>{{name}}</div>
</template>
<script>
export default {
  props: {
    name: {
      type: [String, Number],
      default: ""
    }
  },

  //组件被复用时调用
  beforeRouteUpdate(to, from, next) {
    console.log(to.name, from.name);
  }
};
</script>
