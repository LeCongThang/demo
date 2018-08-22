<template>
<section class="about-home">
    <div class="container">
        <div class="row">
            <h1 class="text-center" style="color:red">About us page under construction</h1>
            <div class="col-md-6 col-md-offset-3">
                <div class="title-page text-center">
                    <h2 v-html="$t('home.about')"></h2>
                    <p v-if="lang">{{$store.state.system_config.config.title_about_vi}}</p>
                    <p v-else>{{$store.state.system_config.config.title_about_en}}</p>
                </div>
            </div>
        </div>
        <div class="row about-home-2">
            <div class="col-md-5">
                <div v-if="lang" v-html="aboutus.content_vi"></div>
                <div v-else v-html="aboutus.content_en"></div>
                <ul class="number-count">
                    <li>
                        <img src="/images/icon/icon-a.png" alt="">
                        <h2>385K</h2>
                    </li>
                    <li>
                        <img src="/images/icon/icon-b.png" alt="">
                        <h2>385K</h2>
                    </li>
                    <li>
                        <img src="/images/icon/icon-c.png" alt="">
                        <h2>38+</h2>
                    </li>
                    <li>
                        <img src="/images/icon/icon-d.png" alt="">
                        <h2>385K</h2>
                    </li>
                </ul>
            </div>
            <div class="col-md-7">
                <div class="about-home-right">
                    <img :src="$store.state.system_config.directory.about+'/'+aboutus.image" alt="centralreal.vn" class="img-responsive">
                </div>

            </div>
        </div>
    </div>
</section>
</template>
<script>
import axios from "axios";
import { environment } from "~/plugins/config.js";
export default {
  async asyncData() {
    let [about] = await Promise.all([axios.get(environment.apiUrl + "about")]);
    return {
      aboutus: about.data.data
    };
  },
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
