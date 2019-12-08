$(() => {
	populateInfo();
	getURL();
	addObjectives();
	addFaqs();

	// : Program Page
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

	// When a faq is clicked produce an answer ontop of the question
	$('ul.faq-list').on('click', 'li.list-group-item', (e)=>{

		const self = $(e.currentTarget);
		// the li element that invoked this function is the answer.
		const isAnswer = self.hasClass('faq-answer');
		// this element is already displaying it's answer. It's being clicked again.
		const comeBack = self.hasClass('active-li-item');

		if(isAnswer){
			self.remove();
			$('ul.faq-list li').removeClass('active-li-item');
		}
		else{

			if(comeBack){

				$('.faq-answer').remove();
				$('ul.faq-list li').removeClass('active-li-item');

			}else{
				
				let curr = new Position(self[0]);
				let first = new Position($('ul.faq-list li')[0]);

				// set li element that needs answer
				self.addClass('active-li-item');
				// get the answer.
				getAnswer(self.html())
				.then(data => {
					$('ul.faq-list').append(
						listItem(data)
						.addClass('faq-answer')
						.css({	"left" : `${curr.getDifference(curr.XPixels, first.XPixels) + 25}px`,
								"top": `${curr.getDifference(curr.YPixels, first.YPixels) + 10}px`
							})
					);
				});
			}
		}	
	});

	$('#confirm').on('click',(e)=>{

		$('#in_touch_info').css('opacity', '1');
		$(e.currentTarget).parent().remove();

	});

	$('#btnSubmit').on('click', (e)=>{

		// safe to send form to the server
		let safe = true;
		$('.inputError').remove();
		
		if(!validateName($('#name').val())){
			warningElement("Name should have at least 2 characters").insertAfter('#name');
			safe = false;
		}

		if(!validateName($('#surname').val())){
			warningElement("Surname should have at least 2 characters").insertAfter('#surname');
			safe = false;
		}

		if(!validateEmail($('#email').val())){
			warningElement("Please enter a valid email address").insertAfter('#email');
			safe = false;
		}

		// #Problem: Does Not Produce the correct results fix function validateNumber(number).
		// $Solution: validateNumber(number) was missing return statement. Return statement has been added.
		if(!validateNumber($('#cell').val())){
			warningElement(`Please enter a valid cell-phone number. with the 
							Format: 0123456789`).insertAfter('#cell');
			safe = false;
		}

		console.log({safe})
		return safe;
	});
});

const populateInfo = () => {
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

const getInfo = URL => {
	return new Promise( resolve =>{
		$.getJSON(URL, data =>{
			resolve(data);
		});
	});
}


// #Problem: Server does not have folder cye, thus always sets li:nth-child(1) to active.
// $Solution: ?
const getURL = () => {

	$('.collapse li.active').removeClass('active');

	if(window.location.pathname=="/cye/programs.php")	
		$('.collapse li:nth-child(2)').addClass('active');
	else if(window.location.pathname=="/cye/about.php")
		$('.collapse li:nth-child(3)').addClass('active');
	else if(window.location.pathname=="/cye/contact.php")
		$('.collapse li:nth-child(4)').addClass('active');
	else
		$('.collapse li:nth-child(1)').addClass('active');
}

const createObjective = (text) => $('<div></div>')
							 .addClass('col-12 col-md-6')
							 .append(
							 	$('<div></div>')
							 	.addClass('row mx-0')
							 	.append(
						 			$('<div></div>')
						 			.addClass('bullet-point col-1 pr-0')
						 			.append(
						 				$('<span></span>')
						 			),
							 		$('<p></p>')
							 		.addClass('statement-text col pl-0')
					 				.html(text)
								)
							 );

const addObjectives = () =>{
		getInfo('script/objective.json')
		.then( data => {
			data.forEach( el =>{
				$('#Objective > .row').append(
					createObjective(el.objective)
				);

				let len = $('.bullet-point').length;
				
				$('.bullet-point').eq(len-1)
				.append("<span><svg class='svg-img'><circle r='8' cx='8' cy='8' fill='black'></circle></svg></span>");
			});
		});
	};
	
const listItem = (text) => $('<li></li>')
					 .addClass('list-group-item')
					 .html(text);

const addFaqs = ()=>{
	getInfo('script/faqs.json')
	.then( data => {
		data.forEach(val => {
			let {question} = val;
			let item = 	listItem(question);

			$(".faq-list").append(item);
		});
	});
};

// NOTE: Need to optimize
const getAnswer = async (myQuestion) => {

	let myAnswer;

	await getInfo('script/faqs.json')
	.then( data => {
		data.forEach( ({question, answer}) => myAnswer = (myQuestion === question) ? answer : myAnswer );
	});

	return myAnswer;
};

// NOTE: Need to optimize, defeats the purpose of using a promise.
const getQuestion = async (myAnswer) => {

	let myQuestion;

	await getInfo('script/faqs.json')
	.then(data => {
		data.forEach( ({question, answer}) => myQuestion = (myAnswer === answer) ? question : myQuestion );
	});

	return myQuestion;
};

const validateEmail = (email) =>{
	var e_reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
	return e_reg.test(email);
}

const validateName = (name) =>{
	var n_reg = /^[A-Za-z\s]{2,}$/;
	return n_reg.test(name) ;
}

//	Validate 10 digit number 
//	#Problem: RegEx not returning appropriate results!!
//	$Solution: All set validateNumber was missing return statement. It has been added and works properly. 
const validateNumber = (number) =>{
	let re = /^\d{3}[\s-]?\d{3}[\s-]?\d{4}$/;
	return re.test(number);
};

const warningElement = (warningText) => $('<div></div>')
								.addClass('col-12 inputError')
								.html(warningText);

class Position{
	constructor(element){
		this.position = this.getPosition(element);
	}

	getPosition(element){

		let [x, y] = [0, 0];

		while(element){
			if (element.tagName == "BODY") {
		      // deal with browser quirks with body/window/document and page scroll
		      // For Firefox and IE, works fine with Chrome and Edge
		    	let xScroll = element.scrollLeft || document.documentElement.scrollLeft;
		    	let yScroll = element.scrollTop || document.documentElement.scrollTop;
		 
				x += (element.offsetLeft - xScroll + element.clientLeft);
				y += (element.offsetTop - yScroll + element.clientTop);
	    
		    } else {
			
				// for all other non-BODY elements
				x += (element.offsetLeft - element.scrollLeft + element.clientLeft);
				y += (element.offsetTop - element.scrollTop + element.clientTop);
				
		    }
		 
		    element = element.offsetParent;
		}

		// return an object with x (left position) and y (top position) numbers, ${both measures in px}. 
		return {x, y};
	};

	get XPixels(){
		return this.position.x;
	}

	get YPixels(){
		return this.position.y;
	}

	getDifference(point1, point2){
		return (point1 - point2);
	}
}
