function toy_position(){
	var margin_container = $("#header-banner > header").css("width").split("px");
	var margin_screen = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
	var margin_left = (margin_screen - margin_container[0])/2;

	var width_toy = margin_container[0]/12;

	$("#toy-path").css({
		"left": margin_left,
		"width": width_toy
	});
}


$(function(){
	toy_position();
	$(window).resize(function() {
		toy_position();
	});
});

var bonequinho = $('#bonequinho'),
	pLocs = [0, -52, -104, -156, -208, -260],
	curFrm = 0,
	lastStep=0,
	backPosY='0px';

$(window).load(function($){
	var s = skrollr.init({
		beforerender: function(o){
			if(o.curTop > lastStep + 30) {
				if ((o.curTop >= 160) && (o.curTop <= 350)){
					if (o.curTop == 160){ curFrm=4; }
					if (curFrm>=6){ curFrm=-1; }
					backPosY = '70px';
				} else if (o.curTop >= 1600){
					curFrm=3; backPosY = '0px';
				}
				else {
					if (curFrm>=3){ curFrm=-1; backPosY = '0px'; }
				}
				bonequinho.css('background-position', pLocs[curFrm++] + 'px ' + backPosY);
				lastStep = o.curTop;
			} else if(o.curTop <= lastStep - 30) {
				if (o.curTop <= 1600){
					if ((curFrm<=0) || (curFrm>2)) { curFrm=2; backPosY = '0px';}
					bonequinho.css('background-position', pLocs[curFrm--] + 'px ' + backPosY);
					lastStep = o.curTop;
				}
			}
		}
	});
});
