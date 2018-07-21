<template>
    <div>
        <h2>{{$route.params.id}}</h2>
        {{news.data}}
    </div>
</template>
<script>
import axios from "axios";
import { environment } from "~/plugins/config.js";
export default {
  async asyncData() {
    let { data } = await axios.get(environment.apiUrl + "news?page=1");
    return {
      news: data.data
    };
  },
  middleware:'news_detail'
};
</script>

