$(function () {

  if ( $('.charts').length > 0 ) {

    colors = ["#4CAF50", "#2196F3", "#9c27b0", "#ff9800", "#F44336"];

    guage_options = {
      data: {
        columns: [
          ['data', 50]
        ],
        type: 'gauge'
      },
      transition: {
        duration: 500
      },
      color: {
        pattern: colors,
        threshold: {
          values: [20, 50, 70, 100, 110]
        }
      }
    };

    var load_options = jQuery.extend({}, guage_options);
    var cpu_options = jQuery.extend({}, guage_options);
    var mem_options = jQuery.extend({}, guage_options);

    load_options.bindto = '#load-chart';
    cpu_options.bindto = '#cpu-chart';
    mem_options.bindto = '#mem-chart';

    var load_chart = c3.generate(load_options);
    var cpu_chart = c3.generate(cpu_options);
    var mem_chart = c3.generate(mem_options);

    interval = setInterval(function () {
      load_chart.load({
        columns: [['data', Math.floor((Math.random() * 100) + 1)]]
      });
      cpu_chart.load({
        columns: [['data', Math.floor((Math.random() * 100) + 1)]]
      });
      mem_chart.load({
        columns: [['data', Math.floor((Math.random() * 100) + 1)]]
      });
    }, 2000);


    var chart = c3.generate({
      bindto: '#line-chart',
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25]
        ]
      },
      color: {pattern: colors}
    });


    c3.generate({
      bindto: '#area-chart',
      data: {
        columns: [
          ['data1', 300, 350, 300, 0, 0, 0],
          ['data2', 130, 100, 140, 200, 150, 50]
        ],
        types: {
          data1: 'area',
          data2: 'area-spline'
        }
      },
      color: {pattern: colors}
    });

    c3.generate({
      bindto: '#bar-chart',
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 130, 100, 140, 200, 150, 50],
          ['data3', 30, 200, 100, 400, 150, 250]
        ],
        type: 'bar'
      },
      bar: {
        width: {
          ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
      },
      color: {pattern: colors}
    });


    c3.generate({
      bindto: '#step-chart',
      data: {
        columns: [
          ['data1', 300, 350, 300, 0, 0, 100],
          ['data2', 130, 100, 140, 200, 150, 50]
        ],
        types: {
          data1: 'step',
          data2: 'area-step'
        }
      },
      color: {pattern: colors}
    });


    c3.generate({
      bindto: '#scatter-plot-chart',
      data: {
        xs: {
          setosa: 'setosa_x',
          versicolor: 'versicolor_x',
        },
        // iris data from R
        columns: [
          ["setosa_x", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
          ["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
          ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
          ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
        ],
        type: 'scatter'
      },
      axis: {
        x: {
          label: 'Sepal.Width',
          tick: {
            fit: false
          }
        },
        y: {
          label: 'Petal.Width'
        }
      },
      color: {pattern: colors}
    });

    c3.generate({
      bindto: '#pie-chart',
      data: {
        // iris data from R
        columns: [
          ['data1', 30],
          ['data2', 120],
          ['data3', 220],
        ],
        type: 'pie'
      },
      color: {pattern: colors}
    });

    c3.generate({
      bindto: '#donut-chart',
      data: {
        columns: [
          ['data1', 30],
          ['data2', 120],
          ['data3', 220],
        ],
        type: 'donut'
      },
      donut: {
        title: "Iris Petal Width"
      },
      color: {pattern: colors}
    });

  }


});