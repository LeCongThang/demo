<template>
<!-- <div class="container">
    <div class="row">
        <h2>{{project.title_vi}}</h2>
        <img :src="$store.state.system_config.directory.project+'/'+project.image" :alt="project.title_vi" class="img-responsive">
        <div v-html="project.investor_vi"></div>
        <div v-html="project.location_vi"></div>
        <div v-html="project.type_of_project_vi"></div>
        <div v-for="image in project.project_images" :key="image.id">
            <div class="col-md-4">
                <a class="width100" data-fancybox="gallery" :href="$store.state.system_config.directory.project+'/'+image.image">
                    <div class="grid-gallery" v-bind:style="{ background: 'url('+$store.state.system_config.directory.project+'/'+image.image+ ') no-repeat center; background-size: cover'}">
                    </div>
                </a>
            </div>
        </div>
    </div>
</div> -->
<section class="wrapper">

    <div class="banner-project-dt">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 padding-0">
                    <img :src="$store.state.system_config.directory.project+'/'+project.image" class="img-responsive" width="100% !important; height:auto" :alt="project.title_vi">
                </div>
            </div>
        </div>
    </div>

    <div class="box-pj-dt">
        <div class="container">
            <div class="box-pj-0 row">
                <div class="col-sm-6 padding-0 wow animated fadeInLeft">
                    <img :src="$store.state.system_config.directory.project+'/'+project.image_about" class="img-responsive" :alt="project.title_vi">
                </div>
                <div class="col-sm-6 padding-0 wow animated fadeInRight">
                    <ul class="box-pj-1">
                        <li>
                            <h3>Giới thiệu</h3>
                        </li>
                        <p v-if="lang" v-html="project.des_about_vi"></p>
                        <p v-else v-html="project.des_about_en"></p>
                    </ul>
                </div>
            </div>

            <div class="box-pj-0 row">
                <div class="col-sm-6 padding-0 visible-xs-block wow animated fadeInRight">
                    <img :src="$store.state.system_config.directory.project+'/'+project.image_location" class="img-responsive" :alt="project.title_vi">
                </div>
                <div class="col-sm-6 padding-0  wow animated fadeInLeft">
                    <ul class="box-pj-1">
                        <li>
                            <h3>Vị trí</h3>
                        </li>
                        <p v-if="lang" v-html="project.des_location_vi"></p>
                        <p v-else v-html="project.des_location_en"></p>
                    </ul>
                </div>
                <div class="col-sm-6 padding-0 hidden-xs wow animated fadeInRight">
                    <img :src="$store.state.system_config.directory.project+'/'+project.image_location" class="img-responsive" :alt="project.title_vi">
                </div>
            </div>

            <div class="box-pj-0 row">
                <div class="col-sm-6 padding-0 wow animated fadeInLeft">
                    <img :src="$store.state.system_config.directory.project+'/'+project.image_utility" class="img-responsive" :alt="project.title_vi">
                </div>
                <div class="col-sm-6 padding-0 wow animated fadeInRight">
                    <ul class="box-pj-1">
                        <li>
                            <h3>Tiện ích</h3>
                        </li>
                        <p v-if="lang" v-html="project.des_utility_vi"></p>
                        <p v-else v-html="project.des_utility_en"></p>
                    </ul>
                </div>
            </div>

            <div class="box-pj-0 row">
                <div class="col-sm-6 padding-0 visible-xs-block wow animated fadeInRight ">
                    <img :src="$store.state.system_config.directory.project+'/'+project.image_flat" class="img-responsive" :alt="project.title_vi">
                </div>
                <div class="col-sm-6 padding-0  wow animated fadeInLeft">
                    <ul class="box-pj-1">
                        <li>
                            <h3>Mặt bằng</h3>
                        </li>
                        <p v-if="lang" v-html="project.des_flat_vi"></p>
                        <p v-else v-html="project.des_flat_en"></p>
                    </ul>
                </div>
                <div class="col-sm-6 padding-0 hidden-xs wow animated fadeInRight ">
                    <img :src="$store.state.system_config.directory.project+'/'+project.image_flat" class="img-responsive" :alt="project.title_vi">
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 share-likes">
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

    <div class="event-highlight-page">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <div class="title-page text-center">
                        <h2>Dự án
                            <strong>nổi bật</strong>
                        </h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4 wow animated fadeInUp" data-wow-delay="0.25s">
                    <div class="box-event-page">
                        <a href="event-detail.html">
                                    <img src="/images/event/pic-3.jpg" class="img-responsive" alt="">
                                </a>
                        <div class="txt-box-event-page">
                            <a href="event-detail.html">
                                <h4>Giới Thiệu Sản Phẩm Coco Wonderland Resort</h4>
                            </a>
                            <p>Sáng nay ngày 14/10/2017 buổi lễ “Giới thiệu sản phẩm Coco Wonderland Resort” được tổ chức tại tầng 19 tòa nhà Pearl Plaza, số 561 Điện Biên Phủ, P.25, Q. Bình Thạnh, TpHcm.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 wow animated fadeInUp" data-wow-delay="0.5s">
                    <div class="box-event-page">
                        <a href="event-detail.html">
                                    <img src="/images/event/pic-4.jpg" class="img-responsive" alt="">
                                </a>
                        <div class="txt-box-event-page">
                            <a href="event-detail.html">
                                <h4>Giới Thiệu Sản Phẩm Coco Wonderland Resort</h4>
                            </a>
                            <p>Sáng nay ngày 14/10/2017 buổi lễ “Giới thiệu sản phẩm Coco Wonderland Resort” được tổ chức tại tầng 19 tòa nhà Pearl Plaza, số 561 Điện Biên Phủ, P.25, Q. Bình Thạnh, TpHcm.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 wow animated fadeInUp" data-wow-delay="0.75s">
                    <div class="box-event-page">
                        <a href="event-detail.html">
                                    <img src="/images/event/pic-5.jpg" class="img-responsive" alt="">
                                </a>
                        <div class="txt-box-event-page">
                            <a href="event-detail.html">
                                <h4>Giới Thiệu Sản Phẩm Coco Wonderland Resort</h4>
                            </a>
                            <p>Sáng nay ngày 14/10/2017 buổi lễ “Giới thiệu sản phẩm Coco Wonderland Resort” được tổ chức tại tầng 19 tòa nhà Pearl Plaza, số 561 Điện Biên Phủ, P.25, Q. Bình Thạnh, TpHcm.
                            </p>
                        </div>
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
        let {
            data
        } = await axios.get(environment.apiUrl + "project/" + route.params.id);
        return {
            project: data.data
        };
    },
    head() {
        return {
            title: this.project.title_vi,
            meta: [{
                    hid: "description",
                    name: "description",
                    content: this.project.des_short_vi
                },
                {
                    hid: "og:description",
                    name: "og:description",
                    content: this.project.des_short_vi
                },
                {
                    hid: "og:image",
                    name: "og:image",
                    content: this.$store.state.system_config.directory.project + '/' + this.project.image_thumbnail
                }
            ]
        };
    },
    mounted() {
        var url = "/project";
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
