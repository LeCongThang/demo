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
                        <p v-if="lang" v-html="recruitmentData.description_vi"></p>
                        <p v-else v-html="recruitmentData.description_en"></p>
                    </article>
                    <div class="share-likes">
                        <ul>
                            <li>
                                <a href="#">
                                            <i class="fa fa-facebook"></i> Like</a>
                            </li>
                            <li>
                                <a href="#">
                                            <i class="fa fa-twitter"></i> Twitter</a>
                            </li>
                            <li>
                                <a href="#">
                                            <i class="fa fa-google-plus"></i> +1</a>
                            </li>
                        </ul>
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
    methods: {
        async getProjectData(page) {
            this.$nuxt.$loading.start();
            let {
                data
            } = await axios.get(
                environment.apiUrl + "project?page=" + page
            );
            this.projectData = data.data;
            this.$nuxt.$loading.finish();
        }
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
