import React, { useEffect } from 'react'
import { Container, Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { detailEmployee, addEmployee, deleteEmployee, getListEmployee } from '../../actions/employeeAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'


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
    
    <Container>
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
                        <Button color="warning" onClick={ () => dispatch(detailEmployee(employee)) } className="ms-2">
                          <FontAwesomeIcon icon={faEdit} /> Edit
                        </Button>
                        <Button color="danger" onClick={ () => dispatch(deleteEmployee(employee.id)) } className="ms-2">
                          <FontAwesomeIcon icon={faTrash} /> Hapus
                        </Button>
                    </p>
                )
            })
        ) : getListKontakLoading ? (
            <p>Loading...</p>
        ) : (
            <p>{getListEmployeeError ? getListEmployeeError : "Data Kosong"}</p>
        )}
        
    </Container>
    </div>
  )
}

export default ListEmployee