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
  }
}
</script>