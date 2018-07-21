<template>
  <div class="container">
    <!-- <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1> -->
    <h1>404 not found</h1>
    <nuxt-link to="/">{{$t('links.home')}}</nuxt-link>
  </div>
</template>
<script>
export default {
  layout: "error_layout" // you can set a custom layout for the error page
};
</script>

