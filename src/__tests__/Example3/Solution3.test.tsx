//TEST USER INTERACTION
import {render, screen} from "@testing-library/react";
import {SimpleCounter} from "../../components/Example3/SimpleCounter";
import userEvent from "@testing-library/user-event";
import {logChanges} from "../../utils/utils";

//TEST STATE UPDATES, USER INTERACTION AND MOCK EXTERNAL FUNCTIONS
test("should set counter to 0 and show no message initially", () => {
    //Render component
    render(<SimpleCounter/>)

    //Expect a message not to be displayed
    const message = screen.queryByText(/current value/i);
    expect(message).not.toBeInTheDocument();
})

test("should increase counter when Increase button is clicked", () => {
    //Render component
    render(<SimpleCounter/>)

    //Click the Increase button
    userEvent.click(screen.getByRole("button", { name: /increase/i }))

    //Expect a corresponding message to be displayed
    expect(screen.getByText("Current value: 1")).toBeInTheDocument()
})

jest.mock("../../utils/utils", () => ({
    logChanges: jest.fn()
}));

test("should call decrease function when Decrease button is clicked", () => {
    //Mock logChanges function
    (logChanges as jest.Mock).mockImplementation((change: string) => true);

    //Render component
    render(<SimpleCounter/>)

    //Click on the Decrease button
    userEvent.click(screen.getByRole("button", { name: /decrease/i }))

    //Expect a corresponding message to be displayed
    expect(screen.getByText("Current value: -1")).toBeInTheDocument()
    //Expect the logChanges function to be called / times / with params / to return
    expect(logChanges).toBeCalledTimes(1)
    expect(logChanges).toBeCalledWith("current counter: -1")
    expect(logChanges).toReturnWith(true)

    //TODO: spy on an object
})

test("should set counter to value that is entered in the input", () => {
    //Prepare data
    const newCounter = 30;

    //Render component
    render(<SimpleCounter/>)

    //Type in the input field
    userEvent.type(screen.getByTestId(/input/), newCounter.toString());

    //Expect typed value to be set
    expect(screen.getByText(`Current value: ${newCounter}`)).toBeInTheDocument()
})
