import { GET_LIST_EMPLOYEE, ADD_EMPLOYEE, DELETE_EMPLOYEE, DETAIL_EMPLOYEE, UPDATE_EMPLOYEE } from "../../actions/employeeAction";

const initialState = {
    getListEmployeeResult : false,
    getListKontakLoading : false,
    getListEmployeeError : false,

    addListEmployeeResult : false,
    addListKontakLoading : false,
    addListEmployeeError : false,

    deleteListEmployeeResult : false,
    deleteListKontakLoading : false,
    deleteListEmployeeError : false,

    updateListEmployeeResult : false,
    updateListKontakLoading : false,
    updateListEmployeeError : false,

    detailEmployeeResult : false,
}

const employee = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST_EMPLOYEE:
            return {
                ... state,
                getListEmployeeResult: action.payload.data,
                getListKontakLoading: action.payload.loading,
                getListEmployeeError: action.payload.errorMassage

            };

        case ADD_EMPLOYEE:
            return {
                ... state,
                addListEmployeeResult: action.payload.data,
                addListKontakLoading: action.payload.loading,
                addListEmployeeError: action.payload.errorMassage

            };

        case DELETE_EMPLOYEE:
            return {
                ... state,
                deleteListEmployeeResult: action.payload.data,
                deleteListKontakLoading: action.payload.loading,
                deleteListEmployeeError: action.payload.errorMassage

            };

        case DETAIL_EMPLOYEE:
            return {
                ... state,
                detailEmployeeResult: action.payload.data

            };

        case UPDATE_EMPLOYEE:
            return {
                ... state,
                updateListEmployeeResult: action.payload.data,
                updateListKontakLoading: action.payload.loading,
                updateListEmployeeError: action.payload.errorMassage

            };
        default:
            return state;
    }
}

export default employee


