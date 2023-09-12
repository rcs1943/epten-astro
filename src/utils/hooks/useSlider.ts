import { useState } from "react";
import type { SliderHook } from "./types";

const useSlider = (
    $list: React.MutableRefObject<HTMLDivElement | null>,
    listItemsNumber: number,
    listGap: number
): SliderHook => {
    //#region States
    const [idxActiveSlide, setIdxActiveSlide] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [endX, setEndX] = useState(0);
    const [currentTranslateX, setCurrentTranslateX] = useState(0);
    const [prevTranslate, setPrevTranslate] = useState(0);
    //#endregion
    //#region Functions
    const handleTouchStart = ({
        touches,
    }: React.TouchEvent<HTMLDivElement>): void => {
        setDragging(true);
        setStartX(touches[0].clientX);
        setEndX(0);
    };
    const handleTouchMove = ({
        touches,
    }: React.TouchEvent<HTMLDivElement>): void => {
        if (!dragging || !$list.current) return;
        const currentX = touches[0].clientX,
            deltaX = currentX - startX;
        setEndX(currentX);
        const newCurrentTranslateX = prevTranslate + deltaX;
        const listWidth: number = $list.current.clientWidth;
        const cardWidth: number = $list.current.children[0].clientWidth;
        //Verificando límites de movimiento
        if (
            newCurrentTranslateX >= listGap ||
            newCurrentTranslateX - cardWidth <= -listWidth - listGap
        )
            return;
        setCurrentTranslateX(newCurrentTranslateX);
    };
    const handleTouchEnd = (): void => {
        setDragging(false);
        if (!$list.current) return;

        const listWidth: number = $list.current.clientWidth;
        const cardWidth: number = $list.current.children[0].clientWidth;
        let newTranslateX: number = currentTranslateX;
        //#region Colocando límites
        if (currentTranslateX > 0) newTranslateX = 0;
        if (currentTranslateX < -listWidth + cardWidth)
            newTranslateX = -listWidth + cardWidth;
        //#endregion
        const diffMovement: number = endX === 0 ? 0 : startX - endX;
        const segmentWidth: number = listWidth / listItemsNumber;
        let newIdxActiveSlide: number =
            -newTranslateX /
            (segmentWidth + (cardWidth + listGap - segmentWidth));
        // Decidiendo si hacia adelante o hacia atrás
        newIdxActiveSlide =
            Math[diffMovement > 0 ? "ceil" : "floor"](newIdxActiveSlide);
        // Revisando si no hay desborde para adelante
        newIdxActiveSlide =
            newIdxActiveSlide > listItemsNumber - 1
                ? listItemsNumber - 1
                : newIdxActiveSlide;
        // Setteando valores adecuados
        newTranslateX = -newIdxActiveSlide * (cardWidth + listGap);
        setIdxActiveSlide(newIdxActiveSlide);
        setPrevTranslate(newTranslateX);
        setCurrentTranslateX(newTranslateX);
    };
    const slideBack = (): void => {
        if (!$list.current) return;
        const cardWidth: number = $list.current.children[0].clientWidth;
        const newIdxActiveSlide = idxActiveSlide - 1;
        const newTranslateX = -newIdxActiveSlide * (cardWidth + listGap);
        setIdxActiveSlide(newIdxActiveSlide);
        setPrevTranslate(newTranslateX);
        setCurrentTranslateX(newTranslateX);
    };
    const slideForward = (): void => {
        if (!$list.current) return;
        const cardWidth: number = $list.current.children[0].clientWidth;
        const newIdxActiveSlide = idxActiveSlide + 1;
        const newTranslateX = -newIdxActiveSlide * (cardWidth + listGap);
        setIdxActiveSlide(newIdxActiveSlide);
        setPrevTranslate(newTranslateX);
        setCurrentTranslateX(newTranslateX);
    };
    const goToSlide = (idSlide: number): void => {
        if (!$list.current) return;
        const cardWidth: number = $list.current.children[0].clientWidth;
        const newIdxActiveSlide = idSlide;
        const newTranslateX = -newIdxActiveSlide * (cardWidth + listGap);
        setIdxActiveSlide(newIdxActiveSlide);
        setPrevTranslate(newTranslateX);
        setCurrentTranslateX(newTranslateX);
    };
    return {
        currentTranslateX,
        dragging,
        handler: {
            touchStart: handleTouchStart,
            touchMove: handleTouchMove,
            touchEnd: handleTouchEnd,
        },
        controllers: {
            slideBack,
            slideForward,
            goToSlide,
        },
        idxActiveSlide,
    };
};

export default useSlider;
