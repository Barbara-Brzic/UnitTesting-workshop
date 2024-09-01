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

        //expect loading message to be displayed
    })

    test("should fetch product list initially, and display single product info when selected from the list", async () => {
        //mock http requests

        //render component

        //expect fetchProducts endpoint to be called

        //expect to render list of products

        //select 1st product

        //expect fetchProductInfo endpoint to be called

        //expect Selected product info to be displayed
    })


    test("should show an error message if error occurred", async () => {
        //mock fetching data error

        //render component

        //expect fetchProducts endpoint to be called

        //expect error message to be displayed
    })

})