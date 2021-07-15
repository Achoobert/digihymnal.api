/**
 * Hymnal.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    // language: {type: 'string', defaultsTo: true},
    // languageObject: {type: 'object'},
    // chord: {type: string, isIn: [''],},

    title: {type: "json", defaultsTo: 'title is not set'},
    song: {type:'JSON',
      defaultsTo:{
        "title": {
            "at": "Twinkle twinkle little star",
            "kt": "Twinkle twinkle little star",
            "ct": "Twinkle twinkle little star",
            "en": "Twinkle twinkle little star"
        },
        "author": "traditional",
        "key": "G",
        "lyrics": {
            "verses": [
                {
                    "lines": [
                        {
                            "phrases": [
                                {
                                    "chord": "G",
                                    "number": "1",
                                    "en": "Twinkle, twinkle li",
                                    "at": "ཀྱེ། དཀོན་མཆོག",
                                    "kt": "ཀྱེ། དཀོན་མཆོག ",
                                    "ct": "ཀྱེ། དཀོན་མཆོག"
                                },
                                {
                                    "chord": "C",
                                    "number": "4",
                                    "at": "ttle st",
                                    "at": "ཀོན་མཆོ",
                                    "kt": "ཀོན་མཆོ ",
                                    "ct": "ཀོན་མཆོ"
                                },
                                {
                                    "chord": "G",
                                    "number": "1",
                                    "en": "ar,",
                                    "at": "མཆོ",
                                    "kt": "ཀོམཆོ ",
                                    "ct": "ན་མཆོ"
                                }
                            ]
                        },{
                            "phrases": [
                                {
                                    "chord": "C",
                                    "number": "4",
                                    "en": "How I w",
                                    "at": "ཀྱེ། དཀོན་མཆོག",
                                    "kt": "ཀྱེ། དཀོན་མཆོག ",
                                    "ct": "ཀྱེ། དཀོན་མཆོག"
                                },{
                                    "chord": "G",
                                    "number": "1",
                                    "en": "onder w",
                                    "at": "ཀྱེ། དཀོན་མཆོག",
                                    "kt": "ཀྱེ། དཀོན་མཆོག ",
                                    "ct": "ཀྱེ། དཀོན་མཆོག"
                                },{
                                    "chord": "D",
                                    "number": "5",
                                    "en": "hat you a",
                                    "at": "ཀྱེ། དཀོན་མཆོག",
                                    "kt": "ཀྱེ། དཀོན་མཆོག ",
                                    "ct": "ཀྱེ། དཀོན་མཆོག"
                                },{
                                    "chord": "G",
                                    "number": "1",
                                    "en": "re",
                                    "at": "ཀྱེ། དཀོན་མཆོག",
                                    "kt": "ཀྱེ། དཀོན་མཆོག ",
                                    "ct": "ཀྱེ། དཀོན་མཆོག"
                                },
                            ]
                        }
                    ],
                    "label": "Chorus",
                    "id": 1
                },{
                    "lines": [
                        {
                            "phrases": [
                              {
                                  "chord": "G",
                                  "number": "1",
                                  "en": "Up ab",
                                  "at": "ཀྱེ། དཀོན་མཆོག",
                                  "kt": "ཀྱེ། དཀོན་མཆོག ",
                                  "ct": "ཀྱེ། དཀོན་མཆོག"
                              },{
                                  "chord": "C",
                                  "number": "4",
                                  "en": "ove the w",
                                  "at": "ཀྱེ། དཀོན་མཆོག",
                                  "kt": "ཀྱེ། དཀོན་མཆོག ",
                                  "ct": "ཀྱེ། དཀོན་མཆོག"
                              },{
                                  "chord": "G",
                                  "number": "1",
                                  "en": "orld so h",
                                  "at": "ཀྱེ། དཀོན་མཆོག",
                                  "kt": "ཀྱེ། དཀོན་མཆོག ",
                                  "ct": "ཀྱེ། དཀོན་མཆོག"
                              },{
                                  "chord": "D",
                                  "number": "5",
                                  "en": "igh,",
                                  "at": "ཀྱེ། དཀོན་མཆོག",
                                  "kt": "ཀྱེ། དཀོན་མཆོག ",
                                  "ct": "ཀྱེ། དཀོན་མཆོག"
                              },
                            ]
                        },{
                            "phrases": [
                              {
                                  "chord": "G",
                                  "number": "1",
                                  "en": "Like a Di",
                                  "at": "ཀྱེ། དཀོན་མཆོག",
                                  "kt": "ཀྱེ། དཀོན་མཆོག ",
                                  "ct": "ཀྱེ། དཀོན་མཆོག"
                              },{
                                  "chord": "C",
                                  "number": "4",
                                  "en": "amond ",
                                  "at": "ཀྱེ། དཀོན་མཆོག",
                                  "kt": "ཀྱེ། དཀོན་མཆོག ",
                                  "ct": "ཀྱེ། དཀོན་མཆོག"
                              },{
                                  "chord": "G",
                                  "number": "1",
                                  "en": "in the s",
                                  "at": "ཀྱེ། དཀོན་མཆོག",
                                  "kt": "ཀྱེ། དཀོན་མཆོག ",
                                  "ct": "ཀྱེ། དཀོན་མཆོག"
                              },{
                                  "chord": "D",
                                  "number": "5",
                                  "en": "ky.",
                                  "at": "ཀྱེ། དཀོན་མཆོག",
                                  "kt": "ཀྱེ། དཀོན་མཆོག ",
                                  "ct": "ཀྱེ། དཀོན་མཆོག"
                              }
                            ]
                        }
                    ],
                    "label": "verse 1",
                    "id": 2
                },
            ]
        },
        "metadata": [
            {
                "at": "(Ah, Lord God ཞེས་པའི་དབྱིན་ཇིའི་བསྟོད་དབྱངས།) ",
                "kt": "(Ah, Lord God ཞེས་པའི་དབྱིན་ཇིའི་བསྟོད་དབྱངས།) Copyright © 1976 Kay Chance, Glaubenszentrum, Dr.-H.-Jasper-Str.20, D-37581 Bad Gandersheim Germany Used by permission ",
                "ct": "(Ah, Lord God ཞེས་པའི་དབྱིན་ཇིའི་བསྟོད་དབྱངས།) ",
                "en": ".....  "
            }
        ],
        "id": "99999999999"
    }
    },
    author: {type: "json", defaultsTo: '*'},
    key: {type: "string",  defaultsTo: '*'},// isIn: ['*',],//`required pattern='[ABCDEFG]|[ABCDEFG]m|[ABCDEFG]#|[ABCDEFG]b|[ABCDEFG]#m|[ABCDEFG]bm|[ABCDEFG]7|[ABCDEFG]sus|[ABCDEFG]#7|[ABCDEFG]#sus|[ABCDEFG]b7|[ABCDEFG]bsus'`
    // lyrics: {type: "json",
    // defaultsTo:{"verses": [
    //   {
    //     "lines": [
    //       {
    //         "phrases": [
    //           {
    //             "chord": "A",
    //             "number": "1",
    //             "en": "****",
    //             "at": "****",
    //             "kt": "***",
    //             "ct": "***"
    //           }
    //         ]
    //       }
    //     ],
    //     "label": "verse 1",
    //     "id": 1
    //   }
    // ]}
    // },
    // metadata: {type: "JSON", defaultsTo:
    //   {[
    //     {
    //       "at": "(Ah, Lord God ཞེས་པའི་དབྱིན་ཇིའི་བསྟོད་དབྱངས།) ",
    //       "kt": "(Ah, Lord God ཞེས་པའི་དབྱིན་ཇིའི་བསྟོད་དབྱངས།) Copyright © 1976 Kay Chance, Glaubenszentrum, Dr.-H.-Jasper-Str.20, D-37581 Bad Gandersheim Germany Used by permission ",
    //       "ct": "(Ah, Lord God ཞེས་པའི་དབྱིན་ཇིའི་བསྟོད་དབྱངས།) "
    //     }
    //   ]}
    // },
    id: {type: 'number', required: true},

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

