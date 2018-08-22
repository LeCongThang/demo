<template>
    <h1 class="text-center" style="color:red">Partner page under construction</h1>
</template>
<script>
export default {
  computed: {
    lang() {
      if (this.$store.state.lang == "vi") {
        return true;
      }
      return false;
    }
  },
  mounted() {
    var url = $(location).attr("pathname");
    $("ul.nav > li").removeClass("active");
    $('a[href="' + url + '"]')
      .parent()
      .addClass("active");
  }
};
</script>
