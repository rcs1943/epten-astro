type SliderHandlersType = {
    touchStart: (touches: React.TouchEvent<HTMLDivElement>) => void;
    touchMove: (touches: React.TouchEvent<HTMLDivElement>) => void;
    touchEnd: () => void;
};
export type SliderControllersType = {
    slideBack: () => void;
    slideForward: () => void;
    goToSlide: (slideIdx: number) => void;
};
export type SliderHook = {
    currentTranslateX: number;
    dragging: boolean;
    handler: SliderHandlersType;
    controllers: SliderControllersType;
    idxActiveSlide: number;
    stopDragAnimation: boolean;
    freezeSlide: boolean;
};
export type ScreenSliderWidthHook = {
    screenRefWidth: number | undefined;
}