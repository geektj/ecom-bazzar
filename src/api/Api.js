import axios from "axios";

export const productsData = async () => {
    const products = axios.get("https://fakestoreapiserver.reactbd.com/products")
    return products;
}