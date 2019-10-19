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
	<div class="fluid-container">
		<div class = "homeimage">
			<div class = "hometext-container text-right" class = "col-1">
				<p class = "hometext text-center font-weight-bold name">Cosmo Youth Empowerment</p>
				<p class = "hometext text-center mission">A missional non profit organisation that aims to empower youth across the world</p>
			</div>
		</div>
		<div class="row" id="homeInfo">
			<div class="col-12 col-md-6">
				<h4>Demarcation of youth categories we serve</h4>
				<div id="demarcation">
					<table class="table">
						<thead>
							<tr>
								<th scope="col">Category</th>
								<th scope="col">Age</th>
							</tr>
						</thead>
						<tbody>
						</tbody>
					</table>
				</div>
			</div>
			<div class="col-12 col-md-6">
				<h4>Organisational priorities</h4>
				<div id="org-pri">
					<ul>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<?php
		require 'footer.php';
	?>
</body>
</html>