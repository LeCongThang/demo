<template>
<footer>
    <div class="top-footer">
        <div class="container">
            <div class="row">

                <div class="col-sm-4" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500" data-aos-easing="ease-in-out">
                    <ul class="logo-ft">
                        <li>
                            <!-- <img src="resources/images/logo/logo_2.png"> -->
                            <!-- <div class="logo"> -->
                            <a href="/" style="padding-bottom: 10px;">
                          <img src="images/logo/logo.png">
                          <!-- <h5 style="text-transform: uppercase; font-size: 11px; font-weight: bold">Nơi khởi nguồn thịnh vượng</h5> -->
                        </a>
                            <!-- </div> -->
                        </li>
                        <li><strong v-if="lang" v-html="$store.state.system_config.config.name_vi"></strong>
                            <strong v-else v-html="$store.state.system_config.config.name_en"></strong></li>
                        <li v-if="lang"><i class="fa fa-map-marker"></i> {{$store.state.system_config.config.address_vi}}</li>
                        <li v-else><i class="fa fa-map-marker"></i> {{$store.state.system_config.config.address_en}}</li>
                        <li><i class="fa fa-phone"></i> {{$store.state.system_config.config.phone}}</li>
                        <li><i class="fa fa-envelope"></i> {{$store.state.system_config.email}} <i class="fa fa-globe"></i> www.centralreal.vn</li>
                    </ul>

                    <div class="share-social">
                        <h5>{{$t('common.connect')}} </h5>
                        <div id="share" class="share">
                            <ul>
                                <li>
                                    <a :href="$store.state.system_config.config.facebook" target="_blank">		<img src="images/icon/fb.png">		</a>
                                </li>
                                <li>
                                    <a :href="$store.state.system_config.config.youtube" target="_blank">		<img src="images/icon/yt.png">		</a>
                                </li>
                                <li>
                                    <a :href="$store.state.system_config.config.youtube">		<img src="images/icon/gg.png">		</a>
                                </li>
                                <li>
                                    <a :href="`tel:${$store.state.system_config.config.viber}`">		<img src="images/icon/vb.png">		</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div class="col-sm-2" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500" data-aos-easing="ease-in-out">
                    <ul class="info-company-footer">
                        <h4><strong>{{$t('common.company_info')}}</strong></h4>
                        <li>
                            <nuxt-link to="/aboutus">{{$t('links.about_us')}}</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/project">{{$t('links.project')}}</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/event">{{$t('links.event')}}</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/news">{{$t('links.news')}}</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/library">{{$t('links.library')}}</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/recruitment">{{$t('links.recruitment')}}</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-5 col-md-offset-1" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500" data-aos-easing="ease-in-out">
                    <div class="fanpage">
                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCentralReal.vn%2F&tabs=timeline&width=640&height=200&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=175588756336328"
                            width="100%" height="200" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="bottom-footer text-center">
        <p>Copyright © 2018 - Central Real</p>
    </div>
</footer>
</template>

<script>
export default {
    computed: {
        lang() {
            if (this.$store.state.lang == "vi") {
                return true;
            }
            return false;
        }
    },
}
</script>
