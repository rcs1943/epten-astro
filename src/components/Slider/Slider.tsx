import { useEffect, useRef, useState } from "react";
import type { SliderProps } from "./types";
import useSlider from "../../utils/hooks/useSlider";
import SliderSlickPager from "./components/SliderSlickPager/SliderSlickPager";
import style from "./styles.module.scss";
import { CARD_LIST_GAP } from "../../utils/constants/slider";
import { getIsMobile } from "../../utils/deviceSize";

function Slider<I>({
    slides,
    renderSlides,
    adjustCardWidthResponsive,
    darkMode
}: SliderProps<I>) {
    const isMobile = getIsMobile();
    const $screen = useRef<HTMLDivElement>(null);
    const $list = useRef<HTMLDivElement>(null);
    const {
        currentTranslateX,
        dragging,
        handler,
        controllers,
        idxActiveSlide,
    } = useSlider($list, slides.length, CARD_LIST_GAP);
    useEffect(() => {
        const handleResize = () =>
            adjustCardWidthResponsive($screen.current?.clientWidth);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <article className={style.container}>
            <div className={style.screen} ref={$screen}>
                <div
                    className={style.list}
                    ref={$list}
                    style={{
                        transform: isMobile
                            ? `translateX(${currentTranslateX}px)`
                            : "none",
                        transition: dragging
                            ? "transform ease-out 0.25s"
                            : "transform ease-out 0.45s",
                    }}
                    onTouchStart={handler.touchStart}
                    onTouchMove={handler.touchMove}
                    onTouchEnd={handler.touchEnd}
                >
                    {slides.map(renderSlides)}
                </div>
            </div>
            {isMobile && (
                <SliderSlickPager
                    slides={slides}
                    controllers={controllers}
                    idxActiveSlide={idxActiveSlide}
                    darkMode={darkMode}
                />
            )}
        </article>
    );
}

export default Slider;
