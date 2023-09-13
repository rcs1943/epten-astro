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
    darkMode,
}: SliderProps<I>) {
    const isMobile = getIsMobile();
    const $screen = useRef<HTMLDivElement>(null);
    const $list = useRef<HTMLDivElement>(null);
    const newSlides = isMobile ? [slides[slides.length - 1], ...slides, slides[0]] : slides;
    const {
        currentTranslateX,
        dragging,
        handler,
        controllers,
        idxActiveSlide,
        stopDragAnimation,
        freezeSlide,
    } = useSlider(
        $list,
        newSlides.length,
        CARD_LIST_GAP,
        $screen.current?.clientWidth,
        true
    );
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
                        transition: stopDragAnimation
                            ? "none"
                            : dragging
                            ? "transform ease-out 0.25s"
                            : "transform ease-out 0.45s",
                        pointerEvents: freezeSlide ? "none" : "all",
                    }}
                    onTouchStart={handler.touchStart}
                    onTouchMove={handler.touchMove}
                    onTouchEnd={handler.touchEnd}
                >
                    {newSlides.map(renderSlides)}
                </div>
            </div>
            {isMobile && (
                <SliderSlickPager
                    slides={slides}
                    controllers={controllers}
                    idxActiveSlide={idxActiveSlide - 1}
                    darkMode={darkMode}
                    freezeSlide={freezeSlide}
                />
            )}
        </article>
    );
}

export default Slider;
