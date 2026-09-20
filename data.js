var APP_DATA = {
  "scenes": [
    {
      "id": "0-1-asador",
      "name": "1 Asador",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8190049285138521,
          "pitch": 0.30361887418279565,
          "rotation": 0,
          "target": "1-2-cocina-comedor"
        },
        {
          "yaw": 3.072494571281503,
          "pitch": 0.17687203187648848,
          "rotation": 0,
          "target": "4-5-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2-cocina-comedor",
      "name": "2 Cocina Comedor",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2059188789763935,
          "pitch": 0.3352203231105335,
          "rotation": 0,
          "target": "0-1-asador"
        },
        {
          "yaw": -1.5185617457680483,
          "pitch": 0.5209387780546209,
          "rotation": 0,
          "target": "3-4-dormitorio-pa"
        },
        {
          "yaw": -2.3029966320553754,
          "pitch": 0.1529315149013737,
          "rotation": 0,
          "target": "2-3-dormitorio-pb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3-dormitorio-pb",
      "name": "3 Dormitorio PB",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.317380062573708,
          "pitch": 0.39214911085993087,
          "rotation": 0,
          "target": "1-2-cocina-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-4-dormitorio-pa",
      "name": "4 Dormitorio PA",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1569735369200824,
          "pitch": 0.38101217930745435,
          "rotation": 0,
          "target": "1-2-cocina-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-5-patio",
      "name": "5 Patio",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.535920413884133,
          "pitch": 0.1310602197447981,
          "rotation": 0,
          "target": "1-2-cocina-comedor"
        },
        {
          "yaw": 2.241092951804614,
          "pitch": 0.12091781157269388,
          "rotation": 0,
          "target": "0-1-asador"
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
