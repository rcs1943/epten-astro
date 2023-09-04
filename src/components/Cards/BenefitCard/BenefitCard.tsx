import type { BenefitCardProps } from "./types";
import style from "./styles.module.scss";
import { getIsMobile } from "../../../utils/deviceSize";

const BenefitCard = ({
    imgPath,
    title,
    content,
    mobileWidth,
}: BenefitCardProps) => {
    const isMobile = getIsMobile();
    return (
        <div className={style.container} style={{ width: isMobile ? `${mobileWidth}px` : undefined }}>
            <img src={imgPath} alt="Imagen Beneficio" />
            <div className={style.infoWrapper}>
                <h5>{title}</h5>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default BenefitCard;
