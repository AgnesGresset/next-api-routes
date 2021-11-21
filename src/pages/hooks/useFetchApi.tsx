import * as React from 'react'

const useFechApi = <Response,>(url: string | undefined) => {
  const [data, setData] = React.useState<Response>()
  const [loading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState<string>('')

  const fetchData = async () => {
    const req = await fetch(`/api/${url}`)

    try {
      setIsLoading(true)
      const respData = await req.json()
      setData(respData['data'])
    } catch (err) {
      setError('We cannot fetch data for the required route, try another one!')
    } finally {
      setIsLoading(false)
    }
  }

  return { fetchData, data, loading, error }
}

export default useFechApi