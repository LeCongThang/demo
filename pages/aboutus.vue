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
                        <iframe width="80%" height="550" src="https://www.youtube.com/embed/CiXMABVFXAw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                    <div class="txt-intro-about wow fadeInRight" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                        <p style="text-align: justify;">Là một doanh nghiệp hoạt động nhiều năm trong lĩnh vực bất động sản, theo phương châm hoạt động “Trao niềm tin – Xây hạnh phúc”, CentralReal luôn nỗ lực phát triển hướng đến giá trị gia tăng bền vững cho khách hàng, chủ đầu tư,
                            cho chính doanh nghiệp và cho xã hội.</p>
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
                        <h2>Về
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
                        <ICountUp :startVal="startVal" :endVal="endVal" :decimals="decimals" :duration="duration" :options="options" @ready="onReady" />
                        <span>+</span>
                        <br/>
                        <h4>Nhân sự</h4>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="box-ic-about">
                        <img src="images/icon/ic-ab-2.png" alt=""><br/>
                        <ICountUp :startVal="startVal" :endVal="endVal" :decimals="decimals" :duration="duration" :options="options" @ready="onReady" /><span>+</span>
                        <br/>
                        <h4>Dự án</h4>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="box-ic-about">
                        <img class="pic-middle" src="images/icon/ic-ab-3.png" alt="">
                        <h4>Khách hàng hài lòng</h4>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="box-ic-about">
                        <img src="images/icon/ic-ab-4.png" alt=""><br/>
                        <ICountUp :startVal="startVal" :endVal="endVal" :decimals="decimals" :duration="duration" :options="options" @ready="onReady" /><span>+</span>
                        <br/>
                        <h4>Đối tác</h4>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="box-ic-about">
                        <img src="images/icon/ic-ab-5.png" alt="">
                        <br/>
                        <ICountUp :startVal="startVal" :endVal="endVal" :decimals="decimals" :duration="duration" :options="options" @ready="onReady" /><span>%</span>
                        <br/>
                        <h4>Dự án</h4>
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
                        <h2>Chúng tôi có
                            <strong>dịch vụ</strong>
                        </h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <nuxt-link to="/project" class="box-we-service text-center">
                        <img src="images/about/condotel.jpg" class="img-responsive">
                        <h4>condotel</h4>
                    </nuxt-link>
                </div>
                <div class="col-sm-4" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <nuxt-link to="/project" class="box-we-service text-center">
                        <img src="images/about/biet-thu-bien.jpg" class="img-responsive">
                        <h4>Biệt thự biển</h4>
                    </nuxt-link>
                </div>
                <div class="col-sm-4" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <nuxt-link to="/project" class="box-we-service text-center">
                        <img src="images/about/shophouse.jpg" class="img-responsive">
                        <h4>shophouse</h4>
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
                        <h2>Văn hóa
                            <strong>công ty</strong>
                        </h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <div class="box-traditional">
                        <img src="images/about/tran-1.jpg" class="img-responsive" alt="">
                        <h4>Lòng biết ơn</h4>
                        <ul>
                            <li>
                                <i class="fa fa-check"></i> Chơi với những người năng lượng cao</li>
                            <li>
                                <i class="fa fa-check"></i> Chia sẻ status tích cực mỗi ngày</li>
                            <li>
                                <i class="fa fa-check"></i> Ngưỡng mộ người thành công, quý tài năng của họ</li>
                            <li>
                                <i class="fa fa-check"></i> Làm tốt mọi việc hơn so với trước đây</li>
                            <li>
                                <i class="fa fa-check"></i> Tập trung phát triển và nâng cao giá trị của bản thân</li>
                            <li>
                                <i class="fa fa-check"></i> Sống biết ơn</li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-4" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <div class="box-traditional">
                        <img src="images/about/tran-2.jpg" class="img-responsive" alt="">
                        <h4>Sự tin tưởng</h4>
                        <ul>
                            <li>
                                <i class="fa fa-check"></i> Luôn tin tưởng vào chính mình</li>
                            <li>
                                <i class="fa fa-check"></i> Luôn vui vẻ tràn đầy nhiệt huyết</li>
                            <li>
                                <i class="fa fa-check"></i> Dành ít nhất 30 phút mỗi ngày để đọc sách</li>
                            <li>
                                <i class="fa fa-check"></i> Tập thể dục ít nhất 20-30 phút mỗi ngày</li>
                            <li>
                                <i class="fa fa-check"></i> Luôn nói với bản thân mình những lời nói tích cực</li>
                            <li>
                                <i class="fa fa-check"></i> Luôn nói với người khách những lời nói tích cực</li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-4" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <div class="box-traditional">
                        <img src="images/about/tran-3.jpg" class="img-responsive" alt="">
                        <h4>Lòng nhiệt huyết</h4>
                        <ul>
                            <li>
                                <i class="fa fa-check"></i> Làm điều mình thích</li>
                            <li>
                                <i class="fa fa-check"></i> Thích điều mình làm</li>
                            <li>
                                <i class="fa fa-check"></i> Có hoài bão, mục tiêu rõ ràng</li>
                            <li>
                                <i class="fa fa-check"></i> Kết thúc tất cả những gì bạn đã bắt đầu</li>
                            <li>
                                <i class="fa fa-check"></i> Nói được làm được</li>
                            <li>
                                <i class="fa fa-check"></i> Sẵn sàng đương đầu với khó khăn, thử thách</li>
                        </ul>
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
        let [about] = await Promise.all([axios.get(environment.apiUrl + "about")]);
        return {
            aboutus: about.data.data
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
            endVal: 10,
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
        onReady: function (instance, CountUp) {
            const that = this;
            instance.update(that.endVal + 90);
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
