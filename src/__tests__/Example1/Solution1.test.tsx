import { render, screen } from '@testing-library/react'
import { SimpleInput } from '../../components/Example1/SimpleInput'

//TEST QUERYING INPUT FIELDS AND TEXT

test('should render title', () => {
    //ARRANGE
    //prepare data
    const text = 'Example 1'

    //ACT
    //render component
    render(<SimpleInput />)

    //ASSERT
    //expect text to be displayed on the screen
    const title = screen.getByText(text)
    expect(title).toBeInTheDocument()
})

test('should render input field', () => {
    //prepare data
    const inputFieldValue = 'Jane Doe'

    //render component
    render(<SimpleInput />)

    //expect input field to be displayed and have default value
    const input = screen.getByRole(/textbox/)
    // const input = screen.getByTestId(/unique-username/)
    // const input = screen.getByLabelText(/username/i);
    // const input = screen.getByDisplayValue("Jane Doe");

    expect(input).toBeInTheDocument()
    expect(input).toHaveDisplayValue(inputFieldValue)
})

//TODO: query button by role
