import { useState, useCallback, useEffect } from 'react'

export default function useAsync(callback, dependecies=[]) {
    const [loading, setLoading] = useState(false)
    const [value, setValue] = useState()
    const [error, setError] = useState()

    const memoizedCallback = useCallback(() => {
        setLoading(true)
        setValue(undefined)
        setError(undefined)
        callback()
        .then(setValue)
        .catch(setError)
        .finally(() => setLoading(false))
    }, dependecies)

    useEffect(() => {
        memoizedCallback()
        }
    , memoizedCallback)

    return { loading, value, error }
}
