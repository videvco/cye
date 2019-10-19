$(() => {
	populateInfo();
	getURL();
	addObjectives();

	$('.pro-list li').on('click', e=>{

		$(e.currentTarget)
		.addClass('pro-active')
		.siblings('.pro-active')
		.removeClass('pro-active');

		let program = $(e.currentTarget).children('span').html();
		program = program.toLowerCase();
		let prog="#";
		let img = "";
		for (let i = 0; i<3; i++) {
			prog += program[i];
			img += program[i];
		}

		$('div.pro-info')
		.children()
		.removeClass('info-active')
		.siblings(prog)
		.addClass('info-active')
		.parent()
		.css('background-image','url("images/'+img+'.jpg")');

		if(prog=="#env"||prog=="#art"||prog=="#emp")
		{
			$(prog)
			.parent()
			.css('background-size','auto 100%');
		}
		else{
			$(prog)
			.parent()
			.css('background-size','100% auto');
		}
	});
});

let populateInfo = () => {
	getInfo("script/home.json").then(data => {
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
	
	let statement_tree = $('<div></div>')
						 .addClass('col-12 col-md-6')
						 .append(
						 	$('<div></div>')
						 	.addClass('row mx-0')
						 	.append(
					 			$('<div></div>')
					 			.addClass('bullet-point col-1 pr-0')
					 			.append(
					 				$('<span></span>')
					 				.append()
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
				$('#Objective > .row').append(
					createObjective(el.objective)
				)

				let len = $('.bullet-point').length;
				$('.bullet-point').eq(len-1).append("<span><svg class='svg-img'><circle r='8' cx='8' cy='8' fill='black'></circle></svg></span>");
			});
		});
	};
