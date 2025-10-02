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
        "yaw": 0.13962713174021957,
        "pitch": 0.04323440701564607,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.4198237290169189,
          "pitch": 0.017826764067898182,
          "rotation": 0,
          "target": "2-barber-clinic-floor"
        },
        {
          "yaw": -1.6591986168320574,
          "pitch": 0.022664218054957885,
          "rotation": 0,
          "target": "1-customer-retail--waiting-area"
        },
        {
          "yaw": 1.639662618735528,
          "pitch": -0.008431779648278237,
          "rotation": 0,
          "target": "23-student-lunch-area--breakroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-customer-retail--waiting-area",
      "name": "Customer Retail / Waiting area",
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
          "yaw": 0.006188093978405362,
          "pitch": -0.003045363990462846,
          "rotation": 0,
          "target": "2-barber-clinic-floor"
        },
        {
          "yaw": 1.7221932918113954,
          "pitch": 0.034142146659693395,
          "rotation": 0,
          "target": "0-welcome-area"
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
        "yaw": 0.6847035801204697,
        "pitch": 0.15414005979491208,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.042282636589984435,
          "pitch": -0.011826608118774118,
          "rotation": 0,
          "target": "3-main-walkway"
        },
        {
          "yaw": 1.6497165262740374,
          "pitch": -0.02455833909613858,
          "rotation": 0,
          "target": "1-customer-retail--waiting-area"
        },
        {
          "yaw": 1.3373774427689007,
          "pitch": -0.02189288331342354,
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
          "yaw": 0.40341346377461207,
          "pitch": -0.003494176337284216,
          "rotation": 0,
          "target": "4-color-bar"
        },
        {
          "yaw": -1.510410988045237,
          "pitch": -0.021387110075774984,
          "rotation": 0,
          "target": "2-barber-clinic-floor"
        },
        {
          "yaw": -3.0020750916462564,
          "pitch": -0.01744872740574266,
          "rotation": 0,
          "target": "0-welcome-area"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.4138167779305153,
          "pitch": -0.10476886734073076,
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
          "yaw": -2.6866323570152595,
          "pitch": -0.0012797774900654701,
          "rotation": 0,
          "target": "3-main-walkway"
        },
        {
          "yaw": -0.08985169639948687,
          "pitch": -0.014719629103984389,
          "rotation": 0,
          "target": "5-cosmetology-clinic-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-cosmetology-clinic-floor",
      "name": "Cosmetology Clinic floor",
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
        "yaw": 3.1250626245784723,
        "pitch": 0.06341945120685466,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.0071179125493578965,
          "pitch": -0.014144932300482083,
          "rotation": 0,
          "target": "4-color-bar"
        },
        {
          "yaw": 3.110097601518995,
          "pitch": -0.025503192050635448,
          "rotation": 0,
          "target": "6-back-cosmetology-clinic-floor--pedicure-stations"
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
        "yaw": -0.7290106029484029,
        "pitch": 0.022557081921206645,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.041578084428163464,
          "pitch": -0.024824547617081194,
          "rotation": 0,
          "target": "5-cosmetology-clinic-floor"
        },
        {
          "yaw": -1.537006859150356,
          "pitch": -0.02633028555332828,
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
        "yaw": -0.813685298379518,
        "pitch": 0.09809330232747548,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.5831122948505278,
          "pitch": -0.03171297018986152,
          "rotation": 0,
          "target": "6-back-cosmetology-clinic-floor--pedicure-stations"
        },
        {
          "yaw": -1.35961519898499,
          "pitch": 0.02414374991196766,
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
        "yaw": -3.129628440378875,
        "pitch": 0.1085154828313506,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -2.0615102855738723,
          "pitch": -0.004893919631886234,
          "rotation": 0,
          "target": "9-south-east-hallway-student-lockers"
        },
        {
          "yaw": 0.7258857467493378,
          "pitch": -0.014110341185789466,
          "rotation": 0,
          "target": "7-manicure-clinic-floor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.0458373572424087,
          "pitch": -0.16777174979038278,
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
        "yaw": -0.9493371639446391,
        "pitch": 0.09520159692888264,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.8277287121977643,
          "pitch": 0.011951597926451285,
          "rotation": 0,
          "target": "10-barber--manicurist-theory-classroom"
        },
        {
          "yaw": -1.571733220389504,
          "pitch": 0.015747172635515838,
          "rotation": 0,
          "target": "11-south-east-hallway-esthetician-entrance"
        },
        {
          "yaw": 1.978916826577919,
          "pitch": 0.0011233283054856713,
          "rotation": 0,
          "target": "8-guest-artist"
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
        "yaw": -0.41619389855249267,
        "pitch": 0.22369106238529923,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 2.3779779867021027,
          "pitch": -0.014448039928669942,
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
          "yaw": 0.020998215440457102,
          "pitch": -0.0065780065759302175,
          "rotation": 0,
          "target": "20-cosmetology-core-entrance--manicurist-core-entrance"
        },
        {
          "yaw": -1.6033939496574483,
          "pitch": -0.008896306944283339,
          "rotation": 0,
          "target": "12-esthetician-main-hallway"
        },
        {
          "yaw": 3.1061655751291557,
          "pitch": -0.011701465336013683,
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
        "yaw": -3.0707827739400138,
        "pitch": 0.009521564586485454,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -3.132837310993704,
          "pitch": -0.06570882729595517,
          "rotation": 0,
          "target": "14-esthetician-north-west-hallway"
        },
        {
          "yaw": 2.684095565774798,
          "pitch": -0.05306114939617679,
          "rotation": 0,
          "target": "13-esthetician-clinic-floor"
        },
        {
          "yaw": 0.03032295796233697,
          "pitch": 0.011492863680095056,
          "rotation": 0,
          "target": "17-esthetician-north-east-hallway-"
        },
        {
          "yaw": 1.5475066886499365,
          "pitch": -0.008345258250052723,
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
          "yaw": 0.8042524493061158,
          "pitch": 0.03983959354506972,
          "rotation": 0,
          "target": "14-esthetician-north-west-hallway"
        },
        {
          "yaw": 2.8016087618062206,
          "pitch": -0.023920168850352752,
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
        "yaw": -3.0488368282111225,
        "pitch": 0.04952525154276444,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -3.071029418265036,
          "pitch": 0.016224868762648725,
          "rotation": 0,
          "target": "16-wax-room"
        },
        {
          "yaw": -1.0128907827256697,
          "pitch": 0.010007790548032247,
          "rotation": 0,
          "target": "15-esthetician-theory-classroom"
        },
        {
          "yaw": 0.033268126347186566,
          "pitch": -0.00386926102279439,
          "rotation": 0,
          "target": "12-esthetician-main-hallway"
        },
        {
          "yaw": 1.7069300963583744,
          "pitch": 0.05639080688431086,
          "rotation": 0,
          "target": "13-esthetician-clinic-floor"
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
          "yaw": 0.014796806634564064,
          "pitch": -0.01558985097864607,
          "rotation": 0,
          "target": "14-esthetician-north-west-hallway"
        },
        {
          "yaw": -2.8265275043627742,
          "pitch": -0.00002221931583079595,
          "rotation": 0,
          "target": "17-esthetician-north-east-hallway-"
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
        "yaw": -0.4509742702265278,
        "pitch": 0.1283215555515973,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 2.9469835325253397,
          "pitch": 0.01914919273094995,
          "rotation": 0,
          "target": "14-esthetician-north-west-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.45180570011912025,
          "pitch": -0.008218115481842148,
          "title": "Wax Room",
          "text": "The Wax Room is a quiet, controlled space for hair removal and skin services. Students practice waxing (legs, brows, face, body), post-wax care, and skin preparation techniques. It’s equipped with wax heaters, consumables, safety supplies, and hygiene stations to ensure clean, safe services."
        }
      ]
    },
    {
      "id": "17-esthetician-north-east-hallway-",
      "name": "Esthetician North East Hallway ",
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
        "yaw": -3.13841932767707,
        "pitch": 0.0613517891387243,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.023410652750033734,
          "pitch": -0.005684607434783828,
          "rotation": 0,
          "target": "12-esthetician-main-hallway"
        },
        {
          "yaw": 0.9672889483277416,
          "pitch": 0.06616452754993496,
          "rotation": 0,
          "target": "15-esthetician-theory-classroom"
        },
        {
          "yaw": 1.9977862248678315,
          "pitch": 0.06345855205184492,
          "rotation": 0,
          "target": "18-admissions-office"
        },
        {
          "yaw": 3.0724263618372802,
          "pitch": -0.01115578953248253,
          "rotation": 0,
          "target": "19-esthetician-core-classroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-admissions-office",
      "name": "Admissions Office",
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
        "yaw": 2.6366676804778653,
        "pitch": 0.11550430146322377,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 2.4788018463471255,
          "pitch": 0.020055695164167275,
          "rotation": 0,
          "target": "17-esthetician-north-east-hallway-"
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
        "yaw": -0.4515870394566548,
        "pitch": 0.16009493820850196,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.606314916969641,
          "pitch": 0.024371846528531194,
          "rotation": 0,
          "target": "17-esthetician-north-east-hallway-"
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
        "yaw": -1.5269322563418548,
        "pitch": 0.01661595030817331,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.5425817418418841,
          "pitch": 0.0026228252681086417,
          "rotation": 0,
          "target": "11-south-east-hallway-esthetician-entrance"
        },
        {
          "yaw": -1.5523812756150956,
          "pitch": -0.005609839057942878,
          "rotation": 0,
          "target": "21-student-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5745729321316393,
          "pitch": 0.007200977529800312,
          "title": "Cosmetology Classroom",
          "text": "This is the main hub of a student’s journey — the Cosmetology Classroom. Here, future stylists train in cutting, styling, chemical services (color, texture), haircutting theory, and more. Every station includes mirrors, styling tools, product back-bars, and work surfaces. Instructors circulate to coach, demo, and correct technique."
        },
        {
          "yaw": -0.5302398439372453,
          "pitch": -0.00346987400823906,
          "title": "Manicuring Classroom",
          "text": "In the Manicuring Classroom, students learn nail artistry from base to tip. You’ll see stations equipped for manicures, pedicures, gel and acrylic work, nail art, hand care, sanitizing stations, and retail nail-care displays. It’s a clinical but creative environment where precision meets design."
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
        "yaw": 0.7674666862057045,
        "pitch": 0.03131588561161003,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.0913122150279051,
          "pitch": -0.018797568267672204,
          "rotation": 0,
          "target": "23-student-lunch-area--breakroom"
        },
        {
          "yaw": 1.5880787571082635,
          "pitch": -0.01020003544982373,
          "rotation": 0,
          "target": "20-cosmetology-core-entrance--manicurist-core-entrance"
        },
        {
          "yaw": -2.5398727850995115,
          "pitch": 0.02450608540383925,
          "rotation": 0,
          "target": "22-avanti-breakroom"
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
        "yaw": -0.35085204898567035,
        "pitch": -0.1545659775156487,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 2.383908685970619,
          "pitch": 0.022468413901597373,
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
        "yaw": -0.5926837679280368,
        "pitch": 0.1865668970257648,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.10828730348711346,
          "pitch": -0.027496934158099506,
          "rotation": 0,
          "target": "21-student-hallway"
        },
        {
          "yaw": -3.0872147460630064,
          "pitch": -0.013183251028479503,
          "rotation": 0,
          "target": "0-welcome-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Paul Mitchell School Modesto 360 Virtual Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
