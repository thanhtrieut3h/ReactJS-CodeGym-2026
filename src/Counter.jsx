import { useState } from "react"
export default function Counter(){
    const [count, setCount] = useState(0);
    // count : state (trang thai)
    // setCount: ham thay doi gia tri cua  state
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    return (
        <>
            <h2> {count} </h2>
            <button onClick={increment}> + </button>
            <button onClick={decrement}> - </button>
        </>
    )
}