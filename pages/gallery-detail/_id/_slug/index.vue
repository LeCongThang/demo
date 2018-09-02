<template>
<section class="wrapper">
    <div class="container">
        <div class="row">
            <h1 class="text-center" style="text-transform:uppercase">{{lang ? gallery.gallery.title_vi : gallery.gallery.title_en}}</h1>
            <div class="col-md-4 no-padding" v-for="g in gallery.gallery.gallery_images" :key="g.id">
                <img v-img:my-group :src="$store.state.system_config.directory.gallery+'/'+g.image" :alt="gallery.gallery.title_vi" class="img-responsive img-gallery" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" />
            </div>
            <div class="col-sm-12 share-likes">
                <ul>
                    <li>
                        <a target="_blank" :href="`https://www.facebook.com/sharer/sharer.php?u=http://centralreal.cf${this.$route.fullPath}`">
                                        <i class="fa fa-facebook"></i> Share</a>
                    </li>
                </ul>
            </div>
            <div class="col-sm-12 event-highlight-page">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-md-offset-3">
                            <div class="title-page text-center">
                                <h2>Thu Viện
                                    <strong>Liên Quan</strong>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4" v-for="(p) in gallery.gallery_related" :key="p.id">
                            <div class="box-event-page">
                                <nuxt-link :to="`/gallery-detail/${p.id}/${p.slug}`">
                                    <img :src="$store.state.system_config.directory.gallery+'/'+p.gallery_images[0].image" class="img-responsive project-related" :alt="p.name">
                                </nuxt-link>
                                <div class="txt-box-event-page">
                                        <nuxt-link :to="`/gallery-detail/${p.id}/${p.slug}`">
                                            <h4>{{lang?p.title_vi:p.title_en}}</h4>
                                        </nuxt-link>
                                        
                                    </div>
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
        let {
            data
        } = await axios.get(
            environment.apiUrl + "gallery/" + route.params.id
        );
        return {
            gallery: data.data
        };
    },
    mounted() {
        var url = "/gallery";
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
            title: this.gallery.gallery.title_vi,
            meta: [{
                    hid: "description",
                    name: "description",
                    content: this.gallery.gallery.title_vi + " Centralreal.vn"
                },
                {
                    hid: "og:title",
                    name: "og:title",
                    content: this.gallery.gallery.title_vi
                },
                {
                    hid: "og:description",
                    name: "og:description",
                    content: this.gallery.gallery.title_vi + " Centralreal.vn"
                },
                {
                    hid: "og:image",
                    name: "og:image",
                    content: this.$store.state.system_config.directory.gallery +
                        "/" +
                        this.gallery.gallery.gallery_images[0].image
                }
            ]
        };
    }
};
</script>

<style>
.img-gallery {
    height: 250px;
}
</style>
