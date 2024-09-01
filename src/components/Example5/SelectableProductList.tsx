import {FC} from "react";

export type Product = {id: number, title: string}
export type ProductFullInfo = Product & {
    description: string,
    category: string,
    price: number
}

type ProductListProps = {
    products: Product[],
    handleProductSelect: (productId: number) => void
}

export const SelectableProductList: FC<ProductListProps> = ({products, handleProductSelect}) => {
    return (
        <div>
            <h2>My Products</h2>
            <ol>
                {products.map((product) =>
                    <li data-testid={"product"} key={product.id}>
                        {product.title}
                        <button role={"select-product-button"} onClick={() => handleProductSelect(product.id)}>Select</button>
                    </li>)}
            </ol>
        </div>
    )
}

export const ProductFullInfo = ({productInfo}: {productInfo: ProductFullInfo}) => {
    return (
        <ul>
            {["id", "title", "description", "category", "price"].map((prop) =>
            <li key={prop}>{productInfo[prop as keyof typeof productInfo]}</li>)}
        </ul>
    )
}