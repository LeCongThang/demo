<template>
<section class="wrapper">
    <div class="banner-partner-page">
        <div class="banner-partner-page-1">
            <h4>{{$t('links.project')}}</h4>
        </div>
    </div>
    <div class="project-page" style="padding-top: 30px;">
        <div class="container">
            <div class="row">
                <div class="col-md-9">
                    <div class="ed-filter">
                        <button class="active filter-button" data-filter="all">Tất cả</button>
                        <button class="filter-button" v-for="c in projectData.categories" :key="c.id" :data-filter="c.id">{{lang?c.title_vi:c.title_en}}</button>
                        <ul class="ed-dropdown">
                            <li>
                                <div class="dropdown">
                                    <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Chủ đầu tư
                                                <i class="fa fa-caret-down"></i>
                                            </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#" v-for="c in projectData.partners" :key="c.id" :data-filter="c.id">{{c.name}}</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="row">
                        <div class="col-md-4" v-for="(p,index) in projectData.projects.data" :key="p.id" data-aos="fade-up" :data-aos-delay="index*50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                            <div :class="`each-item filter ${index+1}`">
                                <nuxt-link :to="`/project-detail/${p.id}/${p.slug}`" :class="`pic-prj ${setHeight(index)}`" :style="`background:url(${$store.state.system_config.directory.project+'/'+p.image});background-size:cover;width:100%;`">
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
                                            <strong>Chủ đầu tư: </strong> <span v-html="p.rela_partner.name"></span>
                                        </li>
                                        <li>
                                            <strong>Vị trí dự án: </strong> <span v-if="lang" v-html="p.location_vi"></span>
                                            <span v-else v-html="p.location_en"></span>
                                        </li>
                                        <li>
                                            <strong>Loại dự án: </strong> <span v-if="lang" v-html="p.rela_category.title_vi"></span>
                                            <span v-else v-html="p.rela_category.title_en"></span>
                                        </li>
                                    </ul>
                                </div>

                                <div class="btn-page text-center">
                                    <nuxt-link :to="`/project-detail/${p.id}/${p.slug}`">{{$t('common.readmore')}}</nuxt-link>
                                </div>
                            </div>
                        </div>
                        <div class="text-center paging" v-if="projectData.last_page>1">
                            <div class="btn-group" role="group">
                                <button type="button" v-on:click="getProjectData(1)" class="btn btn-md btn-default"><i class="fa fa-angle-double-left" aria-hidden="true"></i></button>
                                <button type="button" v-for="page in projectData.last_page" :key="page" v-on:click="getProjectData(page)" :class="`btn btn-md btn-default ${genCurrentPageActive(page)}`">{{page}}</button>
                                <button type="button" v-on:click="getProjectData(projectData.last_page)" class="btn btn-md btn-default"><i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <form-submit :className="`project-form`" :project="projectData.projects.data" :lang="lang" />
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
import FormSubmit from "~/components/project/FormSubmit.vue";
export default {
    components: {
        FormSubmit
    },
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
            let [project] = await Promise.all([
                axios.get(environment.apiUrl + "project?page=" + page)
            ]);
            this.projectData = project.data.data;
            this.$nuxt.$loading.finish();
        },
        genCurrentPageActive(page) {
            if (this.projectData.current_page == page) {
                return "curent-page";
            } else {
                return "";
            }
        },
        setHeight(index) {
            let classes = 'img-project-height-36';
            if (index % 2 != 0) {
                classes = 'img-project-height-18';
            }
            if (index == 4) {
                classes = 'img-project-height-36 padding-18';
            }
            return classes;
        }
    },
    head() {
        return {
            title: this.$t('links.project') + "- CENTRALREAL.VN"
        };
    },
    mounted() {
        var url = $(location).attr("pathname");
        $("ul.nav > li").removeClass("active");
        $("a[href=\"" + url + "\"]")
            .parent()
            .addClass("active");
        if ($( window ).width() > 1024) {
            var neo = $('.top-footer').offset().top - 770;
            $(window).scroll(function () {
                if ($(window).scrollTop() <= neo && $(window).scrollTop() >= 370) {
                    $('.project-form').css('top', $(window).scrollTop() - 370)
                } else if ($(window).scrollTop() > neo) {
                    $('.project-form').css('top', neo - 330)
                } else {
                    $('.project-form').css('top', 0)
                }

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
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 32px 24px;
    box-shadow: 0px 5px 9px 1px rgba(0, 0, 0, 0.2)
}

.img-project-height-36 {
    height: 360px;
    ;
}

.img-project-height-18 {
    height: 180px;
}

@media (min-width: 1024px) {
    .padding-18 {
        margin-top: -180px;
    }
}
</style>
