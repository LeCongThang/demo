<template>
<section class="wrapper">

    <div class="recuitment-detail-page">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <img src="/images/recruitment/pic-5.jpg" class="img-responsive">
                </div>
            </div>

            <div class="row mg-top-bottom">
                <div class="col-md-3">
                    <ul class="nav nav-tabs recruitment">
                        <li  v-for="a in aboutus" :key="a.id" :class="`menu${a.id}`">
                            <a data-toggle="tab" :href="`#menu${a.id}`">{{lang ? a.title_vi : a.title_en}}
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-9">
                    <div class="tab-content">
                        <div v-for="a in aboutus" :key="a.id" :id="`menu${a.id}`" class="tab-pane fade">
                            <div v-if="lang" v-html="a.description_vi"></div>                            
                            <div v-else v-html="a.description_en"></div>                            
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
    async asyncData() {
        let [about] = await Promise.all([axios.get(environment.apiUrl + "why-choose-us")]);
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
    mounted() {
        var url = "/recruitment";
        $("ul.nav > li").removeClass("active");
        $('a[href="' + url + '"]')
            .parent()
            .addClass("active");
        const id = this.$route.params.id;
        $("#menu" + id).addClass("in active");
        $("ul.recruitment > li.menu" + id).addClass("active");
    }
};
</script>
