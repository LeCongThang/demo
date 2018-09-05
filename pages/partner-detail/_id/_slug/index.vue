<template>
<section class="wrapper">
    <div class="banner-partner-page">
        <div class="banner-partner-page-1">
            <h4>{{partnerData.partner.name}}</h4>
            <img :src="$store.state.system_config.directory.partner+'/'+partnerData.partner.image" alt="centralreal" style="max-width:300px;">
        </div>

    </div>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <p v-if="lang" v-html="partnerData.partner.description_vi" class="partner-des"></p>
                <p v-else v-html="partnerData.partner.description_en" class="partner-des"></p>
            </div>
            <div class="col-xs-12">
                <div class="share-likes">
                    <ul>
                        <li>
                            <a target="_blank" :href="`https://www.facebook.com/sharer/sharer.php?u=http://centralreal.cf${this.$route.fullPath}`">
                                        <i class="fa fa-facebook"></i> Share</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-12 event-highlight-page">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-md-offset-3">
                            <div class="title-page text-center">
                                <h2>Đối tác
                                    <strong>Liên Quan</strong>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-3" v-for="(p) in partnerData.partner_related" :key="p.id">
                            <div class="box-event-page">
                                <nuxt-link :to="`/partner-detail/${p.id}/${p.slug}`">
                                    <img :src="$store.state.system_config.directory.partner+'/'+p.image" class="img-responsive" :alt="p.name">
                                </nuxt-link>
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
export default {
    components: {
        Contact
    },
    async asyncData({
        route
    }) {
        let [partner] = await Promise.all([
            axios.get(environment.apiUrl + "partner/" + route.params.id)
        ]);
        return {
            partnerData: partner.data.data
        };
    },
    head() {
        return {
            title: this.partnerData.partner.name,
            meta: [{
                    hid: "description",
                    name: "description",
                    content: this.partnerData.partner.description_vi
                },
                {
                    hid: "og:title",
                    name: "og:title",
                    content: this.partnerData.partner.name
                },
                {
                    hid: "og:description",
                    name: "og:description",
                    content: this.partnerData.partner.description_vi
                },
                {
                    hid: "og:image",
                    name: "og:image",
                    content: this.$store.state.system_config.directory.partner + '/' + this.partnerData.partner.image
                }
            ]
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
        var url = "/partner";
        $("ul.nav > li").removeClass("active");
        $("a[href=\"" + url + "\"]")
            .parent()
            .addClass("active");
    }
}
</script>

<style>
.partner-des {
    margin-top: 10px;
    padding: 10px;
    background-color: #ededed;
    border-radius: 5px;
}

.partner-des img {
    width: 100% !important;
}
</style>
