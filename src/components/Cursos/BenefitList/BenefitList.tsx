import { useEffect, useRef, useState } from "react";
import { getIsMobile } from "../../../utils/deviceSize";
import BenefitCard from "../../Cards/BenefitCard/BenefitCard";
import { CARD_LIST_GAP } from "../../../utils/constants/slider";
import type { BenefitListProps } from "./types";
import useSlider from "../../../utils/hooks/useSlider";
import slideStyle from "../../Nosotros/ValueList/styles.module.scss";
import style from "./styles.module.scss";
import SliderSlickPager from "../../SliderSlickPager/SliderSlickPager";

const BenefitList = ({ benefits }: BenefitListProps) => {
    const [screenRefWidth, setScreenRefWidth] = useState<number | undefined>();
    const isMobile = getIsMobile();
    const $screen = useRef<HTMLDivElement>(null);
    const $list = useRef<HTMLDivElement>(null);
    const {
        currentTranslateX,
        dragging,
        handler,
        controllers,
        idxActiveSlide,
    } = useSlider($list, benefits.length, CARD_LIST_GAP);
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
        <article className={slideStyle.container}>
            <div className={slideStyle.screen} ref={$screen}>
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
                    {benefits.map(({ imgPath, title, content }, idx) => (
                        <BenefitCard
                            key={idx}
                            imgPath={imgPath}
                            title={title}
                            content={content}
                            mobileWidth={screenRefWidth}
                        />
                    ))}
                </div>
            </div>
            {isMobile && (
                <SliderSlickPager
                    slides={benefits}
                    controllers={controllers}
                    idxActiveSlide={idxActiveSlide}
                />
            )}
        </article>
    );
};

export default BenefitList;
