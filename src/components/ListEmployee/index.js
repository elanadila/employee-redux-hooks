import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { detailEmployee, addEmployee, deleteEmployee, getListEmployee } from '../../actions/employeeAction';

function ListEmployee() {

  const { 
    getListEmployeeResult,
    getListKontakLoading,
    getListEmployeeError,
    deleteEmployeeResult
} = useSelector((state) => state.EmployeeReducer)
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getListEmployee());

  }, [dispatch]);

  useEffect(() => {
    if(deleteEmployeeResult){
        dispatch(getListEmployee());
    }
  }, [deleteEmployeeResult, dispatch])

  return (
    <div>
        <h4> List Employee</h4>
        { getListEmployeeResult ? (
            getListEmployeeResult.map((employee) => {
                return (
                    <p key={employee.first_name}>
                        {employee.last_name} - 
                        {employee.phone} - 
                        {employee.date_of_birth} - 
                        {employee.street} - 
                        {employee.current_position} - 
                        {employee.ktp_number} -
                        <button onClick={ () => dispatch(deleteEmployee(employee.id)) }>Hapus</button>
                        <button style={{ marginLeft: '10px'}} onClick={ () => dispatch(detailEmployee(employee)) }>Edit</button>
                    </p>
                )
            })
        ) : getListKontakLoading ? (
            <p>Loading...</p>
        ) : (
            <p>{getListEmployeeError ? getListEmployeeError : "Data Kosong"}</p>
        )}
        
    </div>
  )
}

export default ListEmployee