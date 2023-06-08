import React from "react";
import Bar from "../Bar";
import distBar from "../../../../libs/distBar";

const DinamicBar = ({ availableQuantity, dbAvailableQuantity, srcImage, activeImage, activePercentageValue, text, sensoPercentagem })=>{
    const { rest, total } = distBar(availableQuantity, dbAvailableQuantity);

    return (
        <Bar 
            text={text} 
            activeImage={activeImage} 
            srcImage={srcImage} 
            activePercentageValue={activePercentageValue} 
            percentageValue={sensoPercentagem ? rest : total} 
            widthBar={sensoPercentagem ? rest : total} 
        />
    );
}

export default DinamicBar;