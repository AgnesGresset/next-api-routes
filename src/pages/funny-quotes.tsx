import * as React from 'react'
import Quote from 'src/components/Quote'
import { FunnyQuoteProps } from '../components/Quote/Quote'
import useFetchApi from './hooks/useFetchApi'

const FunnyQuotes = () => {
	const { fetchData, data, loading, error } = useFetchApi<FunnyQuoteProps[]>('funny-quotes')

  React.useEffect(() => {
    fetchData()
  },[])

  const [ quote, setQuote ] = React.useState<FunnyQuoteProps | undefined>(data ? data[0] : undefined)

  React.useEffect(() => {
    if (data) {
      const index = Math.floor(data.length * Math.random())
      window.setInterval(() => {
        setQuote(data[index])
      }, 5000)
    }
    
    // clean up interval on unmount
    return () => {
      window.clearInterval()
    }
  },[])

	return (
    <>
      <div>Brighten up your day ☀️️</div>
      {error ? <div>{error}</div>
        :
        loading ?
          <div>LOADING...</div>
        :
        quote && <Quote quote={quote}/>
      }
    </>
	)
}
	

export default FunnyQuotes