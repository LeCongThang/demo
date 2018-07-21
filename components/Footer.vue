<template>
    <footer>
    <div class="top-footer">
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="fanpage">
                        <!-- <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCentralReal.vn%2F&tabs=timeline&width=340&height=200&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=175588756336328" width="100%" height="200" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe> -->
                    </div>
                </div>
                <div class="col-sm-4">
                    <ul class="logo-ft">
                        <li><img src="/images/logo/logo-footer.png"></li>
                        <li>CÔNG TY ĐẦU TƯ PHÁT TRIỂN CENTRAL REAL</li>
                        <li><i class="fa fa-map-marker"></i> 68 Đường D2, P.25, Q. Bình Thạnh, TP. HCM</li>
                        <li><i class="fa fa-phone"></i> 028 7307 5555 - 094 915 2424</li>
                        <li><i class="fa fa-envelope"></i> {{$store.state.system_config.email}} <i class="fa fa-globe"></i> www.centralreal.vn</li>
                    </ul>

                    <div class="share-social">
                        <h4>Liên kết </h4>
                        <div id="share"></div>

                    </div>
                </div>
                <div class="col-sm-4">
                    <ul class="info-company-footer">
                        <h4>Thông tin công ty</h4>
                        <li><a href="about.php">Về Central Real</a></li>
                        <li><a href="project.php">Dự án phân phối</a></li>
                        <li><a href="news.php">Tin tức nổi bật</a></li>
                        <li><a href="event.php">Sự kiện tiêu biểu</a></li>
                        <li><a href="news-post.php">Bài viết mới nhất</a></li>
                        <li><a href="recruitment.php">Tuyển dụng</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="bottom-footer text-center">
        <p>Copyright © 2018 - Central Real</p>
    </div>
    <script src="/js/jquery.js"></script>
    </footer>
</template>
