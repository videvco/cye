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


	<div id="in_touch_info" class="container">
			<div class="row">
				<div class="col-6 col-md-6">
					<div class="col-12 mt-3 ml-5">
							<h2 class="text-wrap text-center" style="width:13em;text-decoration: underline;">Get in touch</h2>
					</div>
					<div class="col-12 mt-3 ml-5">
						<p class="text-wrap text-center" style="width:25em;">
							Want to ask questions? Send us a message and we would love to hear what you have to say.
						</p>
					</div>
					 <div class="card">
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

				<div class="col-6 col-md-6">
					<div class="col-12 mt-3 ml-5">
							<h2 class="text-wrap text-center" style="width:13em;text-decoration: underline;">FAQ's</h2>
					</div>
					<div class="col-12 mt-3 ml-5">
						<p class="text-wrap text-center" style="width:25em;">
							Frequently asked questions by people around the world. You may ask the same question.
						</p>
					</div>
					<div class="col-12 mt-3 ml-5">
							<ul class="list-group">
								<li class="list-group-item">How do I volunteer?</li>
								<li class="list-group-item">How do I donate?</li>
							</ul>
					</div>
				</div>
		</div>
	</div>

</body>
</html>
