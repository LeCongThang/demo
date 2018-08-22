<template>
<div class="container">
    <div class="row">
        <h1 class="text-center" style="color:red">Contact page under construction</h1>
        <!-- <form class="" method="post" @submit.prevent="postNow"> -->
        <form class="form-horizontal">
            <div class="form-group">
                <label class="col-sm-2 control-label">Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" required placeholder="Name" v-model="name">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label">Email</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" required placeholder="Email" v-model="email">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label">Phone</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" required placeholder="Phone" v-model="phone">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label">Budget</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control"  placeholder="Budget" v-model="budget">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label">Content</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="content" v-model="contents">
                </div>
            </div>

            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-default">{{$t('contact.send_button')}}</button>
                </div>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import axios from "axios";
import {
    environment
} from "~/plugins/config.js";
export default {
    data: function () {
        return {
            name: "",
            email: "",
            phone: "",
            address: "",
            budget: "",
            contents: ""
        };
    },
    methods: {
        postNow: function () {
            let dataContact = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                address: this.address,
                budget: this.budget,
                contents: this.contents
            };
            axios
                .post(environment.apiUrl + "contact", dataContact, {
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                .then(res => {
                    console.log(res);
                    if (res.code == 0) {
                        alert("Fail to send");
                    } else {
                        alert("done");
                        this.name = "";
                        this.email = "";
                        this.phone = "";
                        this.address = "";
                        this.budget = "";
                        this.contents = "";
                    }
                })
                .catch(err => {
                    this.$router.push("/error");
                });
        }
    },
    computed: {
        lang() {
            if (this.$store.state.lang == "vi") {
                return true;
            }
            return false;
        }
    },
    mounted() {
        var url = $(location).attr("pathname");
        $("ul.nav > li").removeClass("active");
        $('a[href="' + url + '"]')
            .parent()
            .addClass("active");
    }
};
</script>
