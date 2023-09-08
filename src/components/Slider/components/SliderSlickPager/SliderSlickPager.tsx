import { Icon } from "@iconify/react/dist/iconify.js";
import style from "./styles.module.scss";
import type { SliderSlickPagerProps } from "./types";

const SliderSlickPager = ({
    slides,
    controllers,
    idxActiveSlide,
}: SliderSlickPagerProps) => {
    const { slideBack, slideForward, goToSlide } = controllers;
    return (
        <div className={style.container}>
            <button
                className={style.slickArrow}
                onClick={slideBack}
                disabled={idxActiveSlide === 0}
            >
                <Icon icon="teenyicons:arrow-left-solid" />
            </button>
            <ul className={style.slickDots}>
                {slides.map((_, idx) => (
                    <li
                        key={idx}
                        className={idx === idxActiveSlide ? style.active : ""}
                    >
                        <button onClick={() => goToSlide(idx)} />
                    </li>
                ))}
            </ul>
            <button
                className={style.slickArrow}
                onClick={slideForward}
                disabled={idxActiveSlide === slides.length - 1}
            >
                <Icon icon="teenyicons:arrow-right-solid" />
            </button>
        </div>
    );
};

export default SliderSlickPager;
