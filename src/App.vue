<template>
  <div id="app">
    <nav class="p-3 bg-light text-white mb-5">
        <ul class="nav col-12 col-lg-auto me-lg-auto justify-content-between mb-0">
          <li><img src="./assets/planete-terre.png" alt="Vue logo" height="78" /></li>
          <li>
            <ul class="nav">
              <li class="link m-4"><router-link to="/">Home</router-link></li>
              <li class="link m-4"><router-link to="/suppliers">Liste des fournisseurs</router-link></li>
              <li class="link m-4"><router-link to="/map">Carte des fournisseurs</router-link></li>
              <!-- v-on:click.native="onMapClick" -->
              <!-- .native = Sert à faire un event sur les <router-link></router-link> -->
            </ul>
          </li>
        </ul>
    </nav>
    <router-view :suppliers="suppliers" :error="error"></router-view>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  // methods: {
  //   onSuppliersListClick() {
  //     window.alert("Vous allez être redirigé vers la liste des fournisseurs");
  //   },
  //   onMapClick() {
  //     window.alert("Vous allez être redirigé sur la carte des fournisseurs");
  //   },
  // },
data() {
    return {
  //     suppliers: [
  //   {
  //     id: 1,
  //     name: "Fournisseur 1 ?",
  //     status: true,
  //     checkedAt: new Date('April 26, 2022 10:34:10')
  //   },
  //   {
  //     id: 2,
  //     name: "Fournisseur 2",
  //     status: false,
  //     checkedAt: new Date('April 25, 2022 15:34:10')
  //   }
  // ]
    suppliers: null,
    loading: true,
    error: null,
    }
  },
  created() {
    axios
      .get(
        "https://api-suppliers.herokuapp.com/api/suppliers"
      )
      .then((response) => {
        console.log(response);
        this.suppliers = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.error = true;
      })
      .then(() => (this.loading = false))
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

nav a:hover {
  color: #42b983;
}

nav a.router-link-exact-active {
  color: #42b983;
}

 nav img {
   margin-left: 24px;
 }

@import'~bootstrap/dist/css/bootstrap.css';
</style>
