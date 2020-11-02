const svgPath = document.querySelectorAll('.title_fill');


anime({
	targets: '.title_stroke path',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'easeInOutSine',
	duration: 2500,
	delay: function(el, i) { return i * 30 },
	direction: 'alternate',
	loop: false
  });


  
