<template>
  <div class="filters">
    <el-row type="flex" class="filters-top" justify="space-between" align="middle">
      <el-col :span="8">
        单程：
        {{data.info.departCity}} - {{data.info.destCity}}
        /
        {{data.info.departDate}}
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="airport" placeholder="起飞机场" @change="handleAirport">
          <el-option
            v-for="(item,index) in data.options.airport"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="flightTimes" placeholder="起飞时间" @change="handleFlightTimes">
          <el-option
            v-for="(item,index) in data.options.flightTimes"
            :key="index"
            :label="`${item.from}:00 - ${item.to}:00`"
            :value="`${item.from},${item.to}`"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="company" placeholder="航空公司" @change="handleCompany">
          <el-option
            v-for="(item,index) in data.options.company"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="airSize" placeholder="机型" @change="handleAirSize">
          <el-option
            v-for="(item,index) in airSizeList"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>
    <div class="filter-cancel">
      筛选：
      <el-button type="primary" round plain size="mini" @click="handleFiltersCancel">撤销</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      airport: "", // 机场
      flightTimes: "", // 出发时间
      company: "", // 航空公司
      airSize: "", // 机型大小
      // 机型的大小的选项
      airSizeList: [
        { label: "大", value: "L" },
        { label: "中", value: "M" },
        { label: "小", value: "S" }
      ],
      // 用于过滤条件的对象
      filters: {
        airport: { key: "org_airport_name", value: "" },
        company: { key: "airline_name", value: "" },
        airSize: { key: "plane_size", value: "" }
      }
    };
  },
  props: {
    data: {
      type: Object,
      default: ""
    }
  },
  methods: {
    handleFilters() {
      const arr = [];
      //遍历每一条航班信息
      this.data.flights.forEach(item => {
        //假设每一天航班都符合过滤条件
        let valid = true;
        // [airport,company,airSize]
        Object.keys(this.filters).forEach(v => {
          if (!this.filters[v].value) {
            return;
          }
          if (item[this.filters[v].key] !== this.filters[v].value) {
            valid = false;
          }
        });
        if (valid) {
          arr.push(item);
        }
      });
      this.$emit("setDataList", arr);
    },
    // 选择机场时候触发
    handleAirport(value) {
      // const arr = this.data.flights.filter(v => {
      //   return v.org_airport_name === value;
      // });
      // this.$emit("setDataList", arr);
      this.filters.airport.value = value;
      this.handleFilters();
    },

    // 选择出发时间时候触发
    handleFlightTimes(value) {
      console.log(value);
      const [from, to] = value.split(",");
      const arr = this.data.flights.filter(v => {
        // console.log(v);
        const content = v.dep_time.split(":")[0];
        return +content >= +from && +content < +to;
      });
      this.$emit("setDataList", arr);
    },

    // 选择航空公司时候触发
    handleCompany(value) {
      // const arr = this.data.flights.filter(v => {
      //   return v.airline_name === value;
      // });
      // this.$emit("setDataList", arr);
      this.filters.company.value = value;
      this.handleFilters();
    },

    // 选择机型时候触发
    handleAirSize(value) {
      // const arr = this.data.flights.filter(v => {
      //   return v.plane_size === value;
      // });
      // this.$emit("setDataList", arr);
      this.filters.airSize.value = value;
      this.handleFilters();
    },

    // 撤销条件时候触发
    handleFiltersCancel() {
      this.airport = "";
      this.flightTimes = "";
      this.company = "";
      this.airSize = "";
      this.$emit("setDataList", this.data.flights);
    }
  }
};
</script>

<style scoped lang="less">
.filters {
  margin-bottom: 20px;
}

.filters-top {
  > div {
    /deep/ .el-select {
      margin-left: 10px;
    }
  }
}

.filter-cancel {
  margin-top: 10px;
}
</style>