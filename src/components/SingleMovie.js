import React from 'react'

import {useParams, Link} from "react-router-dom"
import useFetch from '../hooks/useFetch'

const SingleMovie = () => {

    const params = useParams()
    const id = params.id
    const {isLoading,
            error,
            data: movie} = useFetch(`&i=${id}`)

    if (isLoading) {
        return <div className='loading'></div>
    }

    if (error.show) {
        return (
            <div className='page-error'>
                <h1>{error.msg}</h1>
                <Link to="/" className='btn'>
                    back to movies
                </Link>
            </div>
        )
    }

    const {Poster: poster,
            Title: title,
            Plot: plot,
            Year: year, 
            Director: director, 
            Genre: genre,
            Writer: writer,
            Actors: actors,
            Country:country,
            Language: language} = movie;
    
    return (
        <section className='single-movie'>
            <img src={poster} alt={title} /> 
            <div className='single-movie-info'>
                <h2>{title}</h2>
                <h4>{genre}</h4>
                <h4>{year}</h4>
                <h4><span>{language}</span>, <span>{country}</span></h4>
                <p>Plot:  <span>{plot}</span></p>
                <p>Director:  <span>{director}</span></p>
                <p>Writer:  <span>{writer}</span></p>
                <p>Actors:  <span>{actors}</span></p>
                <Link to="/" className='btn'>
                    back to movie
                </Link>
            </div>
        </section>
    )

    return <h2>hi</h2>
}

export default SingleMovie