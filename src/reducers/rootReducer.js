const initialState = {contacts:['James Smith', "Thomas Andersnon", "Bruce Wayne"]};

// Reducer

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'ADD_PERSON':
            return{
                ...state,contacts:[...state.contacts,action.data]
            }
            default:
                return state;
    }
}

export default rootReducer
