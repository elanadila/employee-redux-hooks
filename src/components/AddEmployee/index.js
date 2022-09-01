import React, { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addEmployee, getListEmployee, updateEmployee } from "../../actions/employeeAction"

function AddEmployee() {
    const [last_name, setNama]= useState("");
    const [phone, setNohp]= useState("");
    const [date_of_birth, setDOB]= useState("");
    const [street, setAlamat]= useState("");
    const [current_position, setPosition]= useState("");
    const [ktp_number, setKTP]= useState("");
    const [id, setId] = useState("");

    const { addEmployeeResult, detailEmployeeResult, updateEmployeeResult } = useSelector((state) => state.EmployeeReducer);

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        if(id) {
            dispatch(updateEmployee({id: id, last_name: last_name, phone:phone, date_of_birth:date_of_birth, street:street, current_position:current_position, ktp_number:ktp_number}))

        }else{
            dispatch(addEmployee({last_name: last_name, phone:phone, date_of_birth:date_of_birth, street:street, current_position:current_position, ktp_number:ktp_number}))
        }
        
    }
    
    
    useEffect(() => {
        if(addEmployeeResult) {
            dispatch(getListEmployee());
            setNama("");
            setNohp("");
            setDOB("");
            setAlamat("");
            setPosition("");
            setKTP("");
        }
    }, [addEmployeeResult, dispatch])

    useEffect(() => {
        if(detailEmployeeResult) {
            setNama(detailEmployeeResult.last_name);
            setNohp(detailEmployeeResult.phone);
            setDOB(detailEmployeeResult.date_of_birth);
            setAlamat(detailEmployeeResult.street);
            setPosition(detailEmployeeResult.current_position);
            setKTP(detailEmployeeResult.ktp_number);
            setId(detailEmployeeResult.id);
        }
    }, [detailEmployeeResult, dispatch])

    useEffect(() => {
        if(updateEmployeeResult) {
            dispatch(getListEmployee());
            setNama("");
            setNohp("");
            setDOB("");
            setAlamat("");
            setPosition("");
            setKTP("");
            setId("");
        }
    }, [updateEmployeeResult, dispatch])

    return (
    <div>
        <h4>{id ? "Edit Employee " : "Add Employee"}</h4>
        <form onSubmit={(event)=> handleSubmit(event)}>

            <input style={{ marginLeft: '10px'}} type="text" name="last_name" placeholder="Name . . . " value={last_name} 
            onChange={(event)=>setNama(event.target.value)}/>

            <input style={{ marginLeft: '10px'}} type="text" name="phone" placeholder="Phone . . . " value={phone} 
            onChange={(event)=>setNohp(event.target.value)}/>

            <input style={{ marginLeft: '10px'}} type="text" name="date_of_birth" placeholder="DOB . . . " value={date_of_birth} 
            onChange={(event)=>setDOB(event.target.value)}/>

            <input style={{ marginLeft: '10px'}} type="text" name="street" placeholder="Address . . . " value={street} 
            onChange={(event)=>setAlamat(event.target.value)}/>

            <input style={{ marginLeft: '10px'}} type="text" name="current_position" placeholder="Current Position . . . " value={current_position} 
            onChange={(event)=>setPosition(event.target.value)}/>

            <input style={{ marginLeft: '10px'}} type="text" name="ktp_number" placeholder="KTP Number . . . " value={ktp_number} 
            onChange={(event)=>setKTP(event.target.value)}/>

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AddEmployee