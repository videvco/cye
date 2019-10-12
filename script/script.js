$(() => {
	populateInfo();
	getURL();
	addObjectives();
});

let populateInfo = () => {
	getInfo("home.json").then(data => {
		data.map(el => {
			if(el.demarcation){
				el.demarcation.map(e => {
					$('#demarcation tbody')
					.append(
						$('<tr>')
						.append(
							$('<td>')
							.html(e.category),
							$('<td>')
							.html(e.age)
						)
					);
				});
			}
			else if(el.priorities){
				el.priorities.map(e => {
					$('#org-pri ul')
					.append(
						$('<li>')
						.html(e.priority)
					);
				});
			}
		});

	});
}

let getInfo = URL => {
	return new Promise((resolve) =>{
		$.getJSON(URL, data =>{
			resolve(data);
		});
	});
}

let getURL = () => {
	if(window.location.pathname=="/cye/programs.php"){
		$('.collapse li.active').removeClass('active');
		$('.collapse li:nth-child(2)').addClass('active');
	}
	else if(window.location.pathname=="/cye/about.php"){
		$('.collapse li.active').removeClass('active');
		$('.collapse li:nth-child(3)').addClass('active');
	}
	else if(window.location.pathname=="/cye/contact.php"){
		$('.collapse li.active').removeClass('active');
		$('.collapse li:nth-child(4)').addClass('active');
	}
	else{
		$('.collapse li.active').removeClass('active');
		$('.collapse li:nth-child(1)').addClass('active');
	}
}

let createObjective = (text) => {

	// <div class="col-12 col-md-6">
	// 	<div class="row mx-0">
	// 		<div class="bullet-point col-1 pr-0">
	// 			<span>...</span>
	// 		</div>
	// 		<p class="statement-text col pl-0">To work together with community stakeholders and Other sectors of society through active relationships to improve thewelfare and livelihoods of young people in communities</p>
	// 	</div>
	// </div>
	
	let statement_tree = $('<div></div>')
						 .addClass('col-12 col-md-6')
						 .append(
						 	$('<div></div>')
						 	.addClass('row mx-0')
						 	.append(
						 		$('<div></div>')
						 		.addClass()
						 		.append(
						 			$('<div></div>')
						 			.addClass('bullet-point col-1 pr-0')
						 			.append(
						 				$('<span></span>')
						 				.html('...')
						 			)
						 		),
						 		$('<p></p>')
						 		.addClass('statement-text col pl-0')
				 				.append(text)
						 	)
						 );

	return statement_tree;
};

let addObjectives = ()=>{

		getInfo('script/objective.json')
		.then((data) => {
			data.forEach((el)=>{
				$('#Objective > div.row').append(
					createObjective(el.objective)
				)
			});
		});
	};