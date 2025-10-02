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
        "yaw": 0.23187945776496122,
        "pitch": 0.041422993990426704,
        "fov": 1.0841904824255306
      },
      "linkHotspots": [
        {
          "yaw": 0.08604826294835632,
          "pitch": -0.023270614108188425,
          "rotation": 0,
          "target": "3-main-walkway"
        },
        {
          "yaw": -0.4231616369197777,
          "pitch": -0.024977978898874653,
          "rotation": 0,
          "target": "2-barber-clinic-floor"
        },
        {
          "yaw": -1.630023561034065,
          "pitch": -0.0010171961509239935,
          "rotation": 0,
          "target": "1-customer-retail--waiting-area"
        },
        {
          "yaw": 1.6337013004430583,
          "pitch": -0.03277359744666164,
          "rotation": 0,
          "target": "20-cosmetology-core-entrance--manicurist-core-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-customer-retail--waiting-area",
      "name": "Customer Retail / Waiting Area",
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
          "yaw": 1.7255425266087263,
          "pitch": 0.01507182568006904,
          "rotation": 0,
          "target": "0-welcome-area"
        },
        {
          "yaw": 0.4336122453703659,
          "pitch": -0.008321044193417393,
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
          "yaw": -0.008146162632382214,
          "pitch": -0.023238418782920434,
          "rotation": 0,
          "target": "3-main-walkway"
        },
        {
          "yaw": 1.6498033085018093,
          "pitch": -0.0254447649543863,
          "rotation": 0,
          "target": "1-customer-retail--waiting-area"
        },
        {
          "yaw": 1.3274672977979236,
          "pitch": -0.029569847716846454,
          "rotation": 0,
          "target": "0-welcome-area"
        },
        {
          "yaw": -0.6858310099376723,
          "pitch": -0.028476609139911346,
          "rotation": 0,
          "target": "4-color-bar"
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
          "yaw": 0.38298459343310043,
          "pitch": -0.018532731464066643,
          "rotation": 0,
          "target": "4-color-bar"
        },
        {
          "yaw": -1.5837972953025847,
          "pitch": -0.029928723185161488,
          "rotation": 0,
          "target": "2-barber-clinic-floor"
        },
        {
          "yaw": -2.729451466902903,
          "pitch": -0.04787498387615052,
          "rotation": 0,
          "target": "1-customer-retail--waiting-area"
        },
        {
          "yaw": -3.018588998132392,
          "pitch": -0.04079288249159241,
          "rotation": 0,
          "target": "0-welcome-area"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.41360906127073,
          "pitch": -0.03940439877420587,
          "title": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; background-color: rgb(103, 115, 131);\">the WASH HOUSE</span>",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: rgb(58, 68, 84);\">Step into the Wash House — this is where every service begins. Here, Future Professionals shampoo, condition, and prep hair before cutting, coloring, or styling. The environment is designed for relaxation: dim lighting, calming music, and high-quality products. Add-ons like scalp treatments, bond-repair systems, or revitalizing masks help restore hair health before the next step.</span>"
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
          "yaw": -0.07850767982527529,
          "pitch": -0.03429037192779916,
          "rotation": 0,
          "target": "5-cosmetology-clinic-floor"
        },
        {
          "yaw": 1.3014235197804993,
          "pitch": -0.028963731717222885,
          "rotation": 0,
          "target": "9-south-east-hallway-student-lockers"
        },
        {
          "yaw": -2.7629524629647797,
          "pitch": 0.002619569535546873,
          "rotation": 0,
          "target": "3-main-walkway"
        },
        {
          "yaw": 0.4536690646910877,
          "pitch": -0.03819814042520875,
          "rotation": 0,
          "target": "7-manicure-clinic-floor"
        },
        {
          "yaw": -2.377128474266126,
          "pitch": 0.0034892157207515595,
          "rotation": 0,
          "target": "2-barber-clinic-floor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.106625705433988,
          "pitch": -0.061271544372662134,
          "title": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; background-color: rgb(103, 115, 131);\">the COLOR BAR</span>",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: rgb(58, 68, 84);\">The Color Bar is where creativity meets precision. In this station, students apply single-process color, balayage, foils, toners, or corrective color — all under instructor supervision. It’s fully stocked with a wide spectrum of professional color lines, developer formulas, mixing bowls, and color-safe tools. This is the heart of modern hair transformation.</span>"
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
        "yaw": 3.117124175445791,
        "pitch": 0.022126698720583704,
        "fov": 1.0841904824255306
      },
      "linkHotspots": [
        {
          "yaw": 3.1230354251825947,
          "pitch": -0.014082090215989496,
          "rotation": 0,
          "target": "6-back-cosmetology-clinic-floor--pedicure-stations"
        },
        {
          "yaw": 0.004862446153602207,
          "pitch": -0.02356601992857499,
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
        "yaw": -0.7440418964700246,
        "pitch": 0.08089325473661901,
        "fov": 1.0841904824255306
      },
      "linkHotspots": [
        {
          "yaw": 0.04321372363642517,
          "pitch": -0.03325136935289663,
          "rotation": 0,
          "target": "5-cosmetology-clinic-floor"
        },
        {
          "yaw": -1.5279365673187097,
          "pitch": -0.04073053920740399,
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
        "yaw": 0.8700243683328246,
        "pitch": 0.01715991498977587,
        "fov": 1.0841904824255306
      },
      "linkHotspots": [
        {
          "yaw": 1.5786887342614522,
          "pitch": -0.05232444776209988,
          "rotation": 0,
          "target": "6-back-cosmetology-clinic-floor--pedicure-stations"
        },
        {
          "yaw": -1.4740431097480844,
          "pitch": 0.01802703998395927,
          "rotation": 0,
          "target": "8-guest-artist"
        },
        {
          "yaw": 0.3813481130785661,
          "pitch": -0.05169294091666998,
          "rotation": 0,
          "target": "4-color-bar"
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
        "yaw": 3.134715379986593,
        "pitch": 0.04417338448496011,
        "fov": 1.0841904824255306
      },
      "linkHotspots": [
        {
          "yaw": -2.065380369992324,
          "pitch": -0.0063464948404465815,
          "rotation": 0,
          "target": "9-south-east-hallway-student-lockers"
        },
        {
          "yaw": 0.7086481918525962,
          "pitch": -0.0268888819366655,
          "rotation": 0,
          "target": "7-manicure-clinic-floor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.0492122243532904,
          "pitch": -0.14937082328239626,
          "title": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; background-color: rgb(103, 115, 131);\">Guest Artist</span>",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: rgb(58, 68, 84);\">Here, educators and industry pros teach, demo, and inspire with special classes, trend workshops, and elevated technique sessions. Students get front-row seats to high-level instruction and live demonstrations on cutting-edge styles, editorial looks, and advanced color methods.</span>"
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
        "yaw": -0.7830296267880179,
        "pitch": 0.08503454764121088,
        "fov": 1.0841904824255306
      },
      "linkHotspots": [
        {
          "yaw": 0.03071025531348681,
          "pitch": -0.02103271914034721,
          "rotation": 0,
          "target": "4-color-bar"
        },
        {
          "yaw": 2.004357792803246,
          "pitch": -0.03450613788926837,
          "rotation": 0,
          "target": "8-guest-artist"
        },
        {
          "yaw": -1.5578602922220988,
          "pitch": -0.009949384202700529,
          "rotation": 0,
          "target": "11-south-east-hallway-esthetician-entrance"
        },
        {
          "yaw": -0.8386770157305321,
          "pitch": -0.01202028533272781,
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
        "yaw": -0.6228785434390005,
        "pitch": 0.0708621230343276,
        "fov": 1.0841904824255306
      },
      "linkHotspots": [
        {
          "yaw": 2.3851672674906395,
          "pitch": -0.012592207259768173,
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
        "yaw": 0.049521523621043784,
        "pitch": 0.0059930770318281645,
        "fov": 1.0841904824255306
      },
      "linkHotspots": [
        {
          "yaw": -1.5648074391380042,
          "pitch": -0.013229260747092297,
          "rotation": 0,
          "target": "12-esthetician-main-hallway"
        },
        {
          "yaw": 0.011132635446699624,
          "pitch": -0.02038274777978799,
          "rotation": 0,
          "target": "20-cosmetology-core-entrance--manicurist-core-entrance"
        },
        {
          "yaw": 3.1009124143620674,
          "pitch": -0.03815554359781892,
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.031055931530977077,
          "pitch": -0.00899358536125483,
          "rotation": 0,
          "target": "17-esthetician-north-east-hallway"
        },
        {
          "yaw": 1.550081086367772,
          "pitch": -0.02423354103047437,
          "rotation": 0,
          "target": "11-south-east-hallway-esthetician-entrance"
        },
        {
          "yaw": 2.6934600950010363,
          "pitch": -0.01602173561961706,
          "rotation": 0,
          "target": "13-esthetician-clinic-floor"
        },
        {
          "yaw": -3.128754357541096,
          "pitch": -0.07085204419620084,
          "rotation": 0,
          "target": "14-esthetician-north-west-hallway"
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
          "yaw": 0.778562919149703,
          "pitch": 0.005196400931566814,
          "rotation": 0,
          "target": "14-esthetician-north-west-hallway"
        },
        {
          "yaw": 2.7993662552059515,
          "pitch": -0.044451907515885125,
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
        "yaw": -2.80349533403969,
        "pitch": 0.05133384534207508,
        "fov": 1.0841904824255306
      },
      "linkHotspots": [
        {
          "yaw": -2.8287785372297165,
          "pitch": 0.014499216758528277,
          "rotation": 0,
          "target": "16-wax-room"
        },
        {
          "yaw": -1.0117146251790814,
          "pitch": 0.012160605494141663,
          "rotation": 0,
          "target": "15-esthetician-theory-classroom"
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
          "yaw": -0.11088942251772238,
          "pitch": -0.03017146080659927,
          "rotation": 0,
          "target": "14-esthetician-north-west-hallway"
        },
        {
          "yaw": -2.8196069710791534,
          "pitch": -0.0032681389731159527,
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
        "yaw": -0.47263428695072385,
        "pitch": 0.07187443907769442,
        "fov": 1.0841904824255306
      },
      "linkHotspots": [
        {
          "yaw": 3.01461381285446,
          "pitch": 0.08515083890499575,
          "rotation": 0,
          "target": "14-esthetician-north-west-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.47263428695072385,
          "pitch": 0.07187443907769442,
          "title": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; background-color: rgb(103, 115, 131);\">Wax Room</span>",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: rgb(58, 68, 84);\">The Wax Room is a quiet, controlled space for hair removal and skin services. Students practice waxing (legs, brows, face, body), post-wax care, and skin preparation techniques. It’s equipped with wax heaters, consumables, safety supplies, and hygiene stations to ensure clean, safe services.</span>"
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9727969903665112,
          "pitch": 0.007816829643848777,
          "rotation": 0,
          "target": "15-esthetician-theory-classroom"
        },
        {
          "yaw": 0.016901313884426727,
          "pitch": -0.010329953621535992,
          "rotation": 0,
          "target": "12-esthetician-main-hallway"
        },
        {
          "yaw": 2.0352227967720715,
          "pitch": 0.008547115687203899,
          "rotation": 0,
          "target": "18-admissions-office"
        },
        {
          "yaw": 3.0760414467923685,
          "pitch": -0.023344972673973174,
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
        "yaw": 2.7994995166433805,
        "pitch": 0.06949251897569475,
        "fov": 1.0841904824255306
      },
      "linkHotspots": [
        {
          "yaw": 2.4759188068394895,
          "pitch": -0.004363505129333589,
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
        "yaw": -0.45491893620164703,
        "pitch": 0.1356503498085928,
        "fov": 1.0841904824255306
      },
      "linkHotspots": [
        {
          "yaw": -1.6053752420343361,
          "pitch": -0.018783091335745183,
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
        "yaw": -1.5317595255383072,
        "pitch": -0.01478167981383649,
        "fov": 1.0841904824255306
      },
      "linkHotspots": [
        {
          "yaw": -1.5621272284790813,
          "pitch": -0.029388293222757156,
          "rotation": 0,
          "target": "21-student-hallway"
        },
        {
          "yaw": 1.5358082382281903,
          "pitch": -0.026033342017779404,
          "rotation": 0,
          "target": "11-south-east-hallway-esthetician-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5975762566685177,
          "pitch": -0.020393144682358866,
          "title": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; background-color: rgb(103, 115, 131);\">Cosmetology Classroom</span>",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: rgb(58, 68, 84);\">This is the main hub of a student’s journey — the Cosmetology Classroom. Here, future stylists train in cutting, styling, chemical services (color, texture), haircutting theory, and more. Every station includes mirrors, styling tools, product back-bars, and work surfaces. Instructors circulate to coach, demo, and correct technique.</span>"
        },
        {
          "yaw": -0.4973760607083655,
          "pitch": -0.03694947029798179,
          "title": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; background-color: rgb(103, 115, 131);\">Manicuring Classroom</span>",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: rgb(58, 68, 84);\">In the Manicuring Classroom, students learn nail artistry from base to tip. You’ll see stations equipped for manicures, pedicures, gel and acrylic work, nail art, hand care, sanitizing stations, and retail nail-care displays. It’s a clinical but creative environment where precision meets design.</span>"
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5886790117147633,
          "pitch": -0.02386876704322738,
          "rotation": 0,
          "target": "20-cosmetology-core-entrance--manicurist-core-entrance"
        },
        {
          "yaw": -2.559631857477946,
          "pitch": -0.026294646994646342,
          "rotation": 0,
          "target": "22-avanti-breakroom"
        },
        {
          "yaw": -0.008575597083897435,
          "pitch": -0.009833819343839423,
          "rotation": 0,
          "target": "23-student-lunch-area--breakroom"
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
        "yaw": -0.524664068044558,
        "pitch": -0.23669992942213014,
        "fov": 1.0841904824255306
      },
      "linkHotspots": [
        {
          "yaw": 2.3903890483137387,
          "pitch": -0.012983448763407068,
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
          "yaw": -0.1175668275996209,
          "pitch": -0.037517182935580706,
          "rotation": 0,
          "target": "21-student-hallway"
        },
        {
          "yaw": -3.066546790705056,
          "pitch": -0.028733754103303255,
          "rotation": 0,
          "target": "0-welcome-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
