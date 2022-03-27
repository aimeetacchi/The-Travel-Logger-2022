import dayjs from 'dayjs'
import { Render, screen } from '../../../util/test-providers'
import PlacesItem from '../placesItem'

describe('placesItem component', () => {

    it('renders a single place', async () => {

        const place = {
            city: "Tokyo",
            country: "Japan",
            dateVisitedFrom: "2016-11-16",
            dateVisitedTo: "2016-11-22",
            description: "Amazing City, one of my faves",
            favourite: true,
            file: {
                bucket: "thetravellogger2022bucket160937-dev",
                key: "public/tokyo.JPG",
                region: "eu-west-2",
            }
        }

        Render(<PlacesItem place={place} deletePlace={() => jest.fn()} />)

        const formatedDateFrom = dayjs(place.dateVisitedFrom).format('DD/MM/YYYY');
        const formatedDateTo = dayjs(place.dateVisitedTo).format('DD/MM/YYYY');

        expect(await screen.findByText(place.city)).toBeInTheDocument();
        expect(await screen.findByText(place.country)).toBeTruthy()
        expect(await screen.findByText(place.description)).toBeInTheDocument();
        expect(await screen.findByRole('img')).toHaveAttribute('alt', 'place');
        expect(await screen.findByText(`${formatedDateFrom} - ${formatedDateTo}`)).toBeInTheDocument();

    })
})