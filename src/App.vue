<template>
  <div id="app">
    <nav class="p-3 bg-light text-white mb-5">
      <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-0">
        <li><img src="./assets/planete-terre.png" alt="Vue logo" height="64" /></li>
        <li class="link m-auto"><router-link to="/">Home</router-link></li>
        <li class="link m-auto"><router-link to="/suppliers" v-on:click.native="onSuppliersListClick">Liste des fournisseurs</router-link></li>
        <li class="link m-auto"><router-link to="/map" v-on:click.native="onMapClick">Carte des fournisseurs</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    onSuppliersListClick() {
      window.alert("Vous allez être redirigé vers la liste des fournisseurs");
    },
    onMapClick() {
      window.alert("Vous allez être redirigé sur la carte des fournisseurs");
    },
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

@import'~bootstrap/dist/css/bootstrap.css';
</style>
