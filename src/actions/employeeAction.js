import axios from 'axios'


export const GET_LIST_EMPLOYEE = "GET_LIST_EMPLOYEE";
export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
export const DETAIL_EMPLOYEE = "DETAIL_EMPLOYEE";
export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";

export const getListEmployee = () => {
    
    return (dispatch) => {

        dispatch({
            type: GET_LIST_EMPLOYEE,
            payload: {
                loading:true,
                data:false,
                errorMassage:false
            }
        })

        axios({
            method: 'GET',
            url: 'http://localhost:3000/employee',
            timeout:120000
        })

            .then((response)=> {
                
                dispatch({
                    type: GET_LIST_EMPLOYEE,
                    payload: {
                        loading:false,
                        data:response.data,
                        errorMassage:false
                    }
                })

            })
            .catch((error) => {
                
                dispatch({
                    type: GET_LIST_EMPLOYEE,
                    payload: {
                        loading:false,
                        data:false,
                        errorMassage:error.massage
                    }
                })

            })
    }
} 

export const addEmployee = (data) => {
    return (dispatch) => {

        dispatch({
            type: ADD_EMPLOYEE,
            payload: {
                loading:true,
                data:false,
                errorMassage:false
            }
        })

        axios({
            method: 'POST',
            url: 'http://localhost:3000/employee',
            timeout: 120000,
            data: data
        })

            .then((response)=> {
                
                dispatch({
                    type: ADD_EMPLOYEE,
                    payload: {
                        loading:false,
                        data:response.data,
                        errorMassage:false
                    }
                })

            })
            .catch((error) => {
               
                dispatch({
                    type: ADD_EMPLOYEE,
                    payload: {
                        loading:false,
                        data:false,
                        errorMassage:error.massage
                    }
                })

            })
    }
} 

export const deleteEmployee = (id) => {
    return (dispatch) => {

        dispatch({
            type: DELETE_EMPLOYEE,
            payload: {
                loading:true,
                data:false,
                errorMassage:false
            }
        })

        axios({
            method: 'DELETE',
            url: 'http://localhost:3000/employee/' + id,
            timeout: 120000,
        })

            .then((response)=> {
                
                dispatch({
                    type: DELETE_EMPLOYEE,
                    payload: {
                        loading:false,
                        data:response.data,
                        errorMassage:false
                    }
                })

            })
            .catch((error) => {
               
                dispatch({
                    type: DELETE_EMPLOYEE,
                    payload: {
                        loading:false,
                        data:false,
                        errorMassage:error.massage
                    }
                })

            })
    }
} 

export const detailEmployee = (data) => {
    return (dispatch) => {

        dispatch({
            type: DETAIL_EMPLOYEE,
            payload: {
                data: data
            }
        })
        
    }
}

export const updateEmployee = (data) => {
    return (dispatch) => {

        dispatch({
            type: UPDATE_EMPLOYEE,
            payload: {
                loading:true,
                data:false,
                errorMassage:false
            }
        })

        axios({
            method: 'PUT',
            url: 'http://localhost:3000/employee/' +data.id,
            timeout: 120000,
            data: data
        })

            .then((response)=> {
                
                dispatch({
                    type: UPDATE_EMPLOYEE,
                    payload: {
                        loading:false,
                        data:response.data,
                        errorMassage:false
                    }
                })

            })
            .catch((error) => {
               
                dispatch({
                    type: UPDATE_EMPLOYEE,
                    payload: {
                        loading:false,
                        data:false,
                        errorMassage:error.massage
                    }
                })

            })
    }
} 