import { useEffect, useRef, useState } from "react";
import type { SliderProps } from "../types";
import useSlider from "../../../utils/hooks/useSlider";
import style from "./styles.module.scss";
import { HOME_SLIDER_GAP } from "../../../utils/constants/slider";
import SliderControllerComponent from "./components/SliderControllers";

function HomeSlider<I>({ slides, renderSlides }: SliderProps<I>) {
    const [cardWidth, setCardWidth] = useState<number>();
    const $screen = useRef<HTMLDivElement>(null);
    const $list = useRef<HTMLDivElement>(null);
    const newSlides = [slides[slides.length - 1], ...slides, slides[0]];
    const AUTOMATIC_SLIDE = true;
    const SLIDE_ANIMATION_TIME = 1000;
    const {
        currentTranslateX,
        dragging,
        handler,
        controllers,
        stopDragAnimation,
        freezeSlide,
        automaticSlide
    } = useSlider(
        $list,
        newSlides.length,
        HOME_SLIDER_GAP,
        cardWidth,
        AUTOMATIC_SLIDE,
        SLIDE_ANIMATION_TIME
    );
    useEffect(() => {
        if (!$screen.current) return;
        const adjustCardWidthToScreenSize = () =>
            setCardWidth($screen.current?.clientWidth);
        window.addEventListener("resize", adjustCardWidthToScreenSize);
        adjustCardWidthToScreenSize();
        return () =>
            window.removeEventListener("resize", adjustCardWidthToScreenSize);
    }, []);
    return (
        <article className={style.container}>
            <div className={style.screen} ref={$screen}>
                <div
                    className={style.list}
                    ref={$list}
                    style={{
                        transform: `translateX(${currentTranslateX}px)`,
                        transition: stopDragAnimation
                            ? "none"
                            : dragging
                            ? "transform ease-out 0.25s"
                            : `transform ease-out ${SLIDE_ANIMATION_TIME}ms`,
                        pointerEvents: freezeSlide ? "none" : "all",
                    }}
                    onTouchStart={handler.touchStart}
                    onTouchMove={handler.touchMove}
                    onTouchEnd={handler.touchEnd}
                >
                    {newSlides.map(renderSlides)}
                </div>
            </div>
            <SliderControllerComponent
                controllers={controllers}
                freezeSlide={freezeSlide}
                automaticSlide={automaticSlide}
            />
        </article>
    );
}

export default HomeSlider;
