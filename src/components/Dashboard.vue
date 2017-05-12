<template>
    <section>
        <el-row :gutter="20" class="dash-infobox">
            <el-col :span="6">
                <div class="grid-content bg-success">
                    <div class="inner">
                        <h3>标题</h3>
                        <p>内容内容内容内容内容</p>
                    </div>
                    <div class="icon">
                        <i class="fa fa-coffee"></i>
                    </div>
                    <a href="#" class="footer">
                        查看更多
                        <i class="fa fa-arrow-circle-right"></i>
                    </a>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-warning">
                    <div class="inner">
                        <h3>标题</h3>
                        <p>内容内容内容内容内容</p>
                    </div>
                    <div class="icon">
                        <i class="fa fa-cutlery"></i>
                    </div>
                    <a href="#" class="footer">
                        查看更多
                        <i class="fa fa-arrow-circle-right"></i>
                    </a>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-danger">
                    <div class="inner">
                        <h3>标题</h3>
                        <p>内容内容内容内容内容</p>
                    </div>
                    <div class="icon">
                        <i class="fa fa-flask"></i>
                    </div>
                    <a href="#" class="footer">
                        查看更多
                        <i class="fa fa-arrow-circle-right"></i>
                    </a>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-info">
                    <div class="inner">
                        <h3>标题</h3>
                        <p>内容内容内容内容内容</p>
                    </div>
                    <div class="icon">
                        <i class="fa fa-legal"></i>
                    </div>
                    <a href="#" class="footer">
                        查看更多
                        <i class="fa fa-arrow-circle-right"></i>
                    </a>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20" class="dash-chart">
            <el-col :span="12">
                <el-card class="box-card">
                   <chartjs :type="'line'" :data="lineData" :options="options" :height="200"></chartjs>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="box-card">
                  <chartjs :type="'pie'" :data="pieData" :options="options" :height="200"></chartjs>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="box-card">
                   <chartjs :type="'bar'" :data="barData" :options="options" :height="200"></chartjs>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="box-card">
                  <chartjs :type="'radar'" :data="radarData" :options="options" :height="200"></chartjs>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="box-card">
                   <chartjs :type="'polarArea'" :data="polarareaData" :options="options" :height="200"></chartjs>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="box-card">
                  <chartjs :type="'doughnut'" :data="pieData" :options="options" :height="200"></chartjs>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="box-card">
                  <chartjs :type="'bubble'" :data="bubbleData" :options="options" :height="200"></chartjs>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20" class="dash-card">
            <el-col :span="6" v-for="(o, index) in 4" :key="o">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="http://element.eleme.io/static/hamburger.50e4091.png" class="image">
                    <div style="padding: 14px;">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </section>
</template>

<script>
import chartjs from '../plugins/chartjs'

export default{
  data () {
    return {
      currentDate: '2017-05-11 12:00',
      lineData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false
          }
        ]
      },
      pieData: {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56'
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56'
            ]
          }]
      },
      barData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      },
      radarData: {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: 'My Second dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ]
      },
      polarareaData: {
        datasets: [{
          data: [
            11,
            16,
            7,
            3,
            14
          ],
          backgroundColor: [
            '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#E7E9ED',
            '#36A2EB'
          ],
          label: 'My dataset' // for legend
        }],
        labels: [
          'Red',
          'Green',
          'Yellow',
          'Grey',
          'Blue'
        ]
      },
      bubbleData: {
        datasets: [
          {
            label: 'First Dataset',
            data: [
              {
                x: 20,
                y: 30,
                r: 15
              },
              {
                x: 40,
                y: 10,
                r: 10
              }
            ],
            backgroundColor: '#FF6384',
            hoverBackgroundColor: '#FF6384'
          }]
      },
      options: {
      }
    }
  },
  mounted () {
  },
  components: {
    chartjs
  }
}
</script>

<style lang="scss" scoped>
@import '../../element-variables.css';

.dash-infobox {
    margin-bottom: 10px;
    &:last-child {
        margin-bottom: 0;
    }
    .bg-success {
        background: var(--color-success);
    }
    .bg-warning {
        background: var(--color-warning);
    }
    .bg-danger {
        background: var(--color-danger);
    }
    .bg-info {
        background: var(--color-info);
    }
    .el-col {
        padding: 10px 0;
        border-radius: 4px;
        .grid-content {
            position: relative;
            display: block;
            box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
            border-radius: 4px;
            min-height: 74px;
            .inner {
                padding: 10px;
                h3,
                p {
                    color: var(--color-white);
                    margin: 0;
                }
            }
            .icon {
                transition: all .3s linear;
                position: absolute;
                top: 0px;
                right: 10px;
                z-index: 0;
                font-size: 56px;
                color: rgba(0, 0, 0, .15);
            }
            .footer {
                position: relative;
                text-align: center;
                padding: 3px 0;
                color: rgba(255, 255, 255, .8);
                display: block;
                z-index: 10;
                background: rgba(0, 0, 0, .1);
                text-decoration: none;
            }
        }
    }
}

.dash-chart,
.box-card {
    margin-bottom: 10px;
}

.dash-card {
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
}
</style>
