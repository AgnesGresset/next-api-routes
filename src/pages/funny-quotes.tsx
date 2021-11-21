import * as React from 'react'
import Quote from 'src/components/Quote'
import { FunnyQuoteProps } from '../components/Quote/Quote'
import useFetchApi from './hooks/useFetchApi'

const FunnyQuotes = () => {
	const { fetchData, data, loading, error } = useFetchApi<FunnyQuoteProps[]>('funny-quotes')
  const [ quote, setQuote ] = React.useState<FunnyQuoteProps | undefined>(undefined)

  //TODO: do it differently, because it is not updating smootlhy every 5 seconds... shufflearray?
  React.useEffect(() => {
    fetchData()
  },[])

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