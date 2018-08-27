<template>
<section class="wrapper">

    <div class="recuitment-detail-page">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <img src="/images/recruitment/pic-5.jpg" class="img-responsive">
                </div>
            </div>

            <div class="row mg-top-bottom">
                <div class="col-md-3">
                    <ul class="nav nav-tabs">
                        <li class="active">
                            <a data-toggle="tab" href="#home">Đào tạo định hướng
                                        <i class="fa fa-angle-right"></i>
                                    </a>
                        </li>
                        <li>
                            <a data-toggle="tab" href="#menu1">Chế độ đãi ngộ
                                        <i class="fa fa-angle-right"></i>
                                    </a>
                        </li>
                        <li>
                            <a data-toggle="tab" href="#menu2">Quá trình thăng tiến
                                        <i class="fa fa-angle-right"></i>
                                    </a>
                        </li>
                        <li>
                            <a data-toggle="tab" href="#menu3">Dành cho sinh viên
                                        <i class="fa fa-angle-right"></i>
                                    </a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-9">
                    <div class="tab-content">
                        <div id="home" class="tab-pane fade in active">
                            <p>Trong gần 5 năm hoạt động, Ban lãnh đạo Central Real luôn coi nguồn nhân lực là yếu tố quan trọng cho sự phát triển của công ty. Chúng tôi đã sử dụng nhiều nguồn lực khác nhau để xây dựng một môi trường làm việc trẻ, năng động
                                nhằm tối ưu hóa sự sáng tạo của nhân viên. Central Real đã đầu tư trung tâm đào tạo với các thiết bị tiêu chuẩn quốc tế tại văn phòng Thành Phố Hồ Chí Minh. Trung tâm đào tạo có sức chứa từ 60 đến 100 người với đầy đủ tiện
                                nghi.</p>

                            <p>Chúng tôi tiến hành ký kết hợp đồng hợp tác đào tạo với các trung tâm đào tạo và tổ chức giáo dục nổi tiếng và có nhiều năm kinh nghiệm để hỗ trợ quá trình phát triển nguồn nhân lực. Ngoài ra, chúng tôi cũng có các chuyên gia
                                trong lĩnh BĐS thường xuyên phối hợp chặt chẽ với các giảng viên nội bộ để xây dựng và thực hiện các chương trình đào tạo thống nhất.</p>

                            <p>Điểm mạnh của việc phát triển nguồn nhân lực là tạo ra sự khác biệt trên thị trường và những lợi ích phi vật chất phù hợp cho nhân viên.</p>

                            <p>Tạo ra môi trường học tập và đào tạo tốt nhất, nơi mà mỗi nhân viên có thể phát huy tối đa năng lực và sự nhiệt huyết của mình..</p>
                        </div>
                        <div id="menu1" class="tab-pane fade">
                            <p>Không có dữ liệu.</p>
                        </div>
                        <div id="menu2" class="tab-pane fade">
                            <p>Không có dữ liệu.</p>
                        </div>
                        <div id="menu3" class="tab-pane fade">
                            <p>Không có dữ liệu.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>
</template>
<script>
export default {
    mounted() {
        var url = "/recruitment";
        $("ul.nav > li").removeClass("active");
        $("a[href=\"" + url + "\"]")
            .parent()
            .addClass("active");
    }
}
</script>
