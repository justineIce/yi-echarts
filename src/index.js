import YiLine from './packages/line'
import YiBar from './packages/bar'
import YiHistogram from './packages/histogram'
import YiPie from './packages/pie'
import YiRadar from './packages/radar'
import YiWordCloud from './packages/wordcloud'
import YiLiquidfill from './packages/liquidfill'

// 男女比例图
import YiGenderRatio from './packages/gender-ratio'
// 地图
import YiMap from './packages/map'
// 排序图表
import YiRanking from './packages/ranking'
const components = [
  YiLine,
  YiBar,
  YiHistogram,
  YiPie,
  YiRadar,
  YiWordCloud,
  YiLiquidfill,
  YiGenderRatio,
  YiMap,
  YiRanking
]

function install (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  YiLine,
  YiBar,
  YiHistogram,
  YiPie,
  YiRadar,
  YiWordCloud,
  YiLiquidfill,
  YiGenderRatio,
  YiMap,
  YiRanking
}
