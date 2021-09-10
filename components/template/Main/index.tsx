import Head from 'next/head'
import { ReactNode } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Container } from '../Container'

type MainProps = {
  children?: ReactNode
  title?: string
  fullWidth?: boolean
  topMargin?: boolean
}

export const Main = ({
  children,
  title,
  fullWidth = false,
  topMargin = true,
}: MainProps) => {
  return (
    <>
      <Head>
        <title>
          {title
            ? `${title} | vgdb`
            : 'vgdb - Track, Manage and Discover Video Games'}
        </title>
        <meta name="robots" content="noindex" />
      </Head>
      {process.env.NEXT_PUBLIC_ENV === 'PROD' && (
        <div className="bg-white text-gray-800 py-3 text-sm">
          <Container className="text-center">
            VGDB is in active development and full functionality won&rsquo;t be
            available until the beta release.
          </Container>
        </div>
      )}
      <div className="flex flex-col justify-between h-screen">
        <Header topMargin={topMargin} />
        <div className="mb-auto">
          {fullWidth ? <>{children}</> : <Container>{children}</Container>}
        </div>
        <Footer />
      </div>
    </>
  )
}
