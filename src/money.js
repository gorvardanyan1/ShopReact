import { useState } from "react"

function Money({moneyFunc}) {
    const [value, setValue] = useState({
        input1: undefined,
        input2: undefined,
    })
    return (
        <div>
            <input type="number" value={value.input1} placeholder="minimum"
                onChange={(e) => setValue((elem) => elem.input1 = e)} />
            <input type="number" placeholder="maximum" value={value.input2}
                onChange={(e) => setValue((elem) => elem.input2 = e)} />
            <button onClick={()=> moneyFunc(value)}>Submit</button>
        </div>
    )
}
