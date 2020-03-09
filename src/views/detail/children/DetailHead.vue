<template>
  <div class="detail-head">
    <div class="title item">
      <p>亚洲较大的网上交易平台，提供各类服饰、美容、家居、数码、话费/点卡充值 ---- {{info}}</p>
      <div class="icon">
        <p>
          <i class="iconfont icon-zan"></i>
          赞
        </p>
        <p class="songli">
          <i class="iconfont icon-songli"></i>
          送礼物
        </p>
        <p>
          <i class="iconfont icon-fenxiang"></i>
          分享
        </p>
      </div>
    </div>

    <div class="main item">
      <div class="address flex">
        <p class="title left">地址</p>
        <div class="content main">广东 广州</div>
        <div class="month right">月售109</div>
      </div>
      <div class="flex huodong">
        <div class="left">活动</div>
        <div class="main">
          <div>买10送1</div>
          <div>满180减100</div>
          <div>满100包邮</div>
        </div>
        <div class="right">
          <i class="iconfont icon-tubiao-1"></i>
        </div>
      </div>
    </div>

    <div class="item flex safe">
      <div class="left">保障</div>
        <div class="main">
          <p>7天无理由退货 · 假一赔十</p>
        </div>
        <div class="right">
          <i class="iconfont icon-tubiao-1"></i>
        </div>
    </div>

    <div class="item select-wrap">
      <div class="flex select">
        <div class="left">选择</div>
          <div class="main">
            <div class="item active">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
          </div>
          <div class="right">
            <i class="iconfont icon-tubiao-1"></i>
          </div>
        </div>

        <div class="parmas flex">
          <div class="left">参数</div>
            <div class="main">
              <p>适合小孩子穿</p>
            </div>
            <div class="right">
              <i class="iconfont icon-tubiao-1"></i>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHead",
  props: {
    info: {
      type: String,
      default: "测试用户"
    }
  }
}
</script>

<style lang="less" scoped>
.detail-head{

  &>.item{
    padding: 10px 5px;
    border-bottom: 5px solid #f5f5f5;
  }

  .title{
    font-size: 0.9rem;
    font-weight: bolder;

    .icon{
      display: flex;
      align-items: center;
      margin-top: 10px;

      p{
        flex: 1;
        font-size: 0.7rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #232323;
        font-weight: normal;

        .iconfont{
          margin: 0 5px;
        }

        &.songli .iconfont{
          font-size: 1.3rem;
        }  
      }
    }
  }

  .main{
    .address{
      .month{
        color: #ccc;
      }
    }

    .huodong{
      margin-top: 10px;
      
      .main{
        line-height: 1.5;
        color: var(--color-height-text);
      }
    }
  }

  .select-wrap{

    .select{

      .main{
        font-size: 0;

        .item{
          border: 1px solid #232323;
          border-radius: 5px;
          width: 50px;
          height: 50px;
          display: inline-block;
          margin: 0 5px;
          font-size: 1rem;
          line-height: 50px;
          text-align: center;

          &.active{
            border-color: var(--color-height-text);
          }
        }

      }
    }

    .parmas{
      margin-top: 10px;
    }
  }

}

.flex{
  display: flex;
  align-items: flex-start;
  font-size: 0.8rem;
  
  .left{
    width: 50px;
    font-weight: normal;
    color: #ccc;
    text-align: right;
    
  }
  .main{
    flex: 1;
    padding: 0 10px;
  }
  .right{
    margin-right: 10px;
  }
}
</style>