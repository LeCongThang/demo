<template>
  <section class="wrapper">
    <slider :sliders="homeData.sliders" />
    <about :aboutus="homeData.about" :lang="lang" />
    <project :projects="homeData.projects" :lang="lang" />
    <event :events="homeData.events" :lang="lang" />
    <section class="bg-color">
      <news :video="homeData.video" :news="homeData.news" :lang="lang" />
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
import News from "~/components/home/News.vue";
import Feedback from "~/components/home/Feedback.vue";
import Partner from "~/components/home/Partner.vue";
import Contact from "~/components/home/Contact.vue";
import axios from "axios";
import { environment } from "~/plugins/config.js";
export default {
  components: {
    Slider,
    About,
    Project,
    Event,
    News,
    Feedback,
    Partner,
    Contact
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
      $(".video-news img").css("width", "100%");
      $(".video-news img").css("height", right_height);
      // for event section
      var form_height = $(".left-form").innerHeight();
      $(".regular2 .items-2 .pic-items2 > img").css("height", form_height);
    }
    
  },
   layout: "default"
};
</script>


