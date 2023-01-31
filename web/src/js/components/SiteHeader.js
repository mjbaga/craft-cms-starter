'use strict';

import $ from 'jquery';

// class based approach
export default class SiteHeader {

  constructor() {
    this.header = $('.site-header');
    this.announcementClose = $('.accouncement-close');
    this.headerAnnouncment = $('.site-header__notification');
    const _self = this;

    // _self.hideHeader();
    this.announcementClose.on('click', e => {
      const $this = $(e.currentTarget);
      _self.closeAnnouncement($this); 
    });
  }

  hideHeader() {
    this.header.slideUp();
  }
  
  closeAnnouncement() {
    this.headerAnnouncment.slideUp();
  }
}