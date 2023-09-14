import { Icon } from "@iconify/react/dist/iconify.js";

const SliderController = () => {
    return (
        <div className="buttons">
            <button
                className="carousel-button prev"
                data-carousel-button="prev"
            >
                <Icon icon="material-symbols:arrow-right-alt" />
            </button>
            <button
                className="carousel-button reproduction active"
                id="pause-btn"
            >
                <Icon icon="ic:baseline-pause" />
            </button>
            <button className="carousel-button reproduction" id="play-btn">
                <Icon icon="material-symbols:play-arrow" />
            </button>
            <button
                className="carousel-button next"
                data-carousel-button="next"
            >
                <Icon icon="material-symbols:arrow-right-alt" />
            </button>
        </div>
    );
};

export default SliderController;
