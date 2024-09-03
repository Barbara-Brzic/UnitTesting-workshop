import {render, screen} from "@testing-library/react";
import {SimpleInput} from "../../components/Example1/SimpleInput";

//TEST QUERYING INPUT FIELDS AND TEXT

test("should render title", () => {
    //ARRANGE
    //prepare data
    const text = "Example 1";

    //ACT
    //render component
    render(<SimpleInput/>);

    //ASSERT
    //expect text to be displayed on the screen
    const textElement = screen.getByText(text);
    expect(textElement).toBeInTheDocument();
})

test("should render input field", () => {
    //prepare data

    //render component
    render(<SimpleInput/>);

    //expect input field to be displayed and have default value
    const input = screen.getByRole(/myinput/i);
    expect(input).toHaveDisplayValue(/Jane doe/i);
})

//TODO: query button by role
