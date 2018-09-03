export const read = (text) => (
    {
        type: "READ_VALUE",
        text: text,
    });

export const change = (text) => (
    {
        type: "CHANGE_VALUE",
        text: text,
    });

