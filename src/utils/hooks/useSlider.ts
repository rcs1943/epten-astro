import { useEffect, useState } from "react";
import type { SliderHook } from "./types";

const useSlider = (
    $list: React.MutableRefObject<HTMLDivElement | null>,
    listItemsNumber: number,
    listGap: number,
    cardWidth?: number,
    isAutomatic?: boolean
): SliderHook => {
    //#region States
    const [idxActiveSlide, setIdxActiveSlide] = useState(1);
    const [dragging, setDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [endX, setEndX] = useState(0);
    const [currentTranslateX, setCurrentTranslateX] = useState(0);
    const [prevTranslate, setPrevTranslate] = useState(0);
    //Valor inicial true para que no esté la animación al renderizar componente
    const [stopDragAnimation, setStopDragAnimation] = useState<boolean>(true);
    const [freezeSlide, setFreezeSlide] = useState<boolean>(false);
    //#endregion
    useEffect(() => {
        console.log(Boolean($list.current), Boolean(cardWidth))
        // slideForward();
        if (!isAutomatic) return;
        const automaticSlide = setInterval(slideForward, 1000);
        return () => clearInterval(automaticSlide)
    }, [cardWidth]);
    useEffect(() => {
        setCurrentTranslateX(-idxActiveSlide * (cardWidth + listGap));
        setPrevTranslate(-idxActiveSlide * (cardWidth + listGap));
    }, [cardWidth]);
    //#region Functions
    const automaticSlide = () => {
        setInterval(slideForward, 1000);
    }
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
        if (!dragging || !$list.current || !cardWidth) return;
        const currentX = touches[0].clientX,
            deltaX = currentX - startX;
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
        if (!$list.current || !cardWidth) return;
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
        }, 500);
    };
    const turnAroundSliderRight = (): void => {
        if (!$list.current || !cardWidth) return;
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
        console.log(idxActiveSlide)
        temporalFreezeSlide();
        setStopDragAnimation(false);
        const newIdxActiveSlide: number = idxActiveSlide + 1;
        const newTranslateX: number = -newIdxActiveSlide * (cardWidth + listGap);
        setPrevTranslate(newTranslateX);
        setCurrentTranslateX(newTranslateX);
        if (newIdxActiveSlide === listItemsNumber - 1) {
            turnAroundSliderRight();
            return;
        }
        setIdxActiveSlide(newIdxActiveSlide);
        console.log("hola")
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
