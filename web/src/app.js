'use strict';

import SiteHeader from './js/components/SiteHeader';
import Accordion from './js/components/Accordion';

$(() => {

  if($('.site-header').length) {
    new SiteHeader();
  }

  if($('.block--accordion').length) {
    new Accordion();
  }

});
