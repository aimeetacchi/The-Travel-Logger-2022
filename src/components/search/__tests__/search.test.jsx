
import { Render, screen } from '../../../util/test-providers'
import Search from '../index'

describe('placesItem component', () => {

    it('renders a single place', () => {

        const compProps = {
            search: "Norway",
            setSearch: () => { },
            sortByASC: () => { },
            sortByDESC: () => { }
        }

        Render(<Search {...compProps} />)

        // end is end like the process the user
        // expect Norway TO Default to ""
        // getElement Search.target.value = "Norway"
        // "expect this to be Norway"

        const input = screen.getByPlaceholderText('Search Place...');

        expect(input).toBeInTheDocument();
        expect(input.value).toBe('Norway');

    })
})


// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const numbersToFilterOut = [5, 6]
// const expectedOutput = [1, 2, 3, 4, 7, 8, 9, 10]


// const inputs = [
//     {
//         input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//         filters: [5, 6],
//         output: [1, 2, 3, 4, 7, 8, 9, 10],
//     },
//     {
//         input: [1],
//         filters: [1],
//         output: [],
//     },
//     {
//         input: [true, false, "test", 3, "3"],
//         filters: [3, 7],
//         output: [true, false, 'test', "3"],
//     },
//     {
//         input: null,
//         filters: [3, 7],
//         output: null,
//     }
// ]


// const filterNumbers = (array, numbersToFilter) => {
//     if(!array) return null
//     return array.filter((element) => !numbersToFilter.includes(element))
// }

// const data = filterNumbers(array, numbersToFilterOut)

// console.log(data)
// inputs.forEach(({ input, filters, output }) => {
//     it('Filters Out an array of numbers', () => {
//         const data = filterNumbers(input, filters)
//         expect(data).toBe(output)
//     })
// })
