//TEST USER INTERACTION
import {render, screen} from "@testing-library/react";
import {SimpleCounter} from "../../components/Example3/SimpleCounter";
import userEvent from "@testing-library/user-event";
import {logChanges, someObject} from "../../utils/utils";
import * as utils from "../../utils/utils";

//TEST STATE UPDATES, USER INTERACTION AND MOCK EXTERNAL FUNCTIONS
test("should set counter to 0 and show no message initially", async() => {
    //render component
    render(<SimpleCounter/>)

    //expect message not to be displayed
    const message = screen.queryByText(/current value/i);
    expect(message).not.toBeInTheDocument();
})

test("should increase counter when Increase button is clicked", async() => {
    //render component
    render(<SimpleCounter/>)

    //click Increase button
    await userEvent.click(screen.getByRole("button", { name: /increase/i}))

    //expect corresponding message to be displayed
    expect(screen.getByText("Current value: 1"))
})

jest.mock("../../utils/utils", () => ({
    logChanges: jest.fn()
}));

test("should call decrease function when Decrease button is clicked", async () => {
    //mock logChanges function
    (logChanges as jest.Mock).mockImplementation((change: string) => true);

    //render component
    render(<SimpleCounter/>)

    //click on Decrease button
    await userEvent.click(screen.getByRole("button", { name: /decrease/i}))

    //expect corresponding message to be displayed
    expect(screen.getByText("Current value: -1"))
    //expect logChanged function to be called / times / with params / to return
    expect(logChanges).toBeCalledTimes(1)
    expect(logChanges).toBeCalledWith("current counter: -1")
    expect(logChanges).toReturnWith(true)

    //TODO: spy on an object
})

test("should set counter to value that is entered in the input", async () => {
    //prepare data
    const newCounter = 30;

    //render component
    render(<SimpleCounter/>)

    //type in input field
    await userEvent.type(screen.getByTestId(/input/), newCounter.toString());

    //expect typed value to be set
    expect(screen.getByText(`Current value: ${newCounter}`))
})
