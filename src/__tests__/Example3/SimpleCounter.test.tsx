//TEST USER INTERACTION
import {render, screen} from "@testing-library/react";
import {SimpleCounter} from "../../components/Example3/SimpleCounter";
import userEvent from "@testing-library/user-event";
import {logChanges, someObject} from "../../utils/utils";
import * as utils from "../../utils/utils";

//TEST STATE UPDATES, USER INTERACTION AND MOCK EXTERNAL FUNCTIONS
test("should set counter to 0 and show no message initially", async() => {
    //render component

    //expect message not to be displayed
})

test("should increase counter when Increase button is clicked", async() => {
    //render component

    //click Increase button

    //expect corresponding message to be displayed
})

jest.mock("../../utils/utils", () => ({
        logChanges: jest.fn()
}));

test("should call decrease function when Decrease button is clicked", async () => {
    //mock logChanges function

    //render component

    //click on Decrease button

    //expect corresponding message to be displayed
    //expect logChanged function to be called / times / with params / to return
    //TODO: spy on an object
})

test("should set counter to value that is entered in the input", async () => {
    //prepare data

    //render component

    //type in input field

    //expect typed value to be set
})
