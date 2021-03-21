import {FC, ReactElement} from 'react'
import * as React from 'react'
import {userStore, postStore} from './store'

export const storeContext = React.createContext({
    userStore,
    postStore
});
interface Props{
    children: ReactElement
}
export const StoreProvider:FC<Props>=({children})=>{
    return(
        <storeContext.Provider value={{userStore, postStore}}>
            {children}
        </storeContext.Provider>
    )
}

export default StoreProvider
