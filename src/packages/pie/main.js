
function getPieSeries (args) {
  const {
    sources,
    dimension,
    metrics,
    center,
    radius,
    roseType
  } = args
  let series = []; let data = []
  data.push(sources)
  let seriesBase = {
    type: 'pie',
    center: center,
    radius: radius,
    roseType: roseType,
    label: {
      normal: {
        formatter: '{b}\n{d}%'
      }
    }
  }
  data.forEach(item => {
    let seriesItem = Object.assign({ data: [] }, seriesBase)
    seriesItem.data = item.map(row => ({
      name: row[dimension],
      value: row[metrics]
    }))
    series.push(seriesItem)
  })
  return series
}
export const pie = (dimensions, source, settings, extra) => {
  const sources = JSON.parse(JSON.stringify(source))
  const {
    dimension = dimensions[0], // 维度
    metrics = dimensions[1], // 指标
    radius = [0, '65%'],
    roseType = false,
    center = ['50%', '50%']
  } = settings
  // legend
  let legend = Object.assign({}, { type: 'scroll' }, extra.legend)
  let tooltip = Object.assign({}, {
    trigger: 'item',
    formatter: '{b} : {c} ({d}%)'
  }, extra.tooltip)
  let grid = Object.assign({}, {left: '10%', right: '10%'}, extra.grid)
  const series = getPieSeries({
    sources,
    dimension,
    metrics,
    radius,
    roseType,
    center
  })
  const options = { tooltip, grid, legend, series }
  return options
}
