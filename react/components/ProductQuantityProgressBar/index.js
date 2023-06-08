import React, { useEffect, useState } from "react";
import { useProduct } from "vtex.product-context";
import DinamicBar from "./components/DinamicBar";
import createObjectData from "../../libs/createObjectData";

const ProductQuantityProgressBar = ({ srcImage, activeImage, activePercentageValue, text, sensoPercentagem })=>{
    const [ dataProduct, setDataProduct ] = useState(null);
    const product = useProduct()?.product;

    if(!product && !product.items) return null;

    const { productId, sku }= product;
    const availableQuantity = sku.seller.commertialOffer.AvailableQuantity;

    useEffect(() => {
        fetch(`/api/dataentities/QP/search?_fields=productId,active,productQuantity&_where=productId=${productId}`)
            .then((data) => data.json())
            .then((response) => {
                if (response.length !== 0) {
                    let data = createObjectData(response);

                    setDataProduct(data);
                } else setDataProduct(null);
            });
    }, []);

    if(dataProduct === null || !dataProduct.active || dataProduct.productId !== productId) return null;

    return <DinamicBar sensoPercentagem={sensoPercentagem} text={text} availableQuantity={availableQuantity} dbAvailableQuantity={dataProduct.productQuantity} activeImage={activeImage} srcImage={srcImage} activePercentageValue={activePercentageValue}/>;
}

export default ProductQuantityProgressBar;