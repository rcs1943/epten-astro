import AboutCard from "../../../Cards/AboutCard";
import Slider from "../../../Slider/Slider/Slider";
import type { PresentationCard, PresentationCardListProps } from "./types";

const PresentationCardList = ({ presentationCards }: PresentationCardListProps) => {
    return (
        <Slider<PresentationCard>
            slides={presentationCards}
            darkMode={true}
            renderSlides={(presentationCard, idx) => {
                const { iconPath, content } = presentationCard;
                return (
                    <AboutCard
                        key={idx}
                        iconPath={iconPath}
                        content={content}
                    />
                );
            }}
        />
    );
};

export default PresentationCardList;
