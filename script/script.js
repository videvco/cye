$(()=>{
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