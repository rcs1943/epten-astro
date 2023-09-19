import type { BenefitCardProps } from "./types";
import style from "./styles.module.scss";

const BenefitCard = ({
    imgPath,
    title,
    content,
}: BenefitCardProps) => {
    return (
        <div className={style.container}>
            <img src={imgPath} alt="Imagen Beneficio" />
            <div className={style.infoWrapper}>
                <h5>{title}</h5>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default BenefitCard;
