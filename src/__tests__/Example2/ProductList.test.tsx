import {Product, ProductList} from "../../components/Example2/ProductList";
import {render, screen} from "@testing-library/react";

//TESTS COMPONENTS WITH MOCKED DATA
test("should render a list of elements when showProducts is true", () => {
    //ARRANGE
    //Prepare data
    const products: Product[] = [{
        id: 1, title: "Product 1"
    }, {id: 2, title: "Product 2"}]

    //ACT
    //Render component
    render(<ProductList products={products} showProducts={true}/>)

    //ASSERT
    //Expect a list of elements to be rendered
    const elements = screen.getAllByTestId("product");
    expect(elements).toHaveLength(2)
})

test("should hide list of products and show corresponding message", () => {
    //Prepare data
    const products: Product[] = [{
        id: 1, title: "Product 1"
    }, {id: 2, title: "Product 2"}]

    //Render component
    render(<ProductList products={products} showProducts={false}/>)

    //Expect the "No products" message to be displayed
    expect(screen.getByText(/There is no products/i)).toBeInTheDocument()
})

//TODO: add handler for selecting product, mock function prop