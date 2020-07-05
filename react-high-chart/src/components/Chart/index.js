import React from 'react';
import Highcharts from 'highcharts';
import d from '../../constants/data'

class Chart extends React.Component {

    highChartsRender() {
        Highcharts.chart({
            chart: {
              type: this.props.type,
              renderTo: 'atmospheric-composition'
            },
            title: {
              verticalAlign: 'middle',
              floating: true,
              style: {
                fontSize: '10px',
              }
            },
            xAxis: {
              categories: ["XYZ_B2_N_H","XYZ_L1_M", "XYZ_L14_SBH_M", "XYZ_L2_S_H", "XYZ_L22_SBH_F"],
              title: {
                text: null
              }
            },
            yAxis: {
              min: 0,
              title: {
                align: 'high'
              },
              labels: {
                overflow: 'justify'
              }
            },
            plotOptions: {
              pie: {
                dataLabels: {
                    format: '{point.name}: {point.percentage:.1f} %'
                },
                innerSize: '70%'
              }
            },
            series: [{
              name: 'SumHourly 0',
              data: [31, 5, 11]
            }, {
              name: 'SumHourly 1',
              data: [2, 4, 7]
            }, {
              name: 'SumHourly 2',
              data: [8, 3, 14]
            }, {
              name: 'SumHourly 3',
              data: [13, 1, 19]
            }]
        });
    }

    componentDidMount() {
        this.highChartsRender();
    }
    componentWillUnmount() {
      this.highChartsRender();
    }

    componentDidUpdate(prevProps, prevState) {
        this.highChartsRender()
   }


   	render() {
       	return (
            <div id="atmospheric-composition">
            </div>
       	);
   	}

  }
export default Chart;