<template>
  <div id="restaurant-forum">
    <Navbar />
    <main role="main" class="mt-5 bg-white">
      <router-view />
    </main>
  </div>
</template>

<script>
/* eslint-disable */

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>