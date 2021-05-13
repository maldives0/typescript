import {useSelector, useDispatch, TypedUseSelectorHook} from 'react-redux'
import { Type } from 'typescript'
import {RootState, AppDispatch} from '../store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector