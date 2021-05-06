var monthDom = document.getElementById("month-bar-chart");
var monthChart = echarts.init(monthDom);
var monthOption;
var monthSeries = []
var yearlyMonthData = month_stats[2]
for(var i = 0; i < yearlyMonthData.length; i++){
  var temp = {
    name: yearlyMonthData[i][0],
    type: 'bar',
    stack: 'total',
    emphasis: {
      focus: 'series'
    },
    data: yearlyMonthData[i][1]
  }
  monthSeries.push(temp)
}
monthOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {            // Use axis to trigger tooltip
      type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {
    orient: 'horizontal',
    left: 'center'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['dec', 'nov', 'oct', 'sep', 'aug', 'jul', 'jun', 'may', 'apr', 'mar', 'feb', 'jan']
  },
  series: monthSeries
};

if (monthOption && typeof monthOption === 'object') {
  monthChart.setOption(monthOption);
}