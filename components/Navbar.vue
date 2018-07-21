<template>
    
    <header class="header">
    <div class="header-top">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <ul class="header-top-right ed-ul">
                        <li><i class="fa fa-envelope"></i> {{$store.state.system_config.email}}</li>
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
                    <div class="navbar-collapse1" >
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
                                <nuxt-link to="/news">{{$t('links.news')}}</nuxt-link>
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
                                <nuxt-link to="/library">{{$t('links.library')}}</nuxt-link>
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
export default {
  methods: {
    changeLanguage: function(lang) {
      this.$store.commit("setLanguage", lang);
      this.$i18n.locale = this.$store.state.lang;
    }
  }
}
</script>


