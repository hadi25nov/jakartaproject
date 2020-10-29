<template>
  <div id="app">
    <navbar />
    <router-view>
      <HelloWorld msg="Welcome to Hadi App" />
    </router-view>
  </div>
</template>

<script>
import Navbar from "./components/layouts/navbar";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Navbar
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
