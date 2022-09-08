import { useState } from "react";

const AppHook = () => {
    const [temp, setTemp] = useState(" ")
    const [escala, setEscala] = useState("C")
    const [result, setResult] = useState(" ")
    const [resultEscala, setResultEscala] = useState(" ")

    const convTemp = () => {
        let resultTemp
        let resultEscala

        if (escala === "F") {
            resultTemp = ((temp - 32) * 5) / 9
            resultEscala = "C"
        } else if (escala === "C") {
            resultTemp = ((temp * 9) / 5) + 32
            resultEscala = "F"
        }

        setResult(resultTemp)
        setResultEscala(resultEscala)
    }

    const showResult = () => {
        if (result !== " ") {
            return <p>Resultado: {result} {resultEscala}°</p>
        }

        return null
    }
 
    return(
        <div>
            <h1>Conversor de Temperatura</h1>

            <br />

            Temperatura: <br />
            <input type="number" 
                onChange={(event) => setTemp(event.target.value)} />

            <label>
                <input type="radio" value="C" checked={escala === "C"} 
                    onChange={(event) => setEscala(event.target.value)} /> C°
            </label>
                
            <label>
                <input type="radio" value="F" checked={escala === "F"} 
                    onChange={(event) => setEscala(event.target.value)} /> F°
            </label>

            <br />
            
            <input type="button" value="Converter" onClick={convTemp} />

            <br /><br />

            {showResult()}

        </div>
    )
}

export default AppHook;
