<template>
<section class="wrapper">
    <div class="banner-partner-page">
        <div class="banner-partner-page-1">
            <h4>{{$t('links.contact')}}</h4>
        </div>
    </div>
    <div class="contact-page">
        <div class="banner-mid">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <a href="#">
                            <img src="/images/contact/pic-2.jpg" class="img-responsive" alt="centralreal.vn">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-contact-page">
            <div class="container">
                <div class="row wow fadeInDown" data-wow-delay="0.25s" data-wow-duration="1.5s">
                    <div class="col-sm-12">
                        <div class="box-big">
                            <div class="box-small">
                                <h3 v-html="$t('home.contact')"></h3>
                                <form class="row" @submit.prevent="postNow">
                                    <div class="form-group col-sm-4">
                                        <input type="text" class="form-control" required :placeholder="$t('contact.name')" v-model="name">
                                    </div>
                                    <div class="form-group col-sm-4">
                                        <input type="email" class="form-control" required placeholder="Email" v-model="email">
                                    </div>
                                    <div class="form-group col-sm-4">
                                        <input type="text" class="form-control" required :placeholder="$t('contact.phone')" v-model="phone">
                                    </div>
                                    <div class="form-group col-sm-12">
                                        <input type="text" :placeholder="$t('contact.title')" required class="form-control" v-model="title">
                                    </div>
                                    <div class="form-group col-sm-12">
                                        <textarea class="form-control" rows="5" required id="comment" :placeholder="$t('contact.content')" v-model="contents"></textarea>
                                    </div>

                                    <button type="submit">{{$t('contact.send_button')}}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 padding-0">
                    <div class="maps-page">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.5521588283993!2d106.71530435801498!3d10.803321832748136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a4143f87d1%3A0x64daa8d9b239ec3a!2zNjggxJDGsOG7nW5nIE5ndXnhu4VuIEdpYSBUcsOtLCBQaMaw4budbmcgMjUsIELDrG5oIFRo4bqhbmgsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1533692314253"
                            width="100%" height="350" frameborder="0" style="border:0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>
</template>

<script>
import axios from "axios";
import { environment } from "~/plugins/config.js";
export default {
  data: {
    name: "",
    email: "",
    phone: "",
    title: "",
    contents: ""
  },
  methods: {
    postNow: function() {
      let dataContact = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        title: this.title,
        content: this.contents
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
            this.title = "";
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
  head() {
    return {
      title: this.$t("links.contact") + "- CENTRALREAL.VN"
    };
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
