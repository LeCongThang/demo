<template>
<section class="wrapper">
    <div class="news-highlight">
        <div class="container">
            <div class="row">
                <div class="col-md-9">
                    <div class="news-detail-page">
                        <h1 style="text-align:justify;font-size:24px; color:#024e9f;font-weight:bold;">{{lang? news.news.title_vi:news.news.title_en}}</h1>
                        <ul class="ed-ul-news-dt">
                            <li>
                                <i class="fa fa-calendar"></i> {{news.news.created_at}}</li>
                        </ul>
                        <!-- {{news.news}} -->
                        <div v-if="news.news.post_type !== 2">
                            <img :data-id="news.news.post_type" :src="$store.state.system_config.directory.news+'/'+news.news.image" :alt="news.news.title_vi" class="img-responsive" width="100%">
                        </div>
                    </div>

                    <article class="page-content">
                        <p v-if="lang" v-html="news.news.description_vi" class="content-des"></p>
                        <p v-else v-html="news.news.description_en" class="content-des"></p>
                    </article>

                </div>
                <div class="col-md-3">
                    <div class="titile-news" style="margin-top: 78px;">
                        <h4>Tin
                            <strong>xem nhiều</strong>
                        </h4>
                    </div>
                    <nuxt-link class="news-aside" v-for="n in  news.news.post_type == 2 ?  news.news_featured.slice(0, 2): news.news_featured" :key="n.id" :to="`/news-detail/${n.id}/${n.slug}`">
                        <img :src="$store.state.system_config.directory.news+'/'+n.image" :alt="n.title_vi" class="img-responsive">
                        <h4>{{lang?n.title_vi:n.title_en}}</h4>
                        <ul>
                            <li><i class="fa fa-calendar"></i> {{n.created_at}}</li>
                        </ul>
                    </nuxt-link>
                </div>
                <div class="col-sm-12 share-likes">
                    <ul>
                        <li>
                            <share :url="this.$route.fullPath"/>
                        </li>
                    </ul>
                </div>

                <div class="col-sm-12 event-highlight-page">
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
                            <div class="col-sm-4" v-for="(r) in news.project_featured" :key="r.id">
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
import Share from "~/components/Share.vue";
export default {
    components:{
        Contact,
        Share
    },
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
            title: this.news.news.title_vi,
            meta: [{
                    hid: "description",
                    name: "description",
                    content: this.news.news.des_short_vi
                },
                {
                    hid: "og:title",
                    name: "og:title",
                    content: this.news.news.title_vi
                },
                {
                    hid: "og:description",
                    name: "og:description",
                    content: this.news.news.des_short_vi
                },
                {
                    hid: "og:image",
                    name: "og:image",
                    content: this.$store.state.system_config.directory.news + '/' + this.news.news.image_thumbnail
                }
            ]
        };
    },
    mounted() {
        var url = "/event";
        $("ul.nav > li").removeClass("active");
        $("a[href=\"" + url + "\"]")
            .parent()
            .addClass("active");
    },
    middleware: 'news_detail'
};
</script>

<style>
.container>.row>img {
    width: 100% !important
}
</style>
