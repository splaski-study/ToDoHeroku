export default function input (state = '', action) {
    switch (action.type) {
        case "UPDATE_INPUT":
        return action.input;

        case "INPUT_CLEANER":
            return '';

        default:
            return state
    }
}

// updateInput =({target})=>{
//     const input= target.name;
//     const value= target.value;
//     this.setState({
//         [input]:value,
//     })
// };