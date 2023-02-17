'use strict';

import $ from 'jquery';

export default class Accordion {

  constructor($block) {
    const _self = this;
    this.block = $block;
    this.items = $('.accordion-item', this.block);
    this.accBtns = $('.accordion-heading button', this.items);

    this.accBtns.on('click', e => {
      const $this = $(e.currentTarget);
      _self.openItem($this); 
    });

  }

  openItem($btn) {
    const $parent = $btn.parents('.accordion-item');

    if($parent.hasClass('active')) {
      $parent.removeClass('active');
      this.items.removeClass('active').find('.accordion-body').slideUp();
    } else {
      this.items.removeClass('active').find('.accordion-body').slideUp();
      $btn.parent().siblings('.accordion-body').slideDown();
      $parent.addClass('active');
    }

  }

}