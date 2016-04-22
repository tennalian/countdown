/*
countdown.js
(c) 2016, Mariya Gnitetckaya.
*/

var countdown = (function(elements){
	'use strict';
	var elements = elements;
	console.log(elements);

	var timer = function(element){
		var time;
		if (element.dataset.time == undefined) {
			time = Date.parse(new Date()) + 3600 * 1000 * 24 * 5; //5 days
		}
		else{
			time = Date.parse(element.dataset.time);
		}
		return time;
	};

	var counter = function(date, element){
		console.log(element);
 		var amount =  +date - Date.parse(new Date()),
	        day = Math.floor(amount / 86400000),
	        hours = Math.floor((amount / 3600000) % 24),
	        mins = Math.floor((amount / 60000) % 60),
	        mins = Math.floor(new Date(amount).getMinutes()),
	        secs = Math.floor(new Date(amount).getSeconds());
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
        element.innerHTML = out;
	};

	var parseElements = function(elements){
		[].forEach.call(elements, function(element){
			var date = timer(element);
			var self = this;
			counter(date, element);
			var interval = setInterval(function(){
				counter(date, element);
			},1000);
			return interval;
		});
	}
	return{
		init: function(elements){
			console.log('init');
	       return parseElements(elements);
	    }
	}

})();
var items = document.querySelectorAll('.countdown');
countdown.init(items);



