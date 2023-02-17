'use strict';

import $ from 'jquery';

export default class Accordion {

	constructor($block) {
		const _self = this;
		this.block = $block;

		$('.testimonial-wrapper').slick({
			infinite: false,
			slidesToShow: 2.3,
			slidesToScroll: 1,
			// prevArrow: $('.carousel-arrow-wrapper .prev'),
			// nextArrow: $('.carousel-arrow-wrapper .next'),
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1.1,
					}
				},
			]
		});
	
	}
}