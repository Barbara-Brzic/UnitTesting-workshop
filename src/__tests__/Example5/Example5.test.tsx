import {Product} from "../../components/Example2/ProductList";
import {ProductFullInfo} from "../../components/Example5/SelectableProductList";

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
        //Render component

        //Expect a loading message to be displayed
    })

    test("should fetch product list initially, and display single product info when selected from the list", async () => {
        //Mock HTTP requests

        //Render component

        //Expects fetchProducts endpoint to be called

        //Expect to render a list of products

        //Select the first product

        //Expect fetchProductInfo endpoint to be called

        //Expect selected product info to be displayed
    })


    test("should show an error message if error occurred", async () => {
        //Mock fetching data error

        //Render component

        //Expect the fetchProducts endpoint to be called

        //Expect an error message to be displayed
    })

})