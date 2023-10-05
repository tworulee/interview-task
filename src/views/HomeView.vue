<template>
  <div class="home">
    <NavBar />
    <HeaderPage />
    <RowBar />
    <RowBar />
    <RowBar />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderPage from '@/components/HeaderPage.vue';
import NavBar from '@/components/NavBar.vue';
import RowBar from '@/components/RowBar.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderPage,
    NavBar,
    RowBar,
  },
};
</script>

<style>
/* body {
  background-color: black;
} */
</style>
