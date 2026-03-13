import { render, screen } from '@testing-library/react'
import { SimpleInput } from '../../components/Example1/SimpleInput'

//TEST QUERYING INPUT FIELDS AND TEXT

test('should render title', () => {
    //ARRANGE
    //Prepare data
    const text = 'Example 1'

    //ACT
    //Render component
    render(<SimpleInput />)

    //ASSERT
    //Expect text to be displayed on the screen
    const title = screen.getByText(text)
    expect(title).toBeInTheDocument()
})

test('should render input field', () => {
    //Prepare data
    const inputFieldValue = 'Jane Doe'

    //Render component
    render(<SimpleInput />)

    //Expect input field to be displayed and have the default value
    // const input = screen.getByRole(/textbox/)
    // const input = screen.getByTestId(/unique-username/)
    const input = screen.getByLabelText(/username/i);
    // const input = screen.getByDisplayValue("Jane Doe");

    expect(input).toBeInTheDocument()
    expect(input).toHaveDisplayValue(inputFieldValue)
})

//TODO: query button by role
