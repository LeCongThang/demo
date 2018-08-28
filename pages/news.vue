<template>
<!-- <section class="project-home">
    <div class="container">
        <div class="row">
            <h1 class="text-center" style="color:red">News page under construction</h1>
            <div class="col-md-6 col-md-offset-3">
                <div class="title-page text-center">
                    <h2 v-html="$t('home.news')"></h2>
                    <p v-if="lang" v-html="$store.state.system_config.config.title_news_vi"></p>
                    <p v-else v-html="$store.state.system_config.config.title_news_en"></p>
                </div>
            </div>
        </div>

        <div class="row flex-ed">
            <div class="col-md-4 col-sm-6" v-for="news in newsData.data" :key="news.id">
                <div class="box-project-home">
                    <ul>
                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                        <li><a href="#"><i class="fa fa-share-alt"></i></a></li>
                        <li><a href="#"><i class="fa fa-plus"></i></a></li>
                    </ul>
                    <nuxt-link :to="{name:'news-detail-id-slug',params:{id:news.id,slug:news.slug}}">
                        <img :src="$store.state.system_config.directory.news+'/'+news.image" :alt="news.title_vi" class="img-responsive">
                    </nuxt-link>
                    <div class="txt-prj-home">
                        <nuxt-link :to="{name:'news-detail-id-slug',params:{id:news.id,slug:news.slug}}">
                            <h4 v-if="lang">{{news.title_vi}}</h4>
                            <h4 v-else>{{news.title_en}}</h4>
                        </nuxt-link>
                        <div v-if="lang" v-html="news.description_vi"></div>
                        <div v-else v-html="news.description_en"></div>
                        <div class="btn-page text-center">
                            <nuxt-link :to="{name:'news-detail-id-slug',params:{id:news.id,slug:news.slug}}">
                                {{$t('common.readmore')}}
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center">
            <div class="btn-group" role="group">
                <button type="button" v-on:click="getNewsData(1)" class="btn btn-md btn-default"><i class="fa fa-angle-double-left" aria-hidden="true"></i></button>
                <button type="button" v-for="page in newsData.last_page" :key="page" v-on:click="getNewsData(page)" class="btn btn-md btn-default">{{page}}</button>
                <button type="button" v-on:click="getNewsData(newsData.last_page)" class="btn btn-md btn-default"><i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
            </div>
        </div>
    </div>
