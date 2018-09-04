<template>
<section class="wrapper">

    <div class="recuitment-page">
        <div class="recuitment-banner">
            <h4>{{$t('links.recruitment')}}</h4>
        </div>
    </div>

    <div class="recuitment-page-2">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2 wow animated fadeInUp">
                    <div class="title-page text-center">
                        <h2 v-html="$t('home.why')"></h2>
                        <p>Chúng tôi mong muốn mang đến cơ hội phát triển nghề nghiệp cho bạn trong lĩnh vực kinh doanh bất động sản. Sự lựa chọn của bạn sẽ là cơ hội cho chúng tôi được học hỏi, chia sẽ và phát triển cùng bạn.</p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-3 col-sm-6" v-for="r in recruitmentData.recruitment_central_real" :key="r.id">
                    <div class="box-recuitment text-center">
                        <a href="#" class="pic-box-recuitment">
                                    <img :src="$store.state.system_config.directory.recruitment+'/'+r.image" class="img-responsive" :alt="r.title_vi">
                                </a>
                        <div class="txt-box-recuitment">
                            <nuxt-link :to="`/why-choose-us/${r.id}/${r.slug}`">
                                <h4 v-if="lang" v-html="r.title_vi"></h4>
                                <h4 v-else v-html="r.title_en"></h4>
                            </nuxt-link>
                            <div class="btn-page">
                                <nuxt-link :to="`/why-choose-us/${r.id}/${r.slug}`">{{$t('common.readmore')}}</nuxt-link>
                            </div>
                            <p style="padding-bottom:10px"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="recuitment-page-3">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <div class="title-page text-center">
                        <h2 v-html="$t('home.recruitment_info')"></h2>
                    </div>

                </div>
                <div class="col-md-2 col-md-offset-1 pull-right">
                    <div class="dropdown" style="padding-top: 15px;float: right!important;">
                        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    Vị trí tuyển dụng
                                    <span class="caret"></span>
                                </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li v-for="r in recruitmentData.recruitment_category" :key="r.id">
                                <a href="#" v-if="lang" v-html="r.title_vi"></a>
                                <a href="#" v-else v-html="r.title_en"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-12">
                    <ul class="ed-recuitment-1" v-for="r in recruitmentData.recruitment" :key="r.id">
                        <li>
                            <nuxt-link :to="`/recruitment-detail/${r.id}/${r.slug}`">
                                <h4 v-if="lang" v-html="r.title_vi"></h4>
                                <h4 v-else v-html="r.title_en"></h4>
                            </nuxt-link>
                        </li>
                        <li>
                            <p>Nhân Viên
                                <span>{{lang ? "Hạn nộp" : "Expire"}}  {{r.date}}</span>
                            </p>
                        </li>
                        <li>
                            <div class="btn-page">
                                <nuxt-link :to="`/recruitment-detail/${r.id}/${r.slug}`">Xem chi tiết</nuxt-link>
                            </div>
                        </li>
                    </ul>
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
    components:{
        Contact
    },
    async asyncData() {
        let [recruitment] = await Promise.all([axios.get(environment.apiUrl + "recruitment")]);
        return {
            recruitmentData: recruitment.data.data
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
            title: this.$t('links.recruitment') + "- CENTRALREAL.VN"
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
