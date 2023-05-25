import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    const fetchData = async () => {
      setLoading(true)

      try {
        const res = await fetch(url, { signal })

        // si hay un error configuro el objeto que voy a agarrar en el catch
        if (!res.ok) {
          let err = new Error('Error in fetching data')
          err.status = res.status || '00'
          err.statusText = res.statusText || 'Ups, something went wrong'
          throw err
        }

        // si no hay error lo paso a formato JSON
        const json = await res.json()

        if (!signal.aborted) {
          setData(json)
          setError(null)
        }
      } catch (error) {
        if (!signal.aborted) {
          setData(null)
          setError(error)
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false)
        }
      }
    }
    fetchData()

    return () => abortController.abort()
  }, [url])

  return { data, error, loading }
}
