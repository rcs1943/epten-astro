import BenefitCard from "../../Cards/BenefitCard/BenefitCard";
import type { BenefitListProps, Benefit } from "./types";
import Slider from "../../Slider/Slider/Slider";

const BenefitList = ({ benefits }: BenefitListProps) => {
    return (
        <Slider<Benefit>
            slides={benefits}
            renderSlides={(benefit, idx) => {
                const { title, content, imgPath } = benefit;
                return (
                    <BenefitCard
                        key={idx}
                        imgPath={imgPath}
                        content={content}
                        title={title}
                    />
                );
            }}
        />
    );
};

export default BenefitList;
