<template>
<section class="wrapper">

    <div class="banner-partner-page">
        <div class="banner-partner-page-1">
            <h4>{{$t('links.about_us')}}</h4>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="video-about">
                    <div class="ed-video" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                        <div v-if="aboutus.is_show">
                        <iframe width="80%" height="550" :src="aboutus.embed_link" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                    <div v-else>
                        <img :src="$store.state.system_config.directory.about+'/'+aboutus.image" width="80%" alt="Centralreal.vn" />
                    </div>
                    </div>
                    <div class="txt-intro-about" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                        <p style="text-align: justify;" v-if="lang" v-html="aboutus.content_vi"></p>
                        <p style="text-align: justify;" v-else v-html="aboutus.content_en"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="recuitment-page-2">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 wow fadeInDown">
                    <div class="title-page text-center">
                        <h2>{{lang ? "Về": "About"}}
                            <strong>Central real</strong>
                        </h2>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <div class="box-recuitment text-center">
                        <nuxt-link to="/about-detail/1/tong-quan-ve-central-real" class="pic-box-recuitment">
                                    <img src="/images/about/pic-1.jpg" class="img-responsive">
                        </nuxt-link>
                        <div class="txt-box-recuitment">
                            <nuxt-link to="/about-detail/1/tong-quan-ve-central-real">
                                <h4>Tổng quan về Central Real</h4>
                            </nuxt-link>
                            <p style="text-align: justify;">Công ty Cổ Phần Đầu Tư Phát Triển Central Real, tên viết tắt là Central Real…</p>
                            <div class="btn-page">
                                <nuxt-link to="/about-detail/1/tong-quan-ve-central-real">Xem thêm</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <div class="box-recuitment text-center">
                        <nuxt-link to="/about-detail/2/qua-trinh-phat-trien" class="pic-box-recuitment">
                                    <img src="/images/about/pic-2.jpg" class="img-responsive">
                        </nuxt-link>
                        <div class="txt-box-recuitment">
                            <nuxt-link to="/about-detail/2/qua-trinh-phat-trien">
                                <h4>Quá trình phát triển</h4>
                            </nuxt-link>
                            <p style="text-align: justify;">Được hình thành trong thời điểm thị trường BĐS có nhiều biến động nói chung…</p>
                            <div class="btn-page">
                                <nuxt-link to="/about-detail/2/qua-trinh-phat-trien">Xem thêm</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <div class="box-recuitment text-center">
                        <nuxt-link to="/about-detail/3/thuong-hieu-central-real" class="pic-box-recuitment">
                                    <img src="/images/about/pic-3.jpg" class="img-responsive">
                        </nuxt-link>
                        <div class="txt-box-recuitment">
                            <nuxt-link to="/about-detail/3/thuong-hieu-central-real">
                                <h4>Thương hiệu Central Real</h4>
                            </nuxt-link>
                            <p style="text-align: justify;">Ngay từ ngày đầu thành lập, chúng tôi đã xác định rõ mục tiêu trở thành…</p>
                            <div class="btn-page">
                                <nuxt-link to="/about-detail/3/thuong-hieu-central-real">Xem thêm</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <div class="box-recuitment text-center">
                        <nuxt-link to="/about-detail/4/ban-lanh-dao" class="pic-box-recuitment">
                                    <img src="/images/about/pic-4.jpg" class="img-responsive">
                        </nuxt-link>
                        <div class="txt-box-recuitment">
                            <nuxt-link to="/about-detail/4/ban-lanh-dao">
                                <h4>Ban lãnh đạo</h4>
                            </nuxt-link>
                            <p style="text-align: justify;">Chúng tôi là đơn vị phân phối BĐS nghỉ dưỡng hàng đầu tại Việt Nam…</p>
                            <div class="btn-page">
                               <nuxt-link to="/about-detail/4/ban-lanh-dao">Xem thêm</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="resource-human" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
        <div class="container">
            <div class="row">
                <div class="col-sm-2">
                    <div class="box-ic-about">
                        <img src="images/icon/ic-ab-1.png" alt="">
                        <br/>
                        <ICountUp :startVal="startVal" :endVal="endVal" :decimals="decimals" :duration="duration" :options="options" @ready="onReadyClient" />
                        <span>+</span>
                        <br/>
                        <h4>{{lang ? "Nhân sự" : "Employees"}}</h4>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="box-ic-about">
                        <img src="images/icon/ic-ab-2.png" alt=""><br/>
                        <ICountUp :startVal="startVal" :endVal="endVal" :decimals="decimals" :duration="duration" :options="options" @ready="onReadyProject" /><span>+</span>

                        <br/>
                        <h4>{{lang ? "Dự án" : "Projects"}}</h4>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="box-ic-about">
                        <img class="pic-middle" src="images/icon/ic-ab-3.png" alt="">
                        <h4>{{lang ? "Khách hàng hài lòng" : "Customer satisfactions"}}</h4>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="box-ic-about">
                        <img src="images/icon/ic-ab-4.png" alt=""><br/>
                        <ICountUp :startVal="startVal" :endVal="endVal" :decimals="decimals" :duration="duration" :options="options" @ready="onReadyPartner" /><span>+</span>   
                        <br/>
                        <h4>{{lang ? "Đối tác" : "Partners" }}</h4>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="box-ic-about">
                        <img src="images/icon/ic-ab-5.png" alt="">
                        <br/>
                        <ICountUp :startVal="startVal" :endVal="endVal" :decimals="decimals" :duration="duration" :options="options" @ready="onReadyRelation" /><span>%</span>
                        <br/>
                        <h4>{{lang ? "Tổng số sàn liên kết" : "Affiliation partners"}}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="banner-nth-3" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 padding-0">
                    <img src="images/about/banner-6.jpg" class="img-responsive">
                </div>
            </div>
        </div>
    </div>

    <div class="our-service">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <div class="title-page text-center">
                        <h2 v-html="$t('home.service')"></h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4" v-for="c in category" :key="c.id" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <nuxt-link to="/project" class="box-we-service text-center">
                        <img :src="$store.state.system_config.directory.category+'/'+c.image" :alt="c.title_vi" class="img-responsive">
                        <h4>{{lang ? c.title_vi : c.title_en}}</h4>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>

    <div class="our-traditional">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <div class="title-page text-center">
                        <h2 v-html="$t('home.culture')"></h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4" v-for="c in culture" :key="c.id" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <div class="box-traditional">
                        <img :src="$store.state.system_config.directory.culture+'/'+c.image" class="img-responsive" :alt="c.title_vi">
                        <h4>{{lang ? c.title_vi : c.title_en}}</h4>
                        <p v-if="lang" v-html="c.description_vi"></p>
                        <p v-else v-html="c.description_en"></p>
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
import ICountUp from "vue-countup-v2";
import Contact from "~/components/home/Contact.vue";
export default {
    components: {
        ICountUp,
        Contact
    },
    async asyncData() {
        let [about, category, culture] = await Promise.all([axios.get(environment.apiUrl + "about"),
        axios.get(environment.apiUrl + "category"),
        axios.get(environment.apiUrl + "culture")
        ]);
        return {
            aboutus: about.data.data,
            category: category.data.data,
            culture:culture.data.data
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
    data() {
        return {
            startVal: 0,
            endVal: 1,
            decimals: 0,
            duration: 2.5,
            options: {
                useEasing: true,
                useGrouping: true,
                separator: ",",
                decimal: ".",
                prefix: "",
                suffix: ""
            }
        };
    },
    methods: {
        onReadyClient: function (instance, CountUp) {
            const that = this;
            instance.update(this.aboutus.clients);
        },
        onReadyProject: function (instance, CountUp) {
            const that = this;
            instance.update(this.aboutus.transports);
        },
        onReadyPartner: function (instance, CountUp) {
            const that = this;
            instance.update(this.aboutus.projects);
        },
        onReadyRelation: function (instance, CountUp) {
            const that = this;
            instance.update(this.aboutus.awards);
        }
    },
    head() {
        return {
            title: this.$t('links.about_us') + "- CENTRALREAL.VN"
        };
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
