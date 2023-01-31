'use strict';

import $ from 'jquery';

export default class BlockTabs {

  constructor($block) {
    const _self = this;
    this.block = $block;
    this.tabButtons = $('.tab-headings .tab-btn', this.block);
    this.panels = $('.tab-panel');

    this.tabButtons.on('click', e => {
      const $this = $(e.currentTarget);
      _self.switchTab($this); 
    });
  }

  switchTab($tab) {
    const $target = $tab.attr("aria-controls");
    const $targetPanel = $(`#${$target}`);

    if(!$tab.hasClass('active')) {
      this.tabButtons.removeClass('active').attr('tabIndex', '-1').attr('aria-selected', false);
      $('.tab-panel').removeClass('active').attr('tabIndex', '-1');
      $tab.addClass('active').attr('tabIndex', '0').attr('aria-selected', true);
      $targetPanel.addClass('active').attr('tabIndex', '0');
    }
  }

}