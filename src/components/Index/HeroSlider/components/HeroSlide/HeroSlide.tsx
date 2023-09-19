import type { HeroSlideProps } from "./types";
import style from "./styles.module.scss";

const HeroSlide = ({ title, subtitle, button, imgPath }: HeroSlideProps) => {
    return (
        <div className={style.slide} data-active>
            <div className={style.infoContainer}>
                <h2>{title}</h2>
                <hr />
                <p>{subtitle}</p>
                <a href={button.link}>{button.content}</a>
            </div>
            <img src={imgPath} alt="Slider Image" />
            <div className={`${style.sliderOrnament} ${style.left}`}>
                <div className={style.yellow}/>
                <div className={style.blue}/>
            </div>
            <div className={`${style.sliderOrnament} ${style.right}`}>
                <div className={style.yellow}/>
                <div className={style.blue}/>
            </div>
        </div>
    );
};

export default HeroSlide;
