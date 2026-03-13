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

    //Using jest.mock function
    test("should fetch products and show them on screen when 'Show products' button is clicked (* using jest-mock)", async ()=> {
        //Mock fetchProducts call
        (fetchProducts as jest.Mock).mockResolvedValue({status: 200, data: productsResponse})

        //Render component
        render(<SimpleDataFetch/>)

        //Wait for the endpoint to be called and data returned
        await waitFor(() => {
            expect(fetchProducts).toBeCalled();
        })

        //Click on the button
        userEvent.click(screen.getByText(/Show products/i));

        //Expect the product to be displayed
        await waitFor(() => {
            expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
        })
    })

    //Using jest.spy function
    test("should fetch products and show them on screen when 'Show products' button is clicked (* using jest-spy)", async ()=> {
        //Mock fetchProducts endpoint call
        jest.spyOn(services, "fetchProducts").mockImplementation(() => {
            return new Promise((resolve) => resolve({status: 200, data: productsResponse} as AxiosResponse<any>))
        })

        //Render component
        render(<SimpleDataFetch/>)

        //Click on the button
        await act(async() =>
            userEvent.click(screen.getByText(/Show products/i))
        )
        // userEvent.click(screen.getByText(/Show products/i))

        //Expect the product to be displayed
        expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
    })

})




//TODO; MSW, jest-mock-axios...