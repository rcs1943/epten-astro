import type { ValueCardProps } from "./types";
import style from "./styles.module.scss";
import { getIsResponsive } from "../../../utils/deviceSize";

function ValueCard({ icon, title, content, mobileWidth }: ValueCardProps) {
    return (
        <div className={style.container} style={{width: getIsResponsive() ? `${mobileWidth}px` : undefined}}>
            <img src={icon} alt="Ícono valor" />
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    );
}

export default ValueCard;
