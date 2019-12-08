<!DOCTYPE html>
<html>
<head>
	<?php
		require 'header.php';
	?>
</head>
<body>
	<?php
		session_start();
		require 'navbar.php';

		if(isset($_SESSION['mail_status'])){
			echo "<div class='popup-message'><span>$_SESSION[mail_status]</span><button id='confirm'>OK</button></div>";
			echo "<style>#in_touch_info{opacity: .5;}</style>";
		}

		session_unset();
		session_destroy();
	?>
	<div id="in_touch_info" class="fluid-container">
		<div class="row">
			<div class="col-12 col-lg-6 mx-0">
				<div class="col-12 mt-3 ml-0">
					<h2 class="text-wrap text-center">Get in touch</h2>
				</div>
				<div class="col-12 mt-3 ml-0">
					<p class="text-wrap text-center">
						Want to ask questions? Send us a message and we would love to hear what you have to say.
					</p>
				</div>
				<div class="card ml-0">
					<div class="card-body">
						<form action="message-handler.php" method="POST">
							<fieldset>
								<div class="col-12">
									<div class="row m-2">
										<div class="col-12 col-md-2">
											<label for="name">Name:</label>
										</div>
										<div class="col-12 col-md-8">
											<input type="text" id="name" class="form-control con-input" placeholder="Name" name="name"/>
										</div>
									</div>
									<div class="row m-2">
										<div class="col-12 col-md-2">
											<label for="surname">Surname:</label>
										</div>
										<div class="col-12 col-md-8">
											<input type="text" id="surname" class="form-control con-input" placeholder="Surname" name="surname"/>
										</div>
									</div>
									<div class="row m-2">
										<div class="col-12 col-md-2">
											<label for="email">Email:</label>
										</div>
										<div class="col-12 col-md-8">
											<input type="text" id="email" class="form-control con-input" placeholder="Email" name="email"/>
										</div>
									</div>
									<div class="row m-2">
										<div class="col-12 col-md-2">
											<label for="cell">Cell:</label>
										</div>
										<div class="col-12 col-md-8">
											<input type="text" id="cell" class="form-control con-input" placeholder="Cell" name="cell"/>
										</div>
									</div>
									<div class="row m-2">
										<div class="col-12 col-md-2">
											<label for="message">Message:</label>
										</div>
										<div class="col-12 col-md-8">
											<textarea id="message" class="form-control con-input" placeholder="Message" name="message"></textarea>
										</div>
									</div>
									<div class="row m-2">
										<div class="col-12">
											<button class="btn btn-dark float-right con-input" id="btnSubmit"type="submit">Submit</button>
										</div>
									</div>
								</div>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
			<div class="col-12 col-lg-6 mx-0">
				<div class="col-12 mt-3 ml-0">
					<h2 class="text-wrap text-center">FAQ's</h2>
				</div>
				<div class="col-12 mt-3 ml-0">
					<p class="text-wrap text-center">
						Frequently asked questions by people around the world. You may ask the same question.
					</p>
				</div>
				<div class="col-12 mt-3 ml-2">
					<ul class="list-group faq-list">
					</ul>
				</div>
			</div>
			<div class="col-12  mt-5">
				<div class="row mt-5 border border-dark">
					<div class="col-12 col-md-6 col-lg-4 border border-dark">
						<div class="row">
							<div class="col-lg-2 col-2">
								<i class="fas fa-map-marked"></i>
							</div>
							<div class="col-lg-10 col-10 text-left">
								<p>Lynnwood Rd, Hatfield, Pretoria<p>
							</div>
						</div>
					</div>
					<div class="col-12 col-md-6 col-lg-4 border border-dark">
						<div class="row">
							<div class="col-lg-2 col-2">
								<!-- <i class="fas fa-phone"></i> -->
								<i class="fas fa-envelope" aria-hidden="true"></i>
							</div>
							<div class="col-lg-10 col-10 text-left">
								<p>info@cyesa.co.za<p>
							</div>
						</div>
					</div>
					<div class="col-12 col-lg-4 border border-dark">
						<div class="row">
							<div class="col-lg-6 col-4 d-flex justify-content-sm-center">
								<a href="https://twitter.com/cosmoyouthemp" target="_blank"><i class="fab fa-twitter"></i></a>
								<a href="https://www.facebook.com/cosmoyouthempowerment/" target="_blank"><i class="fab fa-facebook-f"></i></a>
								<a href="https://www.instagram.com/cosmoyouthempowerment/" target="_blank"><i class="fab fa-instagram"></i></a>
							</div>
							<div class="col-lg-4 col-8">
								<p>Social Media<p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<?php
		require 'footer.php';
	?>
</body>
</html>
