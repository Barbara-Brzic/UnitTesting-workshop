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

    test("should show loading message while fetching products", () => {
        //render component
        render(<MyProducts/>)

        //expect loading message to be displayed
        expect(screen.getByRole("loading-message")).toBeInTheDocument();
    })

    test("should fetch product list initially, and display single product info when selected from the list", async () => {
        //mock http requests
        const mockFetchProducts = jest.spyOn(services, "fetchProducts").mockResolvedValue({
            status: 200, data: productsResponse
        } as AxiosResponse);
        const mockFetchProductInfo = jest.spyOn(services, "fetchProductInfo").mockResolvedValue({
            status: 200, data: singleProductInfoResponse
        } as AxiosResponse)

        //render component
        render(<MyProducts/>)

        //expect fetchProducts endpoint to be called
        await waitFor(() => {
            expect(mockFetchProducts).toBeCalled();
        })

        //expect to render list of products
        expect(screen.getAllByTestId(/product/)).toHaveLength(1);
        expect(screen.getByText(/Product 1/i)).toBeInTheDocument();

        //select product
        userEvent.click(screen.getByRole("select-product-button"));

        //expect fetchProductInfo endpoint to be called
        await waitFor(() => {
            expect(mockFetchProductInfo).toBeCalled();
        })

        //expect Selected product info to be displayed
        expect(screen.getByText(singleProductInfoResponse.id)).toBeInTheDocument();
        expect(screen.getByText(singleProductInfoResponse.title)).toBeInTheDocument();
        expect(screen.getByText(singleProductInfoResponse.category)).toBeInTheDocument();
        expect(screen.getByText(singleProductInfoResponse.price)).toBeInTheDocument();
    })


    test("should show an error message if error occurred", async () => {
        //mock fetching data error
        const mockFetchProducts = jest.spyOn(services, "fetchProducts").mockRejectedValue({} as AxiosResponse);

        //render component
        render(<MyProducts/>)

        //expect fetchProducts endpoint to be called
        await waitFor(() => {
            expect(mockFetchProducts).toBeCalled();
        })

        //expect error message to be displayed
        expect(screen.getByRole("error-message")).toBeInTheDocument();
    })

})