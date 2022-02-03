<template>
  <nav class="navbar navbar-custom navbar-expand-lg">
    <a class="navbar-brand" href="#">
      <img src="../assets/logo.png" alt="..." height="36"
    /></a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto text-capitalize">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            <router-link to="/" class="a text-decoration-none"
              >Home</router-link
            >
            <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to="/about" class="a text-decoration-none"
              >About</router-link
            ></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to="/Contact" class="a text-decoration-none"
              >Contact</router-link
            ></a
          >
        </li>
    

        <li class="nav-item dropdown">
          <a
            class="intro nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Languages
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">En</a>
            <a class="dropdown-item" href="#">Ar</a>
          </div>
        </li>
            <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to="/cart"  class="as text-decoration-none">Cart</router-link>
            <base-badge mode="highlight">{{ cartQuantity }}</base-badge></a
          >
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
      
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  </nav>
</template>
<script>
import BaseBadge from '../components/BaseBadge.vue';
export default {
  name: "navbar",
  components: {
   BaseBadge
  },
   computed:{
   cartQuantity(){

     return this.$store.getters['cart/quantity']
   }
 }
};
</script>
<style scoped>
.navbar-custom {
  background-color: #70a6be;
  font-weight: 500;
}
.nav-item .nav-link,
.a {
  color: white;
  font-weight: 2em;
}

.as {
  color: #b3282b;
  font-weight: 2.8em;
  font-size: large;
}



.navbar-toggler {
  color: white;
  background-color: none;
  border: none;
}
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(179,40,43, 0.8)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  width: 1em;
}
.navbar-nav > .active > a :not(.intro) {
  border-bottom: 2px solid #b3282b;
}
.navbar-nav > .active > a > .as{
  border-bottom: 2px solid white;

}

.btn-outline-success {
  color: #b3282b;
  border-color: #b3282b;
  font-weight: 500;
}

.btn-outline-success:hover,
.btn-outline-success:active,
.btn-outline-success:visited,
.btn-outline-success:focus {
  background-color: #b3282b !important;
  color: white;
  border-color: none;
}

@media screen and (max-width: 991px) {
  .form-control {
    width: 60%;
  }
}
</style>