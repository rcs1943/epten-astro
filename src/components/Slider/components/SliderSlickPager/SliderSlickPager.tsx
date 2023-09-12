import { Icon } from "@iconify/react/dist/iconify.js";
import style from "./styles.module.scss";
import type { SliderSlickPagerProps } from "./types";

const SliderSlickPager = ({
    slides,
    controllers,
    idxActiveSlide,
    darkMode,
    freezeSlide
}: SliderSlickPagerProps) => {
    const { slideBack, slideForward, goToSlide } = controllers;
    const darkModeClass = darkMode ? style.secondary : "";
    return (
        <div className={`${style.container} ${darkModeClass}`}>
            <button
                className={`${style.slickArrow} ${darkModeClass}`}
                onClick={freezeSlide ? () => {} : slideBack}
            >
                <Icon icon="teenyicons:arrow-left-solid" />
            </button>
            <ul className={`${style.slickDots} ${darkModeClass}`}>
                {slides.map((_, idx) => (
                    <li
                        key={idx}
                        className={idx === idxActiveSlide ? style.active : ""}
                    >
                        <button onClick={() => goToSlide(idx + 1)} />
                    </li>
                ))}
            </ul>
            <button
                className={`${style.slickArrow} ${darkModeClass}`}
                onClick={freezeSlide ? () => {} : slideForward}
            >
                <Icon icon="teenyicons:arrow-right-solid" />
            </button>
        </div>
    );
};

export default SliderSlickPager;
