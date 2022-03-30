var professional = echarts.init(document.getElementById('skill-professional'));
var option;

const data = [10, 20, 30, 50, 40, 90];

option = {
  xAxis: {
    max: '100'
  },
  yAxis: {
    type: 'category',
    data: ['拳擊', '攝影', '寫程式', 'D', 'E', 'F'],
    inverse: true,
    animationDuration: 300,
    animationDurationUpdate: 300,
    max: 5
  },
  series: [
    {
      realtimeSort: true,
      name: 'score',
      type: 'bar',
      data: data,
      label: {
        show: true,
        position: 'right',
        valueAnimation: true
      }
    }
  ],
  legend: {
    show: true
  },
  animationDuration: 0,
  animationDurationUpdate: 0,
  animationEasing: 'linear',
  animationEasingUpdate: 'linear'
};

option && professional.setOption(option);
