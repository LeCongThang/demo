<template>
<section class="about-home">
    <div class="container">
        <div class="row" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <div class="col-md-8 col-md-offset-2">
                <div class="title-page text-center">
                    <h2>Về
                        <strong>chúng tôi</strong>
                    </h2>
                    <p>Chào mừng bạn đến với Central Real. Chúng tôi Cam kết mang đến những sản phẩm BĐS nghỉ dưỡng ưu việt, tạo ra giá trị thực cho khách hàng, nhân sự, nhà đầu tư và đối tác, thông qua đó mang lại lợi ích cho cộng đồng.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-5" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <div class="txt-left-about-ed2">
                    <h5>Chúng tôi là ai</h5>
                    <h1 style="margin-top:10px;">CÔNG TY CP ĐẦU TƯ PHÁT TRIỂN CENTRAL REAL</h1>
                    <p v-if="lang" v-html="aboutus.content_vi"></p>
                    <p v-else v-html="aboutus.content_en"></p>
                </div>
            </div>
            <div class="col-md-7" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <div class="txt-left-about-ed3">
                    <div v-if="aboutus.is_show">
                        <iframe width="100%" height="400" :src="aboutus.embed_link" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                    <div v-else>
                        <img :src="$store.state.system_config.directory.about+'/'+aboutus.image" width="100%" alt="Centralreal.vn" />
                    </div>

                </div>
            </div>
        </div>

        <div class="col-md-12 ed-count-number-12" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <div class="col-sm-3">
                <div class="ed-in-number12 text-center">
                    <img src="images/icon/icon-a.png" alt="">
                    <h1 data-min="1" class="numscroller" :data-max="aboutus.clients" data-delay="2" data-increment="1">
                        <strong>0</strong>
                    </h1>
                    <h4 class="des">Tổng số nhân viên</h4>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="ed-in-number12 text-center">
                    <img src="images/icon/icon-b.png" alt="">
                    <h1 data-min="1" class="numscroller" :data-max="aboutus.transports" data-delay="2" data-increment="1">
                        <b>0</b>
                    </h1>
                    <h4 class="des">Tổng số dự án</h4>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="ed-in-number12 text-center">
                    <img src="images/icon/icon-c.png" alt="">
                    <h1 data-min="1" class="numscroller" :data-max="aboutus.projects" data-delay="2" data-increment="5">
                        <b>0</b>
                    </h1>
                    <h4 class="des">Tổng số đối tác</h4>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="ed-in-number12 text-center">
                    <img src="images/icon/icon-d.png" alt="">
                    <h1 data-min="1" class="numscroller" :data-max="aboutus.awards" data-delay="2" data-increment="1">
                        <b>0</b>
                    </h1>
                    <h4 class="des">Tổng số sàn liên kết</h4>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    props: ['aboutus', 'lang']
}
</script>
