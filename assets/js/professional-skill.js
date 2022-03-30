var professional = echarts.init(document.getElementById('skill-professional'));
var option;

const data = [85, 70, 80, 70, 80, 75];

option = {
    xAxis: {
            max: '100'
        },
    yAxis: {
        type: 'category',
        data: ['寫程式', '攝影', '拳擊', '踢拳', '綜合格鬥', '泰拳'],
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
