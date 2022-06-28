import React, { useContext, useState } from 'react'
import useFetch from '../hooks/useFetch'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [query, setQuery] = useState("joker")
    const {isLoading, error, data: movies} = useFetch(`&s=${query}`)
    return (
        <AppContext.Provider value={{isLoading, error, movies, query, setQuery}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext ,AppProvider}

