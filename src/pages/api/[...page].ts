import { NextApiRequest, NextApiResponse } from 'next'

// Simple example fetching json data stored in App
// TODO: add POST example and check results with Postman
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { page } = req.query
  const data = require(`./data/${page}.json`)
	 try {
		res.status(200).json(data)
	} catch (err) {
		console.log(err)
	}
}

export default handler