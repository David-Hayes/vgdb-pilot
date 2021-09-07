import type { NextApiRequest, NextApiResponse } from 'next'
import {
  returnInvalidMethod,
  returnMissingToken,
} from '../../libs/api/ApiUtils'
const { NEXT_PUBLIC_IGDB_CLIENT } = process.env
import axios from 'axios'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // validate method
  if (req.method !== 'POST') {
    return returnInvalidMethod(res)
  }

  // do we have a cookie?
  if (!req.cookies || !req.cookies['apit']) {
    return returnMissingToken(res)
  }

  // do we have a query?
  if (!req.body && !JSON.parse(req.body)['query']) {
    return res.status(400).json({ msg: 'No query' })
  }

  const { query, limit = 30, offset = 0 } = JSON.parse(req.body)

  // set our headers for igdb
  const defaultHeaders = {
    Accept: 'application/json',
    'Client-ID': NEXT_PUBLIC_IGDB_CLIENT,
    Authorization: `Bearer ${req.cookies['apit']}`,
  }

  return axios({
    url: 'https://api.igdb.com/v4/games',
    method: 'POST',
    headers: defaultHeaders,
    data: `fields name, category, cover.*, first_release_date, slug; search "${query}"; where category = (0,3,8,9,11); limit ${limit}; offset ${offset};`,
  }).then((response) => {
    res.setHeader('x-count', response.headers['x-count'])
    res.status(200).json(response.data)
  })
}
