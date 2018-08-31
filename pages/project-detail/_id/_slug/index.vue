<template>
<section class="wrapper">

    <div class="banner-project-dt">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 padding-0">
                    <img :src="$store.state.system_config.directory.project+'/'+project.project.image" class="img-responsive" width="100% !important; height:auto" :alt="project.title_vi">
                </div>
            </div>
        </div>
    </div>

    <div class="box-pj-dt">
        <div class="container">
            <h1 class="text-center" style="text-transform:uppercase" v-if="lang" v-html="project.project.title_vi" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"></h1>
            <h1 class="text-center" style="text-transform:uppercase" v-else v-html="project.project.title_en" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"></h1>
            <p v-if="lang" v-html="project.project.description_vi" class="content-des"></p>
            <p v-else v-html="project.project.description_en" class="content-des"></p>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 share-likes">
                <ul>
                    <li>
                        <a target="_blank" :href="`https://www.facebook.com/sharer/sharer.php?u=http://centralreal.cf${this.$route.fullPath}`">
                                        <i class="fa fa-facebook"></i> Share</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="event-highlight-page">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <div class="title-page text-center">
                        <h2>Dự án
                            <strong>nổi bật</strong>
                        </h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4" v-for="r in project.projects_rela" :key="r.id" data-aos="fade-up" :data-aos-delay="(index+1)*150" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <div class="box-event-page">
                        <nuxt-link :to="`/project-detail/${r.id}/${r.slug}`">
                            <img :src="$store.state.system_config.directory.project+'/'+r.image" class="img-responsive project-related" :alt="r.title_vi">
                        </nuxt-link>
                        <div class="txt-box-event-page">
                            <nuxt-link :to="`/project-detail/${r.id}/${r.slug}`">
                                <h4>{{lang?r.title_vi:r.title_en}}</h4>
                            </nuxt-link>
                            <p v-if="lang" v-html="r.des_short_vi"></p>
                            <p v-else v-html="r.des_short_en"></p>
                        </div>
                    </div>
                </div>
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
    async asyncData({
        route
    }) {
        let {
            data
        } = await axios.get(environment.apiUrl + "project/" + route.params.id);
        return {
            project: data.data
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
    head() {
        return {
            title: this.project.project.title_vi,
            meta: [{
                    hid: "description",
                    name: "description",
                    content: this.project.project.des_short_vi
                },
                {
                    hid: "og:title",
                    name: "og:title",
                    content: this.project.project.title_vi
                },
                {
                    hid: "og:description",
                    name: "og:description",
                    content: this.project.project.des_short_vi
                },
                {
                    hid: "og:image",
                    name: "og:image",
                    content: this.$store.state.system_config.directory.project + '/' + this.project.project.image_thumbnail
                }
            ]
        };
    },
    mounted() {
        var url = "/project";
        $("ul.nav > li").removeClass("active");
        $("a[href=\"" + url + "\"]")
            .parent()
            .addClass("active");
    }
};
</script>

<style>
.container>.row>img {
    width: 100% !important
}
</style>
