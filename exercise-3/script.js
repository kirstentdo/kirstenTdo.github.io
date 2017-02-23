function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

$(document).ready(function() {

//////////////////////////////////////////blackout paragraph///

	var blackOutCss = {
		'color': 'black',
	    'background-color': 'black'
	}

	var revertCss = {
		'color': 'black',
	    'background-color': 'white'
	}
	$('#mw-content-text > p:nth-child(3)').hover(function() {
			$(this).css(blackOutCss);
			$(this).find('*').css(blackOutCss);	
		}, 
		function() {
			$(this).css(revertCss);
			$(this).find('*').css(revertCss);			
	});

	$('#mw-content-text > p:nth-child(56)').hover(function() {
			$(this).css(blackOutCss);
			$(this).find('*').css(blackOutCss);	
		}, 
		function() {
			$(this).css(revertCss);
			$(this).find('*').css(revertCss);			
	});

	$('#mw-content-text > p:nth-child(100)').hover(function() {
			$(this).css(blackOutCss);
			$(this).find('*').css(blackOutCss);	
		}, 
		function() {
			$(this).css(revertCss);
			$(this).find('*').css(revertCss);			
	});

	$('#mw-content-text > p:nth-child(104)').hover(function() {
			$(this).css(blackOutCss);
			$(this).find('*').css(blackOutCss);	
		}, 
		function() {
			$(this).css(revertCss);
			$(this).find('*').css(revertCss);			
	});

	$('#mw-content-text > p:nth-child(117)').hover(function() {
			$(this).css(blackOutCss);
			$(this).find('*').css(blackOutCss);	
		}, 
		function() {
			$(this).css(revertCss);
			$(this).find('*').css(revertCss);			
	});

	$('#mw-content-text > p:nth-child(95)').hover(function() {
			$(this).css(blackOutCss);
			$(this).find('*').css(blackOutCss);	
		}, 
		function() {
			$(this).css(revertCss);
			$(this).find('*').css(revertCss);			
	});


//////////////////////////////////////////shuffle///

	var $elementToShuffle = $('#mw-content-text > p:nth-child(21)');
	var originalText = $elementToShuffle.text();
	$elementToShuffle.hover(
		function() {
			var text = originalText.trim().split(" ");
			shuffle(text)
			$(this).empty().append(text.join(" "));
		},
		function() {
			$(this).empty().append(originalText);
		}
	);

	var $elementToShuffle = $('#mw-content-text > p:nth-child(22)');
	var originalText = $elementToShuffle.text(s);
	$elementToShuffle.hover(
		function() {
			var text = originalText.trim().split(" ");
			shuffle(text)
			$(this).empty().append(text.join(" "));
		},
		function() {
			$(this).empty().append(originalText);
		}
	);

	var $elementToShuffle = $('#mw-content-text > p:nth-child(25)');
	var originalText = $elementToShuffle.text();
	$elementToShuffle.hover(
		function() {
			var text = originalText.trim().split(" ");
			shuffle(text)
			$(this).empty().append(text.join(" "));
		},
		function() {
			$(this).empty().append(originalText);
		}
	);

	var $elementToShuffle = $('#mw-content-text > p:nth-child(55)');
	var originalText = $elementToShuffle.text();
	$elementToShuffle.hover(
		function() {
			var text = originalText.trim().split(" ");
			shuffle(text)
			$(this).empty().append(text.join(" "));
		},
		function() {
			$(this).empty().append(originalText);
		}
	);

	var $elementToShuffle = $('#mw-content-text > p:nth-child(77)');
	var originalText = $elementToShuffle.text();
	$elementToShuffle.hover(
		function() {
			var text = originalText.trim().split(" ");
			shuffle(text)
			$(this).empty().append(text.join(" "));
		},
		function() {
			$(this).empty().append(originalText);
		}
	);

	var $elementToShuffle = $('#mw-content-text > p:nth-child(108)');
	var originalText = $elementToShuffle.text();
	$elementToShuffle.hover(
		function() {
			var text = originalText.trim().split(" ");
			shuffle(text)
			$(this).empty().append(text.join(" "));
		},
		function() {
			$(this).empty().append(originalText);
		}
	);

	var $elementToShuffle = $('#mw-content-text > p:nth-child(121)');
	var originalText = $elementToShuffle.text();
	$elementToShuffle.hover(
		function() {
			var text = originalText.trim().split(" ");
			shuffle(text)
			$(this).empty().append(text.join(" "));
		},
		function() {
			$(this).empty().append(originalText);
		}
	);

	var $elementToShuffle = $('#mw-content-text > p:nth-child(49)');
	var originalText = $elementToShuffle.text();
	$elementToShuffle.hover(
		function() {
			var text = originalText.trim().split(" ");
			shuffle(text)
			$(this).empty().append(text.join(" "));
		},
		function() {
			$(this).empty().append(originalText);
		}
	);

//////////////////////////////////////////blackout word anim///

	var $elementToHighlight = $('#mw-content-text > p:nth-child(36)');
	var originalText = $elementToHighlight.text();
	$elementToHighlight.empty();
	originalText.trim().split(" ").forEach(function(word) {
		$elementToHighlight.append("<span class='blackout'>" + word + " </span>");
	})

	$('.blackout').mouseover(function() {
		$(this).css('background-color', 'black');
		$(this).animate({
            backgroundColor: "white"
    	}, 3000 );
	});

	var $elementToHighlight = $('#mw-content-text > p:nth-child(103)');
	var originalText = $elementToHighlight.text();
	$elementToHighlight.empty();
	originalText.trim().split(" ").forEach(function(word) {
		$elementToHighlight.append("<span class='blackout'>" + word + " </span>");
	})

	$('.blackout').mouseover(function() {
		$(this).css('background-color', 'black');
		$(this).animate({
            backgroundColor: "white"
    	}, 3000 );
	});

	var $elementToHighlight = $('#mw-content-text > p:nth-child(46)');
	var originalText = $elementToHighlight.text();
	$elementToHighlight.empty();
	originalText.trim().split(" ").forEach(function(word) {
		$elementToHighlight.append("<span class='blackout'>" + word + " </span>");
	})

	$('.blackout').mouseover(function() {
		$(this).css('background-color', 'black');
		$(this).animate({
            backgroundColor: "white"
    	}, 2000 );
	});

	var $elementToHighlight = $('#mw-content-text > p:nth-child(85)');
	var originalText = $elementToHighlight.text();
	$elementToHighlight.empty();
	originalText.trim().split(" ").forEach(function(word) {
		$elementToHighlight.append("<span class='blackout'>" + word + " </span>");
	})

	$('.blackout').mouseover(function() {
		$(this).css('background-color', 'black');
		$(this).animate({
            backgroundColor: "white"
    	}, 3000 );
	});

	var $elementToHighlight = $('#mw-content-text > p:nth-child(73)');
	var originalText = $elementToHighlight.text();
	$elementToHighlight.empty();
	originalText.trim().split(" ").forEach(function(word) {
		$elementToHighlight.append("<span class='blackout'>" + word + " </span>");
	})

	$('.blackout').mouseover(function() {
		$(this).css('background-color', 'black');
		$(this).animate({
            backgroundColor: "white"
    	}, 4000 );
	});

//////////////////////////////////////////blackout word perm///

	var $elementToHighlight = $('#mw-content-text > p:nth-child(59)');
	var originalText = $elementToHighlight.text();
	$elementToHighlight.empty();
	originalText.trim().split(" ").forEach(function(word) {
		$elementToHighlight.append("<span class='blackout'>" + word + " </span>");
	})

	$('.blackout').mouseover(function() {
		$(this).css('background-color', 'black');
	});

	var $elementToHighlight = $('#mw-content-text > p:nth-child(23)');
	var originalText = $elementToHighlight.text();
	$elementToHighlight.empty();
	originalText.trim().split(" ").forEach(function(word) {
		$elementToHighlight.append("<span class='blackout'>" + word + " </span>");
	})

	$('.blackout').mouseover(function() {
		$(this).css('background-color', 'black');
	});

	var $elementToHighlight = $('#mw-content-text > p:nth-child(47)');
	var originalText = $elementToHighlight.text();
	$elementToHighlight.empty();
	originalText.trim().split(" ").forEach(function(word) {
		$elementToHighlight.append("<span class='blackout'>" + word + " </span>");
	})

	$('.blackout').mouseover(function() {
		$(this).css('background-color', 'black');
	});

	var $elementToHighlight = $('#mw-content-text > p:nth-child(94)');
	var originalText = $elementToHighlight.text();
	$elementToHighlight.empty();
	originalText.trim().split(" ").forEach(function(word) {
		$elementToHighlight.append("<span class='blackout'>" + word + " </span>");
	})

	$('.blackout').mouseover(function() {
		$(this).css('background-color', 'black');
	});

	var $elementToHighlight = $('#mw-content-text > p:nth-child(115)');
	var originalText = $elementToHighlight.text();
	$elementToHighlight.empty();
	originalText.trim().split(" ").forEach(function(word) {
		$elementToHighlight.append("<span class='blackout'>" + word + " </span>");
	})

	$('.blackout').mouseover(function() {
		$(this).css('background-color', 'black');
	});
});
