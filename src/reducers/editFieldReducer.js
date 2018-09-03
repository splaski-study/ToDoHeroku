export default function editField (state = '', action) {
    switch (action.type) {
        case "READ_VALUE":
            return action.text;

        case "CHANGE_VALUE":
            return action.text;

        default:
            return state
    }
}