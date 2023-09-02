import { useEffect, useRef, useState } from "react";
import ValueCard from "../../Cards/ValueCard/ValueCard";
import type { ValueListProps } from "./types";
import style from "./styles.module.scss";
import useSlider from "../../../utils/hooks/useSlider";
import { CARD_LIST_GAP } from "../../../utils/constants/slider";
import { getIsMobile } from "../../../utils/deviceSize";
import SliderSlickPager from "../../SliderSlickPager/SliderSlickPager";

function ValueList({ values }: ValueListProps) {
    const [screenRefWidth, setScreenRefWidth] = useState<number | undefined>();
    const $screen = useRef<HTMLDivElement>(null);
    const $list = useRef<HTMLDivElement>(null);
    const isMobile = getIsMobile();
    const { currentTranslateX, dragging, handler, controllers, idxActiveSlide } = useSlider(
        $list,
        values.length,
        CARD_LIST_GAP
    );
    useEffect(() => {
        const handleResize = () =>
            setScreenRefWidth($screen.current?.clientWidth);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <article className={style.container}>
            <div className={style.screenList} ref={$screen}>
                <div
                    className={style.cardList}
                    ref={$list}
                    style={{
                        transform: isMobile ? `translateX(${currentTranslateX}px)` : "none",
                        transition: dragging
                            ? "transform ease-out 0.25s"
                            : "transform ease-out 0.45s",
                    }}
                    onTouchStart={handler.touchStart}
                    onTouchMove={handler.touchMove}
                    onTouchEnd={handler.touchEnd}
                >
                    {values.map(({ icon, title, content }) => (
                        <ValueCard
                            key={title}
                            icon={icon}
                            title={title}
                            content={content}
                            mobileWidth={screenRefWidth}
                        />
                    ))}
                </div>
            </div>
            {isMobile && <SliderSlickPager slides={values} controllers={controllers} idxActiveSlide={idxActiveSlide} />}
        </article>
    );
}

export default ValueList;
