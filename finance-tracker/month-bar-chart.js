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

function getMonthFromString(mon){
  let month = new Date(Date.parse(mon +" 1, 2012")).getMonth()+1;
  month = ''+month;
  if (month.length < 2){
    month = '0' + month;
  }
  month = '-' + month + '-';
  return month;
}

if (monthOption && typeof monthOption === 'object') {
  monthChart.setOption(monthOption);
  monthChart.on('mouseover', function (event) {
    let month_name = event.name;
    let month_code = getMonthFromString(month_name);
    let inputField = document.getElementsByTagName('input')[0];
    inputField.value = month_code;
    inputField.dispatchEvent(new Event('click'));
    inputField.dispatchEvent(new Event('focus'));
    inputField.dispatchEvent(new KeyboardEvent('keyup',{'key':'Enter'}));
  });
}