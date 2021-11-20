import { NextApiRequest, NextApiResponse } from 'next'
import funnyQuotes from './data/funnyQuotesData.json'

export type FunnyQuotesProps = {
	id: number
  author: string
	text: string
}

// Simple example fetching json data stored in App
// TODO: add POST example and check results with Postman
const handler = (req: NextApiRequest, res: NextApiResponse) => {
	 try {
		res.status(200).json(funnyQuotes)
	} catch (err) {
		console.log(err)
	}
}

export default handler