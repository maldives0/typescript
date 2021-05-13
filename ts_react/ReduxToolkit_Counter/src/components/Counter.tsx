import * as React from 'react'
import {useState} from 'react'
import {useAppSelector, useAppDispatch} from '../hooks/useCounter'
import {selectCount, decrement, increment, incrementAsync,incrementByAmount } from '../modules/counterSlice'

function Counter(){
    const count = useAppSelector((state)=> state.count)
    const dispatch = useAppDispatch()
    const [incrementAmount, setIncrementAmount] = useState('2')
    return(
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(incrementByAmount(Number(incrementAmount) || 0))}>add amount</button>
            <button onClick={()=>dispatch(incrementAsync(Number(incrementAmount) || 0))}>add async </button>
        </div>
    )
}
export default Counter