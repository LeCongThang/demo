<template>
    <div class="modal fade" id="admodal" role="dialog" tabindex="-1">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-4 event-form-modal">
							<form class="adform">
								<div class="form-group">
									<select class="form-control" id="sel1">
										<option>Sự kiện</option>
										<option>Bán căn hộ Vinhome</option>
										<option>Đấu giá khu chung cư</option>
									</select>
								</div>
								<div class="form-group">
									<input type="text" placeholder="Họ và tên" class="form-control" required id="name">
								</div>
								<div class="form-group">
										<input type="text" placeholder="Số điện thoại" class="form-control" required id="phone">
									</div>
								<div class="form-group">
									<input type="email" placeholder="Email" class="form-control" id="email">
								</div>
								
								<div class="btn-page text-center">
									<a href="#">Gửi</a>
								</div>

							</form>
						</div>
						<div class="col-md-8 event-slider-modal">
							<section class="regular6 slider">
								<div class="items-2">
									<div class="pic-items2">
										<img src="" class="img-responsive" alt="">
									</div>
								</div>
								<div class="items-2">
									<div class="pic-items2">
										<img src="" class="img-responsive" alt="">
									</div>
								</div>
								<div class="items-2">
									<div class="pic-items2">
										<img src="" class="img-responsive" alt="">
									</div>
								</div>
							</section>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>
