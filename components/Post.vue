<template>
    <div>
        <div v-for="post in postData" :key="post.id">
            <ul>
                <div v-if="lang">
                    <li class="title">{{post.title_vi}}</li>
                    <li class="body">{{post.description_vi}}</li>
                    <nuxt-link :to="`news-detail/${post.id}/${post.slug}`" 
              class="card-footer-item" append>
              Read More
            </nuxt-link>
                </div>
                <div v-else>
                    <li class="title">{{post.title_en}}</li>
                    <li class="body">{{post.description_en}}</li>
                    <nuxt-link :to="`news-detail/${post.id}/${post.slug}`" class="card-footer-item" append>
              Read More
            </nuxt-link>
                </div>
            </ul>
        </div>
        
    </div>
</template>
<script>
export default {
  props: ["postData", "lang", "totalPage"]
};
</script>
<style>
ul {
  padding: 10px;
}
.title {
  background-color: red;
  padding: 5px;
}
.body {
  background-color: green;
  padding: 3px;
}
</style>


