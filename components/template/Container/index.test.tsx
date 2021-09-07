import { render, screen } from '@testing-library/react'
import { Container } from '.'

describe('Container component', () => {
  const component = render(<Container>Testing component</Container>)
  test('The container matches snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
