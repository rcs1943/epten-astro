import { useState } from "react";
import type { SliderHook } from "./types";
import { CARD_LIST_GAP } from "../constants/slider";

const useSlider = (
    $list: React.MutableRefObject<HTMLDivElement | null>,
    listLength: number
): SliderHook => {
    //#region States
    const [idxActiveCard, setIdxActiveCard] = useState(0);
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
            newCurrentTranslateX >= CARD_LIST_GAP ||
            newCurrentTranslateX - cardWidth <= -listWidth - CARD_LIST_GAP
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
        const diffMovement: number = startX - endX;
        let newIdxActiveCard: number = listWidth / (-newTranslateX + cardWidth);
        // Decidiendo si hacia adelante o hacia atrás
        newIdxActiveCard = Math[diffMovement > 0 ? "floor" : "ceil"](newIdxActiveCard);
        newIdxActiveCard = listLength - newIdxActiveCard;
        // Revisando si no hay desborde para atrás
        newIdxActiveCard = newIdxActiveCard < 0 ? 0 : newIdxActiveCard;
        // Setteando valores adecuados
        newTranslateX = -newIdxActiveCard * (cardWidth + CARD_LIST_GAP);
        setIdxActiveCard(newIdxActiveCard);
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
        idxActiveCard,
    };
};

export default useSlider;
