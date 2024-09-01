import {FC} from "react";

export type Product = {id: number, title: string}

type ProductListProps = {
    products: Product[],
    showProducts: boolean
}

export const ProductList: FC<ProductListProps> = ({products, showProducts}) => {

    return (
        showProducts ?
        <ul>
            {products.map((product) => <li data-testid={"product"} key={product.id}>{product.title}</li>)}
        </ul> : <span>There is no products</span>

    )
}