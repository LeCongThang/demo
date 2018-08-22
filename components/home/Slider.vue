<template>
    <section class="option-1">
                <div class="container-fluid">
                    <div class="row" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                        <div class="col-sm-12 padding-0">
                            <div class="ed-phone-mail">
                                <section class="regular1 slider">
                                    <div v-for="slider in sliders" :key="slider.id">
                                        <div class="item-1">
                                            <img :src="$store.state.system_config.directory.slider+'/'+slider.image" alt="" style="width:100% !important; height:100% !important" class="img-responsive">
                                        </div>
                                    </div>
                                </section>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
</template>
<script>
export default {
    props:['sliders']
}
</script>

