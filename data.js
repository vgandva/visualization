var APP_DATA = {
  "scenes": [
    {
      "id": "0-view-1",
      "name": "view 1",
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
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.03520309488211559,
        "pitch": -0.004940244260659199,
        "fov": 1.3563401604162861
      },
      "linkHotspots": [
        {
          "yaw": -0.09398374616477767,
          "pitch": 0.3870759250968483,
          "rotation": 0,
          "target": "1-view-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-view-2",
      "name": "view 2",
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0500592425068422,
          "pitch": 0.4863923200120386,
          "rotation": 0,
          "target": "0-view-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "360degree 3d visualization",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
