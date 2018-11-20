import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput'


//这里是一个转换数据的函数
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

//这两个函数可以在 tryConverts 里面调用的
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
  
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}


class Calculator extends Component {
    constructor (props) {
        super(props)
        //父元素定义数据，两个子元素共同使用这个数据，不过在使用前进行处理，且两个子元素都可以修改这个数据，所以必定会影响另一个
        this.state = {
            temperature: 0, type: 'c', 
        }
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    }

    handleCelsiusChange ( temperature ) {
        this.setState({
            temperature, type: 'c'
        })
    }

    handleFahrenheitChange ( temperature ) {
        this.setState({
            temperature, type: 'f'
        })
    }

    render () {
        let type = this.state.type
        let temperature = this.state.temperature
        let celsius = type === 'c' ? temperature : tryConvert( temperature, toCelsius ) //当他不为c的时候就转换
        let fahrenheit = type === 'f' ? temperature : tryConvert( temperature, toFahrenheit )   //当他不为f的时候就转换
        return (
            <div>
                <h1>这是一个温度相互转换的案例</h1>
                <TemperatureInput
                    type = 'c' 
                    temperature = { celsius }
                    onTemperatureChange = {this.handleCelsiusChange}/>
                <TemperatureInput
                    type = 'f' 
                    temperature = { fahrenheit }
                    onTemperatureChange = {this.handleFahrenheitChange}/>
            </div>
        )
    }
}

export default Calculator