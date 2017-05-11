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
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'占坑 ' + o }}
                    </div>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="box-card">
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
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
    export default{
      data () {
        return {
          currentDate: '2017-05-11 12:00'
        }
      },
      mounted () {
      }
    }
</script>

<style lang="scss" scoped>
@import '../../element-variables.css';

.dash-infobox {
    margin-bottom: 20px;
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
        padding: 15px 0;
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

.dash-chart {
    margin-bottom: 20px;
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
