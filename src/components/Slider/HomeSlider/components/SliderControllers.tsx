import { Icon } from "@iconify/react/dist/iconify.js";
import type { SliderControllerComponentTypes } from "./types";
import style from "./styles.module.scss";

const SliderControllerComponent = ({
    controllers,
    freezeSlide,
    automaticSlide,
}: SliderControllerComponentTypes) => {
    const { slideBack, slideForward, pauseAutoSlide, playAutoSlide } =
        controllers;
    return (
        <div className={style.container}>
            <button className={style.prev} onClick={freezeSlide ? () => {} : slideBack}>
                <Icon icon="material-symbols:arrow-left-alt" />
            </button>
            {automaticSlide && (
                <button className={style.reproduction} onClick={pauseAutoSlide}>
                    <Icon icon="ic:baseline-pause" />
                </button>
            )}
            {!automaticSlide && (
                <button className={style.reproduction} onClick={playAutoSlide}>
                    <Icon icon="material-symbols:play-arrow" />
                </button>
            )}
            <button className={style.next} onClick={freezeSlide ? () => {} : slideForward}>
                <Icon icon="material-symbols:arrow-right-alt" />
            </button>
        </div>
    );
};

export default SliderControllerComponent;
