import * as React from 'react'
import useCounter from '../hooks/useCounter'
function Counter(){
    const {count, onIncrease, onDecrease, onIncreaseBy} = useCounter()
    return(
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <button onClick={()=>onIncreaseBy(5)}>+5</button>
        </div>
    )
}
export default Counter