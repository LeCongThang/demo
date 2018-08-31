<template>
<section class="wrapper">
    <div class="container">
        <div class="row">
            <h1 class="text-center" style="text-transform:uppercase">{{lang ? gallery.title_vi : gallery.title_en}}</h1>
            <div class="col-md-4 no-padding" v-for="g in gallery.gallery_images" :key="g.id">
                <img v-img:my-group :src="$store.state.system_config.directory.gallery+'/'+g.image" :alt="gallery.title_vi" class="img-responsive img-gallery" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"/>
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
        let {
            data
        } = await axios.get(environment.apiUrl + "gallery/" + route.params.id);
        return {
            gallery: data.data
        };
    },
    mounted() {
        var url = '/gallery';
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
            title: this.gallery.title_vi,
            meta: [{
                    hid: "description",
                    name: "description",
                    content: this.gallery.title_vi + " Centralreal.vn"
                },
                {
                    hid: "og:title",
                    name: "og:title",
                    content: this.gallery.title_vi
                },
                {
                    hid: "og:description",
                    name: "og:description",
                    content: this.gallery.title_vi + " Centralreal.vn"
                },
                {
                    hid: "og:image",
                    name: "og:image",
                    content: this.$store.state.system_config.directory.gallery + '/' + this.gallery.gallery_images[0].image
                }
            ]
        };
    }

}
</script>
<style>
.img-gallery{
    height: 250px;
    
}
.no-padding{
    padding-left: 0px;
    padding-right: 0px;
}
</style>
