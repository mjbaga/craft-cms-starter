'use strict';

import SiteHeader from './js/components/SiteHeader';

$(() => {

  if($('.site-header').length) {
    new SiteHeader();
  }

})();
