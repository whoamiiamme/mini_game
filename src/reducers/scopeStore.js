
export function checkAnser({anser, quesition}){
    anser = anser.toUpperCase()
    quesition = quesition[1].vietnamese.toUpperCase()
    if(anser === quesition){
        return 1
    }
    return -1
}

export default ( state = 0, action ) => {
    switch(action.type){
        case 'mark':
            state += action.payload
            return state >= 0 ? state : 0;
        case 'string':
            state += checkAnser({anser: action.anser, quesition: action.quesition})
            return state >= 0 ? state : 0;
        default:
            return state
    }
}