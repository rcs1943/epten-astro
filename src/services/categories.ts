export const getCategories = async () => {
    console.log("hola")
    const res = await fetch("./category.json", {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            query: {},
        }),
    });

    return res;
};
