const createObjectData = (response)=>{
    return {
        active: response[0].active,
        productId: response[0].productId,
        productQuantity: response[0].productQuantity
    }
}

export default createObjectData;