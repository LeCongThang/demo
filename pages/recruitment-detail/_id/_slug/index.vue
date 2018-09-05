<template>
<section class="wrapper">
    <div class="recuitment-detail-page">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <img src="/images/recruitment/pic-11.jpg" class="img-responsive" no-repeat>
                </div>
            </div>

            <div class="row desc-job">
                <h3 class="text-center" style="text-transform:uppercase; color: white;" v-if="lang" v-html="recruitmentData.title_vi"></h3>
                <h3 class="text-center" style="text-transform:uppercase; color: white;" v-else v-html="recruitmentData.title_en"></h3>
            </div>

            <div class="row">
                <div class="col-sm-12">
                    <article class="page-content">
                        <p v-if="lang" v-html="recruitmentData.description_vi" class="content-des"></p>
                        <p v-else v-html="recruitmentData.description_en" class="content-des"></p>
                    </article>
                    <div class="share-likes">
                        <ul>
                            <li>
                                <share :url="this.$route.fullPath"/>
                            </li>
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
import Contact from "~/components/home/Contact.vue";
import Share from "~/components/Share.vue";
export default {
    components: {
        Contact,
        Share
    },
    async asyncData({
        route
    }) {
        let [recruitment] = await Promise.all([
            axios.get(environment.apiUrl + "recruitment/" + route.params.id)
        ]);
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
            title: this.recruitmentData.title_vi,
            meta: [{
                    hid: "description",
                    name: "description",
                    content: this.recruitmentData.title_vi + " Centralreal.vn"
                },
                {
                    hid: "og:title",
                    name: "og:title",
                    content: this.recruitmentData.title_vi
                },
                {
                    hid: "og:description",
                    name: "og:description",
                    content: this.recruitmentData.title_vi + " Centralreal.vn"
                },
                {
                    hid: "og:image",
                    name: "og:image",
                    content: this.$store.state.system_config.directory.recruitment + '/' + this.recruitmentData.image
                }
            ]
        };
    },
    mounted() {
        var url = "/recruitment";
        $("ul.nav > li").removeClass("active");
        $("a[href=\"" + url + "\"]")
            .parent()
            .addClass("active");
    }
};
</script>