</section> -->
<section class="wrapper">

            <div class="banner-news-page">
                <div class="banner-news-page-1">
                    <h4>Tin tức</h4>
                </div>
            </div>

            <div class="news-highlight">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 wow fadeInLeft" data-wow-delay="0.25s" data-wow-duration="1.5s">
                            <a href="news-detail.html" class="box-news-page">
                                <img src="/images/news/pic-2.jpg" class="img-responsive" alt="">
                                <h4>
                                    <strong>HƠN 9 TỶ USD VÀ 35.000 TỶ ĐỒNG VỐN ĐẦU TƯ, ĐÂY SẼ LÀ NƠI BÙNG NỔ THỊ TRƯỜNG BẤT ĐỘNG
                                        SẢN NGHỈ DƯỠNG</strong>
                                </h4>
                            </a>
                        </div>
                        <div class="col-md-4 wow fadeInRight" data-wow-delay="0.25s" data-wow-duration="1.5s">
                            <a href="news-detail.html" class="news-aside">
                                <img src="/images/news/pic-3.jpg" alt="">
                                <h4>Lorem ipsum dolor sit sit amet</h4>
                                <ul>
                                    <li>
                                        <i class="fa fa-calendar"></i> 21/07/2018</li>
                                    <li>
                                        <i class="fa fa-user-o"></i> Admin</li>
                                </ul>
                            </a>

                            <a href="news-detail.html" class="news-aside">
                                <img src="/images/news/pic-3.jpg" alt="">
                                <h4>Lorem ipsum dolor sit sit amet</h4>
                                <ul>
                                    <li>
                                        <i class="fa fa-calendar"></i> 21/07/2018</li>
                                    <li>
                                        <i class="fa fa-user-o"></i> Admin</li>
                                </ul>
                            </a>
                            <a href="news-detail.html" class="news-aside">
                                <img src="/images/news/pic-3.jpg" alt="">
                                <h4>Lorem ipsum dolor sit sit amet</h4>
                                <ul>
                                    <li>
                                        <i class="fa fa-calendar"></i> 21/07/2018</li>
                                    <li>
                                        <i class="fa fa-user-o"></i> Admin</li>
                                </ul>
                            </a>
                            <a href="news-detail.html" class="news-aside">
                                <img src="/images/news/pic-3.jpg" alt="">
                                <h4>Lorem ipsum dolor sit sit amet</h4>
                                <ul>
                                    <li>
                                        <i class="fa fa-calendar"></i> 21/07/2018</li>
                                    <li>
                                        <i class="fa fa-user-o"></i> Admin</li>
                                </ul>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="news-highlight-2">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="titile-news">
                                <h4>Tin
                                    <strong>thị trường</strong>
                                </h4>
                            </div>

                            <a href="news-detail.html" class="box-222 wow fadeInDown" data-wow-delay="0.25s" data-wow-duration="1.5s">
                                <img src="/images/news/news-4.jpg" class="img-responsive" alt="">
                                <span class="overload"></span>
                                <h4>Giải pháp nào cho biệt thự biển triệu đô ở Việt Nam</h4>
                            </a>

                            <div class="row wow zoomIn" data-wow-delay="0.25s" data-wow-duration="1.5s">
                                <div class="col-sm-6">
                                    <a href="news-detail.html" class="box-small-news">
                                        <img src="/images/news/pic-4.jpg" class="img-responsive" alt="">
                                        <h5>Sau gần 2 năm thi công, sân bay Cam Ranh tiêu chuẩn 4 sao...</h5>
                                    </a>
                                </div>
                                <div class="col-sm-6">
                                    <a href="news-detail.html" class="box-small-news">
                                        <img src="/images/news/pic-4.jpg" class="img-responsive" alt="">
                                        <h5>Sau gần 2 năm thi công, sân bay Cam Ranh tiêu chuẩn 4 sao...</h5>
                                    </a>
                                </div>
                                <div class="col-sm-6">
                                    <a href="news-detail.html" class="box-small-news">
                                        <img src="/images/news/pic-4.jpg" class="img-responsive" alt="">
                                        <h5>Sau gần 2 năm thi công, sân bay Cam Ranh tiêu chuẩn 4 sao...</h5>
                                    </a>
                                </div>
                                <div class="col-sm-6">
                                    <a href="news-detail.html" class="box-small-news">
                                        <img src="/images/news/pic-4.jpg" class="img-responsive" alt="">
                                        <h5>Sau gần 2 năm thi công, sân bay Cam Ranh tiêu chuẩn 4 sao...</h5>
                                    </a>
                                </div>
                                <div class="col-sm-6">
                                    <a href="news-detail.html" class="box-small-news">
                                        <img src="/images/news/pic-4.jpg" class="img-responsive" alt="">
                                        <h5>Sau gần 2 năm thi công, sân bay Cam Ranh tiêu chuẩn 4 sao...</h5>
                                    </a>
                                </div>
                                <div class="col-sm-6">
                                    <a href="news-detail.html" class="box-small-news">
                                        <img src="/images/news/pic-4.jpg" class="img-responsive" alt="">
                                        <h5>Sau gần 2 năm thi công, sân bay Cam Ranh tiêu chuẩn 4 sao...</h5>
                                    </a>
                                </div>
                                <div class="col-sm-12">
                                    <div class="ed-pagination">
                                        <ul class="pagination setting-ul">
                                            <li class="disabled">
                                                <span>
                                                    <i class="fa fa-angle-left"></i>
                                                </span>
                                            </li>
                                            <li class="active">
                                                <span>1</span>
                                            </li>
                                            <li>
                                                <a href="#">2</a>
                                            </li>
                                            <li>
                                                <a href="#">3</a>
                                            </li>
                                            <li>
                                                <a href="#" rel="next">
                                                    <i class="fa fa-angle-right"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="titile-news">
                                <h4>Tin
                                    <strong>Central Real</strong>
                                </h4>
                            </div>

                            <a href="news-detail.html" class="box-222 wow fadeInDown" data-wow-delay="0.25s" data-wow-duration="1.5s">
                                <img src="/images/news/news-4.jpg" class="img-responsive" alt="">
                                <span class="overload"></span>
                                <h4>Giải pháp nào cho biệt thự biển triệu đô ở Việt Nam</h4>
                            </a>

                            <div class="row wow zoomIn" data-wow-delay="0.25s" data-wow-duration="1.5s">
                                <div class="col-sm-6">
                                    <a href="news-detail.html" class="box-small-news">
                                        <img src="/images/news/pic-4.jpg" class="img-responsive" alt="">
                                        <h5>Sau gần 2 năm thi công, sân bay Cam Ranh tiêu chuẩn 4 sao...</h5>
                                    </a>
                                </div>
                                <div class="col-sm-6">
                                    <a href="news-detail.html" class="box-small-news">
                                        <img src="/images/news/pic-4.jpg" class="img-responsive" alt="">
                                        <h5>Sau gần 2 năm thi công, sân bay Cam Ranh tiêu chuẩn 4 sao...</h5>
                                    </a>
                                </div>
                                <div class="col-sm-6">
                                    <a href="news-detail.html" class="box-small-news">
                                        <img src="/images/news/pic-4.jpg" class="img-responsive" alt="">
                                        <h5>Sau gần 2 năm thi công, sân bay Cam Ranh tiêu chuẩn 4 sao...</h5>
                                    </a>
                                </div>
                                <div class="col-sm-6">
                                    <a href="news-detail.html" class="box-small-news">
                                        <img src="/images/news/pic-4.jpg" class="img-responsive" alt="">
                                        <h5>Sau gần 2 năm thi công, sân bay Cam Ranh tiêu chuẩn 4 sao...</h5>
                                    </a>
                                </div>
                                <div class="col-sm-6">
                                    <a href="news-detail.html" class="box-small-news">
                                        <img src="/images/news/pic-4.jpg" class="img-responsive" alt="">
                                        <h5>Sau gần 2 năm thi công, sân bay Cam Ranh tiêu chuẩn 4 sao...</h5>
                                    </a>
                                </div>
                                <div class="col-sm-6">
                                    <a href="news-detail.html" class="box-small-news">
                                        <img src="/images/news/pic-4.jpg" class="img-responsive" alt="">
                                        <h5>Sau gần 2 năm thi công, sân bay Cam Ranh tiêu chuẩn 4 sao...</h5>
                                    </a>
                                </div>
                                <div class="col-sm-12">
                                    <div class="ed-pagination">
                                        <ul class="pagination setting-ul">
                                            <li class="disabled">
                                                <span>
                                                    <i class="fa fa-angle-left"></i>
                                                </span>
                                            </li>
                                            <li class="active">
                                                <span>1</span>
                                            </li>
                                            <li>
                                                <a href="#">2</a>
                                            </li>
                                            <li>
                                                <a href="#">3</a>
                                            </li>
                                            <li>
                                                <a href="#" rel="next">
                                                    <i class="fa fa-angle-right"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 wow fadeInRight" data-wow-delay="0.25s" data-wow-duration="1.5s">
                            <div class="titile-news">
                                <h4>Tin
                                    <strong>xem nhiều</strong>
                                </h4>
                            </div>

                            <a href="news-detail.html" class="news-aside">
                                <img src="/images/news/pic-3.jpg" alt="">
                                <h4>Lorem ipsum dolor sit sit amet</h4>
                                <ul>
                                    <li>
                                        <i class="fa fa-calendar"></i> 21/07/2018</li>
                                    <li>
                                        <i class="fa fa-user-o"></i> Admin</li>
                                </ul>
                            </a>

                            <a href="news-detail.html" class="news-aside">
                                <img src="/images/news/pic-3.jpg" alt="">
                                <h4>Lorem ipsum dolor sit sit amet</h4>
                                <ul>
                                    <li>
                                        <i class="fa fa-calendar"></i> 21/07/2018</li>
                                    <li>
                                        <i class="fa fa-user-o"></i> Admin</li>
                                </ul>
                            </a>

                            <a href="news-detail.html" class="news-aside">
                                <img src="/images/news/pic-3.jpg" alt="">
                                <h4>Lorem ipsum dolor sit sit amet</h4>
                                <ul>
                                    <li>
                                        <i class="fa fa-calendar"></i> 21/07/2018</li>
                                    <li>
                                        <i class="fa fa-user-o"></i> Admin</li>
                                </ul>
                            </a>

                            <a href="news-detail.html" class="news-aside">
                                <img src="/images/news/pic-3.jpg" alt="">
                                <h4>Lorem ipsum dolor sit sit amet</h4>
                                <ul>
                                    <li>
                                        <i class="fa fa-calendar"></i> 21/07/2018</li>
                                    <li>
                                        <i class="fa fa-user-o"></i> Admin</li>
                                </ul>
                            </a>

                            <a href="news-detail.html" class="news-aside">
                                <img src="/images/news/pic-3.jpg" alt="">
                                <h4>Lorem ipsum dolor sit sit amet</h4>
                                <ul>
                                    <li>
                                        <i class="fa fa-calendar"></i> 21/07/2018</li>
                                    <li>
                                        <i class="fa fa-user-o"></i> Admin</li>
                                </ul>
                            </a>

                            <a href="news-detail.html" class="news-aside">
                                <img src="/images/news/pic-3.jpg" alt="">
                                <h4>Lorem ipsum dolor sit sit amet</h4>
                                <ul>
                                    <li>
                                        <i class="fa fa-calendar"></i> 21/07/2018</li>
                                    <li>
                                        <i class="fa fa-user-o"></i> Admin</li>
                                </ul>
                            </a>

                            <a href="news-detail.html" class="news-aside">
                                <img src="/images/news/pic-3.jpg" alt="">
                                <h4>Lorem ipsum dolor sit sit amet</h4>
                                <ul>
                                    <li>
                                        <i class="fa fa-calendar"></i> 21/07/2018</li>
                                    <li>
                                        <i class="fa fa-user-o"></i> Admin</li>
                                </ul>
                            </a>

                        </div>
                    </div>
                </div>
            </div>

        </section>
</template>

<script>
import axios from "axios";
import {
    environment
} from "~/plugins/config.js";
export default {
  async asyncData() {
    let [news] = await Promise.all([axios.get(environment.apiUrl + "news")]);
    return {
      newsData: news.data.data
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
  methods: {
    async getNewsData(page) {
      this.$nuxt.$loading.start();
      let { data } = await axios.get(
        environment.apiUrl + "news?page=" + page
      );
      this.newsData = data.data;
      this.$nuxt.$loading.finish();
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
