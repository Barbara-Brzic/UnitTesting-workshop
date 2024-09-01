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
    render(<ProductList products={products} showProducts={true}/>)

    //ASSERT
    //expect list of elements to be rendered
    const elements = screen.getAllByText(/product/i);
    // const elements = screen.getAllByTestId(/products/i);
    // const elements = screen.getAllByRole(/listitem/);

    expect(elements).toHaveLength(2)
})

test("should hide list of products and show corresponding message", () => {
    //prepare data
    const products: Product[] = [{
        id: 1, title: "Product 1"
    }, {id: 2, title: "Product 2"}]

    //render component
    render(<ProductList products={products} showProducts={false}/>)

    //expect "No products" message to be displayed
    expect(screen.getByText(/There is no products/i)).toBeInTheDocument()
})

//TODO: add handler for selecting product, mock function prop