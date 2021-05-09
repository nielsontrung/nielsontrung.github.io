// pie chart
var pieDom = document.getElementById("pie-chart");
var pieChart = echarts.init(pieDom);
var datasetsource = [];
var categories = [];
categories.push('category')
for (var i = start_year; i <= end_year; i++) {
    categories.push(''+i);
}

var yearly_category_stats = category_stats[1]
datasetsource.push(categories);
for (var i = 0; i < yearly_category_stats.length; i++) {
    if (yearly_category_stats[i][0] === "deposit" || yearly_category_stats[i][0] === "government" || yearly_category_stats[i][0]=== "other"){

    }else{
        datasetsource.push(yearly_category_stats[i])
    }
}

var categoryOption;
var startYear = '' + start_year
setTimeout(function(){
    categoryOption = {
        legend: {
            left: 'left',
            orient: 'vertical'
        },
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: datasetsource
        },
        title: {
            text: 'Yearly Spending per Category',
            // subtext: 'example',
            left: 'center'
        },
        xAxis: {type: 'category'},
        yAxis: {gridIndex: 0},
        grid: {top: '65%'},
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {
                type: 'pie',
                id: 'pie',
                radius: '35%',
                center: ['55%', '30%'],
                emphasis: {
                    focus: 'series'
                },
                label: {
                    formatter: '{b}: {@'+ startYear +'} ({d}%)'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // Use axis to trigger tooltip
                        type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
                    }
                },
                encode: {
                    itemName: 'category',
                    value: ''+start_year,
                    tooltip: ''+start_year
                }
            }
        ]
    };
    
    pieChart.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            pieChart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
            document.getElementsByTagName('input')[0].value = 'hi';
        }
    });
    pieChart.setOption(categoryOption);
});

if (categoryOption && typeof categoryOption === 'object') {
    pieChart.setOption(categoryOption);
}