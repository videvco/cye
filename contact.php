<!DOCTYPE html>
<html>
<head>
	<?php
		require 'header.php';
	?>
</head>
<body>
	<?php
		require 'navbar.php';
	?>

<!-- What's left?
 - Make sure the shandis is responsive add bootrap
 - Add the php page that the form has to submit to -->


	<div id="in_touch_info" class="fluid-container">
			<div class="row" style="width: 100vw; margin: 0px;">
				<div class="col-12 col-lg-6 ml-0">
					<div class="col-12 mt-3 ml-0">
							<h2 class="text-wrap text-center" style="text-decoration: underline;">Get in touch</h2>
					</div>
					<div class="col-12 mt-3 ml-0">
						<p class="text-wrap text-center" style="padding:0em 10em;">
							Want to ask questions? Send us a message and we would love to hear what you have to say.
						</p>
					</div>
					 <div class="card ml-0">
						<div class="card-body">
							<form action="/that_not_my_job.php" method="POST">
								<fieldset>
									<div class="col-12">
										<div class="row m-2">
											<div class="col-2">
												<label for="name">Name:</label>
											</div>
											<div class="col-8">
												<input type="text" id="name" style="text-align:center;" class="form-control" placeholder="Name" name="name"/>
											</div>
										</div>
										<div class="row m-2">
											<div class="col-2">
												<label for="surname">Surname:</label>
											</div>
											<div class="col-8">
												<input type="text" id="surname" style="text-align:center;" class="form-control" placeholder="Surname" name="surname"/>
											</div>
										</div>
										<div class="row m-2">
												<div class="col-2">
													<label for="email">Email:</label>
												</div>
												<div class="col-8">
													<input type="text" id="email" style="text-align:center;" class="form-control" placeholder="Email" name="email"/>
											</div>
										</div>
										<div class="row m-2">
												<div class="col-2">
												<label for="cell">Cell:</label>
											</div>
											<div class="col-8">
												<input type="text" id="cell" style="text-align:center;" class="form-control" placeholder="Cell" name="cell"/>
											</div>
										</div>
										<div class="row m-2">
												<div class="col-2">
													<label for="message">Message:</label>
											</div>
											<div class="col-8">
												<textarea id="message" class="form-control" style="text-align:center;" placeholder="Message" name="message"></textarea>
											</div>
										</div>
										<div class="row m-2">
											<div class="col-12">
												<button class="btn btn-dark float-right" type="submit" style="text-align:center;margin-right:4.5em;">Submit</button>
											</div>
										</div>
									</div>
								</fieldset>
							</form>
						</div>
					</div>
				</div>

							<div class="col-12 col-lg-6">
								<div class="col-12 mt-3 ml-0">
										<h2 class="text-wrap text-center" style="text-decoration: underline;">FAQ's</h2>
								</div>
								<div class="col-12 mt-3 ml-0">
									<p class="text-wrap text-center" style="padding:0em 5em;">
										Frequently asked questions by people around the world. You may ask the same question.
									</p>
								</div>
								<div class="col-12 mt-3 ml-2">
										<ul class="list-group">
											<li class="list-group-item">How do I volunteer?</li>
											<li class="list-group-item">How do I donate?</li>
										</ul>
								</div>
							</div>
							<!-- <div class="container fixed-bottom mb-5">-->
								<div class="col-12 border border-dark mt-5">
									<div class="row">
									<div class="col-6 col-lg-4 border border-dark">
										<div class="row">
											<div class="col-lg-2 col-2" style="padding:.0em;">
												<i style="font-size:2.0em;margin:.5em;" class="fas fa-map-marked"></i>
											</div>
											<div class="col-lg-10 col-10 text-left" style="padding-top:1.0em;">
												<p>Lynnwood Rd, Hatfield, Pretoria<p>
											</div>
										</div>
									</div>
									<div class="col-6 col-lg-4 border border-dark">
										<div class="row">
											<div class="col-lg-2 col-2" style="padding:.0em;">
												<i style="font-size:2.0em;padding:.5em;" class="fas fa-phone"></i>
											</div>
											<div class="col-lg-10 col-10 text-left" style="padding-top:1.0em;">
												<p>021 345 6789<p>
											</div>
										</div>
									</div>
									<div class="col-lg-4 col-12 border border-dark">
										<div class="row">
											<div class="col-lg-6 col-4 d-flex justify-content-sm-center" style="padding:.0em;">
												<a href="https://twitter.com/cosmoyouthemp"><i style="font-size:2em;margin:.45em;" class="fab fa-twitter"></i></a>
												<a href="https://www.facebook.com/cosmoyouthempowerment/"><i style="font-size:2em;margin:.45em;" class="fab fa-facebook-f"></i></a>
												<a href="https://www.instagram.com/cosmoyouthempowerment/"><i style="font-size:2em;margin:.45em;" class="fab fa-instagram"></i></a>
											</div>
											<div class="col-lg-4 col-8" style="padding-top:1.0em;">
												<p>Social Media<p>
											</div>
										</div>
									</div>
							</div>
						</div>
		</div>

	</div>

</body>
</html>
