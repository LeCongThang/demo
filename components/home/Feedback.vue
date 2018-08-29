<template>
<section class="customer-raiting">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="title-page text-center">
                    <h2 v-html="$t('home.feedback')"></h2>
                    <p>Chào mừng bạn đến với Central Real. Chúng tôi Cam kết mang đến những sản phẩm BĐS nghỉ dưỡng ưu việt, tạo ra giá trị thực cho khách hàng, nhân sự, nhà đầu tư và đối tác, thông qua đó mang lại lợi ích cho cộng đồng.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <section class="regular4 slider">
                    <div v-for="feedback in feedbacks" :key="feedback.id">
                        <div class="items-4" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="ease-in-out">
                            <div class="box-customer text-center">
                                <img :src="$store.state.system_config.directory.feedback+'/'+feedback.image">
                                <h4>{{feedback.client_name}}</h4>
                                <div class="ed-star">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                                <p v-html="feedback.content_vi"></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {

    props: ['feedbacks', 'lang']

}
</script>
