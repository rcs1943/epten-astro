import { useState } from "react";
import type { SliderHook } from "./types";

const useSlider = (
    $list: React.MutableRefObject<HTMLDivElement | null>,
    listItemsNumber: number,
    listGap: number
): SliderHook => {
    //#region States
    const [idxActiveSlide, setIdxActiveSlide] = useState(1);
    const [dragging, setDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [endX, setEndX] = useState(0);
    const [currentTranslateX, setCurrentTranslateX] = useState(
        -idxActiveSlide * (328 + listGap)
    );
    const [prevTranslate, setPrevTranslate] = useState(
        -idxActiveSlide * (328 + listGap)
    );
    const [stopDragAnimation, setStopDragAnimation] = useState<boolean>(false);
    const [freezeSlide, setFreezeSlide] = useState<boolean>(false);
    //#endregion
    //#region Functions
    const handleTouchStart = ({
        touches,
    }: React.TouchEvent<HTMLDivElement>): void => {
        setStopDragAnimation(false);
        setFreezeSlide(false);
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
        // Setteando valores adecuados
        newTranslateX = -newIdxActiveSlide * (cardWidth + listGap);
        setPrevTranslate(newTranslateX);
        setCurrentTranslateX(newTranslateX);
        temporalFreezeSlide();
        if (newIdxActiveSlide === 0) {
            turnAroundSliderLeft();
            return;
        }
        if (newIdxActiveSlide === listItemsNumber - 1) {
            turnAroundSliderRight();
            return;
        }
        setIdxActiveSlide(newIdxActiveSlide);
    };
    const turnAroundSliderLeft = (): void => {
        //GNOMO ENCONTRAR LA MANERA DE TENER EL WIDTH DE LA CARD DINÁMICAMENTE DESDE LOS PARÁMETROS DEL HOOK
        if (!$list.current) return;
        const cardWidth: number = $list.current.children[0].clientWidth;
        setIdxActiveSlide(listItemsNumber - 2);
        const newTranslateX: number = -(listItemsNumber - 2) * (cardWidth + listGap);
        setTimeout(() => {
            setStopDragAnimation(true);
            setPrevTranslate(newTranslateX);
            setCurrentTranslateX(newTranslateX);
        }, 500);
    };
    const turnAroundSliderRight = (): void => {
        if (!$list.current) return;
        const cardWidth: number = $list.current.children[0].clientWidth;
        setIdxActiveSlide(1);
        const newTranslateX: number = -1 * (cardWidth + listGap);
        setTimeout(() => {
            setStopDragAnimation(true);
            setPrevTranslate(newTranslateX);
            setCurrentTranslateX(newTranslateX);
        }, 500);
    };
    const temporalFreezeSlide = (): void => {
        setFreezeSlide(true);
        setTimeout(() => {
            setFreezeSlide(false);
        }, 500);
    };
    //#region Funciones de controladores de navegación
    const slideBack = (): void => {
        if (!$list.current) return;
        temporalFreezeSlide();
        setStopDragAnimation(false);
        const cardWidth: number = $list.current.children[0].clientWidth;
        const newIdxActiveSlide: number = idxActiveSlide - 1;
        const newTranslateX: number = -newIdxActiveSlide * (cardWidth + listGap);
        setPrevTranslate(newTranslateX);
        setCurrentTranslateX(newTranslateX);
        if (newIdxActiveSlide === 0) {
            turnAroundSliderLeft();
            return;
        }
        setIdxActiveSlide(newIdxActiveSlide);
    };
    const slideForward = (): void => {
        if (!$list.current) return;
        temporalFreezeSlide();
        setStopDragAnimation(false);
        const cardWidth: number = $list.current.children[0].clientWidth;
        const newIdxActiveSlide: number = idxActiveSlide + 1;
        const newTranslateX: number = -newIdxActiveSlide * (cardWidth + listGap);
        setPrevTranslate(newTranslateX);
        setCurrentTranslateX(newTranslateX);
        if (newIdxActiveSlide === listItemsNumber - 1) {
            turnAroundSliderRight();
            return;
        }
        setIdxActiveSlide(newIdxActiveSlide);
    };
    const goToSlide = (slideIdx: number): void => {
        if (!$list.current) return;
        const cardWidth: number = $list.current.children[0].clientWidth;
        const newIdxActiveSlide: number = slideIdx;
        const newTranslateX: number = -newIdxActiveSlide * (cardWidth + listGap);
        setIdxActiveSlide(newIdxActiveSlide);
        setPrevTranslate(newTranslateX);
        setCurrentTranslateX(newTranslateX);
    };
    //#endregion
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
        stopDragAnimation,
        freezeSlide,
    };
};

export default useSlider;
