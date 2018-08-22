<template>
<section class="project-home">
    <div class="container">
        <div class="row">
            <h1 class="text-center" style="color:red">Project page under construction</h1>
            <div class="col-md-6 col-md-offset-3">
                <div class="title-page text-center">
                    <h2 v-html="$t('home.project')"></h2>
                    <p v-if="lang" v-html="$store.state.system_config.config.title_project_vi"></p>
                    <p v-else v-html="$store.state.system_config.config.title_project_en"></p>
                </div>
            </div>
        </div>

        <div class="row flex-ed">
            <div class="col-md-4 col-sm-6" v-for="project in projectData.data" :key="project.id">
                <div class="box-project-home">
                    <ul>
                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                        <li><a href="#"><i class="fa fa-share-alt"></i></a></li>
                        <li><a href="#"><i class="fa fa-plus"></i></a></li>
                    </ul>
                    <nuxt-link :to="{name:'project-detail-id-slug',params:{id:project.id,slug:project.slug}}" class="pic-prj-home">
                        <img :src="$store.state.system_config.directory.project+'/'+project.image" :alt="project.title_vi" class="img-responsive">
                    </nuxt-link>
                    <div class="txt-prj-home">
                        <nuxt-link :to="{name:'project-detail-id-slug',params:{id:project.id,slug:project.slug}}">
                            <h4 v-if="lang">{{project.title_vi}}</h4>
                            <h4 v-else>{{project.title_en}}</h4>
                        </nuxt-link>
                        <ul v-if="lang">
                            <li><strong>Chủ đầu tư:</strong> {{project.investor_vi}}</li>
                            <li><strong>Vị trí dự án:</strong> {{project.location_vi}}</li>
                            <li><strong>Loại hình:</strong> {{project.type_of_project_vi}}</li>
                        </ul>
                        <ul v-else>
                            <li><strong>Chủ đầu tư:</strong> {{project.investor_en}}</li>
                            <li><strong>Vị trí dự án:</strong> {{project.location_en}}</li>
                            <li><strong>Loại hình:</strong> {{project.type_of_project_en}}</li>
                        </ul>
                        <div class="btn-page text-center">
                            <nuxt-link :to="{name:'project-detail-id-slug',params:{id:project.id,slug:project.slug}}">
                                {{$t('common.readmore')}}
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center">
            <div class="btn-group" role="group">
                <button type="button" v-on:click="getProjectData(1)" class="btn btn-md btn-default"><i class="fa fa-angle-double-left" aria-hidden="true"></i></button>
                <button type="button" v-for="page in projectData.last_page" :key="page" v-on:click="getProjectData(page)" class="btn btn-md btn-default">{{page}}</button>
                <button type="button" v-on:click="getProjectData(projectData.last_page)" class="btn btn-md btn-default"><i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import axios from "axios";
import {
    environment
} from "~/plugins/config.js";
export default {
    async asyncData() {
        let [project] = await Promise.all([
            axios.get(environment.apiUrl + "project")
        ]);
        return {
            projectData: project.data.data
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
    methods: {
        async getProjectData(page) {
            this.$nuxt.$loading.start();
            let {
                data
            } = await axios.get(
                environment.apiUrl + "project?page=" + page
            );
            this.projectData = data.data;
            this.$nuxt.$loading.finish();
        }
    },
    mounted() {
        var url = $(location).attr("pathname");
        $("ul.nav > li").removeClass("active");
        $("a[href=\"" + url + "\"]")
            .parent()
            .addClass("active");
    }
};
</script>
