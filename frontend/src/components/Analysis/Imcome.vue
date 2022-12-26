<template>
  <div id="content2">
    <h1>Category comparison</h1>
    <div id="Income">
      <ve-ring
        width="100%"
        height="100%"
        id="pie1"
        :backgroundColor="BackgroundColor"
        :data="pieIncome()"
        :extend="pieExtend"
        v-if="projectNum(1)"
      ></ve-ring>
      <ve-bar
        class="Bar"
        :data="barIncome()"
        :extend="barExtend"
        :backgroundColor="BackgroundColor"
        v-if="projectNum(2)"
      ></ve-bar>
    </div>
  </div>
</template>

<script>
//這裡import vue.chart
import Vue from "vue";
import VCharts from "v-charts";

Vue.use(VCharts);
export default {
  props: {
    //傳進來的project
    sendIncome: Object,
  },
  components: {},
  data() {
    return {
      pieExtend: {
        series: {
          dataType: "normal",
          hoverAnimation: true,
          cursor: "pointer",
          itemStyle: {
            shadowColor: "rgba(0, 0, 0, 0.3)",
            shadowBlur: 5,
          },
          //圖示

          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,

              fontSize: "20",
              fontWeight: "bold",
            },
          },
          radius: [40, 130],
          //right: '145',
          bottom: "50",
        },
        legend: {
          //type: 'scroll',
          icon: "circle",
          orient: "horizontal",
          //left: '140',
          top: "400",
          itemHeight: 30,
          itemWidth: 30,
        },
        color: [
          "#97EBCE",
          "#FBDA99",
          "#FF9798",
          "#82FFF7",
          "#A6CEE3",
          "#C4FFFB",
          "#B2DF8A",
          "#CE90E4",
        ],
      },
      BackgroundColor: "transparent",
      //顏色藥用v-bind設置

      barExtend: {
        grid: {
          width: 300,
          height: 330,
        },

        yAxis: {
          axisLabel: {
            fontSize: 10,
          },
        },
        legend: {
          //type: 'scroll',
          icon: "circle",
          orient: "horizontal",
          //left: '140',

          itemHeight: 20,
          itemWidth: 20,
        },
      },
    };
  },
  methods: {
    projectNum(type) {
      //console.log(this.sendIncome);
      //只有一個Project
      if (type === 1) {
        if (Object.keys(this.sendIncome).length != 1) return false;
        else return true;
      }
      //多個proejct
      else {
        if (Object.keys(this.sendIncome).length > 1) return true;
        else return false;
      }
    },
    pieIncome() {
      let key = Object.keys(this.sendIncome);
      let projectIncome = this.sendIncome[key];
      //console.log(projectIncome);
      let count = 0;
      let IncomeItem = [];
      for (let i = 0; i < projectIncome.length; ++i) {
        let name = projectIncome[i].Classification;
        let money = projectIncome[i].money;
        let index = IncomeItem.findIndex((e) => e.name === name);
        //沒有這個項目
        if (money < 0) {
          if (index === -1) {
            IncomeItem[count] = { name: name, money: money };
            ++count;
          }
          //已經有這個項目把錢加上去
          else {
            IncomeItem[index].money += money;
          }
        }
      }
      //console.log(IncomeItem);
      return {
        columns: ["name", "money"],
        rows: IncomeItem,
      };
    },
    barIncome() {
      //得到這個Project的所有名字
      let keys = Object.keys(this.sendIncome);
      let Columns = ["items"];
      for (let i = 0; i < keys.length; ++i) {
        Columns[i + 1] = keys[i];
      }
      let IncomeItem = [];
      let count = 0;
      //console.log(keys.length);
      for (let i = 0; i < keys.length; ++i) {
        //得到這個Project的所有支出

        let projectIncome = this.sendIncome[keys[i]];
        if (i === 0) {
          //先算第一個
          for (let j = 0; j < projectIncome.length; ++j) {
            //console.log(projectIncome.length);
            let name = projectIncome[j].Classification;
            let money = projectIncome[j].money;
            let index = IncomeItem.findIndex((e) => e.items === name);
            if (money < 0) {
              money = -money;
              //console.log(money);
              //沒有這個項目
              if (index === -1) {
                let key = keys[i];
                let obj = {};
                obj["items"] = name;
                obj[key] = money;
                IncomeItem[count] = obj;

                ++count;
              }
              //已經有這個項目把錢加上去
              else {
                let key = keys[i];
                let obj = IncomeItem[index];
                obj[key] += money;
                IncomeItem[index] = obj;
              }
            }
          }
        }

        //第二個Project繼續做下去
        else {
          for (let j = 0; j < projectIncome.length; ++j) {
            let name = projectIncome[j].Classification;
            let money = projectIncome[j].money;
            let index = IncomeItem.findIndex((e) => e.items === name);
            if (money < 0) {
              money = -money;
              if (index === -1) {
                //  console.log("i should not in!!!");
                let key = keys[i];
                let obj = {};
                obj["items"] = name;
                //前面也要建立這個項目(只是為0而已)
                for (let k = i; k >= 0; k--) obj[key[k]] = 0;
                obj[key] = money;

                IncomeItem[count] = obj;
                ++count;
              }
              //其他project有這個項目(必須一起比較)
              else {
                //project name
                let key = keys[i];
                let obj = IncomeItem[index];

                //已經有記錄過了把錢加上去
                if (key in obj) obj[key] += money;
                else obj[key] = money;

                IncomeItem[index] = obj;
                //console.log(IncomeItem[index]);
              }
            }
          }
        }
      }
      //console.log(IncomeItem);
      return {
        columns: Columns,
        rows: IncomeItem,
      };
    },
  },
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#content2 {
  h1 {
    font-size: 19px;
    color: #00c5b8;
    font-weight: normal;
    background: none;
    position: relative;
    right: 60px;
    top: 10px;
  }
  #Income {
    width: 100%;
    height: 90%;
    background: transparent;
    .Bar {
      position: relative;
      top: 10%;
      //background-color: red;
    }
  }

  display: block;
  margin: 0 auto;
  position: relative;
  width: 93%;
  height: 93%;
  background-color: transparent;
  opacity: 1;
  box-shadow: 0px 0px 5px #b3b2b2;
  border-radius: 22px 22px;
}
</style>
