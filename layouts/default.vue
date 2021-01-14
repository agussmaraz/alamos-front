<template>
  <div>
    <div class="w-full">
      <Nuxt />
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin-left: 17px;
  font-family: 'Montserrat', sans-serif;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
html,
body,
div#__nuxt,
#__layout,
#__layout > div,
#app {
  min-height: 100%;
  height: -moz-available; /* WebKit-based browsers will ignore this. */
  height: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
  height: stretch;
}
</style>
