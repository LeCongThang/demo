<template>
  <section class="event-home">
  <div class="container">
    <div class="row wow" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
      <div class="col-md-6 col-md-offset-3">
        <div class="title-page text-center">
          <h2>Sự kiện
            <strong>nổi bật</strong>
          </h2>
          <p>Hơn 50 dự án Central Real đã và đang phân phối bởi các nhà đầu tư uy tín
            <br> chất lượng hàng đầu Việt Nam.</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 pd-right-0" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500" data-aos-easing="ease-in-out" style="margin-top: 2px">
        <div class="register-event">
          <h4>Đăng ký
            <strong>sự kiện</strong>
          </h4>
          <form>
            <div class="form-group">
              <select class="form-control" id="sel1">
                <option>Sự kiện</option>
                <option>Bán căn hộ Vinhome</option>
                <option>Đấu giá khu chung cư</option>
              </select>
            </div>
            <div class="form-group">
              <input type="text" placeholder="Họ và tên" class="form-control" id="name">
            </div>
            <div class="form-group">
              <input type="email" placeholder="Email" class="form-control" id="email">
            </div>
            <div class="form-group">
              <input type="text" placeholder="Số điện thoại" class="form-control" id="name">
            </div>
            <div class="btn-page text-center">
              <a href="#">Gửi</a>
            </div>

          </form>
        </div>
      </div>
      <div class="col-md-8 pd-left-0" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500" data-aos-easing="ease-in-out">
        <section class="regular2 slider">
          <div class="items-2">
            <div class="pic-items2">
              <img src="images/event/pic-1.jpg" class="img-responsive" alt="">
            </div>
          </div>
          <div class="items-2">
            <div class="pic-items2">
              <img src="images/event/pic-1.jpg" class="img-responsive" alt="">
            </div>
          </div>
          <div class="items-2">
            <div class="pic-items2">
              <img src="images/event/pic-1.jpg" class="img-responsive" alt="">
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
export default {
    props: ["events", "lang"]
};
</script>
