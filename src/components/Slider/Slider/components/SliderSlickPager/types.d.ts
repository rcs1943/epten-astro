import type { SliderControllersType } from "../../../../../utils/hooks/types";

export type SliderSlickPagerProps = {
    slides: unknown[];
    controllers: SliderControllersType;
    idxActiveSlide: number;
    darkMode?: boolean;
    freezeSlide: boolean;
}