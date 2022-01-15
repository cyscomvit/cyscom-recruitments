import React from 'react'
import addToFireStore from '../Firebase/StoreUser'
import { useContext } from 'react'
import AppContext from '../context/state'
import { Button } from 'antd'
import FormSteps from '../components/Steps'
import { useRouter } from 'next/router'
import CandidateForm from '../components/CandidateForm'
export default function Done() {
    const value = useContext(AppContext);
    const router = useRouter();
    const data = {
        personalData: value.state.personalData,
        departmentData: value.state.departmentData,
        uid : value.state.user.email,
        result : "not_published",
        selectedDepartments : [],
    }
    const handleSubmit = async () => {
        console.log(value.state.personalData, value.state.departmentData)
        console.log("here");
        await addToFireStore(data);
        value.setFormState(0);
        value.setPersonalData({});
        value.setDepartmentData({});
        value.setPageState('home');
        router.replace('/');
    }

    return (
        <div>
             <FormSteps></FormSteps>
       {value.state.isLoggedIn ? <><CandidateForm data = {data}></CandidateForm><Button style={{margin:"5rem" , width:"10rem"}} onClick={handleSubmit}>Submit</Button></> : <div>Please Login</div>}
        </div>
    )
}
