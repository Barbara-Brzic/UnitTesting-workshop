import { render, screen, waitFor} from "@testing-library/react";
import {SimpleDataFetch} from "../../components/Example4/SimpleDataFetch";
import  {AxiosResponse} from "axios";
import {Product} from "../../components/Example2/ProductList";
import userEvent from "@testing-library/user-event";
import * as services from "../../services/services";
import {fetchProducts} from "../../services/services";
import {act} from "react-dom/test-utils";

jest.mock("../../services/services", () => ({
    fetchProducts: jest.fn()
}));

describe("SimpleDataFetch", () => {
    const productsResponse: { products:  Product[] } = {
        products: [{
            id: 1, title: "Product 1"
        }]
    }

    //using jest.mock function
    test("should fetch products and show them on screen when 'Show products' button is clicked (* using jest-mock)", async ()=> {
        //mock fetchProducts call

        //render component
        render(<SimpleDataFetch/>)

        //wait for endpoint to be called and data returned

        //click on button

        //expect product to be displayed
    })

    //using jest.spy function
    test("should fetch products and show them on screen when 'Show products' button is clicked (* using jest-spy)", async ()=> {
        //mock fetchProducts endpoint call

        //render component
        render(<SimpleDataFetch/>)

        //click on button

        //expect product to be displayed
    })

})




//TODO; MSW, jest-mock-axios...