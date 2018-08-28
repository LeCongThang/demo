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
                            <!-- <li>
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
                            </li> -->
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
                        <div class="col-md-4 prodcont new" v-for="(p,index) in projectData.data" :key="p.id">
                            <div :class="`each-item filter ${index+1}`">
                                <nuxt-link :to="`/project-detail/${p.id}/${p.slug}`" class="pic-prj" :style="`background:url(${$store.state.system_config.directory.project+'/'+p.image});background-size:cover;width:100%;height:${setHeight(index)};`">
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
                        <!-- {{projectData}} -->
                        <div class="text-center" v-if="projectData.last_page>1">
                            <div class="btn-group" role="group">
                                <button type="button" v-on:click="getProjectData(1)" class="btn btn-md btn-default"><i class="fa fa-angle-double-left" aria-hidden="true"></i></button>
                                <button type="button" v-for="page in projectData.last_page" :key="page" v-on:click="getProjectData(page)" class="btn btn-md btn-default">{{page}}</button>
                                <button type="button" v-on:click="getProjectData(projectData.last_page)" class="btn btn-md btn-default"><i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 wow fadeInDown" data-wow-delay="0.75s" data-wow-duration="1.5s">
                    <!-- <aside class="form-contact-prj" id="scroller">
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
                    </aside> -->
                    <form id="frmDangKy" class="project-form form-horizontal">
                        <input type="hidden" name="_token" id="token" value="wx4gvSzwJvrY83W68FfCTel16gWRGnD6VdJ9rt7Q">
                        <div class="form-group text-center">
                            <h4 style="color: white;font-weight: bold">Liên hệ ngay</h4>
                            <h3 class="maudo">094 915 2424</h3>
                            <h5 style="color: white;">‎Hotline: 028 7307 5555</h5>
                            <p style="color: white;">Nhập thông tin để được tư vấn miễn phí và nhanh nhất.</p>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-12">
                                <input type="text" id="name" name="name" class="form-control" placeholder="Họ tên">
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-12">
                                <input type="email" class="form-control" id="email" name="email" placeholder="Email">
                            </div>
                        </div>
                        <div class="form-group" style="margin-bottom: 30px">
                            <div class="col-sm-12">
                                <input type="tel" required="" id="phone" name="phone" class="form-control" placeholder="Số điện thoại" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-12">
                                <button type="submit" id="btnGui" class="btn btn-danger form-control upper">Đăng ký</button>
                            </div>
                        </div>
                    </form>
                </div>
                <hr id="neo" style="border-top:1px solid rgb(209, 209, 209);">
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
        },
        setHeight(index) {
            let height = '360px';
            if (index % 2 != 0) {
                height = '180px';
            }
            if (index == 4) {
                height = height + ';margin-top: -180px';
            }
            return height;
        }
    },
    mounted() {
        var url = $(location).attr("pathname");
        $("ul.nav > li").removeClass("active");
        $("a[href=\"" + url + "\"]")
            .parent()
            .addClass("active");
        if ($(window).innerWidth() > 1024) {
            var neo = $('#neo').offset().top+350;
            $(window).scroll(function () {
                console.log($(window).scrollTop())
                if ($(window).scrollTop() <= neo && $(window).scrollTop() >= 400)
                    $('.project-form').css('top', $(window).scrollTop()-370)
            });
        }

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

.project-form {
    position: relative;
    top:0;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 32px 24px;
    box-shadow: 0px 5px 9px 1px rgba(0, 0, 0, 0.2)  
}
</style>
