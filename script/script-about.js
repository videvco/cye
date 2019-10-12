$(()=>{
	(()=>{
		let container = $('#Objective div.row');

		$.getJSON('script/objective.json')
		.then((data) => {
			console.log("found");
			data.forEach((el)=>{
				$("div#Mission").append(
					$('<div></div>')
					.addClass('row mx-0')
					.append(
						$('<div></div>')
						.addClass('bullet-point col-1 pr-0')
						.append(
							$('<span></span>')
							.html('...')
						),
						$('<p></p>')
						.addClass('statement-text col pl-0')
						.html(el.objective)
					)
				)
			});
		})
	})();
});

let createObjective = () => {
	
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
						 				.html('...'),
						 				$('<p></p>')
						 				.addClass('statement-text col pl-0')
						 			)
						 		)
						 	)
						 )
	return statement_tree;
};