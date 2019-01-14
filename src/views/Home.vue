<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">我要去某个页面</button>
    <button @click="handleClick('replace')">我要把当前页面替换掉</button>
    {{peoplename}}
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  props: {
    peoplename: {
      type: String,
      default: "zhule"
    }
  },
  components: {
    HelloWorld
  },

  // beforeRouteLeave(to, from, next) {
  //   //页面即将离开的时候调用
  //   const leave = confirm("您确定要离开吗");
  //   if (leave) next();
  //   else next(false);
  // },

  beforeRouteEnter(to, from, next) {
    console.log(to.name);
    next(vm => {
      console.log(vm);
      //这样获取实例
    });
  },
  //渲染该组件被确认前调用,这个时候页面还没有渲染，用this获取不到当前实例

  methods: {
    handleClick(type) {
      this.$router.go(-2);
      if (type === "back") this.$router.back();
      // else if (type==='push') this.$router.push('/parent')
      else if (type === "push") {
        name: "zhule";
        this.$router.push({
          path: `/argu/${name}`
          // name: "argu",
          // params: {
          //   name: "zhule"
          // },
          // query: {
          //   name: "zhule"
          // }
        });
      } else if (type === "replace") {
        this.$router.replace({
          name: "mmst"
        });
      }
    }
  }
};
</script>
