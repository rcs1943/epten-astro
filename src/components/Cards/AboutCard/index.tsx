import { getIsMobile } from "../../../utils/deviceSize";
import style from "./styles.module.scss";
import type { AboutCardProps } from "./types";

const AboutCard = ({ iconPath, content, mobileWidth }: AboutCardProps) => {
    const isMobile = getIsMobile();
    return (
        <div
            className={style.container}
            style={{ width: isMobile ? `${mobileWidth}px` : undefined }}
        >
            <img src={iconPath} alt="Icono Presentación" />
            <h4>
                {content ? (
                    content
                ) : (
                    <>
                        <br />
                        <br />
                    </>
                )}
            </h4>
        </div>
    );
};

export default AboutCard;
