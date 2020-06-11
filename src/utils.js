const ECHARTS_SETTINGS = [
  'grid', 'dataZoom', 'visualMap',
  'toolbox', 'title', 'legend',
  'xAxis', 'yAxis', 'radar',
  'tooltip', 'axisPointer', 'brush',
  'geo', 'timeline', 'graphic',
  'series', 'backgroundColor', 'textStyle'
]
const DEFAULT_COLORS = [
  // '#4C84FF', '#FEC400', '#29CC97',
  // '#13CAE1', '#8061EF', '#FE5461',
  // '#6796FF', '#AAD450', '#82A9FF',
  // '#00ACED', '#FF548E', '#1E9AFF',
  // '#AC92EC', '#8A909D', '#1B223C'
  '#19d4ae', '#5ab1ef', '#fa6e86',
  '#ffb980', '#0067a6', '#c4b4e4',
  '#d87a80', '#9cbbff', '#d9d0c7',
  '#87a997', '#d49ea2', '#5b4947',
  '#7ba3a8'
]

function camelToKebab (s) {
  return s.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}
function debounce (fn, delay) {
  var timer = null
  return function () {
    var self = this
    var args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(self, args)
    }, delay)
  }
}
function getStackMap (stack) {
  const stackMap = {}
  Object.keys(stack).forEach(item => {
    stack[item].forEach(name => {
      stackMap[name] = item
    })
  })
  return stackMap
}
// / / 获取指标及别名
function getMetricsAndTarget (data) {
  const metrics = []; const legend = []
  data.forEach(item => {
    let arr = item.split(':')
    metrics.push(arr[0])
    legend.push(arr[1] !== undefined ? arr[1] : arr[0])
  })
  return {
    metrics: metrics,
    targets: legend
  }
}
export {
  camelToKebab,
  debounce,
  getStackMap,
  getMetricsAndTarget,
  ECHARTS_SETTINGS,
  DEFAULT_COLORS
}
