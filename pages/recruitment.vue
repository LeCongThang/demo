<template>
    <section class="wrapper">

            <div class="recuitment-page">
                <div class="recuitment-banner">
                    <h4>Tuyển dụng</h4>
                </div>
            </div>

            <div class="recuitment-page-2">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 wow animated fadeInUp">
                            <div class="title-page text-center">
                                <h2>Tại sao chọn
                                    <strong>Central real</strong>
                                </h2>
                                <p>Chúng tôi mong muốn mang đến cơ hội phát triển nghề nghiệp cho bạn trong lĩnh vực kinh doanh
                                    bất động sản. Sự lựa chọn của bạn sẽ là cơ hội cho chúng tôi được học hỏi, chia sẽ và
                                    phát triển cùng bạn.</p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-3 col-sm-6 wow animated fadeInUp" data-wow-delay="0.25s">
                            <div class="box-recuitment text-center">
                                <a href="#" class="pic-box-recuitment">
                                    <img src="images/recruitment/dao-tao-dinh-huong-1-250x250.jpg" class="img-responsive">
                                </a>
                                <div class="txt-box-recuitment">
                                    <a href="#">
                                        <h4>Đào tạo định hướng</h4>
                                    </a>
                                    <p style="text-align: justify;">Trong gần 5 năm hoạt động, Ban lãnh đạo Central Real luôn coi nguồn nhân lực là yếu tố quan trọng cho sự phát triển của công ty.</p>
                                    <div class="btn-page">
                                        <a href="#">Xem thêm</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 wow animated fadeInUp" data-wow-delay="0.5s">
                            <div class="box-recuitment text-center">
                                <a href="#" class="pic-box-recuitment">
                                    <img src="images/recruitment/che-do-dai-ngo-1-250x250.jpg" class="img-responsive">
                                </a>
                                <div class="txt-box-recuitment">
                                    <a href="#">
                                        <h4>Chế độ đãi ngộ</h4>
                                    </a>
                                    <p style="text-align: justify;">Central Real, nơi luôn chọn yếu tố con người làm trọng tâm và là kim chỉ nam cho chiến lược tạo lợi thế cạnh tranh với những định hướng cụ thể</p>
                                    <div class="btn-page">
                                        <a href="#">Xem thêm</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 wow animated fadeInUp" data-wow-delay="0.75s">
                            <div class="box-recuitment text-center">
                                <a href="#" class="pic-box-recuitment">
                                    <img src="images/recruitment/qua-trinh-thanh-tien-1-250x250.jpg" class="img-responsive">
                                </a>
                                <div class="txt-box-recuitment">
                                    <a href="#">
                                        <h4>Quy trình thăng tiến</h4>
                                    </a>
                                    <p style="text-align: justify;">Hệ thống khai thác khách hàng – Customer Development System (CDS). Chuyên viên tư vấn và chăm sóc khách hàng – Consultant Specialist (CS)</p>
                                    <div class="btn-page">
                                        <a href="#">Xem thêm</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 wow animated fadeInUp" data-wow-delay="1s">
                            <div class="box-recuitment text-center">
                                <a href="#" class="pic-box-recuitment">
                                    <img src="images/recruitment/danh-cho-sinh-vien-1-250x250.jpg" class="img-responsive">
                                </a>
                                <div class="txt-box-recuitment">
                                    <a href="#">
                                        <h4>Dành cho sinh viên</h4>
                                    </a>
                                    <p style="text-align: justify;">Tại sao bạn nên chọn chúng tôi? Bạn là sinh viên năm cuối đang tìm kiếm cơ hội được thực tập tại công ty hàng đầu trong lĩnh vực phân phối BĐS?</p>
                                    <div class="btn-page">
                                        <a href="#">Xem thêm</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="recuitment-page-3">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-md-offset-3">
                            <div class="title-page text-center">
                                <h2>Thông tin
                                    <strong>tuyển dụng</strong>
                                </h2>
                            </div>

                        </div>
                        <div class="col-md-2 col-md-offset-1 pull-right">
                            <div class="dropdown" style="padding-top: 15px;float: right!important;">
                                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="true">
                                    Vị trí tuyển dụng
                                    <span class="caret"></span>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                    <li>
                                        <a href="#">Sale</a>
                                    </li>
                                    <li role="separator" class="divider"></li>
                                    <li>
                                        <a href="#">Thư ký</a>
                                    </li>
                                    <li role="separator" class="divider"></li>
                                    <li>
                                        <a href="#">Nhân viên</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-12">
                            <ul class="ed-recuitment-1" v-for="r in recruitmentData.recruitment" :key="r.id">
                                <li>
                                    <nuxt-link :to="`/recruitment-detail/${r.id}/${r.slug}`">
                                        <h4 v-if="lang" v-html="r.title_vi"></h4>
                                        <h4 v-else v-html="r.title_en"></h4>
                                    </nuxt-link>
                                </li>
                                <li>
                                    <p>Nhân Viên
                                        <span>Hạn nộp {{r.date}}</span>
                                    </p>
                                </li>
                                <li>
                                    <div class="btn-page">
                                        <nuxt-link :to="`/recruitment-detail/${r.id}/${r.slug}`">Xem chi tiết</nuxt-link>
                                    </div>
                                </li>
                            </ul>
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
  async asyncData() {
    let [recruitment] = await Promise.all([axios.get(environment.apiUrl + "recruitment")]);
    return {
      recruitmentData: recruitment.data.data
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
    var url = $(location).attr("pathname");
    $("ul.nav > li").removeClass("active");
    $('a[href="' + url + '"]')
      .parent()
      .addClass("active");
  }
};
</script>
