//TEST USER INTERACTION
import {render, screen} from "@testing-library/react";
import {SimpleCounter} from "../../components/Example3/SimpleCounter";
import userEvent from "@testing-library/user-event";
import * as utils from "../../utils/utils";


//TEST STATE UPDATES, USER INTERACTION AND MOCK EXTERNAL FUNCTIONS
test("should set counter to 0 and show no message initially", async() => {
        //render component
        render(<SimpleCounter/>)

        //expect message not to be displayed
        expect(screen.queryByText(/current value/i)).not.toBeInTheDocument();
})

test("should increase counter when Increase button is clicked", async() => {
        //render component
        render(<SimpleCounter/>)

        //click Increase button
        await userEvent.click(screen.getByRole("button", {name: "Increase counter"}));

        //expect corresponding message to be displayed
        expect(screen.getByText(/Current value/i)).toBeInTheDocument()
})

jest.mock("../../utils/utils", () => ({
        logChanges: jest.fn()
}));

test("should call decrease function when Decrease button is clicked", async () => {
        //mock logChanges function
        const logChangesMock = jest.spyOn(utils, "logChanges").mockReturnValue(true)

        //render component
        render(<SimpleCounter/>)

        //click on Decrease button
        await userEvent.click(screen.getByText(/decrease/i));

        //expect corresponding message to be displayed
        //expect logChanged function to be called / times / with params / to return
        expect(logChangesMock).toBeCalled();
        expect(logChangesMock).toBeCalledTimes(1);
        expect(logChangesMock).toBeCalledWith("current counter: -1");
        expect(logChangesMock).toReturnWith(true)

        //TODO: spy on an object

})

test("should set counter to value that is entered in the input", async () => {
    //prepare data

    //render component

    //type in input field

    //expect typed value to be set
})

