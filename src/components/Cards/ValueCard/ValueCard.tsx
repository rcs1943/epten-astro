import type { ValueCardProps } from "./types";
import style from "./styles.module.scss";

function ValueCard({ icon, title, content }: ValueCardProps) {
    return (
        <div className={style.container}>
            <img src={icon} alt="Ícono Valor" />
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    );
}

export default ValueCard;
