import type { NextApiRequest, NextApiResponse } from 'next'
import {
  returnInvalidMethod,
  returnMissingToken,
} from '../../libs/api/ApiUtils'
const { NEXT_PUBLIC_IGDB_CLIENT } = process.env
import axios from 'axios'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return returnInvalidMethod(res)
  }
  // do we have a cookie?
  if (!req.cookies || !req.cookies['apit']) {
    return returnMissingToken(res)
  }

  // do we have a query?
  if (!req.body && !JSON.parse(req.body)['slug']) {
    return res.status(400).json({ msg: 'No slug' })
  }

  const { slug } = JSON.parse(req.body)

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
    data: `fields name, cover.*, first_release_date, summary, storyline, platforms.*, screenshots.*, aggregated_rating, aggregated_rating_count, franchises.*, collection.*, genres.*, involved_companies.*, involved_companies.company.name; where slug = "${slug}";`,
  })
    .then((response) => {
      res.status(200).json(response.data[0])
    })
    .catch((error) => {
      res.status(400).json(error)
    })
}
