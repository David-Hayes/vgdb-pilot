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
import { ModalScreenshot } from '../../components/ui/ModalScreenshot'

const Game: NextPage = () => {
  const { user } = useAppState()
  const { query } = useRouter()
  const [game, setGame] = useState<any | null>(null)
  const [heroScreen, setHeroScreen] = useState(0)
  const [screenModal, setScreenModal] = useState<number | null>(null)
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

  const developers = (companies: any) => {
    const uniqueArray = companies.filter((thing: any, index: any) => {
      const _thing = JSON.stringify(thing.company.name)
      if (!thing.developer) {
        return false
      }
      return (
        index ===
        companies.findIndex((obj: any) => {
          return JSON.stringify(obj.company.name) === _thing
        })
      )
    })
    return uniqueArray
  }
  const publishers = (companies: any) => {
    const uniqueArray = companies.filter((thing: any, index: any) => {
      const _thing = JSON.stringify(thing.company.name)
      if (!thing.publisher) {
        console.log(thing)
        return false
      }
      return (
        index ===
        companies.findIndex((obj: any) => {
          return JSON.stringify(obj.company.name) === _thing
        })
      )
    })
    return uniqueArray
  }

  return (
    <>
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
              <Card>
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
                  game.storyline
                    .split('\n')
                    .map((item: string, key: number) => {
                      return (
                        <p key={key} className="mb-4">
                          {item}
                        </p>
                      )
                    })}
              </Card>
            )}
            {game.screenshots && (
              <Card>
                <H2>Screenshots</H2>
                <div className="grid grid-cols-3 gap-4">
                  {game.screenshots.map((screenshot: any, index: number) => (
                    <button
                      onClick={() => setScreenModal(index)}
                      key={`screen${index}`}
                      className="hover:opacity-70 shadow-md"
                    >
                      <img
                        src={`//images.igdb.com/igdb/image/upload/t_screenshot_med/${screenshot.image_id}.jpg`}
                        alt=""
                      />
                    </button>
                  ))}
                </div>
              </Card>
            )}
          </main>
          <aside>
            <Card className="text-sm">
              <table>
                <tbody>
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
                  {game.involved_companies && (
                    <>
                      <tr>
                        <td className={gameDetailTableCell}>Developer</td>
                        <td>
                          {developers(game.involved_companies).map(
                            (a: any, b: number) => (
                              <p key={b}>{a.company.name}</p>
                            )
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td className={gameDetailTableCell}>Publisher</td>
                        <td>
                          {publishers(game.involved_companies).map(
                            (a: any, b: number) => (
                              <p key={b}>{a.company.name}</p>
                            )
                          )}
                        </td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </Card>
          </aside>
        </Container>
      </Main>
      {screenModal != null && (
        <ModalScreenshot closeModal={() => setScreenModal(null)}>
          <img
            src={`https://images.igdb.com/igdb/image/upload/t_screenshot_big/${game.screenshots[screenModal].image_id}.jpg`}
            alt=""
          />
        </ModalScreenshot>
      )}
    </>
  )
}

export default Game
