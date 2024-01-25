const initialState = {
    AllformData: [],
}

const FormReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_FORM_DATA':
            return {
                ...state,
                AllformData: action.payload,

            };
        default:
            return state;
    }

};

export default FormReducer;



