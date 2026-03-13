//TEST USER INTERACTION
import {render, screen} from "@testing-library/react";
import {SimpleCounter} from "../../components/Example3/SimpleCounter";
import userEvent from "@testing-library/user-event";
import * as utils from "../../utils/utils";


//TEST STATE UPDATES, USER INTERACTION AND MOCK EXTERNAL FUNCTIONS
test("should set counter to 0 and show no message initially", () => {
        //Render component
        render(<SimpleCounter/>)

        //Expect a message not to be displayed
        expect(screen.queryByText(/current value/i)).not.toBeInTheDocument();
})

test("should increase counter when Increase button is clicked", () => {
        //Render component
        render(<SimpleCounter/>)

        //Click the Increase button
        userEvent.click(screen.getByRole("button", {name: "Increase counter"}));

        //Expect a corresponding message to be displayed
        expect(screen.getByText(/Current value/i)).toBeInTheDocument()
})

jest.mock("../../utils/utils", () => ({
        logChanges: jest.fn()
}));

test("should call decrease function when Decrease button is clicked", () => {
        //Mock logChanges function
        const logChangesMock = jest.spyOn(utils, "logChanges").mockReturnValue(true)

        //Render component
        render(<SimpleCounter/>)

        //Click on the Decrease button
        userEvent.click(screen.getByText(/decrease/i));

        //Expect a corresponding message to be displayed
        //Expect logChanges function to be called / times / with params / to return
        expect(logChangesMock).toBeCalled();
        expect(logChangesMock).toBeCalledTimes(1);
        expect(logChangesMock).toBeCalledWith("current counter: -1");
        expect(logChangesMock).toReturnWith(true)

        //TODO: spy on an object

})

test("should set counter to value that is entered in the input", () => {
    //Prepare data

    //Render component

    //Type in the input field

    //Expect typed value to be set
})

