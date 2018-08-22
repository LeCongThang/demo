<template>
<div class="container">
    <div class="row">
        <h2>{{project.title_vi}}</h2>
        <img :src="$store.state.system_config.directory.project+'/'+project.image" :alt="project.title_vi" class="img-responsive">
        <div v-html="project.investor_vi"></div>
        <div v-html="project.location_vi"></div>
        <div v-html="project.type_of_project_vi"></div>
        <div v-for="image in project.project_images" :key="image.id">
            <div class="col-md-4">
                <a class="width100" data-fancybox="gallery" :href="$store.state.system_config.directory.project+'/'+image.image">
                    <div class="grid-gallery" v-bind:style="{ background: 'url('+$store.state.system_config.directory.project+'/'+image.image+ ') no-repeat center; background-size: cover'}">
                    </div>
                </a>
            </div>
        </div>
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
        } = await axios.get(environment.apiUrl + "project/" + route.params.id);
        return {
            project: data.data
        };
    }
};
</script>

<style>
.container>.row>img {
    width: 100% !important
}
</style>
