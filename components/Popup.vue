<template>
<div class="modal fade" id="admodal" role="dialog" tabindex="-1">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">		<span aria-hidden="true">&times;</span>		</button>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-4 event-form-modal">
                        <form @submit.prevent="processForm" class="adform">
                        <div class="form-group">
                            <select class="form-control" name="eventId" v-model="eventId">
                                <option value="1">SUN Group</option>
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
                    <div class="col-md-8 image-popup">
                        <img :src="$store.state.system_config.directory.config+'/'+$store.state.system_config.config_popup.image" class="img-responsive" alt="">
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
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
        eventId: ""
    },
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
}
</script>

