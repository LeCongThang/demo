<template>
<section class="partner-home" style="background-color: white">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <div class="title-page text-center">
                    <h2 v-html="$t('home.partner')"></h2>
                    <p v-if="lang" v-html="$store.state.system_config.config.title_partner_vi"></p>
                    <p v-else v-html="$store.state.system_config.config.title_partner_vi"></p>
                </div>
            </div>
        </div>
        <div class="row" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <div class="col-sm-12">
                <section class="regular5 slider">
                    <div class="items-5" v-for="p in partners" :key="p.id">
                        <img :src="$store.state.system_config.directory.partner+'/'+p.image" :alt="p.name">
                    </div>
                </section>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {

    props: ['partners', 'lang']

}
</script>
