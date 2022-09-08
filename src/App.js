import React from "react"

class App extends React.Component {

    constructor() {
        super()

        this.state = {
            temp: 0,
            escala: "C",
            result: " ",
        }
    }

    onChangeInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    convTemp() {
        let resultConv
        const { escala, temp } = this.state

        if (escala === "C") {
            resultConv = ((temp - 32) * 5) / 9
        } else if (escala === "F") {
            resultConv = ((temp * 9) / 5) + 32
        }

        this.setState({
            result: resultConv
        })
    }

    showResult() {
        if (this.state.result !== " " && this.state.escala !== " ") {
            return <p>Resultado: {this.state.result} {this.state.escala}</p>
        }

        return null
    }

    render() {
        return(
            <div>
                <h1>Conversor de Temperatura</h1>

                <br />

                Temperatura: <br />
                <input type="number" name="temp" 
                    onChange={(event) => this.onChangeInput(event)}/>

                <label>
                    <input type="radio" value="C" name="escala"
                        checked={this.state.escala === "C"}
                        onChange={(event) => this.onChangeInput(event)}
                        /> Celsius (C)
                </label>

                <label>
                    <input type="radio" value="F" name="escala"
                        checked={this.state.escala === "F"}
                        onChange={(event) => this.onChangeInput(event)}
                        /> Fahrenheit (F)
                </label>

                <br />

                <input type="button" value="Converter"
                    onClick={() => this.convTemp()}/>
                
                <br /><br />

                {this.showResult()}
                
            </div>
        )
    }
}

export default App;
