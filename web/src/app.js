'use strict';

import SiteHeader from './js/components/SiteHeader';
import Accordion from './js/components/Accordion';
import BlockTabs from './js/components/BlockTabs';

$(() => {

  if($('.site-header').length) {
    new SiteHeader();
  }

  if($('.block--accordion').length) {
    new Accordion();
  }

  const $tabs = $('.block--tabs');
  
  if($tabs.length) {
    $tabs.map((i, ele) => {
      const $block = $(ele);
      new BlockTabs($block);
    })
  }

});
