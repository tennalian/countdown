/*
countdown.js
(c) 2016, Mariya Gnitetckaya.
*/

var countdown = (function(args){
	'use strict';
	var timer = function(el){
		var time;
		if (el.dataset.time == undefined) {
			time = Date.parse(new Date()) + 3600 * 1000 * 24 * 5; //5 days
		}
		else{
			time = Date.parse(el.dataset.time);
		}
		return time;
	};
	var counter = function(time, el){
 		var amount =  +time - Date.parse(new Date()),
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
        el.innerHTML = out;
	};

	var parseElements = function(elements){
		[].forEach.call(elements, function(el){
			var time = timer(el);
			counter(time, el);
			var interval = setInterval(function(){
				counter(time, el);
			},1000);
			return interval;
		});
	}
	return{
		init: function(elements){
	       	try {
		        if (elements === undefined) {
				    throw new SyntaxError("Items are not found");
				}
				if (typeof(elements) !== "object" ){
					throw new SyntaxError("Wrong item");
				}
				if (arguments.length > 1){
					throw new SyntaxError("Enter not more than one element");
				}
				return parseElements(elements);
		    } catch (err) {
		    	console.log(err.message);
		    }
	    }
	}

})();




