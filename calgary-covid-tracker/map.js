var mapDom = document.getElementById("map")
var map = echarts.init(mapDom, "dark")
var mapApp = {}

var covid_data
var option
var end_date

function formatName(name) {
  if (name.length < 4) return name
  var name_list = name.split(" ")
  var formatted_name = ""
  for (var i of name_list) {
    formatted_name += i.charAt(0) + i.slice(1).toLowerCase() + " "
  }
  return formatted_name.trim()
}

function getEndDate(date) {
  var month = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  }
  var date_list = date.split("-")
  var year = date_list[0]
  var month = month[date_list[1]]
  var day = date_list[2]
  end_date = "(" + month + "-" + year + "-" + day + ")"
  return end_date
}

function getDailyActiveCasesPerCommunity(response) {
  var data = {}
  var rows = response.split("\n")
  for (var i = 1; i < rows.length - 1; i++) {
    row = rows[i].split(",")
    sector = row[3]
    if (sector.includes("CALGARY - ")) {
      date = row[1]
      active_cases = parseFloat(row[5])
      sector = sector.replace("CALGARY - ", "").replace(/"/g, "")
      for (var community of communities[sector]) {
        projected_cases = Math.round(
          parseFloat(
            sector_population_percentage[community]["POPULATION_PERCENTAGE"]
          ) * active_cases
        )
        if (!(date in data)) {
          data[date] = [
            {
              name: community,
              value: projected_cases,
              sector: sector,
              sector_cases: active_cases,
            },
          ]
        } else {
          data[date].push({
            name: community,
            value: projected_cases,
            sector: sector,
            sector_cases: active_cases,
          })
        }
      }
    }
  }
  return data
}

const covid_URL =
  "https://raw.githubusercontent.com/nielsontrung/calgary-covid-map/main/covid-19-alberta-statistics-map-data.csv"
const geo_JSON_URL =
  "https://raw.githubusercontent.com/nielsontrung/calgary-covid-map/main/census_by_community_2019.geojson"
$.get(covid_URL, (response) => {
  covid_data = getDailyActiveCasesPerCommunity(response)
  end_date = getEndDate(
    Object.keys(covid_data)[Object.keys(covid_data).length - 1]
  )
  console.log(end_date)
  $.get(geo_JSON_URL, (calgary_Json) => {
    echarts.registerMap("Calgary", calgary_Json, {})
    option = {
      title: {
        text: "Daily Active Covid Cases by Community \n " + end_date,
        subtext:
          "Data from https://data.calgary.ca/Demographics/Census-by-Community-2019/rkfr-buzb \n https://www.alberta.ca/stats/covid-19-alberta-statistics.htm#data-export",
        sublink:
          "https://www.alberta.ca/stats/covid-19-alberta-statistics.htm#data-export",
        left: "center",
        top: 20,
        textStyle: {
          fontSize: 30,
        },
      },
      tooltip: {
        triggerOn: "mousemove",
        color: "white",
        trigger: "item",
        showDelay: 0,
        formatter: function (params) {
          const data = params.data
          const value = (params.value + "").split(".")
          const valueStr = value[0].replace(
            /(\d{1,3})(?=(?:\d{3})+(?!\d))/g,
            "$1,"
          )
          const series_name = "<b>" + params.seriesName + "</b>"
          if (!!data) {
            var community_name = formatName(data.name)
            var sector_name = formatName(data.sector)
            return (
              series_name +
              "<br/>" +
              "Sector: " +
              sector_name +
              "<br/>" +
              "Cases: " +
              data.sector_cases +
              "<br/>" +
              "Community: " +
              community_name +
              "<br/>" +
              "Projected Cases: " +
              valueStr
            )
          }
          return series_name + "<br/>" + "Community: " + formatName(params.name)
        },
      },
      backgroundColor: "#161627",
      visualMap: {
        right: 100,
        top: "center",
        min: 0,
        max: 300,
        color: [
          "#b9404c",
          "#c2575a",
          "#cd7169",
          "#d17c71",
          "#e0ab88",
          "#ecd69c",
          "#ebd19a",
          "#f4f0a9",
          "#161627",
        ],
        text: ["High", "Low"],
        calculable: true,
      },
      series: [
        {
          name: "Active Covid-19 Cases by Community",
          type: "map",
          roam: true,
          map: "Calgary",
          emphasis: {
            itemStyle: {
              areaColor: "#f99e41",
              shadowBlur: 10,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
          label: {
            color: "white",
            // show: true,
            formatter: function (params) {
              return params.name + "\n" + params.value
            },
            emphasis: {
              color: "white",
            },
          },
          // covid data
          data: covid_data["2022-01-01"],
        },
      ],
    }
    map.setOption(option)
  })

  if (option && typeof option === "object") {
    map.setOption(option)
  }
})
