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
                        <h2 v-html="$t('home.investor')"></h2>
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
                        <p>{{lang ? $store.state.system_config.config.partner_invester_vi: $store.state.system_config.config.partner_invester_en}}</p>
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
                        <h2 v-html="$t('home.affiliation')"></h2>
                    </div>
                </div>
            </div>

            <div class="row row-flex">
                <div class="col-md-8 col-sm-12">
                    <div class="txt-partner-page">
                        <p>{{lang ? $store.state.system_config.config.partner_connect_vi: $store.state.system_config.config.partner_connect_en}}</p>
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
                        <h2 v-html="$t('home.bank')"></h2>
                    </div>
                </div>
            </div>

            <div class="row row-flex">
                <div class="col-md-4">
                    <div class="big-slider">
                        <div class="product-img">
                            <div class="item-img" v-for="p in partnerData.partner_bank" :key="p.id">
                                <nuxt-link :to="`/partner-detail/${p.id}/${p.slug}`">
                                    <img :src="$store.state.system_config.directory.partner+'/'+p.image" alt="centralreal.vn" class="img-responsive">
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="txt-partner-page">
                        <p>{{lang ? $store.state.system_config.config.partner_bank_vi: $store.state.system_config.config.partner_bank_en}}</p>
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
