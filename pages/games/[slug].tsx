/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useAppState } from '../../libs/AppState'
import { apiGame } from '../../libs/api/ApiRoutes'
import { Main } from '../../components/template/Main'
import { Container } from '../../components/template/Container'
import { Loader } from '../../components/ui/Loader'
import { H1, H2 } from '../../components/ui/Headings'
import { Card } from '../../components/ui/Card'
import { Link } from '../../components/ui/Link'

const Game: NextPage = () => {
  const { user } = useAppState()
  const { query } = useRouter()
  const [game, setGame] = useState<any | null>(null)
  const [heroScreen, setHeroScreen] = useState(0)
  const gameDetailTableCell = 'w-1/2 align-top py-2'

  useEffect(() => {
    if (query.slug) {
      fetch(apiGame, {
        method: 'post',
        body: JSON.stringify({ slug: query.slug }),
      }).then(async (response) => {
        if (response.ok) {
          const gameData = await response.json()
          setGame(gameData)
          if (gameData.screenshots) {
            setHeroScreen(
              Math.floor(Math.random() * gameData.screenshots.length)
            )
          }
        }
      })
      // TODO 404 on no game
      // TODO No token due to race conflict (don't fire until we have a token???)
    }
  }, [query])

  if (!game) {
    return (
      <Main>
        <Loader />
      </Main>
    )
  }

  const releaseDate = (releaseDate: number) => {
    const rD = new Date(releaseDate * 1000)
    return (
      <>
        {rD.getDate()}{' '}
        {rD.toLocaleString('default', {
          month: 'long',
        })}{' '}
        {rD.getFullYear()}
      </>
    )
  }

  return (
    <Main title={game.name} topMargin={false} fullWidth={true}>
      <div
        className="py-10 mb-8 border-b-8 border-primaryAlt"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 30, 30, 0.5), rgba(30, 30, 30, 1)), ${
            game.screenshots
              ? `url(https://images.igdb.com/igdb/image/upload/t_1080p/${game.screenshots[heroScreen].image_id}.jpg)`
              : ``
          }`,
          backgroundPosition: `center center`,
          backgroundSize: `cover`,
        }}
      >
        <Container className="flex flex-col md:flex-row gap-6">
          <div>
            <img
              src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${
                game.cover ? game.cover.image_id : `nocover_qhhlj6`
              }.jpg`}
              alt={game.name}
              className="shadow-md rounded-md w-44 mx-auto"
            />
          </div>
          <div>
            <H1 className="text-4xl">{game.name}</H1>
            {game.first_release_date && (
              <p className="text-sm">
                Release date: {releaseDate(game.first_release_date)}
              </p>
            )}
          </div>
        </Container>
      </div>
      <Container className="grid md:grid-cols-3 gap-8">
        <main className="md:col-span-2 space-y-10">
          {(game.summary || game.storyline) && (
            <div>
              <H2>Overview</H2>
              {game.summary &&
                game.summary.split('\n').map((item: string, key: number) => {
                  return (
                    <p key={key} className="mb-4">
                      {item}
                    </p>
                  )
                })}
              {game.storyline &&
                game.storyline.split('\n').map((item: string, key: number) => {
                  return (
                    <p key={key} className="mb-4">
                      {item}
                    </p>
                  )
                })}
            </div>
          )}
          {game.screenshots && (
            <>
              <H2>Screenshots</H2>
              <div className="grid grid-cols-3 gap-4">
                {game.screenshots.map((screenshot: any, index: number) => (
                  <img
                    src={`//images.igdb.com/igdb/image/upload/t_screenshot_med/${screenshot.image_id}.jpg`}
                    alt=""
                    key={index}
                  />
                ))}
              </div>
            </>
          )}
        </main>
        <aside>
          <Card className="text-sm">
            <table>
              {game.platforms && (
                <tr>
                  <td className={gameDetailTableCell}>Platforms:</td>
                  <td className={gameDetailTableCell}>
                    {game.platforms.map((platform: any, index: number) => (
                      <p key={`platform${index}`}>{platform.name}</p>
                    ))}
                  </td>
                </tr>
              )}
              {game.collection && (
                <tr>
                  <td className={gameDetailTableCell}>Franchises</td>
                  <td className={gameDetailTableCell}>
                    <Link href={`/franchises/${game.collection.slug}`}>
                      {game.collection.name}
                    </Link>
                  </td>
                </tr>
              )}
              {game.genres && (
                <tr>
                  <td className={gameDetailTableCell}>Genres</td>
                  <td className={gameDetailTableCell}>
                    {game.genres.map((genre: any, index: number) => (
                      <p key={`genre${index}`}>{genre.name}</p>
                    ))}
                  </td>
                </tr>
              )}
            </table>
          </Card>
        </aside>
      </Container>
    </Main>
  )
}

export default Game
