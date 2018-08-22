<template>
<div class="container">
    <div class="row">
        <h2>{{news.title_vi}}</h2>
        <img :src="$store.state.system_config.directory.news+'/'+news.image" :alt="news.title_vi" class="img-responsive">
        <div v-html="news.description_vi"></div>
    </div>
</div>
</template>

<script>
import axios from "axios";
import {
    environment
} from "~/plugins/config.js";
export default {
    async asyncData({
        route
    }) {
        let {
            data
        } = await axios.get(environment.apiUrl + "news/" + route.params.id);
        return {
            news: data.data
        };
    },
    middleware: 'news_detail'
};
</script>
<style>
  .container>.row>img{
    width: 100%!important
  }
</style>

