let isResponsive: boolean = window.innerWidth < 650;

const updateResponsiveStatus = (): void => {
    isResponsive = window.innerWidth < 650;
};

const handleResize = (): void => {
    updateResponsiveStatus();
};

window.addEventListener("resize", handleResize);

export const getIsResponsive = (): boolean => {
    return isResponsive;
};
