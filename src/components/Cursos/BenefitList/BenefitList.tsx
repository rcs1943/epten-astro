import BenefitCard from "../../Cards/BenefitCard/BenefitCard";
import type { BenefitListProps, Benefit } from "./types";
import Slider from "../../Slider/Slider";
import { useState } from "react";

const BenefitList = ({ benefits }: BenefitListProps) => {
    const [screenRefWidth, setScreenRefWidth] = useState<number | undefined>();
    const adjustCardWidth = (screenWidth?: number) => {
        setScreenRefWidth(screenWidth);
    };
    return (
        <Slider<Benefit>
            slides={benefits}
            adjustCardWidthResponsive={adjustCardWidth}
            renderSlides={benefit => {
                const { title, content, imgPath } = benefit;
                return (
                    <BenefitCard
                        key={title}
                        imgPath={imgPath}
                        content={content}
                        title={title}
                        mobileWidth={screenRefWidth}
                    />
                );
            }}
        />
    );
};

export default BenefitList;
