import { Options } from 'highcharts'

import { GetSpiderChartOptionsProps } from './types'

export const getSpiderChartOptions = ({
  hasData,
  alreadyConcluded,
  graphLabels,
  inProgress
}: GetSpiderChartOptionsProps): Options => {
  return {
    chart: {
      style: {
        fontFamily: 'Inter, sans-serif'
      },
      polar: true,
      type: 'line',
      backgroundColor: null
    },
    credits: {
      enabled: false
    },
    accessibility: {
      description: 'User progress'
    },
    title: {
      text: null
    },
    xAxis: {
      categories: graphLabels,
      tickmarkPlacement: 'on',
      gridLineColor: '#CBD5E1',
      lineWidth: 0,
      labels: {
        style: {
          fontFamily: 'Inter, sans-serif',
          fontSize: '10px',
          fontWeight: '500',
          color: '#4B5563'
        },
        format: '{text}'
      }
    },
    plotOptions: {
      series: {
        threshold: hasData ? 0 : -0.01,
        pointStart: 0
      }
    },
    yAxis: {
      gridLineInterpolation: 'polygon',
      gridLineColor: '#CBD5E1',
      lineWidth: 0,
      labels: {
        style: {
          opacity: 0
        }
      }
    },
    tooltip: {
      shared: true,
      pointFormat:
        '<span style="color:{series.color}">{series.name}: <b>' +
        '{point.y:,.0f}</b><br/>'
    },
    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical'
    },
    series: [
      {
        name: 'Concluídos',
        type: 'area',
        data: alreadyConcluded,
        color: '#3B82F6',
        fillColor: hasData ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
        lineWidth: 1,
        pointPlacement: 'on'
      },
      {
        name: 'Em progresso',
        type: 'area',
        data: inProgress,
        color: '#EAB308',
        lineWidth: 1,
        fillColor: hasData ? 'rgba(234, 179, 8, 0.2)' : 'transparent',
        pointPlacement: 'on'
      }
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 1024
          },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal'
            },
            pane: {
              size: '60%'
            }
          }
        },
        {
          condition: {
            maxWidth: 340
          },
          chartOptions: {
            pane: {
              size: '45%'
            }
          }
        }
      ]
    }
  }
}
