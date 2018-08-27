<template>
<section class="wrapper">
    <div class="banner-partner-page">
        <div class="banner-partner-page-1">
            <h4>Dự án</h4>
        </div>
    </div>
    <div class="project-page" style="padding-top: 30px;">
        <div class="container">
            <div class="row">
                <div class="col-md-9">
                    <div class="ed-filter">
                        <button class="active filter-button" data-filter="all">Tất cả</button>
                        <button class="filter-button" data-filter="1">Condotel</button>
                        <button class="filter-button" data-filter="2">Shop house</button>
                        <button class="filter-button" data-filter="3">Biệt thự</button>
                        <button class="filter-button" data-filter="4">Đất nền</button>

                        <ul class="ed-dropdown">
                            <li>
                                <div class="dropdown">
                                    <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Giá
                                                <i class="fa fa-caret-down"></i>
                                            </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">1 Tỷ</a>
                                        <a class="dropdown-item" href="#">2 Tỷ</a>
                                        <a class="dropdown-item" href="#">> 3 Tỷ</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="dropdown">
                                    <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Vị trí
                                                <i class="fa fa-caret-down"></i>
                                            </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Quy Nhơn</a>
                                        <a class="dropdown-item" href="#">Ninh Bình</a>
                                        <a class="dropdown-item" href="#">Phú Quốc</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="dropdown">
                                    <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Chủ đầu tư
                                                <i class="fa fa-caret-down"></i>
                                            </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">SUN Group</a>
                                        <a class="dropdown-item" href="#">FLC Group</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="row">
                        <div class="col-md-4" v-for="p in projectData.data" :key="p.id">
                            <div class="each-item filter 1">
                                <nuxt-link :to="`/project-detail/${p.id}/${p.slug}`" class="pic-prj" :style="`background:url(${$store.state.system_config.directory.project+'/'+p.image});background-size:cover;width:100%;height:150px;`">
                                </nuxt-link>
                                <nuxt-link class="project-title" :to="`/project-detail/${p.id}/${p.slug}`">
                                    <h4>
                                        <strong v-if="lang" v-html="p.title_vi"></strong>
                                        <strong v-else v-html="p.title_en"></strong>
                                    </h4>
                                </nuxt-link>
                                <div class="project-detail">
                                    <ul>
                                        <li>
                                            <strong>Chủ đầu tư: </strong> <span v-if="lang" v-html="p.investor_vi"></span>
                                            <span v-else v-html="p.investor_en"></span>
                                        </li>
                                        <li>
                                            <strong>Vị trí dự án: </strong> <span v-if="lang" v-html="p.location_vi"></span>
                                            <span v-else v-html="p.location_en"></span>
                                        </li>
                                        <li>
                                            <strong>Loại dự án: </strong> <span v-if="lang" v-html="p.type_of_project_vi"></span>
                                            <span v-else v-html="p.type_of_project_en"></span>
                                        </li>
                                    </ul>
                                </div>

                                <div class="btn-page text-center">
                                    <nuxt-link :to="`/project-detail/${p.id}/${p.slug}`">{{$t('common.readmore')}}</nuxt-link>
                                </div>
                            </div>
                        </div>
                        <p class="bottom-line"></p>
                    </div>
                </div>
                <div class="col-md-3 wow fadeInDown" data-wow-delay="0.75s" data-wow-duration="1.5s">
                    <div id="scroller-anchor"></div>
                    <aside class="form-contact-prj" id="scroller">
                        <h4>ĐĂNG KÝ NGAY</h4>
                        <h3 class="phone maudo">094 915 2424</h3>
                        <h5>Hotline: 19000000</h5>
                        <p>Nhập trông tin tư vấn miễn phí và nhanh nhất.</p>
                        <form>
                            <div class="form-group">
                                <select class="form-control" id="sel1">
                                            <option>Sự kiện</option>
                                            <option>Bán căn hộ Vinhome</option>
                                            <option>Đấu giá khu chung cư</option>
                                        </select>
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Họ tên" class="form-control">
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Số điện thoại" class="form-control">
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Email">
                            </div>

                            <button type="submit">Đăng ký</button>
                        </form>
                    </aside>
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
    async asyncData() {
        let [project] = await Promise.all([
            axios.get(environment.apiUrl + "project")
        ]);
        return {
            projectData: project.data.data
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
        var url = $(location).attr("pathname");
        $("ul.nav > li").removeClass("active");
        $("a[href=\"" + url + "\"]")
            .parent()
            .addClass("active");
        var neo = $('.bottom-line').offset().top - $('#scroller').height();
        $(window).scroll(function () {
            if ($(window).scrollTop() <= neo) {
                $('#scroller').css('top', $(window).scrollTop());
            }
        });
        // $('#scroller').scrollToFixed({
        //     marginTop: 80,
        //     limit: $($('.bottom-line')).offset().top
        // });
    }
};
</script>

<style>
.project-detail ul {
    font-size: 13px;
    list-style-type: none;
    padding: 0;
}

.project-title {
    height: 60px;
}

.project-title h4 strong {
    text-transform: uppercase;
}
</style>
