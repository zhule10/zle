<template>
  <div class="tel">tel:18888133982
    <p>{{message}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: ""
    };
  },
  mounted() {
    this.$bus.$on("on-click", mes => {
      this.message = mes;
    });
    //$on添加一个事件监听
  }
};
</script>

<style scoped>
.tel {
  border: 1px salmon solid;
}
</style>


