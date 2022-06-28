import { useEffect, useState } from "react"
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=657b9fea`

const useFetch = urlParams => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState({show: false, msg: ""})
    const [data, setData] = useState(null);

    const fetchMovis = async url => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.Response === "True") {
                setData(data.Search || data);
                setError({show: false, msg: ''})
            } else {
                setError({show: true, msg: data.Error})
            }
            setIsLoading(false)
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMovis(`${API_ENDPOINT}${urlParams}`)
    }, [urlParams])

    return {isLoading, error, data}

}

export default useFetch;