import * as React from 'react'
import useFetchApi from './hooks/useFetchApi'

type CharactersProps = {
  id: number
  name: string
  lastName: string
}

const Characters = () => {
  const { fetchData, data, loading, error } = useFetchApi<CharactersProps[]>('characters')

  React.useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div>Let's fetch characters</div>
      {error ? <div>{error}</div>
        :
        loading ?
          <div>LOADING...</div>
          :
          <ul>
            {data && data.map((character, index) =>
              <li key={`character-${index}`}>
                {character.name} {character.lastName}
              </li>
            )}
          </ul>
      }
    </>
  )
}


export default Characters