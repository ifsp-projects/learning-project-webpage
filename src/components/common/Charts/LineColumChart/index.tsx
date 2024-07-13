'use client'

import Highcharts, { Options } from 'highcharts'
import HighchartsMore from 'highcharts/highcharts-more'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { GoGear } from 'react-icons/go'

const HighchartsReact = dynamic(() => import('highcharts-react-official'), {
  ssr: false
})

export const LineColumnChart: React.FC = () => {
  const [isWeeklyTargetModalOpen, setIsWeeklyTargetModalOpen] =
    useState<boolean>(false)

  const openWeeklyTargetModal = () =>
    setIsWeeklyTargetModalOpen(!isWeeklyTargetModalOpen)

  useEffect(() => {
    HighchartsMore(Highcharts)
  }, [])

  const options: Options = {
    chart: {
      zooming: {
        type: 'xy'
      }
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Taxa Engajamento dos Alunos',
      align: 'left',
      margin: 50,
      style: {
        fontWeight: 'normal',
        color: '#334155'
      }
    },
    xAxis: [
      {
        categories: [
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro'
        ],
        crosshair: true
      }
    ],
    yAxis: [
      {
        labels: {
          format: '{value}',
          style: {
            color: '#94A3B8'
          }
        },
        title: {
          text: 'Engajamento Total',
          style: {
            color: '#334155'
          }
        }
      },
      {
        title: {
          text: '',
          style: {
            color: ''
          }
        },
        labels: {
          style: {
            color: ''
          }
        },
        opposite: true
      }
    ],
    tooltip: {
      shared: true
    },
    legend: {
      align: 'right',
      x: -20,
      verticalAlign: 'top',
      y: 0,
      className: 'lg:block hidden',
      floating: true,
      backgroundColor:
        Highcharts?.defaultOptions?.legend?.backgroundColor ||
        'rgba(255,255,255,0.25)'
    },
    series: [
      {
        name: 'Atividades Realizadas',
        type: 'column',
        yAxis: 0,
        data: [20, 30, 15, 23, 12, 18, 32, 12, 23, 12, 21, 19],
        color: '#22c55e',
        tooltip: {
          valueSuffix: ' atividades'
        }
      },
      {
        name: 'Nota média',
        type: 'column',
        yAxis: 1,
        data: [6, 5, 7, 8, 7, 8, 9, 7, 6, 5, 8, 7],
        color: '#d1d5db',
        tooltip: {
          valueSuffix: ' '
        }
      }
      // {
      //   name: 'Frequência',
      //   type: 'spline',
      //   data: [75, 68, 85, 82, 91, 40, 40, 40, 40, 40, 40, 40, 40],
      //   color: '#3B82F6',
      //   tooltip: {
      //     valueSuffix: ' (h)'
      //   }
      // }
    ]
  }

  return (
    <div className="relative w-full">
      <div className="blue-column relative">
        <div className="absolute z-20 mt-4 flex w-full justify-end">
          <button onClick={openWeeklyTargetModal}>
            <GoGear size={16} fill="#64748b" className="cursor-pointer" />
          </button>
        </div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
      {/* {isLoading && (
        <div className="mt-8 flex h-[430px] w-full animate-pulse items-center justify-center rounded-sm bg-white">
          <Spin size="large" variant="light" />
        </div>
      )} */}
    </div>
  )
}
