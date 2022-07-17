import type { NextApiRequest, NextApiResponse } from 'next'
let userData = {'name': 'john'}

export default function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  if(req.method === 'GET') {
    res.status(200).json(userData)
  } else if (req.method === 'POST') {
      userData = req.body.values
      res.status(201).json(userData)
  } 
}
