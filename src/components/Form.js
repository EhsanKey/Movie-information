import React from 'react'
import { useGlobalContext } from '../context/contextProvider'

const Form = () => {

    const {query, setQuery, error} = useGlobalContext()

    return (
        <form className='search-form' onSubmit={e => e.preventDefault()}>
            <h2>Search Movis</h2>
            <input 
                className='form-input'
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            {error.show && <div className='error'>{error.msg}</div>}
        </form>
    )
}

export default Form