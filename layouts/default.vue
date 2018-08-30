<template>
  <section class="main">
    <navbar/>
    <nuxt/>
    <down/>
    <phone/>
    <popup/>
  </section>
</template>
<script>
import Navbar from '~/components/Navbar'
import Down from '~/components/Footer'
import Phone from '~/components/Phone'
import Popup from '~/components/Popup'
export default {
  components:{
    Navbar,
    Down,
    Phone,
    Popup
  },
  mounted(){
    var adModal = this.$store.state.system_config.config_popup.is_active;
    var delay = this.$store.state.system_config.config_popup.delay*1000;
    if (adModal) {

      setTimeout(function() {
        $('#admodal').find('.item').first().addClass('active');
        $('#admodal').modal({
          backdrop: 'static',
          keyboard: false
        });

      }, delay);
    }
  }
}
</script>