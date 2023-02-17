'use strict';

import SiteHeader from './js/components/SiteHeader';
import Accordion from './js/components/Accordion';
import BlockTabs from './js/components/BlockTabs';
import Slider from './js/components/Slider';
import Testimonials from './js/components/Testimonials';
import 'slick-carousel'



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

  if($('.block--slider').length) {
    new Slider();
  }

  if($('.block--testimonials').length) {
    new Testimonials();
  }

});
