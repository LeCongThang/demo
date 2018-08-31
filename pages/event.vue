<template>
<section class="wrapper">
    <div class="banner-partner-page">
        <div class="banner-partner-page-1">
            <h4>{{$t('links.event')}}</h4>
        </div>
    </div>
    <div class="event-1">
        <div class="container">
            <div class="row">
                <div class="col-md-6  wow animated fadeInLeft">
                    <div class="video-left">
                        <img :src="$store.state.system_config.directory.news+'/'+event.event_featured[0].image" class="img-responsive" :alt="event.event_featured[0].title_vi" />
                    </div>
                </div>
                <div class="col-md-6 wow animated fadeInRight">
                    <div class="txt-right-event">
                        <h4>{{lang ? event.event_featured[0].title_vi:event.event_featured[0].title_en}}</h4>
                        <p v-if="lang" v-html="event.event_featured[0].description_vi"></p>
                        <p v-else v-html="event.event_featured[0].description_en"></p>
                        <div class="btn-page">
                            <nuxt-link :to="`/news-detail/${event.event_featured[0].id}/${event.event_featured[0].slug}`">{{$t('common.readmore')}}</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="event-2">
        <div class="container">
            <div class="row">
                <div class="col-sm-3 wow animated fadeInUp" data-wow-delay="0.25s">
                    <div class="box-event-2">
                        <img src="/images/icon/event-1.png">
                        <h4>Voucher</h4>
                        <p>Cơ hội nhận
                            <strong>VOUCHER 2</strong> TỶ trực tiếp vào giá bán, chỉ duy nhất tại sự kiện</p>
                    </div>
                </div>
                <div class="col-sm-3 wow animated fadeInUp" data-wow-delay="0.5s">
                    <div class="box-event-2">
                        <img src="/images/icon/event-2.png">
                        <h4>Thời gian</h4>
                        <p>9h00 ngày
                            <strong>19/05/2018</strong>
                        </p>
                    </div>
                </div>
                <div class="col-sm-3 wow animated fadeInUp" data-wow-delay="0.75s">
                    <div class="box-event-2">
                        <img src="/images/icon/event-3.png">
                        <h4>Địa điểm</h4>
                        <p>Sảnh Sol
                            <strong>GEM CENTER</strong>
                        </p>
                    </div>
                </div>
                <div class="col-sm-3 wow animated fadeInUp" data-wow-delay="1s">
                    <div class="box-event-2">
                        <img src="/images/icon/event-4.png">
                        <h4>Địa chỉ</h4>
                        <p>8 Nguyễn Bỉnh Khiêm, P.Đa Kao, Quận 1</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section class="event-home">
        <div class="container">
            <div class="row wow bounceInUp">
                <div class="col-md-6 col-md-offset-3">
                    <div class="title-page text-center">
                        <h2 v-html="$t('home.register_event')"></h2>
                        <p>Hơn 50 dự án Central Real đã và đang phân phối bởi các nhà đầu tư uy tín
                            <br> chất lượng hàng đầu Việt Nam.</p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4 pd-right-0 left-form">
                    <div class="register-event">
                        <h4 v-html="$t('home.register_event')"></h4>
                        <form>
                            <div class="form-group">
                                <select class="form-control" id="sel1">
                                    <option>Bán căn hộ Vinhome</option>
                                    <option>Đấu giá khu chung cư</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Họ và tên" class="form-control" id="name">
                            </div>
                            <div class="form-group">
                                <input type="email" placeholder="Email" class="form-control" id="email">
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Số điện thoại" class="form-control" id="name">
                            </div>
                            <div class="btn-page text-center">
                                <a href="#">Gửi</a>
                            </div>

                        </form>
                    </div>
                </div>
                <div class="col-md-8 pd-left-0 wow fadeInRight">
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

    <div class="event-highlight-page">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <div class="title-page text-center">
                        <h2 v-html="$t('home.project')"></h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4" v-for="(r,index) in event.product_featured" :key="r.id" data-aos="fade-up" :data-aos-delay="(index+1)*150" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <div class="box-event-page">
                        <nuxt-link :to="`/project-detail/${r.id}/${r.slug}`">
                            <img :src="$store.state.system_config.directory.project+'/'+r.image" class="img-responsive" :alt="r.title_vi">
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
    async asyncData() {
        let {
            data
        } = await axios.get(environment.apiUrl + "event");
        return {
            event: data.data
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
            title: this.$t('links.event') + "- CENTRALREAL.VN"
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
