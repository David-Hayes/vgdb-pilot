import type { NextApiResponse } from 'next'
import { serialize, CookieSerializeOptions } from 'cookie'
import { apiToken } from './ApiRoutes'

export const getAPIToken = (callback: () => void) => {
  fetch(apiToken).then((response) => {
    if (response.ok) {
      return callback()
    }
  })
}

export const returnInvalidMethod = (res: NextApiResponse) => {
  return res.status(405).json({ msg: 'Incorrect method' })
}

export const returnMissingToken = (res: NextApiResponse) => {
  return res.status(401).json({ msg: 'No token' })
}

export const setCookie = (
  res: NextApiResponse,
  name: string,
  value: unknown,
  options: CookieSerializeOptions = {}
) => {
  const stringValue =
    typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value)

  if (options['maxAge']) {
    options.expires = new Date(Date.now() + options.maxAge)
    options.maxAge /= 1000
  }

  res.setHeader('Set-Cookie', serialize(name, String(stringValue), options))
}
