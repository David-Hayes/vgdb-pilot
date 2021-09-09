import { Container } from '../Container'

export const Footer = () => {
  return (
    <footer className="py-5 mt-8 text-gray-400 text-sm">
      <Container>
        <div>&copy; VGDB</div>
        <div>Game data kindly provided by igdb (Twitch)</div>
      </Container>
    </footer>
  )
}
