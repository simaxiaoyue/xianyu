<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <div>
          <FlightsFilters :data="cacheFlightsData" @setDataList="setDataList"></FlightsFilters>
        </div>

        <!-- 航班头部布局 -->
        <FlightsListHead :data="flightsData"></FlightsListHead>
        <!-- 航班信息 -->
        <FlightsItem v-for="(item, index) in dataList" :key="index" :data="item"></FlightsItem>
        <!-- 分页 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageIndex"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>

      <!-- 侧边栏 -->
      <div class="aside">
        <!-- 侧边栏组件 -->
      </div>
    </el-row>
  </section>
</template>

<script>
import FlightsListHead from "@/components/air/flightsListHead.vue";
import FlightsItem from "@/components/air/flightsItem.vue";
import FlightsFilters from "@/components/air/flightsFilters.vue";
export default {
  data() {
    return {
      //航班总数据
      flightsData: {
        info: {},
        options: {}
      },
      //缓存航班总数据
      cacheFlightsData: {
        info: {},
        options: {}
      },
      // 当前显示的列表数组
      dataList: [],
      pageIndex: 0,
      pageSize: 5,
      total: 0
    };
  },
  components: {
    FlightsListHead,
    FlightsItem,
    FlightsFilters
  },
  mounted() {
    // console.log(this.$route);
    this.$axios({
      url: "airs",
      params: this.$route.query
    }).then(res => {
      console.log(res.data);
      this.flightsData = res.data;
      this.cacheFlightsData={...res.data}
      //分页的总条数
      this.total = this.flightsData.flights.length;
      // 第一页的值
      this.dataList = this.flightsData.flights.slice(0, this.pageSize);
    });
  },
  methods: {
    setDataList(arr) {
      this.flightsData.flights = arr;
      this.pageIndex = 1;
      // 按照数学公式切换dataList的值
      this.dataList = this.flightsData.flights.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageIndex * this.pageSize
      );
      // 修改总条数
      this.total = arr.length;
    },
    // 每页条数切换时候触发
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pageSize = val;
      //刷新页面,重新展示第一页
      this.dataList = this.flightsData.flights.slice(0, this.pageSize);
    },
    // 页码切换时候触发
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.pageIndex = val;
      this.dataList = this.flightsData.flights.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageIndex * this.pageSize
      );
    }
  }
};
</script>

<style scoped lang="less">
.contianer {
  width: 1000px;
  margin: 20px auto;
}

.flights-content {
  width: 745px;
  font-size: 14px;
}

.aside {
  width: 240px;
}
</style>