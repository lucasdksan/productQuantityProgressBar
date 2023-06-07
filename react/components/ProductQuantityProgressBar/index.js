import React from "react";
import { useProduct } from "vtex.product-context";
import DinamicBar from "./components/DinamicBar";

const ProductQuantityProgressBar = ({ srcImage, activeImage, activePercentageValue, text })=>{
    const product = useProduct()?.product;

    if(!product && !product.items) return null;

    const { productId, sku }= product;
    const availableQuantity = sku.seller.commertialOffer.AvailableQuantity;

    if(availableQuantity <= 0) return null;

    console.log("ProductId: ", productId);
    return <DinamicBar text={text} availableQuantity={availableQuantity} dbAvailableQuantity={20000} activeImage={activeImage} srcImage={srcImage} activePercentageValue={activePercentageValue}/>;
}

export default ProductQuantityProgressBar;