import AdImg from '../../assets/img.jpg';
import { CONSTANTS } from '../../utility/constants';

const { SP, IF, OF, D, RP, DH } = CONSTANTS.FILTERS.MLB;

export const dummyData = [
    {
        cat: SP,
        data: [
            {
                id: 1,
                title: 'Nathan McKinnen C',
                avgVal: 4,
                teamA: 'Arizona Diamondbacks',
                teamB: 'Baltimore Orioles',
                time: '01:10 PM',
                date: '2020-09-28',
                stadium: 'Empower Field',
                injured: true,
                steps: [
                    {
                        titles: ['ERA', 'W-L', 'k', 'whip', 'fppg'],
                        step: [21, 18, 13, 31, 20.0]
                    },
                    {
                        titles: ['ERA', 'W-L', 'k', 'whip', 'fppg'],
                        step: [
                            {
                                title: 'last game',
                                values: [1, 0, 0, 7, 14.8],
                            },
                            {
                                title: 'last 10 games',
                                values: [10, 8, 17, 39, 18.8],
                            },
                            {
                                title: '2020-2021',
                                values: [1, 0, 0, 7, 14.8],
                            }
                        ]
                    },
                    {
                        step: {
                            ad: AdImg
                        }
                    }
                ],
            },
            {
                id: 2,
                title: 'Conner McDavid',
                avgVal: 4,
                teamA: 'Arizona Diamondbacks',
                teamB: 'Baltimore Orioles',
                time: '01:10 PM',
                date: '2020-09-28',
                stadium: 'Empower Field',
                isStarPower: true,
                steps: [
                    {
                        titles: ['ERA', 'W-L', 'k', 'whip', 'fppg'],
                        step: [21, 18, 13, 31, 20.0]
                    },
                    {
                        titles: ['ERA', 'W-L', 'k', 'whip', 'fppg'],
                        step: [
                            {
                                title: 'last game',
                                values: [1, 0, 0, 7, 14.8],
                            },
                            {
                                title: 'last 10 games',
                                values: [10, 8, 17, 39, 18.8],
                            },
                            {
                                title: '2020-2021',
                                values: [1, 0, 0, 7, 14.8],
                            }
                        ]
                    },
                    {
                        step: {
                            ad: AdImg
                        }
                    }
                ],
            },
            {
                id: 3,
                title: 'Sebastian Aho',
                avgVal: 4,
                teamA: 'Arizona Diamondbacks',
                teamB: 'Baltimore Orioles',
                time: '01:10 PM',
                date: '2020-09-28',
                stadium: 'Empower Field',
                steps: [
                    {
                        titles: ['ERA', 'W-L', 'k', 'whip', 'fppg'],
                        step: [21, 18, 13, 31, 20.0]
                    },
                    {
                        titles: ['ERA', 'W-L', 'k', 'whip', 'fppg'],
                        step: [
                            {
                                title: 'last game',
                                values: [1, 0, 0, 7, 14.8],
                            },
                            {
                                title: 'last 10 games',
                                values: [10, 8, 17, 39, 18.8],
                            },
                            {
                                title: '2020-2021',
                                values: [1, 0, 0, 7, 14.8],
                            }
                        ]
                    },
                    {
                        step: {
                            ad: AdImg
                        }
                    }
                ],
            },
            {
                id: 4,
                title: 'Chris Carpenter',
                avgVal: 4,
                teamA: 'Arizona Diamondbacks',
                teamB: 'Baltimore Orioles',
                time: '01:10 PM',
                date: '2020-09-28',
                stadium: 'Empower Field',
            },
        ]
    },
    {
        cat: IF,
        data: [
            {
                id: 11,
                title: 'Nathan McKinnen LW',
                avgVal: 4,
                teamA: 'Arizona Diamondbacks',
                teamB: 'Baltimore Orioles',
                time: '01:10 PM',
                date: '2020-09-28',
                stadium: 'Empower Field',
                steps: [
                    {
                        titles: ['avg', 'hr', 'rbi', 'fppg'],
                        step: [21, 18, 13, 20.0]
                    },
                    {
                        titles: ['gp', 'g', 'a', 'fppg'],
                        step: [
                            {
                                title: 'last game',
                                values: [1, 0, 0, 14.8],
                            },
                            {
                                title: 'last 10 games',
                                values: [10, 8, 9, 18.8],
                            },
                            {
                                title: '2020-2021',
                                values: [1, 0, 0, 14.8],
                            }
                        ]
                    },
                    {
                        step: {
                            ad: AdImg
                        }
                    }
                ],
            },
            {
                id: 22,
                title: 'Conner McDavid',
                avgVal: 4,
                teamA: 'Arizona Diamondbacks',
                teamB: 'Baltimore Orioles',
                time: '01:10 PM',
                date: '2020-09-28',
                stadium: 'Empower Field',
                isStarPower: true,
                steps: [
                    {
                        titles: ['avg', 'hr', 'rbi', 'fppg'],
                        step: [21, 18, 13, 20.0]
                    },
                    {
                        titles: ['gp', 'g', 'a', 'fppg'],
                        step: [
                            {
                                title: 'last game',
                                values: [1, 0, 0, 14.8],
                            },
                            {
                                title: 'last 10 games',
                                values: [10, 8, 9, 18.8],
                            },
                            {
                                title: '2020-2021',
                                values: [1, 0, 0, 14.8],
                            }
                        ]
                    },
                    {
                        step: {
                            ad: AdImg
                        }
                    }
                ],
            },
            {
                id: 33,
                title: 'Sebastian Aho',
                avgVal: 4,
                teamA: 'Arizona Diamondbacks',
                teamB: 'Baltimore Orioles',
                time: '01:10 PM',
                date: '2020-09-28',
                stadium: 'Empower Field',
                steps: [
                    {
                        titles: ['avg', 'hr', 'rbi', 'fppg'],
                        step: [21, 18, 13, 20.0]
                    },
                    {
                        titles: ['gp', 'g', 'a', 'fppg'],
                        step: [
                            {
                                title: 'last game',
                                values: [1, 0, 0, 14.8],
                            },
                            {
                                title: 'last 10 games',
                                values: [10, 8, 9, 18.8],
                            },
                            {
                                title: '2020-2021',
                                values: [1, 0, 0, 14.8],
                            }
                        ]
                    },
                    {
                        step: {
                            ad: AdImg
                        }
                    }
                ],
            },
            {
                id: 44,
                title: 'Chris Carpenter',
                avgVal: 4,
                teamA: 'Arizona Diamondbacks',
                teamB: 'Baltimore Orioles',
                time: '01:10 PM',
                date: '2020-09-28',
                stadium: 'Empower Field',
            },
        ]
    },
    {
        cat: OF,
        data: [
            {
                id: 55,
                title: 'Nathan McKinnen RW',
                avgVal: 4,
                teamA: 'Arizona Diamondbacks',
                teamB: 'Baltimore Orioles',
                time: '01:10 PM',
                date: '2020-09-28',
                stadium: 'Empower Field',
                steps: [
                    {
                        titles: ['avg', 'hr', 'rbi', 'fppg'],
                        step: [21, 18, 13, 20.0]
                    },
                    {
                        titles: ['gp', 'g', 'a', 'fppg'],
                        step: [
                            {
                                title: 'last game',
                                values: [1, 0, 0, 14.8],
                            },
                            {
                                title: 'last 10 games',
                                values: [10, 8, 9, 18.8],
                            },
                            {
                                title: '2020-2021',
                                values: [1, 0, 0, 14.8],
                            }
                        ]
                    },
                    {
                        step: {
                            ad: AdImg
                        }
                    }
                ],
            },
            {
                id: 66,
                title: 'Conner McDavid',
                avgVal: 4,
                teamA: 'Arizona Diamondbacks',
                teamB: 'Baltimore Orioles',
                time: '01:10 PM',
                date: '2020-09-28',
                stadium: 'Empower Field',
                isStarPower: true,
                steps: [
                    {
                        titles: ['avg', 'hr', 'rbi', 'fppg'],
                        step: [21, 18, 13, 20.0]
                    },
                    {
                        titles: ['gp', 'g', 'a', 'fppg'],
                        step: [
                            {
                                title: 'last game',
                                values: [1, 0, 0, 14.8],
                            },
                            {
                                title: 'last 10 games',
                                values: [10, 8, 9, 18.8],
                            },
                            {
                                title: '2020-2021',
                                values: [1, 0, 0, 14.8],
                            }
                        ]
                    },
                    {
                        step: {
                            ad: AdImg
                        }
                    }
                ],
            },
            {
                id: 77,
                title: 'Sebastian Aho',
                avgVal: 4,
                teamA: 'Arizona Diamondbacks',
                teamB: 'Baltimore Orioles',
                time: '01:10 PM',
                date: '2020-09-28',
                stadium: 'Empower Field',
                steps: [
                    {
                        titles: ['avg', 'hr', 'rbi', 'fppg'],
                        step: [21, 18, 13, 20.0]
                    },
                    {
                        titles: ['gp', 'g', 'a', 'fppg'],
                        step: [
                            {
                                title: 'last game',
                                values: [1, 0, 0, 14.8],
                            },
                            {
                                title: 'last 10 games',
                                values: [10, 8, 9, 18.8],
                            },
                            {
                                title: '2020-2021',
                                values: [1, 0, 0, 14.8],
                            }
                        ]
                    },
                    {
                        step: {
                            ad: AdImg
                        }
                    }
                ],
            },
            {
                id: 88,
                title: 'Chris Carpenter',
                avgVal: 4,
                teamA: 'Arizona Diamondbacks',
                teamB: 'Baltimore Orioles',
                time: '01:10 PM',
                date: '2020-09-28',
                stadium: 'Empower Field',
            },
        ]
    },
    {
        cat: DH,
        data: [
            {
                id: 70,
                title: 'Nathan McKinnen D',
                avgVal: 4,
                teamA: 'Arizona Diamondbacks',
                teamB: 'Baltimore Orioles',
                time: '01:10 PM',
                date: '2020-09-28',
                stadium: 'Empower Field',
                steps: [
                    {
                        titles: ['avg', 'hr', 'rbi', 'fppg'],
                        step: [21, 18, 13, 20.0]
                    },
                    {
                        titles: ['gp', 'g', 'a', 'fppg'],
                        step: [
                            {
                                title: 'last game',
                                values: [1, 0, 0, 14.8],
                            },
                            {
                                title: 'last 10 games',
                                values: [10, 8, 9, 18.8],
                            },
                            {
                                title: '2020-2021',
                                values: [1, 0, 0, 14.8],
                            }
                        ]
                    },
                    {
                        step: {
                            ad: AdImg
                        }
                    }
                ],
            },
            {
                id: 71,
                title: 'Conner McDavid',
                avgVal: 4,
                teamA: 'Arizona Diamondbacks',
                teamB: 'Baltimore Orioles',
                time: '01:10 PM',
                date: '2020-09-28',
                stadium: 'Empower Field',
                isStarPower: true,
                steps: [
                    {
                        titles: ['avg', 'hr', 'rbi', 'fppg'],
                        step: [21, 18, 13, 20.0]
                    },
                    {
                        titles: ['gp', 'g', 'a', 'fppg'],
                        step: [
                            {
                                title: 'last game',
                                values: [1, 0, 0, 14.8],
                            },
                            {
                                title: 'last 10 games',
                                values: [10, 8, 9, 18.8],
                            },
                            {
                                title: '2020-2021',
                                values: [1, 0, 0, 14.8],
                            }
                        ]
                    },
                    {
                        step: {
                            ad: AdImg
                        }
                    }
                ],
            },
            {
                id: 72,
                title: 'Sebastian Aho',
                avgVal: 4,
                teamA: 'Arizona Diamondbacks',
                teamB: 'Baltimore Orioles',
                time: '01:10 PM',
                date: '2020-09-28',
                stadium: 'Empower Field',
                steps: [
                    {
                        titles: ['avg', 'hr', 'rbi', 'fppg'],
                        step: [21, 18, 13, 20.0]
                    },
                    {
                        titles: ['gp', 'g', 'a', 'fppg'],
                        step: [
                            {
                                title: 'last game',
                                values: [1, 0, 0, 14.8],
                            },
                            {
                                title: 'last 10 games',
                                values: [10, 8, 9, 18.8],
                            },
                            {
                                title: '2020-2021',
                                values: [1, 0, 0, 14.8],
                            }
                        ]
                    },
                    {
                        step: {
                            ad: AdImg
                        }
                    }
                ],
            },
            {
                id: 73,
                title: 'Chris Carpenter',
                avgVal: 4,
                teamA: 'Arizona Diamondbacks',
                teamB: 'Baltimore Orioles',
                time: '01:10 PM',
                date: '2020-09-28',
                stadium: 'Empower Field',
            },
        ]
    },
    {
        cat: RP,
        data: [
            {
                id: 74,
                title: 'Nathan McKinnen G',
                avgVal: 4,
                teamA: 'Arizona Diamondbacks',
                teamB: 'Baltimore Orioles',
                time: '01:10 PM',
                date: '2020-09-28',
                stadium: 'Empower Field',
                steps: [
                    {
                        titles: ['ERA', 'W-L', 'k', 'whip', 'fppg'],
                        step: [21, 18, 13, 31, 20.0]
                    },
                    {
                        titles: ['ERA', 'W-L', 'k', 'whip', 'fppg'],
                        step: [
                            {
                                title: 'last game',
                                values: [1, 0, 0, 7, 14.8],
                            },
                            {
                                title: 'last 10 games',
                                values: [10, 8, 9, 39, 18.8],
                            },
                            {
                                title: '2020-2021',
                                values: [1, 0, 0, 7, 14.8],
                            }
                        ]
                    },
                    {
                        step: {
                            ad: AdImg
                        }
                    }
                ],
            },
            {
                id: 75,
                title: 'Conner McDavid',
                avgVal: 4,
                teamA: 'Arizona Diamondbacks',
                teamB: 'Baltimore Orioles',
                time: '01:10 PM',
                date: '2020-09-28',
                stadium: 'Empower Field',
                isStarPower: true,
                steps: [
                    {
                        titles: ['ERA', 'W-L', 'k', 'whip', 'fppg'],
                        step: [21, 18, 13, 31, 20.0]
                    },
                    {
                        titles: ['ERA', 'W-L', 'k', 'whip', 'fppg'],
                        step: [
                            {
                                title: 'last game',
                                values: [1, 0, 0, 7, 14.8],
                            },
                            {
                                title: 'last 10 games',
                                values: [10, 8, 9, 39, 18.8],
                            },
                            {
                                title: '2020-2021',
                                values: [1, 0, 0, 7, 14.8],
                            }
                        ]
                    },
                    {
                        step: {
                            ad: AdImg
                        }
                    }
                ],
            },
            {
                id: 76,
                title: 'Sebastian Aho',
                avgVal: 4,
                teamA: 'Arizona Diamondbacks',
                teamB: 'Baltimore Orioles',
                time: '01:10 PM',
                date: '2020-09-28',
                stadium: 'Empower Field',
                steps: [
                    {
                        titles: ['ERA', 'W-L', 'k', 'whip', 'fppg'],
                        step: [21, 18, 13, 31, 20.0]
                    },
                    {
                        titles: ['ERA', 'W-L', 'k', 'whip', 'fppg'],
                        step: [
                            {
                                title: 'last game',
                                values: [1, 0, 0, 7, 14.8],
                            },
                            {
                                title: 'last 10 games',
                                values: [10, 8, 9, 39, 18.8],
                            },
                            {
                                title: '2020-2021',
                                values: [1, 0, 0, 7, 14.8],
                            }
                        ]
                    },
                    {
                        step: {
                            ad: AdImg
                        }
                    }
                ],
            },
            {
                id: 799,
                title: 'Chris Carpenter',
                avgVal: 4,
                teamA: 'Arizona Diamondbacks',
                teamB: 'Baltimore Orioles',
                time: '01:10 PM',
                date: '2020-09-28',
                stadium: 'Empower Field',
            },
        ]
    },
    {
        cat: D,
        data: [
            {
                id: 78,
                title: 'Nathan McKinnen TD',
                avgVal: 4,
                teamA: 'Arizona Diamondbacks',
                teamB: 'Baltimore Orioles',
                time: '01:10 PM',
                date: '2020-09-28',
                stadium: 'Empower Field',
                steps: [
                    {
                        titles: ['gp', 'g', 'a', 'pts', 'fppg'],
                        step: [21, 18, 13, 31, 20.0]
                    },
                    {
                        titles: ['gp', 'g', 'a', 'pts', 'sog', 'fppg'],
                        step: [
                            {
                                title: 'last game',
                                values: [1, 0, 0, 0, 7, 14.8],
                            },
                            {
                                title: 'last 10 games',
                                values: [10, 8, 9, 17, 39, 18.8],
                            },
                            {
                                title: '2020-2021',
                                values: [1, 0, 0, 0, 7, 14.8],
                            }
                        ]
                    },
                    {
                        step: {
                            ad: AdImg
                        }
                    }
                ],
            },
            {
                id: 79,
                title: 'Conner McDavid',
                avgVal: 4,
                teamA: 'Arizona Diamondbacks',
                teamB: 'Baltimore Orioles',
                time: '01:10 PM',
                date: '2020-09-28',
                stadium: 'Empower Field',
                isStarPower: true,
                steps: [
                    {
                        titles: ['gp', 'g', 'a', 'pts', 'fppg'],
                        step: [21, 18, 13, 31, 20.0]
                    },
                    {
                        titles: ['gp', 'g', 'a', 'pts', 'sog', 'fppg'],
                        step: [
                            {
                                title: 'last game',
                                values: [1, 0, 0, 0, 7, 14.8],
                            },
                            {
                                title: 'last 10 games',
                                values: [10, 8, 9, 17, 39, 18.8],
                            },
                            {
                                title: '2020-2021',
                                values: [1, 0, 0, 0, 7, 14.8],
                            }
                        ]
                    },
                    {
                        step: {
                            ad: AdImg
                        }
                    }
                ],
            },
            {
                id: 80,
                title: 'Tampa Bay Lightening',
                avgVal: 4,
                teamA: 'Arizona Diamondbacks',
                teamB: 'Baltimore Orioles',
                time: '01:10 PM',
                date: '2020-09-28',
                stadium: 'Empower Field',
                steps: [
                    {
                        titles: ['gp', 'g', 'a', 'pts', 'fppg'],
                        step: [21, 18, 13, 31, 20.0]
                    },
                    {
                        titles: ['gp', 'g', 'a', 'pts', 'sog', 'fppg'],
                        step: [
                            {
                                title: 'last game',
                                values: [1, 0, 0, 0, 7, 14.8],
                            },
                            {
                                title: 'last 10 games',
                                values: [10, 8, 9, 17, 39, 18.8],
                            },
                            {
                                title: '2020-2021',
                                values: [1, 0, 0, 0, 7, 14.8],
                            }
                        ]
                    },
                    {
                        step: {
                            ad: AdImg
                        }
                    }
                ],
            },
            {
                id: 81,
                title: 'Columbus Blue Jackets',
                avgVal: 4,
                teamA: 'Arizona Diamondbacks',
                teamB: 'Baltimore Orioles',
                time: '01:10 PM',
                date: '2020-09-28',
                stadium: 'Empower Field',
            },
        ]
    }
]