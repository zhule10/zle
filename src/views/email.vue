<template>
  <div class="email">
    email:77855193@qq.com
    <button @click="handleClick">按我</button>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      this.$bus.$emit("on-click", "hello");
    }
  }
};
</script>

<style scoped>
.email {
  border: 1px seagreen solid;
}
</style>
