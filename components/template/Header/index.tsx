import { useAppState } from '../../../libs/AppState'
import Link from 'next/link'
import { Container } from '../Container'

export const Header = () => {
  const { user } = useAppState()

  return (
    <header>
      <Container>
        <Link href="/">
          <a>VGDB</a>
        </Link>{' '}
        {user ? (
          'Profile'
        ) : (
          <Link href="/signin">
            <a>Sign in</a>
          </Link>
        )}
      </Container>
    </header>
  )
}
