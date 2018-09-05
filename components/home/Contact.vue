<template>
<section class="contact-home">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12 padding-0">
                <div id="maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1051004184446!2d106.71420181475891!3d10.803261861651979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a4143f87d1%3A0x4c3e08bd750d058e!2zNjYgxJDGsOG7nW5nIE5ndXnhu4VuIEdpYSBUcsOtLCBQaMaw4budbmcgMjUsIELDrG5oIFRo4bqhbmgsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1532016956075"
                        width="100%" height="415" frameborder="0" style="border:0" allowfullscreen=""></iframe>
                </div>
            </div>
        </div>
    </div>
    <div class="form-contact-home">
        <div class="container">
            <div class="row">
                <div class="col-md-5 col-md-offset-7" data-aos="fade-left" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <div class="form-ct-1">
                        <div class="title-page text-center">
                            <h2 v-html="$t('home.contact')"></h2>
                        </div>
                        <form class="row" @submit.prevent="contactForm">

                            <div class="form-group col-sm-12">
                                <input type="text" required :placeholder="$t('contact.name')" class="form-control" v-model="name">
                            </div>
                            <div class="form-group col-sm-6">
                                <input type="email" required class="form-control" placeholder="Email" v-model="email">
                            </div>
                            <div class="form-group col-sm-6">
                                <input type="text" required :placeholder="$t('contact.phone')" class="form-control" v-model="phone">
                            </div>
                            <div class="form-group col-sm-12">
                                <input type="text" required :placeholder="$t('contact.title')" class="form-control" v-model="title">
                            </div>
                            <div class="form-group col-sm-12">
                                <textarea rows="3" required :placeholder="$t('contact.content')" id="comment" class="form-control" v-model="contents"></textarea>
                            </div>
                            <div class="form-group col-sm-12 text-center">
                                <button type="submit">{{$t('contact.send_button')}}</button>
                            </div>

                        </form>
                    </div>
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
    data: {
        name: "",
        email: "",
        phone: "",
        title: "",
        contents: ""
    },
    methods: {
        contactForm: function () {
            let dataContact = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                title: this.title,
                content: this.contents + ". Thông tin liên hệ đã được khách hàng được gửi tại trang: http://centralreal.cf" + this.$route.fullPath
            };
            axios
                .post(environment.apiUrl + "contact", dataContact, {
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                .then(res => {
                    if (res.code == 0) {
                        alert("Fail to send");
                    } else {
                        alert("done");
                        this.name = "";
                        this.email = "";
                        this.phone = "";
                        this.address = "";
                        this.title = "";
                        this.contents = "";
                    }
                })
                .catch(err => {
                    this.$router.push("/error");
                });
        }
    }
};
</script>
