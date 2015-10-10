random_load_value = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var values = [];
for ( i=0; i<30; ++i ){
  values.push(random_load_value(40, 80));
}

randomData = function(size, min, max){
  data = [];
  for ( i=0; i<size; ++i ){
    if(data.length){
      factor = 3;
      minOrganic = data[data.length-1]-factor;
      maxOrganic = data[data.length-1]+factor;
      data.push(
        random_load_value(
          minOrganic<min?min:minOrganic,
          maxOrganic>max?max:maxOrganic
        )
      );
    } else {
      data.push(random_load_value(min, max));
    }
  }
  return data;
};

chartData1 = randomData(20, 40, 60);
chartData2 = randomData(20, 40, 60);
chartData3 = randomData(20, 40, 60);
chartData4 = randomData(100, 10, 30);

chartData1.unshift('Sales');
chartData2.unshift('Customers');
chartData3.unshift('Signups');
chartData4.unshift('Customers');

serverLoadOptions = {
  bindto: '#server-load-chart',
  legend: { show: false },
  padding: {
      top: 6,
      right: -1,
      bottom: -8,
      left: 0
  },
  data: {
    columns: [
      ['Server load'].concat(values),
    ],
    type: 'area'
  },
  size: {
    height: 160
  },
  axis: {
    x: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    },
    y: {
      show: false,
      max: 100,
      min: 0,
      padding: {
        top: 0,
        bottom: 0
      }
    }
  },
  grid: {
    focus: { show: false }
  },
  point: { show: false },
  tooltip: {
    format: {
      title: function (d) { return undefined; }, // Disable tooltip header
      value: function (value, ratio, id) {
        return value + '%';
      }
    }
  },
  transition: { duration: 50 }
};

var chartLine1 = {
  bindto: '#chart-line-1',
  data: {
    columns: [
      chartData1
    ]
  },
  axis: {
    x: { show: false },
    y: { show: false }
  },
  color: { pattern: ['#fff'] },
  legend: { hide: true },
  size: { height: 100 }
};

var chartLine2 = {
  bindto: '#chart-line-2',
  data: {
    columns: [
      chartData2
    ]
  },
  axis: {
    x: { show: false },
    y: { show: false }
  },
  color: { pattern: ['#fff'] },
  legend: { hide: true },
  size: { height: 100 }
};

var chartLine3 = {
  bindto: '#chart-line-3',
  data: {
    columns: [
      chartData3
    ]
  },
  axis: {
    x: { show: false },
    y: { show: false }
  },
  color: { pattern: ['#fff'] },
  legend: { hide: true },
  size: { height: 100 }
};


var chartArea1 = {
  bindto: '#chart-area-1',
  data: {
    columns: [
      chartData4
    ],
    types: { 'Customers': 'area' }
  },
  axis: {
    x: { show: false },
    y: { show: false }
  },
  color: { pattern: ['#EC407A'] },
  legend: { hide: true },
  size: { height: 100 },
  padding: {
    right: -18,
    bottom: -28,
    left: -18
  }
};

var chartGauge1 = {
  bindto: '#chart-gauge-1',
  data: {
    columns: [
      ['data', 80]
    ],
    types: { data: 'gauge' }
  },
  gauge: { width: 3 },
  color: { pattern: ['#E91E63'] },
  legend: { hide: true },
  tooltip: { show: false },
  size: { height: 80 }
};

var chartGauge2 = {
  bindto: '#chart-gauge-2',
  data: {
    columns: [
      ['data', 30]
    ],
    types: { data: 'gauge' }
  },
  gauge: { width: 3 },
  color: { pattern: ['#E91E63'] },
  legend: { hide: true },
  tooltip: { show: false },
  size: { height: 80 }
};

var chartGauge3 = {
  bindto: '#chart-gauge-3',
  data: {
    columns: [
      ['data', 40]
    ],
    types: { data: 'gauge' }
  },
  gauge: { width: 3 },
  color: { pattern: ['#E91E63'] },
  legend: { hide: true },
  tooltip: { show: false },
  size: { height: 80 }
};

var chartPageviews = {
  bindto: '#chart-pagesviews',
  data: {
    columns: [
      ['Pageviews', 3,4,5,10,20,14,18,12,10,20,10,14,15,10,20,14,18,12,10,20]
    ],
    types: { 'Pageviews': 'area' }
  },
  axis: {
    x: { show: false },
    y: { show: false }
  },
  color: { pattern: ['#fff'] },
  legend: { hide: true },
  size: { height: 100 }
};

if ( $('.dashboard').length > 0 ) {
  c3.generate(serverLoadOptions);
  c3.generate(chartLine1);
  c3.generate(chartLine2);
  c3.generate(chartLine3);
  c3.generate(chartArea1);
  c3.generate(chartGauge1);
  c3.generate(chartGauge2);
  c3.generate(chartGauge3);
  c3.generate(chartPageviews);
}
