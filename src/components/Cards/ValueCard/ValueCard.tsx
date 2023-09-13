import type { ValueCardProps } from "./types";
import style from "./styles.module.scss";
import { getIsMobile } from "../../../utils/deviceSize";

function ValueCard({ icon, title, content, mobileWidth }: ValueCardProps) {
    const isMobile = getIsMobile();
    return (
        <div className={style.container}>
            <img src={icon} alt="Ícono Valor" />
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    );
}

export default ValueCard;
