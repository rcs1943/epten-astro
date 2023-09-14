import type { HeroListProps } from "./types";
import HomeSlider from "../../../../Slider/HomeSlider/HomeSlider";
import HeroSlide from "../HeroSlide/HeroSlide";
import type { HeroSlideProps } from "../HeroSlide/types";

const HeroList = ({ slides }: HeroListProps) => {
    return (
        <HomeSlider<HeroSlideProps>
            slides={slides}
            renderSlides={(slide, idx) => {
                const { title, subtitle, button, imgPath } = slide;
                return (
                    <HeroSlide
                        key={idx}
                        subtitle={subtitle}
                        button={button}
                        imgPath={imgPath}
                        title={title}
                    />
                );
            }}
        />
    );
};

export default HeroList;
