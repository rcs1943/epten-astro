import type { Value, ValueListProps } from "./types";
import Slider from "../../Slider/Slider";
import ValueCard from "../../Cards/ValueCard/ValueCard";
import { useState } from "react";

const ValueList = ({ values }: ValueListProps) => {
    const [screenRefWidth, setScreenRefWidth] = useState<number | undefined>();
    const adjustCardWidth = (screenWidth?: number) => {
        setScreenRefWidth(screenWidth);
    };
    return (
        <Slider<Value>
            slides={values}
            adjustCardWidthResponsive={adjustCardWidth}
            renderSlides={(value, idx) => {
                const { title, content, icon } = value;
                return (
                    <ValueCard
                        key={idx}
                        icon={icon}
                        content={content}
                        title={title}
                        mobileWidth={screenRefWidth}
                    />
                );
            }}
        />
    );
};

export default ValueList;
