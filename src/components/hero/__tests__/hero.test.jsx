import { Render, screen } from '../../../util/test-providers'
import Hero from '../index'

describe('Hero component', () => {

    it('renders a hero text', () => {
        Render(<Hero />)
        expect(screen.getByRole('heading', { name: 'Keep a collection of all the places you have travelled.' })).toBeInTheDocument()
        expect(screen.getByRole('img')).toHaveAttribute('alt', 'hero');
    })
})