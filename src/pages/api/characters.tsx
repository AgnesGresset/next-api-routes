import { NextApiRequest, NextApiResponse } from 'next'
import characters from './charactersData.json'

// Simple example fetching json data 
const handler = (req: NextApiRequest, res: NextApiResponse) => {
	try {
		res.status(200).json(characters)
	} catch (err) {
		console.log(err)
	}
}

export default handler