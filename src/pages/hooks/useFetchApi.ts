import * as React from 'react'

const useFechApi = <Response,>(url: string) => {
  const [data, setData] = React.useState<Response>()
  const [loading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState(false)

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const req = await fetch(`/api/${url}`)

      const { status } = req
  
      if (status >= 400) {
        throw new Error('Failure while fetching data')
      }
  
      const respData = await req.json()
      setData(respData['data'])

    } catch (err) {
      setError(true)
      throw new Error('Something weird happened!')
    } finally {
      setIsLoading(false)
    }
  }

  return { fetchData, data, loading, error }
}

export default useFechApi