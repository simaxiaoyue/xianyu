<template>
  <div class="postList">
    <!-- 文章标题 -->

    <h4 class="post_title">
      <a href>{{data.title}}</a>
    </h4>
    <!-- 文章内容 -->
    <!-- v-html 将内容解析成html-->
    <p class="post_content">
      <a href v-html="data.summary"></a>
    </p>

    <!-- 文章内容 -->
    <div class="post_img"></div>
    <!-- 文章信息 -->
    <div class="post_info">
      <el-row type="flex" justify="space-between">
        <span></span>
        <div class="post_user">
          <img src alt />
          <a href></a>
        </div>
        <span></span>
        <span></span>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      defaultL: ""
    }
  }
};
</script>

<style lang="less" scoped>
.postList {
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  .post_title {
    overflow: hidden;
    text-overflow: ellipsis; //文本溢出隐藏,文本溢出时“...”显示,clip（不显示省略标记)
    white-space: nowrap; //文本不换行
    margin-bottom: 15px;
    font-weight: 400;
    font-size: 18px;
  }
  .post_content {
    margin-bottom: 15px;
    line-height: 1.5;
    font-size: 14px;
    height: 63px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>