import React from "react";
import { useProduct } from "vtex.product-context";
import DinamicBar from "../DinamicBar";

const ProductQuantityProgressBar = ()=>{
    const product = useProduct()?.product;
    const { productId, sku }= product;
    const availableQuantity = sku.seller.commertialOffer.AvailableQuantity;

    console.log("Product: ", { availableQuantity, productId });
    return(
        <DinamicBar />
    );
}

export default ProductQuantityProgressBar;