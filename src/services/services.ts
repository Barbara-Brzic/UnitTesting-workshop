import axios from "axios";

export const fetchProducts = async () => axios.get("https://dummyjson.com/products").then((res) => res)

export const fetchProductInfo = async (productId: number, userId: number) => axios.get(`https://dummyjson.com/products/${productId}`).then((res) => res)