<template>
  <section class="wrapper">
    <slider :sliders="homeData.sliders" />
    <about :aboutus="homeData.about" :lang="lang" />
    <project :projects="homeData.projects" :lang="lang" />
    <event :events="homeData.events" />
    <section class="bg-color">
      <news :news="homeData.news" :lang="lang" />
      <feedback :feedbacks="homeData.feed_backs" :lang="lang" />
      <partner :partners="homeData.partners" :lang="lang" />
      <contact/>
    </section>
  
  
  </section>
</template>

<script>
import Slider from "~/components/home/Slider.vue";
import About from "~/components/home/About.vue";
import Project from "~/components//home/Project.vue";
import Event from "~/components/home/Event.vue";
import Gallery from "~/components/home/Gallery.vue";
import News from "~/components/home/News.vue";
import Feedback from "~/components/home/Feedback.vue";
import Partner from "~/components/home/Partner.vue";
import Contact from "~/components/home/Contact.vue";
import axios from "axios";
import { environment } from "~/plugins/config.js";
const DELAY = 1;
const POPUP_DELAY_DEFAULT = 5000; //UNIT SECOND
const SCROLL = 2;
const REDIRECT = 3;
export default {
  components: {
    Slider,
    About,
    Project,
    Event,
    Gallery,
    News,
    Feedback,
    Partner,
    Contact
  },
  data: () => {
    return {
      popupType: DELAY,
      popupData: POPUP_DELAY_DEFAULT
    };
  },
  async asyncData() {
    let [home] = await Promise.all([axios.get(environment.apiUrl + "home")]);
    return {
      homeData: home.data.data
    };
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
      title: this.$store.state.system_config.config.meta_title,
      meta: [
        {
          charset: "utf-8"
        },
        {
          hid: "x-ua-compatible",
          name: "x-ua-compatible",
          content: "ie=edge"
        },
        {
          hid: "viewport",
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        },
        {
          hid: "copyright",
          name: "copyright",
          content: "Công ty Bất động sản Centralreal.VN"
        },
        {
          hid: "language",
          name: "language",
          content: "vietnamese"
        },
        {
          hid: "description",
          name: "description",
          content:
            "CentralReal - Hệ Thống Phân Phối BĐS Nghỉ Dưỡng Hàng Đầu Việt Nam"
        },
        {
          hid: "author",
          name: "author",
          content: "CentralReal.vn"
        },
        {
          hid: "robots",
          name: "robots",
          content: "index, archive, follow, noodp"
        },
        {
          hid: "googlebot",
          name: "googlebot",
          content: "index, archive, follow, noodp"
        },
        {
          hid: "msnbot",
          name: "msnbot",
          content: "all,index,follow"
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "Centralreal.VN, centralreal"
        },
        {
          hid: "og:url",
          name: "og:url",
          content: "centralreal.vn"
        },
        {
          hid: "og:type",
          name: "og:type",
          content: "website"
        },
        {
          hid: "og:title",
          name: "og:title",
          content: "Centralreal.VN"
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "CentralReal - Hệ Thống Phân Phối BĐS Nghỉ Dưỡng Hàng Đầu Việt Nam"
        },
        {
          hid: "og:image",
          name: "og:image",
          content:
            "https://stupefied-almeida-b9a737.netlify.com/resources/images/logo/logo.png"
        }
      ]
    };
  },
  mounted() {
    $(document).ready(function() {
      $(".regular1")
        .not("slick-initialized")
        .slick({
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 900,
          prevArrow: '<button class="fa fa-angle-left"></button>',
          nextArrow: '<button class="fa fa-angle-right"></button>',
          autoplay: true,
          autoplaySpeed: 5000,
          responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
      $(".regular2")
        .not("slick-initialized")
        .slick({
          dots: true,
          infinite: 0,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 900,
          prevArrow: '<button class="fa fa-angle-left"></button>',
          nextArrow: '<button class="fa fa-angle-right"></button>',
          autoplay: true,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });

      $(".regular4")
        .not("slick-initialized")
        .slick({
          dots: true,
          infinite: 0,
          speed: 900,
          prevArrow: '<button class="fa fa-angle-left"></button>',
          nextArrow: '<button class="fa fa-angle-right"></button>',
          slidesToShow: 4,
          slidesToScroll: 4,
          autoplay: true,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });

      $(".regular5")
        .not("slick-initialized")
        .slick({
          dots: true,
          infinite: true,
          speed: 900,
          prevArrow: '<button class="fa fa-angle-left"></button>',
          nextArrow: '<button class="fa fa-angle-right"></button>',
          slidesToShow: 8,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }
          ]
        });
      var url = $(location).attr("pathname");
      $("ul.nav > li").removeClass("active");
      $('a[href="' + url + '"]')
        .parent()
        .addClass("active");
    });
    var w = $(window).innerWidth();
    if (w > 1024) {
      // for video in news section
      var right_height = $(".right-col-news").innerHeight() - 8;
      $(".video-news").css("height", right_height);
      $(".video-news iframe").css("width", "100%");
      $(".video-news iframe").css("height", right_height);
      var form_height = $(".left-form").innerHeight();
      console.log(form_height);
      $(".regular2 .items-2 .pic-items2 > img").css("height", form_height);
    }
    switch (this.popupType) {
      case this.DELAY:
        setTimeout(function() {
          $("#admodal")
            .find(".item")
            .first()
            .addClass("active");
          $("#admodal").modal({
            backdrop: "static",
            keyboard: false
          });
        }, this.POPUP_DELAY_DEFAULT);
        break;
      case this.SCROLL:
        break;
      case this.REDIRECT:
        break;
    }
    // var adModal = 1;
    // if (adModal) {

    //   setTimeout(function() {
    //     $('#admodal').find('.item').first().addClass('active');
    //     $('#admodal').modal({
    //       backdrop: 'static',
    //       keyboard: false
    //     });

    //   }, 3000);
    //   $(".regular6").not('slick-initialized').slick({
    //     dots: false,
    //     infinite: 0,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     speed: 900,
    //     prevArrow: '<button class="fa fa-angle-left"></button>',
    //     nextArrow: '<button class="fa fa-angle-right"></button>',
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //   });
    // }
  }
};
</script>


