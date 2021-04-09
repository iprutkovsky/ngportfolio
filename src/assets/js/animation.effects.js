; (function () {

	'use strict';

	let toggle = () => {
		$('#tglBtn').on('change', function () {
			let sf = $('.skills-field'),
				cnt = $('.container');

			if ($(this).is(':checked')) {
				sf.css('text-indent', '-300%');
				cnt.css('display', 'block');
				screenSaver();
			}
			else {
				clearTimeout(screenSaver());
				cnt.css('display', 'none');
				sf.css('text-indent', '0%');
			}
		})
	}

	// skills screen saver
	let screenSaver = () =>
		$(document).ready(function () {
			let s = 1000;
			let arr = ['Java', 'JDBC', 'Servlets', 'Spring', 'SQL', 'MYSQL', 'OracleSQL',
				'Angular 8', 'Angular 9', 'Angular 10', 'TypeScript', 'Angular JS', 'HTML5', 'CSS3',
				'Javascript', 'RxJS', 'JQuery', 'Node.js', 'Jenkins', 'GitHub',
				'GitLab', 'AWS', 'S3', 'GC', 'Wordpress'];
			setTimeout(function () {
				let container = document.querySelector('.container');
				container.innerHTML = '';
				arr.map(v => {
					let blocks = document.createElement('div');
					$(blocks).addClass('blk');
					blocks.innerHTML = v;
					container.appendChild(blocks);
				})

				let animeShuffle = () =>
					anime({
						targets: '.blk',
						translateX: () => anime.random(-550, 550),
						translateY: () => anime.random(-115, 115),
						scale: () => anime.random(.5, 3),
						easing: 'linear',
						duration: 9 * s,
						delay: anime.stagger(9),
						complete: animeShuffle
					});
				animeShuffle();
			}, s);
		});

	toggle();

}());