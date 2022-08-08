import { useState, useCallback, useEffect } from 'react'

export default function useAsync(callback) {
    const [loading, setLoading] = useState(false)
    const [value, setValue] = useState()
    const [error, setError] = useState()

    const asyncFn = () => {
        setLoading(true)
        setValue(undefined)
        setError(undefined)
        callback()
        .then(setValue)
        .catch(setError)
        .finally(() => setLoading(false))
    }

    return { loading, value, error, asyncFn }
}
