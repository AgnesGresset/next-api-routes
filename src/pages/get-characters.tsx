import * as React from 'react'
import { CharactersProps } from './api/characters'

const fetchCharacters = async () => {
	try {
		const chararactersReq = await fetch('/api/characters')

		const { status } = chararactersReq

		if (status >= 400) {
			throw new Error('Problem somewhere')
		}

		const resData = await chararactersReq.json()
		return resData
	} catch (err) {
		console.log(err)
		throw new Error('Another problem somehwere else!')
	}
}

const Characters = () => {
	const [data, setData] = React.useState<CharactersProps[]>([])

	React.useEffect(() => {
		fetchCharacters() 
			.then(resp => resp.data)
			.then(data => {
				setData(data)
		})
	}, [data])

	return (
		<>
			<div>GET Characters</div>
			<ul>
				{data.map((character, index) => 
					<li key={`character${index}`}>
						{character.name} {character.lastName}
					</li>
				)}
			</ul>
		</>
	)
}
	

export default Characters