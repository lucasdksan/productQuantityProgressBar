import styles from "./styles.css";

const Bar = ({ widthBar, srcImage, activeImage, activePercentageValue, percentageValue, text })=>{
    return(
        <div className={styles["body__bar"]}>
            { activePercentageValue &&  <span className={styles["percentage__value"]}>{percentageValue.toFixed(2)}% {text && text}</span> }
            <div className={styles["container__bar"]}>
                <span className={styles["bar__color"]} style={{ width:`${widthBar}%` }}>
                    { activeImage && <img className={styles["img__bar"]} src={srcImage}/> }
                </span>
            </div>
        </div>
    );
}

export default Bar;