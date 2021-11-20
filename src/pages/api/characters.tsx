import { NextApiRequest, NextApiResponse } from 'next'
import characters from './data/charactersData.json'

export type CharactersProps = {
	id: number
	name: string
	lastName: string
}

// Simple example fetching json data stored in App
// TODO: add POST example and check results with Postman
const handler = (req: NextApiRequest, res: NextApiResponse) => {
	 try {
		res.status(200).json(characters)
	} catch (err) {
		console.log(err)
	}
}

export default handler