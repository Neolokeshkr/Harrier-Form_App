const initialState = [];
    // formDataRedux :
    // {
    //     firstName: '',
    //     lastName: '',
    //     photo: '',
    //     gender: '',
    //     gender: '',
    //     email: '',
    //     mobile: '',
    //     dob: '',
    //     city: '',
    //     skills: [],
    // }
// ];

const formReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SAVE_DATA':
            return [
                ...state,
                {
                    ...action.payload
                }
                
            ]
        default: return state;
    }
}

export default formReducer;