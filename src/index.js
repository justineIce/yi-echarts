import YiLine from './packages/line/index'
import YiBar from './packages/bar/index'
import YiHistogram from './packages/histogram/index'
import YiPie from './packages/pie/index'
import YiRadar from './packages/radar/index'
import YiWordCloud from './packages/wordcloud/index'
import YiLiquidfill from './packages/liquidfill/index'

//男女比例图
import YiGenderRatio from './packages/gender-ratio'
//地图
import YiMap from './packages/map'
//排序图表
import YiRankingIcon from './packages/ranking/icon'
import YiRanking from './packages/ranking/ranking'
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
  YiRankingIcon,
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
  ...components
}
