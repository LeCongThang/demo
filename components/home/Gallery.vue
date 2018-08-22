<template>
    <section class="gallery-home">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-md-offset-3">
                            <div class="title-page text-center">
                                <h2 v-html="$t('home.gallery')"></h2>
                                <p v-if="lang" v-html="$store.state.system_config.config.title_gallery_vi"></p>
                                <p v-else v-html="$store.state.system_config.config.title_gallery_en"></p>
                            </div>
                        </div>
                    </div>

                    <div class="row" data-aos="slide-down" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                        <div class="col-md-4 col-sm-6 pd-10">
                            <a class="width100" data-fancybox="gallery" href="/images/gallery/pic-1.jpg">
                                <div class="grid-gallery" style="background: url(/images/gallery/pic-1.jpg) no-repeat center; background-size: cover;">
                                    
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 col-sm-6 pd-10">
                            <a class="width100" data-fancybox="gallery" href="/images/gallery/pic-6.jpg">
                                <div class="grid-gallery" style="background: url(/images/gallery/pic-6.jpg) no-repeat center; background-size: cover;">
                                    
                                </div>
                            </a> 
                        </div>
                        <div class="col-md-4 col-sm-6 pd-10">
                            <a class="width100" data-fancybox="gallery" href="/images/gallery/pic-8.jpg">
                                <div class="grid-gallery" style="background: url(/images/gallery/pic-8.jpg) no-repeat center; background-size: cover;">
                                    
                                </div>
                            </a>
                        </div>
                        <div class="col-md-6 col-sm-6 pd-10">
                            <a class="width100" data-fancybox="gallery" href="/images/gallery/pic-11.jpg">
                                <div class="grid-gallery" style="background: url(/images/gallery/pic-11.jpg) no-repeat center; background-size: cover;">
                                    
                                </div>
                            </a>
                        </div>
                        <div class="col-md-6 col-sm-12 pd-10">
                            <a class="width100" data-fancybox="gallery" href="/images/gallery/pic-14.jpg">
                                <div class="grid-gallery" style="background: url(/images/gallery/pic-14.jpg) no-repeat center; background-size: cover;">
                                    
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="row">
                        
                    </div>
                </div>
                
            </section>
</template>
<script>
export default {
    props:['galleries','lang']
}
</script>
