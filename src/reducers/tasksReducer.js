export default function inputsArr (state = [], action) {
    switch (action.type) {
        case "LOAD_TASKS":
            return action.payload;
        case "ADD_TASK":
            return [...state, action.payload];
        case "DELETE_TASK":
            return state.filter(el => el._id !== action.id);
        case "EDIT_TASK":
            const task = action.input;
            const id = action.id;
            console.log('input:',task);
            return state.map(el => el._id === id ? {...el, task} : el);
        case "IS_ACTIVE":
            return state.map(el => (el._id === action.id) ? {...el, isActive: !el.isActive} : el);

        default:
            return state
    }
}
