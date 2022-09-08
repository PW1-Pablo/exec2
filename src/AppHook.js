import { useState } from "react";

const AppHook = () => {
    const [temp, setTemp] = useState(" ")
    const [escala, setEscala] = useState("C")
    const [result, setResult] = useState(" ")

    const convTemp = () => {
        let resultEscala

        if (escala === "C") {
            resultEscala = ((temp - 32) * 5) / 9
        } else if (escala === "F") {
            resultEscala = ((temp * 9) / 5) + 32
        }

        setResult(<p>Resultado: {resultEscala}°</p>)
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

            {result}

        </div>
    )
}

export default AppHook;
