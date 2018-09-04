<template>
<section class="event-home">
    <div class="container">
        <div class="row wow" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <div class="col-md-6 col-md-offset-3">
                <div class="title-page text-center">
                    <h2 v-html="$t('home.event')"></h2>
                    <p>Hơn 50 dự án Central Real đã và đang phân phối bởi các nhà đầu tư uy tín
                        <br> chất lượng hàng đầu Việt Nam.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 pd-right-0 left-form" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500" data-aos-easing="ease-in-out">
                <div class="register-event">
                    <h4 v-html="$t('home.register_event')"></h4>
                    <form @submit.prevent="processForm">
                        <div class="form-group">
                            <select class="form-control" v-model="eventId">
                                <option v-for="(event,index) in events" :key="event.id" :selected="index == 0 ? true : false" :value="event.id">{{event.title_vi}}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <input type="text" :placeholder="$t('contact.name')" required class="form-control" name="name" v-model="name">
                        </div>
                        <div class="form-group">
                            <input type="email" placeholder="Email" required class="form-control" name="email" v-model="email">
                        </div>
                        <div class="form-group">
                            <input type="text" :placeholder="$t('contact.phone')" required class="form-control" name="phone" v-model="phone">
                        </div>
                        <div class="btn-page text-center">
                            <button class="btn btn-danger" type="submit">{{$t('contact.send_button')}}</button>
                        </div>

                    </form>
                </div>
            </div>
            <div class="col-md-8 pd-left-0" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500" data-aos-easing="ease-in-out">
                <section class="regular2 slider">
                    <div v-for="event in events" :key="event.id">
                        <div class="items-2">
                            <div class="pic-items2">
                                <img :src="$store.state.system_config.directory.news+'/'+event.image" class="img-responsive" :alt="event.title_vi">
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
import axios from "axios";
import {
    environment
} from "~/plugins/config.js";
export default {
    data: {
        name: "",
        email: "",
        phone: "",
        eventId: 0
    },
    props: ["events", "lang"],
    methods: {
        processForm: function () {
            let dataContact = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                event_id: this.eventId
            };
            axios.post(environment.apiUrl + "event-register", dataContact, {
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                .then(res => {
                    alert("done");
                    this.name = "";
                    this.email = "";
                    this.phone = "";
                    this.eventId = "";
                })
                .catch(err => {
                    this.$router.push("/error");
                });
        }
    }
};
</script>
