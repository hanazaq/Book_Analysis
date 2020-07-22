
    var chart1 = new CanvasJS.Chart("chartContainer1",{
        title :{
            text: "Live Data"
        },
        data: [{
      type: "line",
            dataPoints : [
          { label: "blue",  y: 7  },
          { label: "orange", y: 15  },
          { label: "banana", y: 25  },
          { label: "mango",  y: 30  },
          { label: "grape",  y: 28  }
      ]
        }]
    });
    var chart2 = new CanvasJS.Chart("chartContainer2",{
        title :{
      text: "Live Data"
        },
        data: [{
      type: "column",
      dataPoints : [
          { label: {{loc}},  y: {{people}}  },
          { label: "orange", y: 15  },
          { label: "banana", y: 25  },
          { label: "mango",  y: 30  },
          { label: "grape",  y: 28  }
      ]
        }]
    });
     
    chart1.render();
    chart2.render();
