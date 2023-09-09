export const getLocalDataById = (data: Array<any>, id: string) => {
    return data.find(data => data.id === id);
};
