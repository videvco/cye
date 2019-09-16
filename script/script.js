$(() => {
	populateInfo();
	getURL();
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