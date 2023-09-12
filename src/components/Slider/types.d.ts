export type SliderProps<I> = {
    slides: I[];
    renderSlides: (slide: I, idx: number) => React.ReactElement;
    adjustCardWidthResponsive: (screenWidth?: number) => void;
    darkMode?: boolean;
};
