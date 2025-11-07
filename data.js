var APP_DATA = {
  "scenes": [
    {
      "id": "0-welcome-area",
      "name": "Welcome Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10244391111035078,
          "pitch": -0.0037187040621944334,
          "rotation": 0,
          "target": "3-main-walkway"
        },
        {
          "yaw": 1.6451940679500483,
          "pitch": -0.02398978377149774,
          "rotation": 0,
          "target": "23-student-lunch-area--breakroom"
        },
        {
          "yaw": -1.6319393003917,
          "pitch": 0.011009862780198887,
          "rotation": 0,
          "target": "1-take-home--waiting-area"
        },
        {
          "yaw": -0.3815065736822483,
          "pitch": 0.008260781399481942,
          "rotation": 0,
          "target": "2-barber-clinic-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-take-home--waiting-area",
      "name": "Take Home / Waiting Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3596,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "2-barber-clinic-floor"
        },
        {
          "yaw": 1.7563782453999695,
          "pitch": 0.028822891989948474,
          "rotation": 0,
          "target": "0-welcome-area"
        },
        {
          "yaw": 0.4979230890011159,
          "pitch": -0.009123505889149897,
          "rotation": 0,
          "target": "3-main-walkway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-barber-clinic-floor",
      "name": "Barber Clinic Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3600,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6572176274269435,
          "pitch": -0.03189801216369759,
          "rotation": 0,
          "target": "1-take-home--waiting-area"
        },
        {
          "yaw": -0.03618254829040879,
          "pitch": -0.0247694436605137,
          "rotation": 0,
          "target": "3-main-walkway"
        },
        {
          "yaw": 1.3548577579839751,
          "pitch": -0.03825949838414289,
          "rotation": 0,
          "target": "0-welcome-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-main-walkway",
      "name": "Main Walkway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3579,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.40390887164094735,
          "pitch": -0.008980168842196434,
          "rotation": 0,
          "target": "4-color-bar"
        },
        {
          "yaw": -1.488198168406372,
          "pitch": -0.025238864672532557,
          "rotation": 0,
          "target": "2-barber-clinic-floor"
        },
        {
          "yaw": -2.7090275050801225,
          "pitch": -0.03806821741979505,
          "rotation": 0,
          "target": "1-take-home--waiting-area"
        },
        {
          "yaw": -3.013326031673266,
          "pitch": -0.03355423022468251,
          "rotation": 0,
          "target": "0-welcome-area"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.4301114904155696,
          "pitch": -0.0724831422427048,
          "title": "the WASH HOUSE",
          "text": "Step into the Wash House — this is where every service begins. Here, Future Professionals shampoo, condition, and prep hair before cutting, coloring, or styling. The environment is designed for relaxation: dim lighting, calming music, and high-quality products. Add-ons like scalp treatments, bond-repair systems, or revitalizing masks help restore hair health before the next step."
        }
      ]
    },
    {
      "id": "4-color-bar",
      "name": "Color Bar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3566.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0903188257313765,
          "pitch": -0.020836713272434082,
          "rotation": 0,
          "target": "5-cosmetology-clinic-floor"
        },
        {
          "yaw": 1.3028737978753497,
          "pitch": -0.012673929603787215,
          "rotation": 0,
          "target": "9-south-east-hallway-student-lockers"
        },
        {
          "yaw": -2.6661738023110235,
          "pitch": 0.0020115913119909123,
          "rotation": 0,
          "target": "3-main-walkway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.0865794675529106,
          "pitch": -0.017332857760692377,
          "title": "the COLOR BAR",
          "text": "The Color Bar is where creativity meets precision. In this station, students apply single-process color, balayage, foils, toners, or corrective color — all under instructor supervision. It’s fully stocked with a wide spectrum of professional color lines, developer formulas, mixing bowls, and color-safe tools. This is the heart of modern hair transformation."
        }
      ]
    },
    {
      "id": "5-cosmetology-clinic-floor",
      "name": "Cosmetology Clinic Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3531.5,
      "initialViewParameters": {
        "yaw": 3.137739746432734,
        "pitch": -0.008517077996611278,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.137739746432734,
          "pitch": -0.008517077996611278,
          "rotation": 0,
          "target": "6-back-cosmetology-clinic-floor--pedicure-stations"
        },
        {
          "yaw": -0.003887538615980901,
          "pitch": -0.03635905954060803,
          "rotation": 0,
          "target": "4-color-bar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-back-cosmetology-clinic-floor--pedicure-stations",
      "name": "Back Cosmetology Clinic Floor / Pedicure Stations",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3549,
      "initialViewParameters": {
        "yaw": -0.8148188757640185,
        "pitch": -0.013107466758933484,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.04855994639242489,
          "pitch": -0.014934533168183606,
          "rotation": 0,
          "target": "5-cosmetology-clinic-floor"
        },
        {
          "yaw": -1.5560981037015829,
          "pitch": -0.026285095348352883,
          "rotation": 0,
          "target": "7-manicure-clinic-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-manicure-clinic-floor",
      "name": "Manicure Clinic Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3612.5,
      "initialViewParameters": {
        "yaw": -0.6318687173780386,
        "pitch": 0.09040608430607477,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5768946334534437,
          "pitch": -0.04922623728401199,
          "rotation": 0,
          "target": "6-back-cosmetology-clinic-floor--pedicure-stations"
        },
        {
          "yaw": -1.3898320974034242,
          "pitch": 0.031176711697312953,
          "rotation": 0,
          "target": "8-guest-artist"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-guest-artist",
      "name": "Guest Artist",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3549,
      "initialViewParameters": {
        "yaw": 3.1329505988947624,
        "pitch": 0.13551788403482945,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7336015182232405,
          "pitch": -0.046937912759364764,
          "rotation": 0,
          "target": "7-manicure-clinic-floor"
        },
        {
          "yaw": -2.0738956323477726,
          "pitch": -0.0023996865264770406,
          "rotation": 0,
          "target": "9-south-east-hallway-student-lockers"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.0454897904611133,
          "pitch": -0.15938342931593752,
          "title": "Guest Artist",
          "text": "Here, educators and industry pros teach, demo, and inspire with special classes, trend workshops, and elevated technique sessions. Students get front-row seats to high-level instruction and live demonstrations on cutting-edge styles, editorial looks, and advanced color methods."
        }
      ]
    },
    {
      "id": "9-south-east-hallway-student-lockers",
      "name": "South East Hallway (Student Lockers)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3611,
      "initialViewParameters": {
        "yaw": -1.5655262919801665,
        "pitch": 0.052988034834079656,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.039232211268959816,
          "pitch": -0.0018677184751432208,
          "rotation": 0,
          "target": "4-color-bar"
        },
        {
          "yaw": 2.0056109125170867,
          "pitch": -0.029065780854962142,
          "rotation": 0,
          "target": "8-guest-artist"
        },
        {
          "yaw": -1.5559163257659954,
          "pitch": 0.006884600984541578,
          "rotation": 0,
          "target": "11-south-east-hallway-esthetician-entrance"
        },
        {
          "yaw": -0.8454363098035245,
          "pitch": -0.0018134194250443159,
          "rotation": 0,
          "target": "10-barber--manicurist-theory-classroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-barber--manicurist-theory-classroom",
      "name": "Barber / Manicurist Theory Classroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3580,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3718448736239512,
          "pitch": 0.004682533500028896,
          "rotation": 0,
          "target": "9-south-east-hallway-student-lockers"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-south-east-hallway-esthetician-entrance",
      "name": "South East Hallway (Esthetician Entrance)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3582,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.599062923458776,
          "pitch": -0.01255488423968032,
          "rotation": 0,
          "target": "12-esthetician-main-hallway"
        },
        {
          "yaw": 0.017557114405828855,
          "pitch": 0.005876637198536372,
          "rotation": 0,
          "target": "20-cosmetology-core-entrance--manicurist-core-entrance"
        },
        {
          "yaw": 3.0820931837866343,
          "pitch": -0.02979107041928053,
          "rotation": 0,
          "target": "9-south-east-hallway-student-lockers"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-esthetician-main-hallway",
      "name": "Esthetician Main Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3672,
      "initialViewParameters": {
        "yaw": -3.138528484057,
        "pitch": 0.060298121084446876,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.022426178977347888,
          "pitch": -0.0037373602143659923,
          "rotation": 0,
          "target": "17-esthetician-north-east-hallway"
        },
        {
          "yaw": -3.1374622728945187,
          "pitch": -0.06845703357804389,
          "rotation": 0,
          "target": "14-esthetician-north-west-hallway"
        },
        {
          "yaw": 2.6898915711892943,
          "pitch": -0.04625557039899775,
          "rotation": 0,
          "target": "13-esthetician-clinic-floor"
        },
        {
          "yaw": 1.5486298355912025,
          "pitch": -0.008268677386972456,
          "rotation": 0,
          "target": "11-south-east-hallway-esthetician-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-esthetician-clinic-floor",
      "name": "Esthetician Clinic Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3553.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "14-esthetician-north-west-hallway"
        },
        {
          "yaw": -3.103672808261976,
          "pitch": -0.012971110583880119,
          "rotation": 0,
          "target": "12-esthetician-main-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-esthetician-north-west-hallway",
      "name": "Esthetician North West Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3558.5,
      "initialViewParameters": {
        "yaw": -3.1021067099235875,
        "pitch": 0.026370136665349264,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0619078841847482,
          "pitch": 0.06061699674780208,
          "rotation": 0,
          "target": "16-wax-room"
        },
        {
          "yaw": 1.6999690461814412,
          "pitch": 0.05152515279140779,
          "rotation": 0,
          "target": "13-esthetician-clinic-floor"
        },
        {
          "yaw": -1.0292266954721079,
          "pitch": 0.007308636813256442,
          "rotation": 0,
          "target": "15-esthetician-theory-classroom"
        },
        {
          "yaw": 0.02667777855619846,
          "pitch": -0.022771715405689008,
          "rotation": 0,
          "target": "12-esthetician-main-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-esthetician-theory-classroom",
      "name": "Esthetician Theory Classroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3530,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": -0.007476496898389584,
          "rotation": 0,
          "target": "14-esthetician-north-west-hallway"
        },
        {
          "yaw": -3.1039301755284097,
          "pitch": -0.013529767975130724,
          "rotation": 0,
          "target": "17-esthetician-north-east-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-wax-room",
      "name": "Wax Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3622,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.016210055222505,
          "pitch": 0.1319444597791346,
          "rotation": 0,
          "target": "14-esthetician-north-west-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5358480138531725,
          "pitch": 0.016148371999792133,
          "title": "Wax Room",
          "text": "The Wax Room is a quiet, controlled space for hair removal and skin services. Students practice waxing (legs, brows, face, body), post-wax care, and skin preparation techniques. It’s equipped with wax heaters, consumables, safety supplies, and hygiene stations to ensure clean, safe services."
        }
      ]
    },
    {
      "id": "17-esthetician-north-east-hallway",
      "name": "Esthetician North East Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3537.5,
      "initialViewParameters": {
        "yaw": 3.0764397062187907,
        "pitch": 0.023486419005880776,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0764397062187907,
          "pitch": 0.023486419005880776,
          "rotation": 0,
          "target": "19-esthetician-core-classroom"
        },
        {
          "yaw": 2.0198617644967456,
          "pitch": 0.08252941611011266,
          "rotation": 0,
          "target": "18-admissions-classroom"
        },
        {
          "yaw": 0.9688597988496319,
          "pitch": 0.08099279198681586,
          "rotation": 0,
          "target": "15-esthetician-theory-classroom"
        },
        {
          "yaw": 0.015457605105456906,
          "pitch": -0.0014609386286661419,
          "rotation": 0,
          "target": "12-esthetician-main-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-admissions-classroom",
      "name": "Admissions Classroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3579.5,
      "initialViewParameters": {
        "yaw": 2.8865486947279466,
        "pitch": 0.04110339692278231,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.479990944674496,
          "pitch": 0.0022682325914580304,
          "rotation": 0,
          "target": "17-esthetician-north-east-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-esthetician-core-classroom",
      "name": "Esthetician Core Classroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.49333295676528266,
        "pitch": 0.024344658981878098,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6090921726275305,
          "pitch": 0.006468018282497212,
          "rotation": 0,
          "target": "17-esthetician-north-east-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-cosmetology-core-entrance--manicurist-core-entrance",
      "name": "Cosmetology Core Entrance / Manicurist Core Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2571.5,
      "initialViewParameters": {
        "yaw": -1.5624617932846263,
        "pitch": 0.008808203701665462,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5715275444522945,
          "pitch": -0.02530900262895841,
          "rotation": 0,
          "target": "21-student-hallway"
        },
        {
          "yaw": 1.5538908266570495,
          "pitch": -0.03447176320876366,
          "rotation": 0,
          "target": "11-south-east-hallway-esthetician-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5307438677529568,
          "pitch": -0.00161202221967649,
          "title": "Manicuring Classroom",
          "text": "In the Manicuring Classroom, students learn nail artistry from base to tip. You’ll see stations equipped for manicures, pedicures, gel and acrylic work, nail art, hand care, sanitizing stations, and retail nail-care displays. It’s a clinical but creative environment where precision meets design."
        },
        {
          "yaw": 0.6188340507045069,
          "pitch": -1.4555006089267408e-9,
          "title": "Cosmetology Classroom",
          "text": "This is the main hub of a student’s journey — the Cosmetology Classroom. Here, future professionals train in cutting, styling, chemical services (color, texture), haircutting theory, and more. Every station includes mirrors, styling tools, product back-bars, and work surfaces. Instructors circulate to coach, demo, and correct technique."
        }
      ]
    },
    {
      "id": "21-student-hallway",
      "name": "Student Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3562.5,
      "initialViewParameters": {
        "yaw": -2.1817048636896548,
        "pitch": 0.03784265294044431,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.01617086405419066,
          "pitch": -0.00440856797825262,
          "rotation": 0,
          "target": "23-student-lunch-area--breakroom"
        },
        {
          "yaw": -2.5323063146314784,
          "pitch": 0.015168698237360445,
          "rotation": 0,
          "target": "22-avanti-breakroom"
        },
        {
          "yaw": 1.6197029667582825,
          "pitch": -0.03639941584411055,
          "rotation": 0,
          "target": "20-cosmetology-core-entrance--manicurist-core-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-avanti-breakroom",
      "name": "Avanti Breakroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.5282077859642254,
        "pitch": -0.16409729183139987,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.386792217901167,
          "pitch": 0.0030367363571901507,
          "rotation": 0,
          "target": "21-student-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-student-lunch-area--breakroom",
      "name": "Student Lunch Area / Breakroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3631.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.08926140581695563,
          "pitch": -0.03291426759440341,
          "rotation": 0,
          "target": "21-student-hallway"
        },
        {
          "yaw": -3.0875977742336644,
          "pitch": -0.017147839660687225,
          "rotation": 0,
          "target": "0-welcome-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Paul Mitchell School - Modesto",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
