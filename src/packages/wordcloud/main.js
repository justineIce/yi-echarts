// sizeRange: [12, 60],
export const wordcloud = (dimensions, source, settings, extra) => {
  const {
    dimension = dimensions[0],
    metrics = dimensions[1],
    shape = 'pentagon',
    image = '',
    width= '80%',
    height= '80%',
    maxSize = 30,
    minSize = 12
  } = settings
    let maskImage =null
    if(image !==''){
        maskImage=new Image();
    }
    let tooltip = { show: true }
    let baseSeries = {
        name:'wordCloud',
        type: 'wordCloud',
        shape: shape,
        maskImage: maskImage,
        rotationRange: [-90, 90],
        sizeRange: [minSize, maxSize],
        rotationStep:30,
        textPadding: 0,
        gridSize: 0,
        width: width,
        height: height,
        left: 'center',
        top: 'center',
        drawOutOfBound: false,
        autoSize: {
            enable: true,
            minSize: 4
        },
        textStyle: {
            normal: {
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                color: function () {
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')'
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        data: []
    }
    let data = source.slice().map(item => {
        return {
            name: item[dimension],
            value: item[metrics]
        }
    })
    baseSeries.data = data
    let series = [baseSeries]
    let grid = Object.assign({}, { left: '15%', right: '15%'}, extra.grid)
    let options = { grid,tooltip, series }

    if(maskImage){
        maskImage.onload = function () {
            extra.echarts.setOption(options);
        }
        maskImage.src =image;
    }
    extra.echarts.setOption(options);
  return options
}
