import * as React from 'react'

const fetchCharacters = async () => {
	try {
		const chararactersReq = await fetch('/api/characters')

		const { status } = chararactersReq

		if (status >= 400) {
			console.log('ohoh error')
			throw new Error('Problem somewhere')
		}

		/**
		 * Response data
		 * (correct)
		 * {
		 * 	data: {
		 * 		0: {id: 0, name: Elisabeth...}
		 * 		1: {id: 1...}
		 * 		2: {id: 2...}
		 * 	}
		 * }
		 */
		const resData = await chararactersReq.json()
		return resData
	} catch (err) {
		console.log(err)
		throw new Error('Another problem somehwere else!')
	}
}

const Characters = () => {
	/**
	 * When we save the data like this, we will get a Promise { <pending> } when using the variable. 
	 * It's happening because the Javascript code always executes synchronously,
	 * so the console.log() function starts immediately after the fetch() request,
	 * not waiting until it is resolved. In the moment when console.log() function starting to run,
	 * a Promise that should be returned from a fetch() request is in a pending status.
	 * We can access the returned value of a Promise object in another .then() callback
	*/
	const apiCharacters = fetchCharacters()
		.then(resp => resp.data)
		.then(data => {
			// Also correct, we get the data as array of chars
			//console.log(data)
			return data
		})

	// Still a shitty promise
	const characters = async () => await apiCharacters

	return (
		<>
			<div>GET Characters</div>
			<div>

			</div>
		</>
	)
}
	

export default Characters