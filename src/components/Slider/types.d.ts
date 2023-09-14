export type SliderProps<I> = {
    slides: I[];
    renderSlides: (slide: I, idx: number) => React.ReactElement;
    darkMode?: boolean;
};
