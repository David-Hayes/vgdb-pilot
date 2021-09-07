import type { NextApiRequest, NextApiResponse } from 'next'
import { returnInvalidMethod, setCookie } from '../../libs/api/ApiUtils'
const { NEXT_PUBLIC_IGDB_CLIENT, NEXT_PUBLIC_IGDB_SECRET } = process.env
import axios from 'axios'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // validate method
  if (req.method !== 'GET') {
    return returnInvalidMethod(res)
  }

  // do we have a token already?
  if (req.cookies && req.cookies['apit'] != undefined) {
    return res.status(200).json({ msg: 'Token exists' })
  }

  return axios({
    url: 'https://id.twitch.tv/oauth2/token',
    method: 'POST',
    params: {
      client_id: NEXT_PUBLIC_IGDB_CLIENT,
      client_secret: NEXT_PUBLIC_IGDB_SECRET,
      grant_type: 'client_credentials',
    },
  })
    .then((response) => {
      setCookie(res, 'apit', response.data.access_token, {
        path: '/',
        secure: true,
        maxAge: response.data.expires_in * 1000,
      })
      return res.status(200).json({ msg: 'Token created' })
    })
    .catch((err) => {
      return res.status(400).json({ error: err })
    })
}
