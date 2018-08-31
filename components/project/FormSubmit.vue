<template>
<form id="frmDangKy" @submit.prevent="sendInfo" :class="`${className} form-horizontal`">
    <input type="hidden" name="_token" id="token" value="wx4gvSzwJvrY83W68FfCTel16gWRGnD6VdJ9rt7Q">
    <div class="form-group text-center">
        <h4 style="color: white;font-weight: bold">Liên hệ ngay</h4>
        <h3 class="maudo">094 915 2424</h3>
        <h5 style="color: white;">‎Hotline: 028 7307 5555</h5>
        <p style="color: white;">Nhập thông tin để được tư vấn miễn phí và nhanh nhất.</p>
    </div>
    <div class="form-group">
        <div class="col-sm-12">
            <select class="form-control" name="eventId" v-model="eventId">
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
</form>
</template>

<script>
import axios from "axios";
import {
    environment
} from "~/plugins/config.js";
export default {
    props:['className','project', 'lang'],
    data: {
        name: "",
        email: "",
        phone: "",
        eventId: ""
    },
    methods: {
        sendInfo: function () {
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
}
</script>
