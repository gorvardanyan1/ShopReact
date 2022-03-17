import { useState } from "react"

function ButtonGroup({ typeFunc, moneyFunc }) {
    let [val1, setVal1] = useState("")
    let [val2, setVal2] = useState("")
    return (
        <div>
            <div className="ButtonGroup">
                <button onClick={() => typeFunc("clock")}>Ժամացույց</button>
                <button onClick={() => typeFunc("phone")}>Phone and other</button>
                <button onClick={() => typeFunc("computer")}>Computer and other</button>
                <button onClick={() => typeFunc("car")}>Car Accessories</button>
                <button onClick={() => typeFunc("dinamic")}>Dinamic</button>
                <button onClick={() => typeFunc("sport")}>Sport</button>
            </div>
            <div>
                <button onClick={() => typeFunc("refresh")} >Refresh</button>

                <div>
                    <input type="number" value={val1} placeholder="minimum"
                        onChange={(e) => setVal1(e.target.value)} />
                    <input type="number" placeholder="maximum" value={val2}
                        onChange={(e) => setVal2(e.target.value)} />
                    <button onClick={() => moneyFunc(val1, val2)}>Submit</button>
                </div>
            </div>
        </div>
    )
}
export default ButtonGroup