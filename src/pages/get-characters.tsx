import * as React from 'react'
import { CharactersProps } from './api/characters'
import useFechApi from './hooks/useFetchApi'

const Characters = () => {
	const { fetchData, data, loading } = useFechApi<CharactersProps[]>('characters')

  React.useEffect(() => {
    fetchData()
  },[])

	return (
    loading ?
      <div>LOADING...</div>
    :
    <>
      <div>Characters</div>
      <ul>
        {data && data.map((character, index) => 
          <li key={`character${index}`}>
            {character.name} {character.lastName}
          </li>
        )}
      </ul>
    </>
	)
}
	

export default Characters