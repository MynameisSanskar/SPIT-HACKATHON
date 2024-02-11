import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const ChartExamples = () => {
  useEffect(() => {
    // Bar chart options
    const barChartOptions = {
      series: [{
        name: 'Sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 35]
      }],
      chart: {
        height: 420,
        width: "100%",
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
      yaxis: {
        title: {
          text: 'Revenue (in ₹)',
          style: {
            fontWeight: 600,
          },
        },
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + "k"
          }
        }
      }
    };

    // Line chart options
    const lineChartOptions = {
      series: [{
        name: 'Series 1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 65]
      }],
      chart: {
        height: 420,
        width: "100%",
        type: 'line',
        toolbar: {
          show: false
        }
      },
      stroke: {
        width: 7,
        curve: 'smooth'
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
      markers: {
        size: 5,
        hover: {
          sizeOffset: 7
        }
      },
      tooltip: {
        y: {
          title: {
            formatter: function (val) {
              return "$ " + val + "k"
            }
          }
        }
      }
    };

    // Pie chart options
    const pieChartOptions = {
      series: [52.8, 26.8, 20.4],
      labels: ["Direct", "Organic search", "Referrals"],
      chart: {
        height: 420,
        width: "100%",
        type: 'pie',
      },
      legend: {
        position: "bottom",
        fontFamily: "Inter, sans-serif",
      },
    };

    // Render Bar Chart
    if (document.getElementById("bar-chart") && typeof ApexCharts !== 'undefined') {
      const barChart = new ApexCharts(document.getElementById("bar-chart"), barChartOptions);
      barChart.render();
    }

    // Render Line Chart
    if (document.getElementById("line-chart") && typeof ApexCharts !== 'undefined') {
      const lineChart = new ApexCharts(document.getElementById("line-chart"), lineChartOptions);
      lineChart.render();
    }

    // Render Pie Chart
    if (document.getElementById("pie-chart") && typeof ApexCharts !== 'undefined') {
      const pieChart = new ApexCharts(document.getElementById("pie-chart"), pieChartOptions);
      pieChart.render();
    }
  }, []);

  return (
    <div class=' flex flex-wrap divide-x-2 bg-whitesmoke'>
      {/* Bar Chart */}
      <div class="pl-4 pr-2 m-7 rounded-md shadow-sm">
      <div id="bar-chart"></div>
      </div>
      
      {/* Line Chart */}
      <div class="pl-4 pr-2 m-7 rounded-md shadow-sm">
      <div id="line-chart"></div>
      <h5 class="pl-20 pb-4 bold" >Product Popularity</h5>
      </div>
      
      {/* Pie Chart */}
      <div class=" pl-4 pr-2 m-7 rounded-md shadow-sm">
      <div id="pie-chart" class="bg-no-repeat"></div>
      </div>
   

    </div>
  );
};

export default ChartExamples;
