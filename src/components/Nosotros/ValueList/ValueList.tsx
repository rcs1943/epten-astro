import { useEffect, useRef, useState } from "react";
import ValueCard from "../../Cards/ValueCard/ValueCard";
import type { ValueListProps } from "./types";
import style from "./styles.module.scss";
import useSlider from "../../../utils/hooks/useSlider";

function ValueList({ values }: ValueListProps) {
    const [screenRefWidth, setScreenRefWidth] = useState<number | undefined>();
    const $screen = useRef<HTMLDivElement>(null);
    const $list = useRef<HTMLDivElement>(null);
    const { currentTranslateX, dragging, handler, idxActiveCard } = useSlider(
        $list,
        values.length
    );
    useEffect(() => {
        const handleResize = () => setScreenRefWidth($screen.current?.clientWidth);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <article className={style.screenList} ref={$screen}>
            <div
                className={style.cardList}
                ref={$list}
                style={{
                    transform: `translateX(${currentTranslateX}px)`,
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
        </article>
    );
}

export default ValueList;
