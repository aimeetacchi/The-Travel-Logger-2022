import { Render, screen } from '../../../util/test-providers'
import Profile from '../index'

describe('profile component', () => {

    it('renders a profile info', async () => {

        const reduxState = {
            profile: {
                data: [
                    {
                        name: "Aimee",
                        location: "Dunstable",
                        bio: "a web dev",
                        owner: "aimeetacchi@hotmail.co.uk"
                    }
                ]
            }
        }

        Render(<Profile />, { reduxState })
        expect(await screen.findByRole('heading', { name: 'Aimee' })).toBeInTheDocument();
        expect(await screen.findByText('Dunstable')).toBeInTheDocument();
        expect(await screen.findByText('a web dev')).toBeInTheDocument();
    })
})