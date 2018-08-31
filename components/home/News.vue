<template>
<section class="gallery-home">
    <div class="container">
        <div class="row wow animated fadeInUp">
            <div class="col-md-6 col-md-offset-3">
                <div class="title-page text-center">
                    <h2 v-html="$t('home.news')"></h2>
                    <p>Hơn 50 dự án Central Real đã và đang phân phối bởi các nhà đầu tư uy tín
                        <br> chất lượng hàng đầu Việt Nam.</p>
                </div>
            </div>
        </div>
        <div class="row ">
            <div class="col-md-8 news-home-padding video-news" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <!-- <iframe type="video/mp4" frameborder="0" src="https://www.youtube.com/embed/jij97zobmew"></iframe> -->
                <nuxt-link :to="`/news-detail/${video.id}/${video.slug}`" style="position:relative">
                    <img class="img-responsive" :src="$store.state.system_config.directory.news+'/'+video.image_thumbnail" :alt="video.title_vi" />
                    <i class="fa fa-4x fa-youtube-play play-button" aria-hidden="true"></i>
                </nuxt-link>
            </div>
            <div class="col-md-4 news-home-padding right-col-news" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <div class="news-item" style="margin-bottom: 8px;">
                    <img :src="$store.state.system_config.directory.news+'/'+news[0].image_thumbnail" :alt="news[0].title_vi" class="img-responsive news-in-home">
                    <div class="overlay">
                        <nuxt-link :to="`/news-detail/${news[0].id}/${news[0].slug}`" class="title" v-if="lang" v-html="news[0].title_vi"></nuxt-link>
                        <nuxt-link :to="`/news-detail/${news[0].id}/${news[0].slug}`" class="title" v-else v-html="news[0].title_en"></nuxt-link>
                        <div class="btn-page text-center btn-xem">
                            <nuxt-link :to="`/news-detail/${news[0].id}/${news[0].slug}`">{{$t('common.readmore')}}</nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="news-item">
                    <img :src="$store.state.system_config.directory.news+'/'+news[1].image_thumbnail" class="img-responsive news-in-home" :alt="news[1].title_vi">
                    <div class="overlay">
                        <nuxt-link :to="`/news-detail/${news[1].id}/${news[1].slug}`" class="title" v-if="lang" v-html="news[1].title_vi"></nuxt-link>
                        <nuxt-link :to="`/news-detail/${news[1].id}/${news[1].slug}`" class="title" v-else v-html="news[1].title_en"></nuxt-link>
                        <div class="btn-page text-center btn-xem">
                            <nuxt-link :to="`/news-detail/${news[1].id}/${news[1].slug}`">{{$t('common.readmore')}}</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 news-home-padding" v-for="(n,index) in news" :key="n.id" v-if="index>1">
                <div class="news-item">
                    <img :src="$store.state.system_config.directory.news+'/'+n.image_thumbnail" class="img-responsive news-in-home" :alt="n.title_vi">
                    <div class="overlay">
                        <nuxt-link :to="`/news-detail/${n.id}/${n.slug}`" class="title" v-if="lang" v-html="n.title_vi"></nuxt-link>
                        <nuxt-link :to="`/news-detail/${n.id}/${n.slug}`" class="title" v-else v-html="n.title_en"></nuxt-link>
                        <div class="btn-page text-center btn-xem">
                            <nuxt-link :to="`/news-detail/${n.id}/${n.slug}`">{{$t('common.readmore')}}</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <div class="btn-page text-center">
                    <nuxt-link to="/news">{{$t('common.readmore')}}</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {

    props: ["video", "news", "lang"]

};
</script>
<style>
.news-in-home{
    width: 100%;
    height: 220px;
}
</style>

