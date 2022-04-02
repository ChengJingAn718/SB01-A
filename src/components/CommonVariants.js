
const wordVoiceList = [
    ['08', '06', '11'],
    ['15', '16', '18'],

    ['17', '20', '21'],
    ['24', '25', '26'],
    ['29', '30', '31'],
    ['34', '35', '36'],
    ['39', '40', '41'],
    ['44', '45', '46'],
    ['49', '50', '51'],
    ['54', '55', '56'],
]

const letterVoiceList = [
    '08', '13',
    '18', '23',
    '28', '33',
    '38', '43',
    '48', '53',
]

const letterTurnList = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z'
]

export { wordVoiceList, letterVoiceList, letterTurnList }

const maskInfoList = [
    { size: '48% 71%', position: '49.2% 55%' },
    { size: '41% 71%', position: '49.4% 55%' },
    { size: '41% 71%', position: '49.6% 55%' },
    { size: '40% 73%', position: '49.2% 55%' },
    { size: '40.5% 71.5%', position: '49.2% 54.6%' }, //E

    
    { size: '40% 71%', position: '49.3% 55%' },
    { size: '40% 71%', position: '49.3% 55%' },
    { size: '40% 71%', position: '49.3% 55%' },
    { size: '40% 71%', position: '49.3% 55%' },
    { size: '40% 71%', position: '50.5% 55%' },
]
const iconPathList = [
    ['SB01_Alligator_Icon', 'SB01_Ant_Icon', 'SB01_Apple_Icon'],
    ['SB01_Ball_Icon', 'SB01_Banana_Icon', 'SB01_Butterfly_Icon'],
    ['SB01_Carrot_Icon', 'SB01_Cat_Icon', 'SB01_Cupicream_Icon'],


    ['SB03_Boat_Icon', 'SB03_Shell_Icon', 'SB03_Fish_Icon'],
    ['SB03_Rabbit_Icon', 'SB03_Mango_Icon', 'SB03_Flower_Icon'],
    ['SB03_Tent_Icon', 'SB03_Balloon_Icon', 'SB03_Ice_Cream_Icon'],
    ['SB03_Ball_Icon', 'SB03_Bucket_Icon', 'SB03_Spade_Icon'],
    ['SB03_Apple_Icon', 'SB03_Insect_Icon', 'SB03_Leaf_Icon'],
    ['SB03_Frog_Icon', 'SB03_Butterfly_Icon', 'SB03_Mushroom_Icon'],
    ['SB03_Watermelon_Icon', 'SB03_Pumpkin_Icon', 'SB03_Coconut_Icon'],
]
const animtionList = [
    { scale: 0.32, left: 0.335, top: 0.225 }, //A
    { scale: 0.23, left: 0.38, top: 0.24 },  //B
    { scale: 0.27, left: 0.37, top: 0.245 },//C

    { scale: 0.4, left: 0.295, top: 0.16 }, //D
    { scale: 0.4, left: 0.3, top: 0.17 }, //E
    { scale: 0.4, left: 0.295, top: 0.16 },
    { scale: 0.4, left: 0.295, top: 0.16 },
    { scale: 0.4, left: 0.295, top: 0.16 },
    { scale: 0.4, left: 0.295, top: 0.16 },
    { scale: 0.4, left: 0.303, top: 0.16 },
]
const showingLayoutList = [

    [
        {
            wPath: 'SB_01_PI_Alligator',
            s: 1.5, r: -0.25, b: 0.1
        },

        {
            wPath: 'SB_01_PI_Ant',
            s: 1.5, r: -0.25, b: 0.1
        },

        {
            wPath: 'SB_01_PI_Apple',
            s: 1.5, r: -0.25, b: 0.1
        }
    ],
    [
        {
            wPath: 'SB_01_PI_Ball',
            s: 1.5, r: -0.25, b: 0.1
        },

        {
            wPath: 'SB_01_PI_Banana',
            s: 1.5, r: -0.25, b: 0.1
        },

        {
            wPath: 'SB_01_PI_Butterfly',
            s: 1.5, r: -0.25, b: 0.1
        }
    ],

    [
        {
            wPath: 'SB_01_PI_Ball',
            s: 1.5, r: -0.25, b: 0.1
        },

        {
            wPath: 'SB_01_PI_Banana',
            s: 1.5, r: -0.25, b: 0.1
        },

        {
            wPath: 'SB_01_PI_Butterfly',
            s: 1.5, r: -0.25, b: 0.1
        }
    ],

    [
        {
            wPath: 'SB_01_PI_Ball',
            s: 1.5, r: -0.25, b: 0.1
        },

        {
            wPath: 'SB_01_PI_Banana',
            s: 1.5, r: -0.25, b: 0.1
        },

        {
            wPath: 'SB_01_PI_Butterfly',
            s: 1.5, r: -0.25, b: 0.1
        }
    ],

    //E

    [
        {
            wPath: 'SB_01_PI_Ball',
            s: 1.5, r: -0.25, b: 0.1
        },

        {
            wPath: 'SB_01_PI_Banana',
            s: 1.5, r: -0.25, b: 0.1
        },

        {
            wPath: 'SB_01_PI_Butterfly',
            s: 1.5, r: -0.25, b: 0.1
        }
    ],

    

]
const titleList = [
    { path: 'SB_03_NT_TI_01' },
    { path: 'SB_03_NT_TI_02' },
    { path: 'SB_03_NT_TI_03' },
    { path: 'SB_03_NT_TI_04' },
    { path: 'SB_03_NT_TI_05' },
    { path: 'SB_03_NT_TI_06' },
    { path: 'SB_03_NT_TI_07' },
    { path: 'SB_03_NT_TI_08' },
    { path: 'SB_03_NT_TI_09' },
    { path: 'SB_03_NT_TI_10' },
]
const letterPosList = [
    {
        base: { x: 635, y: 370 },
        highlight: [
            { s: 0.38, l: 0.24, t: 0.2 },
            { s: 0.38, l: 0.38, t: 0.2 },
            { s: 0.38, l: 0.31, t: 0.23 },
        ],

        layout: { s: 0.391, l: 0.300, t: 0.1665 },

    },
    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.38, l: 0.23, t: 0.19 },
            { s: 0.38, l: 0.32, t: 0.07 },
            { s: 0.38, l: 0.32, t: 0.28 },
        ],

        layout: { s: 0.398, l: 0.2975, t: 0.1615 },

    },

    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.39, l: 0.305, t: 0.17 },
        ],

        layout: { s: 0.4, l: 0.2975, t: 0.159 },

    },

    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.39, l: 0.205, t: 0.17 },
            { s: 0.39, l: 0.31, t: 0.167 },
        ],

        layout: { s: 0.4, l: 0.295, t: 0.157 },
    },

    //E

    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.39, l: 0.205, t: 0.17 },
            { s: 0.39, l: 0.31, t: 0.167 },
        ],

        layout: { s: 0.4, l: 0.295, t: 0.157 },
    },




]
const lineLengthList =
    [75, 75, 87, 50, 70, 65,
        65, 65, 85, 75];
