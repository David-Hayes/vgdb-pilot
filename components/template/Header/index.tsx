import { useAppState } from '../../../libs/AppState'
import Link from 'next/link'
import { Container } from '../Container'
import Logo from '../../../public/assets/logo.svg'
import Image from 'next/image'

type HeaderProps = {
  topMargin: boolean
}

export const Header = ({ topMargin }: HeaderProps) => {
  const { user } = useAppState()

  return (
    <header className={`py-3 ${topMargin ? `mb-5` : ``}`}>
      <Container className="flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center gap-3">
            <span className="w-8 h-8">
              <Image src={Logo} alt="vgdb" />
            </span>
            VGDB
          </a>
        </Link>
        <div className="flex items-center space-x-5">
          <Link href="/search">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </a>
          </Link>
          {user ? (
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          ) : (
            <Link href="/signin">
              <a>Sign in / Sign up</a>
            </Link>
          )}
        </div>
      </Container>
    </header>
  )
}
