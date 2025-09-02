<template>
  <div id="app">
    <HomePage />
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
}

#app {
  width: 100%;
  min-height: 100vh;
}

/* Global styles */
button {
  cursor: pointer;
}

a {
  text-decoration: none;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>
