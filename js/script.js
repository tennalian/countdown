/* (c) 2015, Mariya Gnitetckaya. */

 'use strict';
function counter(element){
	if(document.querySelector(element) !== null){

		var elements = document.querySelectorAll(element);
		[].forEach.call(elements, function( el ) {

			if (el.dataset.time == undefined) {
				var time = Date.parse(new Date()) + 3600 * 1000 * 24 * 5; //5 days
			}
			else{
				var time = Date.parse(el.dataset.time);
			}

		 	function countdown() {
	     		var amount =  time - Date.parse(new Date()),
			        day = Math.floor(amount / 86400000),
			        hours = Math.floor((amount / 3600000) % 24),
			        mins = Math.floor((amount / 60000) % 60),
			        secs = Math.floor((amount / 1000) % 60);

				var b = String(Math.floor(day)).split("");
				var days = Math.floor(day) < 10 ? "<span>0</span>" : '';
				for (var i=0; i in b; i++){
					days += '<span>'+b[i]+'</span>';
				}

				var daysDiv = '<div id="days">' + days + '</div>',
					hoursDiv = '<div id="hours">' + '<span>' + Math.floor(hours/10) + '</span><span>' + hours%10 + '</span>' + '</div>',
					minsDiv = '<div id="mins">' + '<span>' + Math.floor(mins/10) + '</span><span>' + mins%10 + '</span>' + '</div>',
					secsDiv = '<div id="secs">' + '<span>' + Math.floor(secs/10) + '</span><span>' + secs%10 + '</span>' + '</div>';

				if (amount < 0) {
		        	clearInterval(interval);
		        	var zero = '<span>'+0+'</span><span>'+0+'</span>';
			        daysDiv = '<div id="days">' + zero + '</div>',
					hoursDiv = '<div id="hours">'+ zero + '</div>',
					minsDiv = '<div id="mins">' + zero + '</div>',
					secsDiv = '<div id="secs">' + zero + '</div>';
	     		}

		        var out = daysDiv + hoursDiv + minsDiv + secsDiv ;
		        el.innerHTML = out;
	        }

			countdown();
			var interval = setInterval(countdown,1000);
		});
	}
}

counter('.countdown');
