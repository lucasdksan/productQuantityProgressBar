import React from "react";
import Bar from "../Bar";
import distBar from "../../../../libs/distBar";

const DinamicBar = ({ availableQuantity, dbAvailableQuantity, srcImage, activeImage, activePercentageValue, text })=>{
    const { rest } = distBar(availableQuantity, dbAvailableQuantity);

    return <Bar text={text} widthBar={rest} activeImage={activeImage} srcImage={srcImage} activePercentageValue={activePercentageValue} percentageValue={rest} />;
}

export default DinamicBar;