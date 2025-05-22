const buildingData = {
  hq: {
    1: {
      prerequisites: { "大溶鉱炉": 10, "大使館": 1 },
      cost: { meat: 80, wood: 0, coal: 0, iron: 0 },
      time: 2, // "00:00:02" → 2秒
      power: 280
    },
    2: {
      prerequisites: { "大溶鉱炉": 10, "大使館": 2 },
      cost: { meat: 125, wood: 0, coal: 0, iron: 0 },
      time: 8, // "00:00:08" → 8秒
      power: 532
    },
    3: {
      prerequisites: { "大溶鉱炉": 10, "大使館": 3 },
      cost: { meat: 565, wood: 0, coal: 0, iron: 0 },
      time: 35, // "00:00:35" → 35秒
      power: 910
    },
    4: {
      prerequisites: { "大溶鉱炉": 10, "大使館": 4 },
      cost: { meat: 1200, wood: 250, coal: 0, iron: 0 },
      time: 105, // "00:01:45" → 105秒
      power: 1414
    },
    5: {
      prerequisites: { "大溶鉱炉": 10, "大使館": 5 },
      cost: { meat: 5300, wood: 1000, coal: 0, iron: 0 },
      time: 215, // "00:03:35" → 215秒
      power: 2170
    },
    6: {
      prerequisites: { "大溶鉱炉": 10, "大使館": 6 },
      cost: { meat: 13000, wood: 2600, coal: 670, iron: 0 },
      time: 430, // "00:07:10" → 430秒
      power: 3304
    },
    7: {
      prerequisites: { "大溶鉱炉": 10, "大使館": 7 },
      cost: { meat: 48000, wood: 9600, coal: 2400, iron: 0 },
      time: 840, // "00:14:00" → 840秒
      power: 4942
    },
    8: {
      prerequisites: { "大溶鉱炉": 10, "大使館": 8 },
      cost: { meat: 88000, wood: 17000, coal: 4400, iron: 0 },
      time: 1260, // "00:21:00" → 1260秒
      power: 6580
    },
    9: {
      prerequisites: { "大溶鉱炉": 10, "大使館": 9 },
      cost: { meat: 180000, wood: 36000, coal: 9100, iron: 0 },
      time: 1920, // "00:32:00" → 1920秒
      power: 8218
    },
    10: {
      prerequisites: { "大溶鉱炉": 10, "大使館": 10 },
      cost: { meat: 320000, wood: 64000, coal: 16000, iron: 0 },
      time: 2580, // "00:43:00" → 2580秒
      power: 10598
    },
    11: {
      prerequisites: { "大溶鉱炉": 11, "大使館": 11 },
      cost: { meat: 390000, wood: 390000, coal: 79000, iron: 19000 },
      time: 3240, // "00:54:00" → 3240秒
      power: 12978
    },
    12: {
      prerequisites: { "大溶鉱炉": 12, "大使館": 12 },
      cost: { meat: 500000, wood: 500000, coal: 100000, iron: 25000 },
      time: 3870, // "01:04:30" → 3870秒
      power: 15358
    },
    13: {
      prerequisites: { "大溶鉱炉": 13, "大使館": 13 },
      cost: { meat: 710000, wood: 710000, coal: 140000, iron: 35000 },
      time: 4740, // "01:19:00" → 4740秒
      power: 19376
    },
    14: {
      prerequisites: { "大溶鉱炉": 14, "大使館": 14 },
      cost: { meat: 940000, wood: 940000, coal: 180000, iron: 47000 },
      time: 6030, // "01:40:30" → 6030秒
      power: 23394
    },
    15: {
      prerequisites: { "大溶鉱炉": 15, "大使館": 15 },
      cost: { meat: 1300000, wood: 1300000, coal: 270000, iron: 69000 },
      time: 7770, // "02:09:30" → 7770秒
      power: 27412
    },
    16: {
      prerequisites: { "大溶鉱炉": 16, "大使館": 16 },
      cost: { meat: 1700000, wood: 1700000, coal: 350000, iron: 89000 },
      time: 13140, // "03:39:00" → 13140秒
      power: 33068
    },
    17: {
      prerequisites: { "大溶鉱炉": 17, "大使館": 17 },
      cost: { meat: 2700000, wood: 2700000, coal: 550000, iron: 130000 },
      time: 15780, // "04:23:00" → 15780秒
      power: 38724
    },
    18: {
      prerequisites: { "大溶鉱炉": 18, "大使館": 18 },
      cost: { meat: 3700000, wood: 3700000, coal: 750000, iron: 180000 },
      time: 18960, // "05:16:00" → 18960秒
      power: 44380
    },
    19: {
      prerequisites: { "大溶鉱炉": 19, "大使館": 19 },
      cost: { meat: 4700000, wood: 4700000, coal: 940000, iron: 230000 },
      time: 28440, // "07:54:00" → 28440秒
      power: 52416
    },
    20: {
      prerequisites: { "大溶鉱炉": 20, "大使館": 20 },
      cost: { meat: 6400000, wood: 6400000, coal: 1200000, iron: 320000 },
      time: 35550, // "09:52:30" → 35550秒
      power: 60452
    },
    21: {
      prerequisites: { "大溶鉱炉": 21, "大使館": 21 },
      cost: { meat: 8100000, wood: 8100000, coal: 1600000, iron: 400000 },
      time: 46200, // "12:50:00" → 46200秒
      power: 68488
    },
    22: {
      prerequisites: { "大溶鉱炉": 22, "大使館": 22 },
      cost: { meat: 10000000, wood: 10000000, coal: 2100000, iron: 540000 },
      time: 69330, // "19:15:30" → 69330秒
      power: 80542
    },
    23: {
      prerequisites: { "大溶鉱炉": 23, "大使館": 23 },
      cost: { meat: 13000000, wood: 13000000, coal: 2600000, iron: 670000 },
      time: 97020, // "1d 02:57:00" → 97020秒
      power: 92596
    },
    24: {
      prerequisites: { "大溶鉱炉": 24, "大使館": 24 },
      cost: { meat: 18000000, wood: 18000000, coal: 3600000, iron: 900000 },
      time: 135840, // "1d 13:44:00" → 135840秒
      power: 104650
    },
    25: {
      prerequisites: { "大溶鉱炉": 25, "大使館": 25 },
      cost: { meat: 24000000, wood: 24000000, coal: 4900000, iron: 1200000 },
      time: 190200, // "2d 04:50:00" → 190200秒
      power: 116704
    },
    26: {
      prerequisites: { "大溶鉱炉": 26, "大使館": 26 },
      cost: { meat: 31000000, wood: 31000000, coal: 6300000, iron: 1500000 },
      time: 218760, // "2d 12:46:00" → 218760秒
      power: 134414
    },
    27: {
      prerequisites: { "大溶鉱炉": 27, "大使館": 27 },
      cost: { meat: 44000000, wood: 44000000, coal: 8900000, iron: 2200000 },
      time: 262500, // "3d 00:55:00" → 262500秒
      power: 152124
    },
    28: {
      prerequisites: { "大溶鉱炉": 28, "大使館": 28 },
      cost: { meat: 59000000, wood: 59000000, coal: 11000000, iron: 2900000 },
      time: 301860, // "3d 11:51:00" → 301860秒
      power: 169834
    },
    29: {
      prerequisites: { "大溶鉱炉": 29, "大使館": 29 },
      cost: { meat: 73000000, wood: 73000000, coal: 18000000, iron: 4500000 },
      time: 347160, // "4d 00:26:00" → 347160秒
      power: 187544
    },
    30: {
      prerequisites: { "大溶鉱炉": 30, "大使館": 30 },
      cost: { meat: 90000000, wood: 90000000, coal: 18000000, iron: 4500000 },
      time: 416640, // "4d 19:44:00" → 416640秒
      power: 213290
    }
  }


};
