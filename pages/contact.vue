<template>
     <form class="" method="post" @submit.prevent="postNow">
        <input type="text" name="" value="" v-model="name" required>
        <input type="text" name="" value="" v-model="email" required>
        <input type="text" name="" value="" v-model="phone" required>
        <input type="text" name="" value="" v-model="address">
        <input type="text" name="" value="" v-model="budget">
        <input type="text" name="" value="" v-model="contents">
        <button type="submit" name="button">{{$t('contact.send_button')}}</button>
    </form>
</template>
<script>
import axios from "axios";
import { environment } from "~/plugins/config.js";
export default {
  data: function() {
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
    postNow: function() {
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
  }
};
</script>

