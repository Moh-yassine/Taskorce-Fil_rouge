<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Global CSS Reset */
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
  min-height: 100vh;
}

/* Global link styles */
a {
  text-decoration: none;
  color: inherit;
}

/* Global button styles */
button {
  cursor: pointer;
  border: none;
  outline: none;
}

/* Global input styles */
input, textarea {
  font-family: inherit;
}
</style>
