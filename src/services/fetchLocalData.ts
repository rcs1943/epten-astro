export const findObjInArrById = (data: Array<any>, id: string) => {
    return data.find(data => data.id === id);
};
