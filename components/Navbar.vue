<template>
<header class="header">
    <div class="header-top">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <ul class="header-top-right ed-ul">
                        <li><i class="fa fa-envelope"></i> {{$store.state.system_config.config.email}}</li>
                        <li><a v-on:click="changeLanguage('vi')"><img src="/images/icon/vn.png" alt=""></a></li>
                        <li><a v-on:click="changeLanguage('en')"><img src="/images/icon/en.png" alt=""></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="header-navbar">
        <nav class="navbar navbar-inverse" id="menu" role="navigation">
            <div class="container">
                <div class="row ed-flex">
                    <div class="header-mobile">
                        <div class="logo">
                            <nuxt-link to="/"><img src="/images/logo/logo.png"></nuxt-link>
                        </div>
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" id="btn-toggle">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar top-bar"></span>
                                <span class="icon-bar middle-bar"></span>
                                <span class="icon-bar bottom-bar"></span>
                            </button>
                        </div>
                    </div>
                    <div class="navbar-collapse1">
                        <ul class="nav navbar-nav ed-ul">
                            <li class="active">
                                <nuxt-link to="/">{{$t('links.home')}}</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/aboutus">{{$t('links.about_us')}}</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/project">{{$t('links.project')}}</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/event">{{$t('links.event')}}</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/partner">{{$t('links.partner')}}</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/news">{{$t('links.news')}}</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/recruitment">{{$t('links.recruitment')}}</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/gallery">{{$t('links.library')}}</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/contact">{{$t('links.contact')}}</nuxt-link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>

</header>
</template>

<script>
import $ from "jquery";
export default {
  methods: {
    changeLanguage: function(lang) {
        this.$nuxt.$loading.start();
      this.$store.commit("setLanguage", lang);
      this.$i18n.locale = lang;
      this.$nuxt.$loading.finish();
    }
  },
  mounted() {
    function fixDiv() {
      if ($(window).width() > 992) {
        var $cache = $("#menu");
        var $addget = $("#fixedmobile");
        if ($(window).scrollTop() > 42) {
          // $('#fixed-mobile').removeClass('fix-mobile-ipad');
          $cache.addClass("getFixed-1");
        } else {
          // $('#fixedmobile').addClass('fix-mobile-ipad');
          $cache.removeClass("getFixed-1");
        }
      }
    }

    $(window).scroll(fixDiv);
    fixDiv();
    $(window).resize(function() {
      fixDiv();
    });
    var open = false;
    $("#btn-toggle").on("click", function() {
      if (open) {
        $("#menu").removeClass("open");
        $("#btn-toggle").removeClass("active");
        $("body").removeClass("menu-open");
      } else {
        $("#menu").addClass("open");
        $("#btn-toggle").addClass("active");
        $("body").addClass("menu-open");
      }
      open = !open;
    });
    $("body, html").on("click", function(event) {
      var target = $(event.target);
      if (
        !target.is(
          "#menu , #menu * ,#btn-toggle ,#btn-toggle *, .header-mid, .header-mid *"
        )
      ) {
        $("#menu").removeClass("open");
        $("#btn-toggle").removeClass("active");
        $("body").removeClass("menu-open");
        open = false;
      }
    });
    $("#menu .has-submenu .icon-first-submenu").on("click", function(event) {
      event.preventDefault();
      var parent = $(this).parents(".has-submenu");
      $("#menu .has-submenu")
        .not(parent)
        .removeClass("open")
        .find(".submenu-1")
        .slideUp();
      $("#menu .has-submenu")
        .not(parent)
        .find(".has-second-submenu")
        .removeClass("open");
      $("#menu .has-submenu")
        .not(parent)
        .find(".second-submenu")
        .slideUp();
      parent
        .toggleClass("open")
        .find(".submenu-1")
        .slideToggle();
    });
    $("#menu .has-second-submenu .icon-second-submenu").on("click", function(
      event
    ) {
      event.preventDefault();
      var parent = $(this).parents(".has-second-submenu");
      $("#menu .has-second-submenu")
        .not(parent)
        .removeClass("open")
        .find(".submenu-2")
        .slideUp();
      parent
        .toggleClass("open")
        .find(".submenu-2")
        .slideToggle();
    });
  }
};
</script>
