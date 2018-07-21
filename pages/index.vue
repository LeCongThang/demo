<template>
  <section class="wrapper">
      <slider/>
      <!-- <post
      :postData="postData.data"
      :lang="lang"
      />
      <div v-for="page in postData.last_page" :key="page">
        <button v-on:click="getNewsData(page)">{{page}}</button>
      </div>

      <project
      :projectData="projectData.data"
      :lang="lang"
      /> -->
      <p class="123"></p>
      <about/>
      <project/>
      <event/>
      <gallery/>
      <news/>
      <feedback/>
      <partner/>
      <contact/>
      
  </section>
</template>

<script>
import Slider from "~/components/home/Slider.vue";
import About from "~/components/home/About.vue";
import Project from "~/components//home/Project.vue";
import Event from "~/components/home/Event.vue";
import Gallery from "~/components/home/Gallery.vue";
import News from "~/components/home/News.vue";
import Feedback from "~/components/home/Feedback.vue";
import Partner from "~/components/home/Partner.vue";
import Contact from "~/components/home/Contact.vue";
import centralrealApi from "~/plugins/api";
import axios from "axios";
import { environment } from "~/plugins/config.js";

export default {
  components: {
    Slider,
    About,
    Project,
    Event,
    Gallery,
    News,
    Feedback,
    Partner,
    Contact
  },
  async asyncData() {
    let [pageRes, countRes] = await Promise.all([
      axios.get(environment.apiUrl + "news?page=1"),
      axios.get(environment.apiUrl + "project?page=1")
    ])
    return {
      postData:pageRes.data.data,
      projectData:countRes.data.data
    }
  },
  computed: {
    lang() {
      if (this.$store.state.lang == "vi") {
        return true;
      }
      return false;
    }
  },
  head() {
    return {
      title: this.$store.state.system_config.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  },
  methods: {
    async getNewsData(page) {
      this.$nuxt.$loading.start()
      let { data } = await axios.get(environment.apiUrl + "news?page=" + page);
      this.postData = data.data;
      this.$nuxt.$loading.finish()
    }
  }
};
</script>


