<template>
  <div class="detail-comment">
    <div class="title">
      <p>评价</p>
      <div class="more">
        <span>评价总数(99+)</span>
        <i class="iconfont icon-tubiao-1"></i>
      </div>
    </div>
    <div class="tags">
      <div>宝贝好看（5）</div>
      <div>上身不错（20）</div>
      <div>价格便宜（67）</div>
    </div>

    <div class="new-comment">
      <div class="user"></div>
      <div class="text">
        <p>亚洲较大的网上交易平台，提供各类服饰、美容、家居、数码、话费/点卡充值… 数亿优质商品，同时提供担保交易(先收货后付款)等安全交易保障服务，并由商家提供...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.detail-comment{
  padding: 5px 10px;
  border-bottom: 5px solid #f5f5f5;

  .title{
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    padding: 0 5px;

    p{
      flex: 1;
      font-size: .8rem;
    }

    .more{
      color: var(--color-height-text);
      
      .iconfont{
        vertical-align: middle;
      }
    }
  }

  .tags{
    display: flex;
    margin-top: 10px;

    div{
      margin: 0 5px;
      font-size: 0.7rem;
      border-radius: 20px;
      padding: 4px 8px;
      background-color: #f70;
      color: #fff;
    }
  }

  .new-comment{
    display: flex;
    align-items: flex-start;
    margin-top: 20px;

    .user{
      width: 40px;
      height: 40px;
      border-radius: 5px;
      border: 1px solid #232323;
    }
    .text{
      font-size: 0.8rem;
      line-height: 1.4;
      color: #888;
      flex: 1;
      margin: 0 10px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3; //行数
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}
</style>