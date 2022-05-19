export const addFavourite = spell => {
    return {
        type: "add",
        spell: spell
    };
};

export const removeFavourite = spell => {
    return {
        type: "remove",
        spell: spell
    }
};