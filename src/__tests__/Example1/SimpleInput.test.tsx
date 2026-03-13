import {render, screen} from "@testing-library/react";
import {SimpleInput} from "../../components/Example1/SimpleInput";

//TEST QUERYING INPUT FIELDS AND TEXT

test("should render title", () => {
    //ARRANGE
    //Prepare data
    const text = "Example 1";

    //ACT
    //Render component
    render(<SimpleInput/>);

    //ASSERT
    //Expect text to be displayed on the screen
    const textElement = screen.getByText(text);
    expect(textElement).toBeInTheDocument();
})

test("should render input field", () => {
    //Prepare data

    //Render component
    render(<SimpleInput/>);

    //Expect the input field to be displayed and have the default value
    const input = screen.getByRole("myinput");
    expect(input).toHaveDisplayValue(/Jane Doe/i);
})

//TODO: query button by role
