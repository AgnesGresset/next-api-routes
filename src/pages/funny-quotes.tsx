import * as React from 'react'
import useFechApi from './hooks/useFetchApi'

type FunnyQuotesProps = {
	id: number
  author: string
	text: string
}

const FunnyQuotes = () => {
	const { fetchData, data, loading, error } = useFechApi<FunnyQuotesProps[]>('funny-quotes')
  const [ quote, setQuote ] = React.useState<FunnyQuotesProps | undefined>(undefined)

  React.useEffect(() => {
    fetchData()

    data &&
      window.setInterval(() => {
        console.log('test')
        const index = Math.floor(data.length * Math.random())
        setQuote(data[index])
      }, 5000)

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
        quote && 
          <div>
            <span>{quote.author}</span>
            <span>{quote.text}</span>
          </div>
      }
    </>
	)
}
	

export default FunnyQuotes