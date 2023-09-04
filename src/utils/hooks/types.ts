type SliderHandlersType = {
    touchStart: (touches: React.TouchEvent<HTMLDivElement>) => void;
    touchMove: (touches: React.TouchEvent<HTMLDivElement>) => void;
    touchEnd: () => void;
};
export type SliderControllersType = {
    slideBack: () => void;
    slideForward: () => void;
    goToSlide: (slideId: number) => void;
};
export type SliderHook = {
    currentTranslateX: number;
    dragging: boolean;
    handler: SliderHandlersType;
    controllers: SliderControllersType;
    idxActiveSlide: number;
};
export type ScreenSliderWidthHook = {
    screenRefWidth: number | undefined;
}