<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
       <router-link :to="{name:'parent'}">命名路由</router-link>|
        <router-link :to="{name:'mmst'}">命名视图</router-link>|
         <router-link :to="{name:'main'}">重定向</router-link>
    </div>
    <router-view/>
    <router-view name="email"></router-view>
     <router-view name="tel"></router-view>
     <!-- 命名视图 -->
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
