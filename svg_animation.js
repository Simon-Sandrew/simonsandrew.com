
anime({
	opacity: ['0%', '100%'],
	delay: 2800,
	targets: '.description',
	top:[90, 130],
	duration:1500
	
	
  });

anime({
	targets: '.title_text path',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'easeInOutSine',
	duration: 3000,
	delay: function(el, i) { return i * 30 },
	direction: 'alternate',
	loop: false
  });