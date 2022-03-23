import { Render, screen } from '../../../util/test-providers'
import Header from '../index'

describe('Header component', () => {

    it('renders a header title', () => {
        Render(<Header />)
        expect(screen.getByRole('heading', { name: 'Travel Logger' })).toBeInTheDocument()
    })
})