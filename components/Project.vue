<template>
    <div>
        <div v-for="post in projectData" :key="post.id">
            <ul>
                <div v-if="lang">
                    <li class="title">{{post.name_vi}}</li>
                    <li class="body">{{post.description_vi}}</li>
                </div>
                <div v-else>
                    <li class="title">{{post.name_en}}</li>
                    <li class="body">{{post.description_en}}</li>
                </div>
            </ul>
        </div>
        
    </div>
</template>
<script>
export default {
  props: ["projectData", "lang"]
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


