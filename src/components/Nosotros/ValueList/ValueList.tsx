import type { ValueListProps } from "./types";
import ValueCard from "../../Cards/ValueCard/ValueCard";
import Slider from "../../Slider/Slider/Slider";
import type { ValueCardProps } from "../../Cards/ValueCard/types";

const ValueList = ({ values }: ValueListProps) => {
    return (
        <Slider<ValueCardProps>
            slides={values}
            renderSlides={(value, idx) => {
                const { title, content, icon } = value;
                return (
                    <ValueCard
                        key={idx}
                        icon={icon}
                        content={content}
                        title={title}
                    />
                );
            }}
        />
    );
};

export default ValueList;
