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
                        <nuxt-link v-for="(g,index) in galleryData.data" :key="g.id" :to="`/gallery-detail/${g.id}/${g.slug}`">
                            <div :class="`gallery-${index+1}`" :style="`background: url(${$store.state.system_config.directory.gallery+'/'+g.gallery_images[0].image}) no-repeat center; background-size: cover;`"></div>
                        </nuxt-link>
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
                    <nuxt-link :to="`/news-detail/${videoData.data[0].id}/${videoData.data[0].slug}`" class="box-news-page">
                        <img :src="$store.state.system_config.directory.news+'/'+videoData.data[0].image_thumbnail" class="img-responsive" :alt="videoData.data[0].title_vi">
                        <i class="fa fa-4x fa-youtube-play play-button" aria-hidden="true"></i>
                        <h3>
                            <strong v-if="lang" v-html="videoData.data[0].title_vi"></strong>
                            <strong v-else v-html="videoData.data[0].title_vi"></strong>
                        </h3>
                    </nuxt-link>
                </div>
                <div class="col-md-3">
                    <nuxt-link v-for="(n,index) in videoData.data" :key="n.id" v-if="index>0&&index<3" :to="`/news-detail/${n.id}/${n.slug}`" class="news-aside">
                        <img :src="$store.state.system_config.directory.news+'/'+n.image_thumbnail" :alt="n.title_vi" class="img-responsive">
                        <i class="fa fa-2x fa-youtube-play play-button" aria-hidden="true"></i>
                        <h4 v-if="lang" v-html="n.title_vi"></h4>
                        <h4 v-else v-html="n.title_en"></h4>
                        <ul>
                            <li><i class="fa fa-calendar"></i> {{n.created_at}}</li>
                        </ul>
                    </nuxt-link>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4" v-for="(n,index) in videoData.data" :key="n.id" v-if="index>=3">
                    <nuxt-link :to="`/news-detail/${n.id}/${n.slug}`" class="news-aside">
                        <img :src="$store.state.system_config.directory.news+'/'+n.image_thumbnail" :alt="n.title_vi" class="img-responsive">
                        <i class="fa fa-3x fa-youtube-play play-button" aria-hidden="true"></i>
                        <h4 v-if="lang" v-html="n.title_vi"></h4>
                        <h4 v-else v-html="n.title_en"></h4>
                        <ul>
                            <li><i class="fa fa-calendar"></i> {{n.created_at}}</li>
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
