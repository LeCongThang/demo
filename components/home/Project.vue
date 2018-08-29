<template>
<div>
    <section class="gallery-home">
        <div class="container">
            <div class="row wow animated fadeInUp">
                <div class="col-md-6 col-md-offset-3">
                    <div class="title-page text-center">
                        <h2 v-html="$t('home.project')">
                        </h2>
                        <p>Hơn 50 dự án Central Real đã và đang phân phối bởi các nhà đầu tư uy tín
                            <br> chất lượng hàng đầu Việt Nam.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="ed-gallery">
                        <div v-for="(project, index) in projects" :key="project.id">
                            <div :class="`gallery-${index+1} home-gallery`" :data-aos="setAnimate(index)" data-aos-delay="400" data-aos-duration="1500" data-aos-easing="ease-in-out" :style="`background: url(${$store.state.system_config.directory.project+'/'+project.image_thumbnail}) no-repeat center; background-size: cover;`">
                                <div class="caption">
                                    <div :class="setClass(index)">
                                        <h3 class="title boldtext" v-if="lang" v-html="project.title_vi"></h3>
                                        <h3 class="title boldtext" v-else v-html="project.title_en"></h3>
                                        <ul>
                                            <li>
                                                <strong>Chủ đầu tư: </strong> <span v-html="project.rela_partner.name"></span>
                                            </li>
                                            <li>
                                                <strong>Vị trí dự án: </strong> <span v-if="lang" v-html="project.location_vi"></span>
                                                <span v-else v-html="project.location_en"></span>
                                            </li>
                                        </ul>
                                        <div class="btn-page text-center">
                                            <nuxt-link :to="`/project-detail/${project.id}/${project.slug}`">Xem thêm</nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="btn-page text-center" style="padding-bottom: 20px;">
        <nuxt-link to="/project">{{$t('common.readmore')}}</nuxt-link>
    </div>

</div>
</template>

<script>
export default {
    props: ["projects", "lang"],
    methods: {
        setAnimate: (index) => {
            let animateName = '';
            switch (index) {
                case 0:
                    animateName = "fade-right";
                    break;
                case 1:
                    animateName = "fade-down";
                    break;
                case 2:
                    animateName = "fade-up";
                    break;
                case 3:
                    animateName = "fade-left";
                    break;
                case 4:
                    animateName = "fade-right";
                    break;
                case 5:
                    animateName = "fade-left";
                    break;

            }
            return animateName;
        },
        setClass: (index) => {
            let className = '';
            switch (index) {
                case 4:
                    className = "cc cc1";
                    break;
                default:
                    className = "cc";
                    break;
            }
            return className;
        }
    }
};
</script>
