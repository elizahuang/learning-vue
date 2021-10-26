 var allData={
    "tasks":{
            "nutrition": 0,
            "bloodPressure": 1,
            "bloodSugar":1,
            "sports":0,
            "poo":1,
            "sleep":1,
            "weight":0
    },
    "records":{
        "_id":{"$oid":"60b78f0ed7ee8c782c7e3ef9"},
        "patientID":1,
         "timestamp": {
            "$date": "2021-05-31T16:00:00Z"
            },
        "TakeMed": {
            "Morning": [
                {
                "mid": 12,
                "drugCode":"A0216401G0",
                "name": "伯基腸溶微粒膠囊",
                "unit": 1,
                "timing": "飯後",
                "status": 1
                },
                {
                "mid": 13,
                "drugCode":"A0216401G0",
                "name": "庫魯化錠 500公絲",
                "unit": 1,
                "timing": "飯後",
                "status": 0
                }
            ],
            "Noon": [
                {
                "mid": 12,
                "drugCode":"A0216401G0",
                "name": "伯基腸溶微粒膠囊",
                "unit": 1,
                "timing": "飯後",
                "status": 0
                },
                {
                "mid": 13,
                "drugCode":"A0216401G0",
                "name": "庫魯化錠 500公絲",
                "unit": 1,
                "timing": "飯後",
                "status": 0
                }
            ],
            "Night": [
                {
                "mid": 12,
                "drugCode":"A0216401G0",
                "name": "伯基腸溶微粒膠囊",
                "unit": 1,
                "timing": "飯後",
                "status": 0
                },
                {
                "mid": 13,
                "drugCode":"A0216401G0",
                "name": "庫魯化錠 500公絲",
                "unit": 1,
                "timing": "飯後",
                "status": 0
                }
            ],
            "nutrition": 1
            },
        "body_records": {
            "bloodPressure": [],
            "bloodSugar": []
        },
        "life_record": [
            {
                "type": "sports",
                "status": 0
            },
            {
                "type": "poo",
                "status": 0
            },
            {
                "type": "sleep",
                "status": 0
            }
            ],
        "text": [

        ]
    }

}

var allDataToSend={
    "records": {
      "_id": {
        "$oid": "60b78f0ed7ee8c782c7e3ef9"
      },
      "patientID": 1,
      "timestamp": {
        "$date": "2021-06-02T16:00:00Z"
      },
      "tasks": {
        "nutrition": 1,
        "bloodPressure": 1,
        "bloodSugar": 1,
        "sports": 1,
        "poo": 1,
        "sleep": 1,
        "weight": 1
      },
      "TakeMed": {
        "Morning": [
          {
            "mid": 12,
            "name": "伯基腸溶微粒膠囊",
            "unit": 1,
            "timing": "飯後",
            "status": 1
          },
          {
            "mid": 13,
            "name": "庫魯化錠 500公絲",
            "unit": 1,
            "timing": "飯後",
            "status": 0
          }
        ],
        "Noon": [
          {
            "mid": 12,
            "name": "伯基腸溶微粒膠囊",
            "unit": 1,
            "timing": "飯後",
            "status": 1
          },
          {
            "mid": 13,
            "name": "庫魯化錠 500公絲",
            "unit": 1,
            "timing": "飯後",
            "status": 0
          }
        ],
        "Night": [
          {
            "mid": 12,
            "name": "伯基腸溶微粒膠囊",
            "unit": 1,
            "timing": "飯後",
            "status": 1
          },
          {
            "mid": 13,
            "name": "庫魯化錠 500公絲",
            "unit": 1,
            "timing": "飯後",
            "status": 0
          }
        ],
        "nutrition": 1
      },
      "body_records": {
        "bloodPressure": [
          [
            {
              "type": "systolic",
              "value": 147,
              "timing": "morning"
            },
            {
              "type": "diastolic",
              "value": 85,
              "timing": "morning"
            }
          ],
          [
            {
              "type": "systolic",
              "value": 142,
              "timing": "morning"
            },
            {
              "type": "diastolic",
              "value": 80,
              "timing": "morning"
            }
          ],
        ],
        "bloodSugar": [
          {
            "value": 90,
            "timing": "before dining"
          },
          {
            "value": 80,
            "timing": "after dining"
          }
        ],
        "weight":[
          {"value":58,"date":""},
          {"value":20,"date":""},
          {"value":100,"date":""}
        ],
      },
      "life_record": [
        {
          "type": "sports",
          "status": 1
        },
        {
          "type": "poo",
          "status": 2
        },
        {
          "type": "sleep",
          "status": 0
        },
        {
          "type": "weight",
          "status": 65
        }
      ],
      "text": [
        {
          "name": "今天的午餐",
          "tag": "nutrition",
          "content": "123132"
        },
        {
          "name": "今天做運動",
          "tag": "sport",
          "content": "123132"
        },
        {
          "name": "睡覺覺",
          "tag": "sleep",
          "content": "123132"
        },
        {
          "name": "其他有的沒的",
          "tag": "others",
          "content": "123132"
        }
      ]
    }
  }