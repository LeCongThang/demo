<template>
<section class="wrapper">

    <div class="banner-partner-page">
        <div class="banner-partner-page-1">
            <h4>{{$t('links.partner')}}</h4>
        </div>
    </div>

    <div class="partner-page">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <div class="title-page text-center">
                        <h2>Đối tác
                            <strong>chủ đầu tư</strong>
                        </h2>
                    </div>
                </div>
            </div>

            <div class="row row-flex">
                <div class="col-md-4">
                    <div class="big-slider">
                        <div class="product-img">
                            <div class="item-img" v-for="p in partnerData.partner_investor" :key="p.id">
                                <nuxt-link :to="`/partner-detail/${p.id}/${p.slug}`">
                                    <img :src="$store.state.system_config.directory.partner+'/'+p.image" alt="centralreal.vn" class="img-responsive">
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="txt-partner-page">
                        <p>CentralReal tự hào khi được các chủ đầu tư uy tín trong và ngoài nước tin tưởng chọn hợp tác và phát triển nhiều dự án bất động sản đa dạng trên thị trường. CentralReal xác định luôn song hành cùng Chủ Đầu Tư mang đến những giá
                            trị Bất Đông Sản tốt nhất cho khách hàng và tối ưu hoá giá trị đầu tư.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div class="partner-page">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <div class="title-page text-center">
                        <h2>Đối tác
                            <strong>sàn liên kết</strong>
                        </h2>
                    </div>
                </div>
            </div>

            <div class="row row-flex">
                <div class="col-md-8 col-sm-12">
                    <div class="txt-partner-page">
                        <p>Với hơn 4 năm kinh nghiệm phát triển, phân phối thành công nhiều dự án, cùng việc ý thức được tầm quan trọng của những “cộng sự”, DKRV đã xây dựng, hợp tác và phát triển mạng lưới lên đến hơn 300 đối tác sàn liên kết trên toàn
                            quốc tạo nên một DKRV có nội lực vững bền sẵn sàng chinh phục mọi thách thức từ thị trường, chủ đầu tư và khách hàng.</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12">
                    <div class="big-slider">
                        <div class="product-img">
                            <div class="item-img" v-for="p in partnerData.partner_connect" :key="p.id">
                                <nuxt-link :to="`/partner-detail/${p.id}/${p.slug}`">
                                    <img :src="$store.state.system_config.directory.partner+'/'+p.image" alt="centralreal.vn" class="img-responsive">
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
    <div class="partner-page">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <div class="title-page text-center">
                        <h2>Đối tác
                            <strong>Ngân Hàng</strong>
                        </h2>
                    </div>
                </div>
            </div>

            <div class="row row-flex">
                <div class="col-md-4">
                    <div class="big-slider">
                        <div class="product-img">
                            <div class="item-img">
                                <img src="/images/partner/logo-vcbank.jpg" alt="">
                            </div>
                            <div class="item-img">
                                <img src="/images/partner/ocb-bank-1.jpg" alt="">
                            </div>
                            <div class="item-img">
                                <img src="/images/partner/logo-vibbank.jpg" alt="">
                            </div>
                            <div class="item-img">
                                <img src="/images/partner/tp-bank.jpg" alt="">
                            </div>
                            <div class="item-img">
                                <img src="/images/partner/vp-bank.jpg" alt="">
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="txt-partner-page">
                        <p>CentralReal tự hào khi được các chủ đầu tư uy tín trong và ngoài nước tin tưởng chọn hợp tác và phát triển nhiều dự án bất động sản đa dạng trên thị trường. CentralReal xác định luôn song hành cùng Chủ Đầu Tư mang đến những giá
                            trị Bất Đông Sản tốt nhất cho khách hàng và tối ưu hoá giá trị đầu tư.</p>
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
    components: {
        Contact
    },
    async asyncData() {
        let [partner] = await Promise.all([
            axios.get(environment.apiUrl + "partner")
        ]);
        return {
            partnerData: partner.data.data
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
        $('.product-img').not('slick-initialized').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplay: true
        });
    }
};
</script>
