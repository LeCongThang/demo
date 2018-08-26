<template>
<!-- <div class="container">
    <div class="row">
        <h2>{{project.title_vi}}</h2>
        <img :src="$store.state.system_config.directory.project+'/'+project.image" :alt="project.title_vi" class="img-responsive">
        <div v-html="project.investor_vi"></div>
        <div v-html="project.location_vi"></div>
        <div v-html="project.type_of_project_vi"></div>
        <div v-for="image in project.project_images" :key="image.id">
            <div class="col-md-4">
                <a class="width100" data-fancybox="gallery" :href="$store.state.system_config.directory.project+'/'+image.image">
                    <div class="grid-gallery" v-bind:style="{ background: 'url('+$store.state.system_config.directory.project+'/'+image.image+ ') no-repeat center; background-size: cover'}">
                    </div>
                </a>
            </div>
        </div>
    </div>
</div> -->
<section class="wrapper">

    <div class="banner-project-dt">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 padding-0">
                    <img :src="$store.state.system_config.directory.project+'/'+project.image" class="img-responsive" width="100% !important; height:auto" :alt="project.title_vi">
                </div>
            </div>
        </div>
    </div>

    <div class="box-pj-dt">
        <div class="container">
            <div class="box-pj-0 row">
                <div class="col-sm-6 padding-0 wow animated fadeInLeft">
                    <img src="/images/project/pic-11.jpg" class="img-responsive">
                </div>
                <div class="col-sm-6 padding-0 wow animated fadeInRight">
                    <ul class="box-pj-1">
                        <li>
                            <h3>Giới thiệu</h3>
                        </li>
                        <li>
                            <strong>Tên dự án:</strong> Khu du lịch VŨNG TÀU REGENCY</li>
                        <li>
                            <strong>Địa điểm:</strong> Đường 3/2, P.10, Tp.Vũng Tàu, tỉnh Bà Rịa - Vũng Tàu.</li>
                        <li>
                            <strong>Chủ đầu tư:</strong> Công ty TNHH Allgreen Vượng Thành – Trùng Dương</li>
                        <li>
                            <strong>Phát triển dự án:</strong> CentralReal </li>
                        <li>
                            <strong>Quy mô dự án: 23ha:</strong>
                        </li>
                        <li>+ 192 biệt thự Villa Regency</li>
                        <li>+ 4 block căn hộ Condotel Regency</li>
                        <li>+ Khách sạn 5 sao Regency</li>
                        <li>
                            <strong>Mật độ xây dựng:</strong> 23%</li>
                        <li>
                            <strong>Ngân hàng:</strong> Agribank</li>
                    </ul>
                </div>
            </div>

            <div class="box-pj-0 row">
                <div class="col-sm-6 padding-0 visible-xs-block wow animated fadeInRight">
                    <img src="/images/project/pic-12.jpg" class="img-responsive">
                </div>
                <div class="col-sm-6 padding-0  wow animated fadeInLeft">
                    <ul class="box-pj-1">
                        <li>
                            <h3>Vị trí</h3>
                        </li>
                        <li>Vung Tau Regency sở hữu vị trí đắc địa với gần 500m mặt tiền biển, ngay trục đường 3/2 Thành phố Vũng Tàu, kết nối về TPHCM qua cao tốc Long Thành Dầu Giây.</li>

                        <li>• Cao tốc TPHCM - Long Thành - Dầu Giây: 70 phút</li>
                        <li>• Sân bay quốc tế Long Thành : 60 phút</li>
                        <li>• Cao tốc Bến Lức – Long Thành: 45 phút</li>
                        <li>• Quốc lộ 51: 5 phút</li>
                        <li>• Long Hải: 15 phút</li>
                        <li>• Trung tâm TP Vũng Tàu: 10 phút</li>
                        <li>• Bến du thuyền Marina: 10 phút</li>
                        <li>• Khu du lịch Hồ Mây: 10 phút</li>
                    </ul>
                </div>
                <div class="col-sm-6 padding-0 hidden-xs wow animated fadeInRight">
                    <img src="/images/project/pic-12.jpg" class="img-responsive">
                </div>
            </div>

            <div class="box-pj-0 row">
                <div class="col-sm-6 padding-0 wow animated fadeInLeft">
                    <img src="/images/project/pic-13.jpg" class="img-responsive">
                </div>
                <div class="col-sm-6 padding-0 wow animated fadeInRight">
                    <ul class="box-pj-1">
                        <li>
                            <h3>Tiện ích</h3>
                        </li>
                        <li>Vung Tau Regency là sự kết hợp hài hòa vẻ đẹp Phương Đông và Phương Tây. Hệ thống tiện ích được bố trí hợp lý dung hòa văn hóa Đông Tây, vừa đảm bảo không gian đẳng cấp, tĩnh tại với thiên nhiên, vừa đáp ứng các hoạt động vui chơi
                            giải trí mới lạ.</li>
                    </ul>
                </div>
            </div>

            <div class="box-pj-0 row">
                <div class="col-sm-6 padding-0 visible-xs-block wow animated fadeInRight ">
                    <img src="/images/project/pic-14.jpg" class="img-responsive">
                </div>
                <div class="col-sm-6 padding-0  wow animated fadeInLeft">
                    <ul class="box-pj-1">
                        <li>
                            <h3>Mặt bằng</h3>
                        </li>
                        <li>Lấy cảm hứng từ vùng đất Shangri-la -“thiên đường hạ giới” kết hợp Regency – thủ phủ nghỉ dưỡng riêng tư và đẳng cấp, Vung Tau Regency hình thành mang đến một thiên đường nghỉ dưỡng đẳng cấp, tĩnh tại với thiên nhiên dành cho giới
                            thượng lưu với ý nghĩa tôn tạo những giá trị bền vững, hạnh phúc viên mãn cùng với năm tháng.</li>

                        <li>Với công nghệ phủ xanh Singapore cùng đường nét thiết kế thông minh, khoa học 100% biệt thự view biển, đón gió tự nhiên, mỗi biệt thự là một mầm sống bình yên giữa thiên nhiên thuần khiết.
                        </li>

                        <li>Văn hóa kiến trúc đương đại điển hình Châu Âu kết hợp sự tinh tế thuần khiết của Phương Đông tạo nên những quảng trường, đại lộ tiêu biểu cho khuynh hướng kiến trúc hiện đại sắc sảo trong từng đường nét thiết kế.</li>
                    </ul>
                </div>
                <div class="col-sm-6 padding-0 hidden-xs wow animated fadeInRight ">
                    <img src="/images/project/pic-14.jpg" class="img-responsive">
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 share-likes">
                <ul>
                    <li>
                        <a href="#">
                                    <i class="fa fa-facebook"></i> Like</a>
                    </li>
                    <li>
                        <a href="#">
                                    <i class="fa fa-twitter"></i> Twitter</a>
                    </li>
                    <li>
                        <a href="#">
                                    <i class="fa fa-google-plus"></i> +1</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="event-highlight-page">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <div class="title-page text-center">
                        <h2>Dự án
                            <strong>nổi bật</strong>
                        </h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4 wow animated fadeInUp" data-wow-delay="0.25s">
                    <div class="box-event-page">
                        <a href="event-detail.html">
                                    <img src="/images/event/pic-3.jpg" class="img-responsive" alt="">
                                </a>
                        <div class="txt-box-event-page">
                            <a href="event-detail.html">
                                <h4>Giới Thiệu Sản Phẩm Coco Wonderland Resort</h4>
                            </a>
                            <p>Sáng nay ngày 14/10/2017 buổi lễ “Giới thiệu sản phẩm Coco Wonderland Resort” được tổ chức tại tầng 19 tòa nhà Pearl Plaza, số 561 Điện Biên Phủ, P.25, Q. Bình Thạnh, TpHcm.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 wow animated fadeInUp" data-wow-delay="0.5s">
                    <div class="box-event-page">
                        <a href="event-detail.html">
                                    <img src="/images/event/pic-4.jpg" class="img-responsive" alt="">
                                </a>
                        <div class="txt-box-event-page">
                            <a href="event-detail.html">
                                <h4>Giới Thiệu Sản Phẩm Coco Wonderland Resort</h4>
                            </a>
                            <p>Sáng nay ngày 14/10/2017 buổi lễ “Giới thiệu sản phẩm Coco Wonderland Resort” được tổ chức tại tầng 19 tòa nhà Pearl Plaza, số 561 Điện Biên Phủ, P.25, Q. Bình Thạnh, TpHcm.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 wow animated fadeInUp" data-wow-delay="0.75s">
                    <div class="box-event-page">
                        <a href="event-detail.html">
                                    <img src="/images/event/pic-5.jpg" class="img-responsive" alt="">
                                </a>
                        <div class="txt-box-event-page">
                            <a href="event-detail.html">
                                <h4>Giới Thiệu Sản Phẩm Coco Wonderland Resort</h4>
                            </a>
                            <p>Sáng nay ngày 14/10/2017 buổi lễ “Giới thiệu sản phẩm Coco Wonderland Resort” được tổ chức tại tầng 19 tòa nhà Pearl Plaza, số 561 Điện Biên Phủ, P.25, Q. Bình Thạnh, TpHcm.
                            </p>
                        </div>
                    </div>
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
    async asyncData({
        route
    }) {
        let {
            data
        } = await axios.get(environment.apiUrl + "project/" + route.params.id);
        return {
            project: data.data
        };
    },
    head() {
        return {
            title: this.project.title_vi,
            meta: [{
                    hid: "description",
                    name: "description",
                    content: this.project.des_short_vi
                },
                {
                    hid: "og:description",
                    name: "og:description",
                    content: this.project.des_short_vi
                },
                {
                    hid: "og:image",
                    name: "og:image",
                    content: this.$store.state.system_config.directory.project + '/' + this.project.image_thumbnail
                }
            ]
        };
    }
};
</script>

<style>
.container>.row>img {
    width: 100% !important
}
</style>
