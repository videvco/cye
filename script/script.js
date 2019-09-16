$(()=>{
	(()=>{
		let container = $('#Objective div.row');

		getInfo('objective.json')
		.then((data) => {
			data.forEach((el)=>{
				objective.append(
					$('<div></div>')
				)
			});
		});
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