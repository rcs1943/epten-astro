import type { Value, ValueListProps } from "./types";
import Slider from "../../Slider/Slider";
import ValueCard from "../../Cards/ValueCard/ValueCard";

const ValueList = ({ values }: ValueListProps) => {
    return (
        <Slider<Value>
            slides={values}
            renderSlides={value => {
                const { title, content, icon } = value;
                return (
                    <ValueCard
                        key={title}
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
