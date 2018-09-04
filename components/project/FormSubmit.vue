<template>
<div>
    <!-- <form @submit.prevent="sendInfo" class="project-form form-horizontal`" v-sticky="stickyEnabled" sticky-offset="offset" sticky-side="both">
        <div class="form-group text-center">
            <h4 style="color: white;font-weight: bold">Liên hệ ngay</h4>
            <h3 class="maudo">094 915 2424</h3>
            <h5 style="color: white;">‎Hotline: 028 7307 5555</h5>
            <p style="color: white;">Nhập thông tin để được tư vấn miễn phí và nhanh nhất.</p>
        </div>
        <div class="form-group">
            <div class="col-sm-12">
                <select class="form-control" name="eventId" v-model="eventId" tabindex="-1">
                <option v-for="p in project" :key="p.id" :value="p.id">{{p.title_vi}}</option>
            </select>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-12">
                <input type="text" id="name" name="name" v-model="name" class="form-control" placeholder="Họ tên">
            </div>
        </div>

        <div class="form-group">
            <div class="col-sm-12">
                <input type="email" class="form-control" id="email" v-model="email" name="email" placeholder="Email">
            </div>
        </div>
        <div class="form-group" style="margin-bottom: 30px">
            <div class="col-sm-12">
                <input type="tel" required="" id="phone" name="phone" v-model="phone" class="form-control" placeholder="Số điện thoại" aria-required="true">
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-12">
                <button type="submit" id="btnGui" class="btn btn-danger form-control upper">Đăng ký</button>
            </div>
        </div>
    </form> -->
    <aside class="form-contact-prj" v-sticky="stickyEnabled" sticky-offset="offset" sticky-side="both">
        <h4>ĐĂNG KÝ NGAY</h4>
        <h3 class="phone maudo">094 915 2424</h3>
        <h5>Hotline: 19000000</h5>
        <p>Nhập trông tin tư vấn miễn phí và nhanh nhất.</p>
        <form>
            <div class="form-group">
                <select class="form-control" id="sel1" name="eventId">
                    <option v-for="p in project" :key="p.id" :value="p.id">{{p.title_vi}}</option>
                </select>
            </div>
            <div class="form-group">
                <input type="text" id="name" name="name" v-model="name" class="form-control" :placeholder="$t('contact.name')">
            </div>
            <div class="form-group">
                <input type="email" class="form-control" id="email" v-model="email" name="email" placeholder="Email">
            </div>
            <div class="form-group" style="margin-bottom: 30px">
                <input type="tel" required="" id="phone" name="phone" v-model="phone" class="form-control" :placeholder="$t('contact.phone')" aria-required="true">
            </div>

            <button type="submit">Đăng ký</button>
        </form>
    </aside>
</div>
</template>

<script>
import axios from "axios";
import {
    environment
} from "~/plugins/config.js";
export default {
    props: ['project', 'lang'],
    data: {
        name: "",
        email: "",
        phone: "",
        eventId: 0,
        offset: {
            top: 50,
            bottom: 30
        },
        stickyEnabled: true,
    },
    methods: {
        sendInfo: function () {
            let dataContact = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                project_id: this.eventId
            };
            axios.post(environment.apiUrl + "project-register", dataContact, {
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
}
</script>
