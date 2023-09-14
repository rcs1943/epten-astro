import Slider from "../../Slider/Slider/Slider";
import type { PresentationCard, PresentationCardListProps } from "./types";
import AboutCard from "../../Cards/AboutCard";
import { useState } from "react";

const PresentationCardList = ({ presentationCards }: PresentationCardListProps) => {
    const [screenRefWidth, setScreenRefWidth] = useState<number | undefined>();
    const adjustCardWidth = (screenWidth?: number) => {
        setScreenRefWidth(screenWidth);
    };
    return (
        <Slider<PresentationCard>
            slides={presentationCards}
            adjustCardWidthResponsive={adjustCardWidth}
            darkMode={true}
            renderSlides={(presentationCard, idx) => {
                const { iconPath, content } = presentationCard;
                return (
                    <AboutCard
                        key={idx}
                        iconPath={iconPath}
                        content={content}
                        mobileWidth={screenRefWidth}
                    />
                );
            }}
        />
    );
};

export default PresentationCardList;
