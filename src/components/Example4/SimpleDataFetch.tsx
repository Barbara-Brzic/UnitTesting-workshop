import {Product, ProductList} from "../Example2/ProductList";
import {useEffect, useState} from "react";
import {fetchProducts} from "../../services/services";

export const SimpleDataFetch = () => {
    const [show, setShow] = useState<boolean>(false);
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
            fetchProducts().then((res) => {
                if(res.status === 200) setProducts(res.data.products)
            });
    }, [])

    return(
        <div>
            <button onClick={() => setShow(!show)}>{`${show ? "Hide" : "Show"} products`}</button>
            <ProductList products={products} showProducts={show}/>
        </div>
    )
}