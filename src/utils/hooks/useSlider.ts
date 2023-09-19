import { useEffect, useState } from "react";
import type { SliderHook } from "./types";

const useSlider = (
    $list: React.MutableRefObject<HTMLDivElement | null>,
    listItemsNumber: number,
    listGap: number,
    cardWidth?: number,
    isAutomatic: boolean = false,
    slideAnimationTime: number = 450
): SliderHook => {
    //#region States
    const [idxActiveSlide, setIdxActiveSlide] = useState(1);
    const [dragging, setDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [endX, setEndX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [currentTranslateX, setCurrentTranslateX] = useState(0);
    const [prevTranslate, setPrevTranslate] = useState(0);
    const [freezeSlide, setFreezeSlide] = useState<boolean>(false);
    const [automaticSlide, setAutomaticSlide] = useState(isAutomatic);
    //Valor inicial true para que no esté la animación al renderizar componente
    const [stopDragAnimation, setStopDragAnimation] = useState<boolean>(true);
    //#endregion
    useEffect(() => {
        if (!cardWidth) return;
        setCurrentTranslateX(-idxActiveSlide * (cardWidth + listGap));
        setPrevTranslate(-idxActiveSlide * (cardWidth + listGap));
    }, [cardWidth]);
    //Effect para slides automáticos. cardWidth como prop porque slideForward() requiere que exista.
    useEffect(() => {
        if (!automaticSlide) return;
        const automaticSlideIntervalId = setInterval(slideForward, 5000);
        return () => clearInterval(automaticSlideIntervalId);
    }, [cardWidth, idxActiveSlide, automaticSlide]);
    //#region Functions
    const handleTouchStart = ({
        touches,
    }: React.TouchEvent<HTMLDivElement>): void => {
        setStopDragAnimation(false);
        setFreezeSlide(false);
        setDragging(true);
        setStartX(touches[0].clientX);
        setStartY(touches[0].clientY);
        setEndX(0);
    };
    const limitVerticalMove = (
        originX: number,
        originY: number,
        targetX: number,
        targetY: number
    ): boolean => {
        // console.log("adios")
        const dx = originX - targetX;
        const dy = originY - targetY;
        let theta = Math.atan2(dy, dx);
        theta *= 180 / Math.PI;
        const angle = Math.abs(theta);
        console.log(angle);
        if (angle > 55 && angle < 125) return true;
        return false;
    };
    const handleTouchMove = ({
        touches,
    }: React.TouchEvent<HTMLDivElement>): void => {
        if (!dragging || !$list.current || !cardWidth) return;
        const currentX = touches[0].clientX,
            currentY = touches[0].clientY,
            deltaX = currentX - startX;
        if (limitVerticalMove(startX, startY, currentX, currentY)) return;
        setEndX(currentX);
        const newCurrentTranslateX = prevTranslate + deltaX;
        const listWidth: number = $list.current.clientWidth;
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
        if (!$list.current || !cardWidth || prevTranslate === currentTranslateX) return;
        const listWidth: number = $list.current.clientWidth;
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
        if (!$list.current || !cardWidth) return;
        setIdxActiveSlide(listItemsNumber - 2);
        const newTranslateX: number =
            -(listItemsNumber - 2) * (cardWidth + listGap);
        setTimeout(() => {
            setStopDragAnimation(true);
            setPrevTranslate(newTranslateX);
            setCurrentTranslateX(newTranslateX);
        }, slideAnimationTime + 50);
    };
    const turnAroundSliderRight = (): void => {
        if (!$list.current || !cardWidth) return;
        setIdxActiveSlide(1);
        const newTranslateX: number = -1 * (cardWidth + listGap);
        setTimeout(() => {
            setStopDragAnimation(true);
            setPrevTranslate(newTranslateX);
            setCurrentTranslateX(newTranslateX);
        }, slideAnimationTime + 50);
    };
    const temporalFreezeSlide = (): void => {
        setFreezeSlide(true);
        setTimeout(() => {
            setFreezeSlide(false);
        }, slideAnimationTime + 50);
    };
    //#region Funciones de controladores de navegación
    const slideBack = (): void => {
        if (!$list.current || !cardWidth) return;
        temporalFreezeSlide();
        setStopDragAnimation(false);
        const newIdxActiveSlide: number = idxActiveSlide - 1;
        const newTranslateX: number =
            -newIdxActiveSlide * (cardWidth + listGap);
        setPrevTranslate(newTranslateX);
        setCurrentTranslateX(newTranslateX);
        if (newIdxActiveSlide === 0) {
            turnAroundSliderLeft();
            return;
        }
        setIdxActiveSlide(newIdxActiveSlide);
    };
    const slideForward = (): void => {
        if (!$list.current || !cardWidth) return;
        temporalFreezeSlide();
        setStopDragAnimation(false);
        const newIdxActiveSlide: number = idxActiveSlide + 1;
        const newTranslateX: number =
            -newIdxActiveSlide * (cardWidth + listGap);
        setPrevTranslate(newTranslateX);
        setCurrentTranslateX(newTranslateX);
        if (newIdxActiveSlide === listItemsNumber - 1) {
            turnAroundSliderRight();
            return;
        }
        setIdxActiveSlide(newIdxActiveSlide);
    };
    const goToSlide = (slideIdx: number): void => {
        if (!$list.current || !cardWidth) return;
        const newIdxActiveSlide: number = slideIdx;
        const newTranslateX: number =
            -newIdxActiveSlide * (cardWidth + listGap);
        setStopDragAnimation(false);
        setIdxActiveSlide(newIdxActiveSlide);
        setPrevTranslate(newTranslateX);
        setCurrentTranslateX(newTranslateX);
    };
    const pauseAutoSlide = () => setAutomaticSlide(false);
    const playAutoSlide = () => setAutomaticSlide(true);
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
            pauseAutoSlide,
            playAutoSlide,
        },
        idxActiveSlide,
        stopDragAnimation,
        freezeSlide,
        automaticSlide,
    };
};

export default useSlider;
