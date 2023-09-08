export type SliderProps<I> = {
    slides: I[];
    renderSlides: (slide: I) => React.ReactElement;
};
