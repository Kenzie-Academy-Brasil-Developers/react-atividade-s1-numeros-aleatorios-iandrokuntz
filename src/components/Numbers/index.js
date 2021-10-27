import { useState } from "react";

const Numbers = () => {

    const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1)

    const randomNumber = () => {

        setNumber(Math.floor(Math.random() * 100) + 1)
    }

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={randomNumber}>Gerar Número</button>
        </div>
    )
}

export default Numbers;