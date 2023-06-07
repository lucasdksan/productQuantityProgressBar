import styles from "./styles.css";

const Bar = ({ widthBar, srcImage, activeImage, activePercentageValue, percentageValue, text })=>{
    return(
        <div className={styles["bodyBar"]}>
            { activePercentageValue &&  <span className={styles["percentageValue"]}>{percentageValue.toFixed(2)}% {text && text}</span> }
            <div className={styles["containerBar"]}>
                <span className={styles["barColor"]} style={{ width:`${widthBar}%` }}>
                    {
                        activeImage &&
                        <img className={styles["imgBar"]} src={srcImage}/>
                    }
                </span>
            </div>
        </div>
    );
}

export default Bar;