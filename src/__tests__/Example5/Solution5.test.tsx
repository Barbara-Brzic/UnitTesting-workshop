import {act, render, screen, waitFor} from "@testing-library/react";
import {MyProducts} from "../../components/Example5/MyProducts";
import {Product} from "../../components/Example2/ProductList";
import {ProductFullInfo} from "../../components/Example5/SelectableProductList";
import * as services from "../../services/services";
import {AxiosResponse} from "axios";
import userEvent from "@testing-library/user-event";

describe("MyProducts", () => {
    const productsResponse: { products:  Product[] } = {
        products: [{
            id: 1, title: "Product 1"
        }]
    }
    const singleProductInfoResponse: ProductFullInfo = {
        id: 1,
        title: "Product 1",
        category: "beauty",
        description: "some cool product",
        price: 0.99
    }

    test("should show loading message while fetching products", async () => {
        //Mock fetchProducts to prevent actual API call
        jest.spyOn(services, "fetchProducts").mockImplementation(() =>
            new Promise(() => {}) // Never resolves, keeping loading state
        );

        //Render component
        render(<MyProducts/>)

        //Expect a loading message to be displayed
        expect(screen.getByRole("loading-message")).toBeInTheDocument();
    })

    test("should fetch product list initially, and display single product info when selected from the list", async () => {
        //Mock HTTP requests
        const mockFetchProducts = jest.spyOn(services, "fetchProducts").mockResolvedValue({
            status: 200, data: productsResponse
        } as AxiosResponse);
        const mockFetchProductInfo = jest.spyOn(services, "fetchProductInfo").mockResolvedValue({
            status: 200, data: singleProductInfoResponse
        } as AxiosResponse)

        //Render component
        render(<MyProducts/>)

        //Expect the fetchProducts endpoint to be called and wait for products to load
        await waitFor(() => {
            expect(mockFetchProducts).toBeCalled();
            expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
        })

        //Expect to render a list of products
        expect(screen.getAllByTestId(/product/)).toHaveLength(1);

        //Select product
        await act(async () => {
            userEvent.click(screen.getByRole("select-product-button"));
        });

        //Expects fetchProductInfo endpoint to be called and product info to be displayed
        await waitFor(() => {
            expect(mockFetchProductInfo).toBeCalled();
            expect(screen.getByText(singleProductInfoResponse.category)).toBeInTheDocument();
        })

        //Expect selected product info to be displayed
        expect(screen.getByText(singleProductInfoResponse.id.toString())).toBeInTheDocument();
        expect(screen.getByText(singleProductInfoResponse.title)).toBeInTheDocument();
        expect(screen.getByText(singleProductInfoResponse.price.toString())).toBeInTheDocument();
    })


    test("should show an error message if error occurred", async () => {
        //Mock fetching data error
        const mockFetchProducts = jest.spyOn(services, "fetchProducts").mockRejectedValue({} as AxiosResponse);

        //Render component
        render(<MyProducts/>)

        //Expects the fetchProducts endpoint to be called and an error message to be displayed
        await waitFor(() => {
            expect(mockFetchProducts).toBeCalled();
            expect(screen.getByRole("error-message")).toBeInTheDocument();
        })
    })

})