'use strict';
import {createApp} from 'vue/dist/vue.esm-browser.js'


export default class Listing {

    constructor() {


        const app = createApp({
            delimiters: ['${', '}'],


            data() {
                return {
                    count: 0,
                    message: "1",
                    data: [],
                    apiUrl: "/listing.json",
                    pager: {
                        hasNext: false,
                        hasPrev: false,
                    }
                }


            },
            methods: {

                getListing(append) {
                    var me = this;
                    fetch(this.apiUrl)
                        .then((response) => response.json())
                        .then((data) => {

                            if (append) {
                                me.data.data = me.data.data.concat(data.data)

                                me.data.meta = data.meta;
                            } else {
                                me.data = data

                            }
                        });
                },
                loadMore() {

                    this.apiUrl = this.data.meta.pagination.links.next;
                    this.getListing('append');
                },

                goTo(url) {

                    this.apiUrl = url;
                    this.getListing();
                }
            },

            mounted() {
                this.getListing()
            },
            computed: {
                hasNext() {

                    return this.data && this.data.meta && this.data.meta.pagination && this.data.meta.pagination.links && this.data.meta.pagination.links.next;
                },
                items() {
                    return this.data.data;
                },
                next() {
                    return this.data && this.data.meta && this.data.meta.pagination && this.data.meta.pagination.links && this.data.meta.pagination.links.next ? this.data.meta.pagination.links.next : "";

                },
                prev() {
                    return this.data && this.data.meta && this.data.meta.pagination && this.data.meta.pagination.links && this.data.meta.pagination.links.previous ? this.data.meta.pagination.links.previous : "";

                }

            }
        });

        app.mount('#list')

    }
}