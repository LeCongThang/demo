<template>
<section class="wrapper">
    <div class="banner-partner-page">
        <div class="banner-partner-page-1">
            <h4>{{$t('links.event')}}</h4>
        </div>
    </div>
    <section class="event-home">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <div class="title-page text-center">
                        <h2 v-html="$t('home.register_event')"></h2>
                        <p v-if="lang" v-html="$store.state.system_config.config.title_news_vi"></p>
                        <p v-else v-html="$store.state.system_config.config.title_news_en"></p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4 pd-right-0 left-form">
                    <div class="register-event">
                        <h4 v-html="$t('home.register_event')"></h4>
                        <form @submit.prevent="processForm">
                            <div class="form-group">
                                <select class="form-control" v-model="eventId">
                                <option v-for="(event,index) in event.event_featured" :key="event.id" :selected="index == 0 ? true : false" :value="event.id">{{event.title_vi}}</option>
                            </select>
                            </div>
                            <div class="form-group">
                                <input type="text" :placeholder="$t('contact.name')" required class="form-control" name="name" v-model="name">
                            </div>
                            <div class="form-group">
                                <input type="email" placeholder="Email" required class="form-control" name="email" v-model="email">
                            </div>
                            <div class="form-group">
                                <input type="text" :placeholder="$t('contact.phone')" required class="form-control" name="phone" v-model="phone">
                            </div>
                            <div class="btn-page text-center">
                                <button class="btn btn-danger" type="submit">{{$t('contact.send_button')}}</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-8 pd-left-0">
                    <section class="regular2 slider">
                        <div class="items-2" v-for="(event) in event.event_featured" :key="event.id">
                            <div class="pic-items2">
                                <img :src="$store.state.system_config.directory.news+'/'+event.image_thumbnail" class="img-responsive" :alt="event.title_vi">
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>
    <div class="event-1">
        <div class="container">
            <div class="title-page text-center">
                <h2><strong>{{$t('links.event')}}</strong></h2>
                <p v-if="lang" v-html="$store.state.system_config.config.title_news_vi"></p>
                <p v-else v-html="$store.state.system_config.config.title_news_en"></p>
            </div>
            <div v-for="(event,index) in event.event.data" :key="event.id">
                <div class="row" v-if="(index)%2===0">
                    <div class="col-md-6 no-padding">
                        <div class="video-left">
                            <img :src="$store.state.system_config.directory.news+'/'+event.image_thumbnail" class="img-responsive" :alt="event.title_vi" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="txt-right-event">
                            <h4><b>{{lang ? event.title_vi:event.title_en}}</b></h4>
                            <p v-if="lang" v-html="event.des_short_vi"></p>
                            <p v-else v-html="event.des_short_en"></p>
                            <div class="btn-page">
                                <nuxt-link :to="`/chi-tiet-su-kien/${event.slug}`">{{$t('common.readmore')}}</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" v-if="(index)%2!==0">
                    <div class="col-md-6">
                        <div class="txt-right-event">
                            <h4><b>{{lang ? event.title_vi:event.title_en}}</b></h4>
                            <p v-if="lang" v-html="event.des_short_vi"></p>
                            <p v-else v-html="event.des_short_en"></p>
                            <div class="btn-page">
                                <nuxt-link :to="`/chi-tiet-su-kien/${event.slug}`">{{$t('common.readmore')}}</nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 no-padding">
                        <div class="video-left">
                            <img :src="$store.state.system_config.directory.news+'/'+event.image_thumbnail" class="img-responsive" :alt="event.title_vi" />
                        </div>
                    </div>
                </div>
            </div>
            <div style="padding-top:20px;">
                <div class="text-center paging" v-if="event.event.last_page>1">
                    <div class="btn-group" role="group">
                        <button type="button" v-on:click="getNewsData(1)" class="btn btn-md btn-default"><i class="fa fa-angle-double-left" aria-hidden="true"></i></button>
                        <button type="button" v-for="page in event.event.last_page" :key="page" v-on:click="getNewsData(page)" :class="`btn btn-md btn-default ${genCurrentPageActive(page)}`">{{page}}</button>
                        <button type="button" v-on:click="getNewsData(event.event.last_page)" class="btn btn-md btn-default"><i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
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
export default {
    data: {
        name: "",
        email: "",
        phone: "",
        eventId: 0
    },
    components: {
        Contact
    },
    async asyncData() {
        let {
            data
        } = await axios.get(environment.apiUrl + "event");
        return {
            event: data.data
        };
    },
    methods: {
        async getNewsData(page) {
            this.$nuxt.$loading.start();
            let [event] = await Promise.all([axios.get(environment.apiUrl + "event?page=" + page)]);
            this.event = event.data.data;
            this.$nuxt.$loading.finish();
        },
        genCurrentPageActive(page) {
            if (this.event.event.current_page == page) {
                return "curent-page";
            } else {
                return "";
            }
        },
        processForm: function () {
            let dataContact = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                event_id: this.eventId
            };
            alert("Gửi thông tin thành công. Bấm 'OK' để xác nhận hoàn tất.");
            axios.post(environment.apiUrl + "event-register", dataContact, {
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                .then(res => {
                    
                    this.name = "";
                    this.email = "";
                    this.phone = "";
                    this.eventId = "";
                })
                .catch(err => {
                    this.$router.push("/error");
                });
        }
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
            title: this.$t("links.event") + "- CENTRALREAL.VN"
        };
    },
    mounted() {
        var url = $(location).attr("pathname");
        $("ul.nav > li").removeClass("active");
        $('a[href="' + url + '"]')
            .parent()
            .addClass("active");
        $(".regular2")
            .not("slick-initialized")
            .slick({
                dots: true,
                infinite: 0,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 900,
                prevArrow: '<button class="fa fa-angle-left"></button>',
                nextArrow: '<button class="fa fa-angle-right"></button>',
                autoplay: true,
                autoplaySpeed: 2000,
                responsive: [{
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        if ($(window).innerWidth() > 1024) {
            var form_height = $(".left-form").innerHeight();
            $(".regular2 .items-2 .pic-items2 > img").css("height", form_height);
        }
    }
};
</script>
