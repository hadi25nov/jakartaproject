<template>
  <div>
    <h1>{{ msg }}</h1>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <div class="mt-5">
      <b-avatar size="10rem"><img src="../assets/hadi.jpg" alt="" /></b-avatar>
      <h1 class="text-center mt-9">Portfolio</h1>
      <h1 class="mt-3">Nurhadi Novrianto</h1>
      <p>Tenaga IT Kementerian Sosial</p>
      <div>
        <b-button variant="secondary">About</b-button>
        <b-button variant="danger">Project</b-button>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  components: {},
  props: {
    msg: String,
  },
  data() {
    return {
      imgSrc:
        "https://drive.google.com/file/d/1-FjOMzpOdM24Mahw7WlgCegYZlgC1Pua/view",
        items: [
        
          {
            text: 'Home',
            active: true
          }
        ]
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
