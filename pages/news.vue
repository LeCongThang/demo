<template>
<!-- <section class="project-home">
    <div class="container">
        <div class="row">
            <h1 class="text-center" style="color:red">News page under construction</h1>
            <div class="col-md-6 col-md-offset-3">
                <div class="title-page text-center">
                    <h2 v-html="$t('home.news')"></h2>
                    <p v-if="lang" v-html="$store.state.system_config.config.title_news_vi"></p>
                    <p v-else v-html="$store.state.system_config.config.title_news_en"></p>
                </div>
            </div>
        </div>

        <div class="row flex-ed">
            <div class="col-md-4 col-sm-6" v-for="news in newsData.data" :key="news.id">
                <div class="box-project-home">
                    <ul>
                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                        <li><a href="#"><i class="fa fa-share-alt"></i></a></li>
                        <li><a href="#"><i class="fa fa-plus"></i></a></li>
                    </ul>
                    <nuxt-link :to="{name:'news-detail-id-slug',params:{id:news.id,slug:news.slug}}">
                        <img :src="$store.state.system_config.directory.news+'/'+news.image" :alt="news.title_vi" class="img-responsive">
                    </nuxt-link>
                    <div class="txt-prj-home">
                        <nuxt-link :to="{name:'news-detail-id-slug',params:{id:news.id,slug:news.slug}}">
                            <h4 v-if="lang">{{news.title_vi}}</h4>
                            <h4 v-else>{{news.title_en}}</h4>
                        </nuxt-link>
                        <div v-if="lang" v-html="news.description_vi"></div>
                        <div v-else v-html="news.description_en"></div>
                        <div class="btn-page text-center">
                            <nuxt-link :to="{name:'news-detail-id-slug',params:{id:news.id,slug:news.slug}}">
                                {{$t('common.readmore')}}
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center">
            <div class="btn-group" role="group">
                <button type="button" v-on:click="getNewsData(1)" class="btn btn-md btn-default"><i class="fa fa-angle-double-left" aria-hidden="true"></i></button>
                <button type="button" v-for="page in newsData.last_page" :key="page" v-on:click="getNewsData(page)" class="btn btn-md btn-default">{{page}}</button>
                <button type="button" v-on:click="getNewsData(newsData.last_page)" class="btn btn-md btn-default"><i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
            </div>
        </div>
    </div>
</section> -->
<section class="wrapper">

    <div class="banner-news-page">
        <div class="banner-news-page-1">
            <h4>{{$t('links.news')}}</h4>
        </div>
    </div>
    <div class="news-highlight">
        <div class="container">
            <div class="row">
                <div class="col-md-4" v-for="n in newsData.data" :key="n.id">
                    <nuxt-link :to="`/tin-tuc/${n.slug}`" class="box-222">
                        <img :src="$store.state.system_config.directory.news+'/'+n.image_thumbnail" class="img-responsive" :alt="n.title_vi" style="height:220px !important">
                        <span class="overload"></span>
                        <h4 v-if="lang" v-html="n.title_vi"></h4>
                        <h4 v-else v-html="n.title_en"></h4>
                    </nuxt-link>
                </div>

            </div>
            <div class="text-center paging" v-if="newsData.last_page>1">
                <div class="btn-group" role="group">
                    <button type="button" v-on:click="getNewsData(1)" class="btn btn-md btn-default"><i class="fa fa-angle-double-left" aria-hidden="true"></i></button>
                    <button type="button" v-for="page in newsData.last_page" :key="page" v-on:click="getNewsData(page)" :class="`btn btn-md btn-default ${genCurrentPageActive(page)}`">{{page}}</button>
                    <button type="button" v-on:click="getNewsData(newsData.last_page)" class="btn btn-md btn-default"><i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
    </div>
    <div class="news-highlight">
        <div class="container">
            <div class="row">
                <div class="title-page text-center">
                    <h2><strong>Video</strong></h2>
                </div>
                <div class="col-md-9">
                    <nuxt-link :to="`/tin-tuc/${videoData.data[0].slug}`" class="box-news-page">
                        <img :src="$store.state.system_config.directory.news+'/'+videoData.data[0].image_thumbnail" class="img-responsive" :alt="videoData.data[0].title_vi">
                        <i class="fa fa-4x fa-youtube-play play-button" aria-hidden="true"></i>
                        <h4>
                            <strong v-if="lang" v-html="videoData.data[0].title_vi"></strong>
                            <strong v-else v-html="videoData.data[0].title_vi"></strong>
                        </h4>
                    </nuxt-link>
                </div>
                <div class="col-md-3">
                    <nuxt-link v-for="(n,index) in videoData.data" :key="n.id" v-if="index>0&&index<3" :to="`/tin-tuc/${n.slug}`" class="news-aside">
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
                    <nuxt-link :to="`/tin-tuc/${n.slug}`" class="news-aside">
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
    <contact/>
</section>
</template>

<script>
import axios from "axios";
import {
    environment
} from "~/plugins/config.js";
import Contact from "~/components/home/Contact.vue";
export default {
    components: {
        Contact
    },
    async asyncData() {
        let [news] = await Promise.all([axios.get(environment.apiUrl + "news")]);
        return {
            newsData: news.data.data.news,
            videoData: news.data.data.videos
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
            title: this.$t('links.news') + "- CENTRALREAL.VN"
        };
    },
    methods: {
        async getNewsData(page) {
            this.$nuxt.$loading.start();
            let [news] = await Promise.all([axios.get(environment.apiUrl + "news?page=" + page)]);
            this.newsData = news.data.data.news;
            this.$nuxt.$loading.finish();
        },
        genCurrentPageActive(page) {
            if (this.newsData.current_page == page) {
                return "curent-page";
            } else {
                return "";
            }
        },
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
