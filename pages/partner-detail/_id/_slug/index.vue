<template>
<section class="wrapper">
    <div class="banner-partner-page">
        <div class="banner-partner-page-1">
            <h4>{{partnerData.name}}</h4>
            <img :src="$store.state.system_config.directory.partner+'/'+partnerData.image" alt="centralreal">
        </div>

    </div>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <p v-if="lang" v-html="partnerData.description_vi" class="partner-des"></p>
                <p v-else v-html="partnerData.description_en" class="partner-des"></p>
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
