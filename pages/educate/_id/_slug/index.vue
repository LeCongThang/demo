<template>
    <section class="wrapper">
    <div class="container">
        <div class="row">
            <h1 class="text-center" style="text-transform:uppercase">{{lang ? education.title_vi : education.title_en}}</h1>
            <div class="col-md-12">
                <p v-if="lang" v-html="education.description_vi"></p>
                <p v-else v-html="education.description_en"></p>
            </div>
            <div class="col-sm-12 share-likes">
                <ul>
                    <li>
                        <a target="_blank" :href="`https://www.facebook.com/sharer/sharer.php?u=http://centralreal.cf${this.$route.fullPath}`">
                                        <i class="fa fa-facebook"></i> Share</a>
                    </li>
                </ul>
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
        let {
            data
        } = await axios.get(
            environment.apiUrl + "education/" + route.params.id
        );
        return {
            education: data.data
        };
    },
    mounted() {
        var url = "/recruitment";
        $("ul.nav > li").removeClass("active");
        $('a[href="' + url + '"]')
            .parent()
            .addClass("active");
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
            title: this.education.title_vi,
            meta: [{
                    hid: "description",
                    name: "description",
                    content: this.education.title_vi + " Centralreal.vn"
                },
                {
                    hid: "og:title",
                    name: "og:title",
                    content: this.education.title_vi
                },
                {
                    hid: "og:description",
                    name: "og:description",
                    content: this.education.title_vi + " Centralreal.vn"
                }
            ]
        };
    }
};
</script>
