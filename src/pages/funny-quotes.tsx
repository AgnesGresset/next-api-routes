import * as React from 'react'
import useFechApi from './hooks/useFetchApi'

type FunnyQuotesProps = {
	id: number
  author: string
	text: string
}

const FunnyQuotes = () => {
	const { fetchData, data, loading, error } = useFechApi<FunnyQuotesProps[]>('funny-quotes')

  React.useEffect(() => {
    fetchData()
  },[])

	return (
    <>
      <div>Let's fetch funny quotes</div>
      {error ? <div>{error}</div>
        :
        loading ?
          <div>LOADING...</div>
        :
        <ul>
          {data && data.map((quote, index) => 
            <li key={`character-${index}`}>
              {quote.author}: {quote.text}
            </li>
          )}
        </ul>
      }
    </>
	)
}
	

export default FunnyQuotes