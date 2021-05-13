import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState, AppDispatch} from '../store'
interface CounterState {
  count: number
}
const initialState= {
  count:0
} as  CounterState 
export const slice = createSlice({
  name:'counter',
  initialState,
  reducers:{
    increment: state =>{
      state.count += 1
    },
    decrement: state =>{
      state.count -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) =>{
      state.count += action.payload
    }
  }
})
export const{ increment, decrement, incrementByAmount} = slice.actions

export const incrementAsync = (amount:number) => (dispatch:AppDispatch) =>{
  setTimeout(()=>{
    dispatch(incrementByAmount(amount))
  }, 1000)
}
export const selectCount = (state:RootState) => state.count
 export default slice.reducer