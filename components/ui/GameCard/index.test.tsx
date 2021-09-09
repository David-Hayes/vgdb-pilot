import { render } from '@testing-library/react'
import { GameCard } from '.'

describe('Card component', () => {
  const component = render(<GameCard data={{ name: 'test', slug: 'test' }} />)
  test('The card matches snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
