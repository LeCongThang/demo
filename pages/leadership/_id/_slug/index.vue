<template>
<section class="wrappper">
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <div class="text-center leader">
                    <img :src="$store.state.system_config.directory.people+'/'+leadership.avatar" :alt="leadership.name_vi" class="img-responsive">
                    <div class="text-center">
                        <h4><b>{{lang ? leadership.name_vi : leadership.name_en}}</b></h4>
                        <h6>{{lang ? leadership.position_vi : leadership.position_en}}</h6>
                    </div>
                </div>
            </div>
            <div class="col-md-9 col-sm-6">
                <p v-if="lang" v-html="leadership.description_vi"></p>
                <p v-else v-html="leadership.description_en"></p>
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
        } = await axios.get(environment.apiUrl + "leadership/" + route.params.id);
        return {
            leadership: data.data
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
            title: this.leadership.name_vi,
            meta: [{
                    hid: "description",
                    name: "description",
                    content: this.leadership.name_vi + "Centralreal.vn"
                },
                {
                    hid: "og:title",
                    name: "og:title",
                    content: this.leadership.name_vi
                },
                {
                    hid: "og:description",
                    name: "og:description",
                    content: this.leadership.name_vi + "Centralreal.vn"
                },
                {
                    hid: "og:image",
                    name: "og:image",
                    content: this.$store.state.system_config.directory.people + '/' + this.leadership.avatar
                }
            ]
        };
    },
    mounted() {
        var url = "/aboutus";
        $("ul.nav > li").removeClass("active");
        $("a[href=\"" + url + "\"]")
            .parent()
            .addClass("active");
    }
};
</script>

<style>
.container>.row>img {
    width: 100% !important
}
</style>
