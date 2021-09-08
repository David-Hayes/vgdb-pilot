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
        {user ? (
          'Profile'
        ) : (
          <Link href="/signin">
            <a>Sign in / Sign up</a>
          </Link>
        )}
      </Container>
    </header>
  )
}