const firstPosList = [
    [
        { x: 671, y: 154 },
        { x: 644, y: 210, letter_start: true },
        { x: 540, y: 409, letter_start: true },
    ],

    [
        { x: 535, y: 150 },

        { x: 536, y: 220, letter_start: true },
        { x: 555, y: 374, letter_start: true },
    ],

    [
        { x: 803, y: 308 },
    ],

    [
        { x: 504, y: 151 },
        { x: 509, y: 209, letter_start: true },
    ],
    //E
    [
        { x: 504, y: 151 },
        { x: 509, y: 209, letter_start: true },
    ],

]
const movePath = [
    [
        [

            { x: 638, y: 222 },
            { x: 453, y: 572 },
        ],
        [

            { x: 646, y: 224 },
            { x: 817, y: 567 },
        ],
        [
            { x: 571, y: 409 },
            { x: 714, y: 407 },
        ]
    ],

    [
        [

            { x: 535, y: 218 },
            { x: 535, y: 574 },
        ],
        [


            { x: 572, y: 220 },
            { x: 680, y: 218 },
            { x: 708, y: 234 },
            { x: 726, y: 256 },
            { x: 734, y: 288 },
            { x: 728, y: 320 },
            { x: 717, y: 342 },
            { x: 696, y: 360 },
            { x: 678, y: 367 },
            { x: 640, y: 369 },
            { x: 566, y: 369 },
        ],
        [
            { x: 590, y: 371 },
            { x: 685, y: 367 },
            { x: 705, y: 380 },
            { x: 726, y: 407 },
            { x: 734, y: 439 },
            { x: 734, y: 468 },
            { x: 723, y: 490 },
            { x: 705, y: 508 },
            { x: 672, y: 524 },
            { x: 629, y: 526 },
            { x: 555, y: 524 },
        ]
    ],


    [
        [

            { x: 761, y: 262 },
            { x: 703, y: 222 },
            { x: 654, y: 213 },
            { x: 613, y: 221 },
            { x: 570, y: 249 },
            { x: 531, y: 290 },
            { x: 515, y: 339 },
            { x: 511, y: 383 },
            { x: 521, y: 431 },
            { x: 542, y: 473 },
            { x: 570, y: 501 },
            { x: 611, y: 522 },
            { x: 660, y: 528 },
            { x: 703, y: 518 },
            { x: 732, y: 501 },
            { x: 798, y: 447 },
        ],

    ],
    //D
    [
        [

            { x: 506, y: 218 },
            { x: 509, y: 580 },
        ],
        [
            { x: 564, y: 211 },
            { x: 619, y: 215 },
            { x: 664, y: 227 },
            { x: 698, y: 245 },
            { x: 723, y: 271 },
            { x: 743, y: 298 },
            { x: 754, y: 329 },
            { x: 760, y: 363 },
            { x: 758, y: 401 },
            { x: 746, y: 437 },
            { x: 727, y: 466 },
            { x: 704, y: 490 },
            { x: 667, y: 511 },
            { x: 626, y: 521 },
            { x: 587, y: 525 },
            { x: 521, y: 526 },
        ],

    ],
    //E
    [
        [

            { x: 506, y: 218 },
            { x: 509, y: 580 },
        ],
        [
            { x: 564, y: 211 },
            { x: 619, y: 215 },
            { x: 664, y: 227 },
            { x: 698, y: 245 },
            { x: 723, y: 271 },
            { x: 743, y: 298 },
            { x: 754, y: 329 },
            { x: 760, y: 363 },
            { x: 758, y: 401 },
            { x: 746, y: 437 },
            { x: 727, y: 466 },
            { x: 704, y: 490 },
            { x: 667, y: 511 },
            { x: 626, y: 521 },
            { x: 587, y: 525 },
            { x: 521, y: 526 },
        ],

    ],
]
const subObjectList = [
    [7, 650, 200, 30, 100],
    [9, 740, 213, 40, 100]
]
const brushColorList = [
    0x8436ff,
    0xdd35ef,
    0xe84f4f
]

export {
    maskInfoList, iconPathList, animtionList, showingLayoutList, titleList, letterPosList,
    lineLengthList, firstPosList, movePath, subObjectList, brushColorList
}




