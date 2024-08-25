import React, { useState, useEffect } from 'react';

import ReactECharts from 'echarts-for-react';


const Bar: React.FC = () => {
  const option = {
    tooltip: {
      trigger: 'axis',
      textStyle: {
        fontWeight: 'normal',
        fontSize: '14'
      },
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['銷售TX數', 'TX燒錄數'],
      textStyle: {
        fontSize: 16,
        lineHeight: 50,
      }
    },
    xAxis: {
      type: 'category',
      data: [2023, 2024],
      fontWeight: 'normal',
      axisLabel: {
        fontSize: '12',
        color: '#000000',
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        fontSize: '12',
        color: '#000000',
      },

    },
    series: [

      {
        name: '銷售TX數',
        type: 'bar',
        barGap: 0,
        color: '#009944',
        data: [900, 345, 393,],
        label: {
          show: true,
          position: 'top',
          color: '#009944',
        },
      },
      {
        name: 'TX燒錄數',
        type: 'bar',
        color: '#68bbc4',
        data: [119, 361, 203],
        label: {
          show: true,
          position: 'top',
          color: '#68bbc4',
        },
      }
    ]
  };

  const loadingOption = {
    text: '加载中...',
    color: '#4413c2',
    textColor: '#270240',
    maskColor: 'rgba(194, 88, 86, 0.3)',
    zlevel: 0
  };

  return (
    <>
      <ReactECharts
        option={option}
        style={{ height: '350px' }}
        loadingOption={loadingOption}
        showLoading={false}
      />


    </>
  );
};

export default Bar;