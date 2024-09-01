import {useEffect, useState} from "react";
import {Product} from "../Example2/ProductList";
import {fetchProducts, fetchProductInfo} from "../../services/services";
import {ProductFullInfo, SelectableProductList} from "./SelectableProductList";


export const MyProducts = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<ProductFullInfo | undefined>();

    useEffect(() => {
        const handleProductsFetch = () =>
            fetchProducts()
                .then((res) => {
                    if (res.status === 200) setProducts(res.data.products)})
                .catch(() => setError(true))
                .finally(() => setLoading(false));

        handleProductsFetch().then()

    }, [])

    const handleProductSelect = (productId: number) => {
        const userId = sessionStorage.getItem("userId");

        fetchProductInfo(productId, Number(userId)).then((res) => {
            if (res.status === 200) setSelectedProduct(res.data)
        })
    }

    if(error) return <div role={"error-message"}>Error while fetching products...</div>

    if(isLoading) return <div role={"loading-message"}>Fetching products...</div>

    return (
        selectedProduct ? <ProductFullInfo productInfo={selectedProduct}/> :
            <SelectableProductList products={products} handleProductSelect={handleProductSelect}/>

    )
}

