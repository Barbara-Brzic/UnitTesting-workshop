import {Product, ProductList} from "../../components/Example2/ProductList";
import {render, screen} from "@testing-library/react";

//TESTS COMPONENTS WITH MOCKED DATA
test("should render a list of elements", () => {
    //ARRANGE
    //prepare data
    const products: Product[] = [{
        id: 1, title: "Product 1"
    }, {id: 2, title: "Product 2"}]

    //ACT
    //render component

    //ASSERT
    //expect list of elements to be rendered
})

test("should hide list of products and show corresponding message", () => {
    //prepare data
    const products: Product[] = [{
        id: 1, title: "Product 1"
    }, {id: 2, title: "Product 2"}]

    //render component

    //expect "No products" message to be displayed
})

//TODO: add handler for selecting product, mock function prop