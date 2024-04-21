<?php
    
    use craft\elements\Entry;
    use craft\helpers\UrlHelper;
    
    return [
            'endpoints' => [
                    'listing.json' => function() {
                        return [
                                'elementType' => Entry::class,
                                'criteria' => ['section' => 'listing'],
                                'elementsPerPage' => 3,
                                'pageParam' => 'pg',
                                'transformer' => function(Entry $entry) {
                                    return [
                                            'title' => $entry->title,
                                            'url' => $entry->url,
                                            'jsonUrl' => UrlHelper::url("news/{$entry->id}.json"),
                                            'body' => $entry->body,
                                            'elementsPerPage' => '4',

                                    ];
                                },
                        ];
                    },
                    'listing/<entryId:\d+>.json' => function($entryId) {
                        return [
                                'elementType' => Entry::class,
                                'criteria' => ['id' => $entryId],
                                'one' => true,
                                'transformer' => function(Entry $entry) {
                                    return [
                                            'title' => $entry->title,
                                            'url' => $entry->url,
                                            'summary' => $entry->summary,
                                            'body' => $entry->body,
                                    ];
                                },
                        ];
                    },
            ]
    ];