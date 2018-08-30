<template>
<section class="wrapper">

    <div class="banner-partner-page">
        <div class="banner-partner-page-1">
            <h4>{{$t('links.library')}}</h4>
        </div>
    </div>

    <section class="gallery-home gallery-page">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <div class="title-page text-center">
                        <h2 v-html="$t('home.gallery')">
                        </h2>
                        <p>Hơn 50 dự án Central Real đã và đang phân phối bởi các nhà đầu tư uy tín
                            <br> chất lượng hàng đầu Việt Nam.</p>
                    </div>
                </div>
            </div>

            <div class="row ">
                <div class="col-sm-12">
                    <div class="ed-gallery">
                        <div v-for="(g,index) in galleryData.data" :key="g.id" :class="`gallery-${index+1}`" :style="`background: url(${$store.state.system_config.directory.gallery+'/'+g.gallery_images[0].image}) no-repeat center; background-size: cover;`"></div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <div class="gallery-video">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 ">
                    <div class="title-page text-center">
                        <h2>Thư viện
                            <strong>Video</strong>
                        </h2>
                        <p>Hơn 50 dự án Central Real đã và đang phân phối bởi các nhà đầu tư uy tín
                            <br> chất lượng hàng đầu Việt Nam.</p>
                    </div>
                </div>
                <div class="col-md-9">
                    <nuxt-link :to="`/news-detail/${videoData.data[0].id}/${videoData.data[0].slug}`" class="box-222">
                        <img :src="$store.state.system_config.directory.news+'/'+videoData.data[0].image_thumbnail" class="img-responsive" :alt="videoData.data[0].title_vi">
                        <span class="overload"></span>
                        <h4>{{lang ? videoData.data[0].title_vi:videoData.data[0].title_en}}</h4>
                    </nuxt-link>
                </div>
                <div class="col-md-3">
                    <nuxt-link v-for="(v,index) in videoData.data" :key="v.id" v-if="index>0 && index<3" :to="`/news-detail/${v.id}/${v.slug}`" class="news-aside">
                        <img :src="$store.state.system_config.directory.news+'/'+v.image_thumbnail" class="img-responsive" :alt="v.title_vi">
                        <h4>{{lang ? v.title_vi:v.title_en}}</h4>
                        <ul>
                            <li>
                                <i class="fa fa-calendar"></i>{{v.created_at}}</li>
                        </ul>
                    </nuxt-link>
                </div>
                <div class="col-lg-3">
                    <nuxt-link v-for="(v,index) in videoData.data" :key="v.id" v-if="index>2" :to="`/news-detail/${v.id}/${v.slug}`" class="news-aside">
                        <img :src="$store.state.system_config.directory.news+'/'+v.image_thumbnail" class="img-responsive" :alt="v.title_vi">
                        <h4>{{lang ? v.title_vi:v.title_en}}</h4>
                        <ul>
                            <li>
                                <i class="fa fa-calendar"></i>{{v.created_at}}</li>
                        </ul>
                    </nuxt-link>
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
    async asyncData() {
        let [gallery, video] = await Promise.all([axios.get(environment.apiUrl + "gallery"), axios.get(environment.apiUrl + "video")]);
        return {
            galleryData: gallery.data.data,
            videoData: video.data.data
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
