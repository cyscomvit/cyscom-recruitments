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
    const data = value.state.user ?  {
        personalData: value.state.personalData,
        departmentData: value.state.departmentData,
        uid : value.state.user.email,
        interview : {
           status : "not_assigned",
           time : "",
           date : ""
        },

        result : "not_published",
        selectedDepartments : [],
    } : {};
    const handleSubmit = async () => {
        console.log(value.state.personalData, value.state.departmentData)
        console.log("here");
        await addToFireStore(data);
        value.setFormState(1);
        value.setPersonalData({});
        value.setDepartmentData({});
        router.replace('/interview');
        value.setPageState('home');
    }

    return (
        <div style={{ 
            background: "linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(/static/bg.jpg)", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            minHeight: '92.5vh',
            paddingTop: '70px' }} >
             <FormSteps></FormSteps>
       {value.state.isLoggedIn ? <><CandidateForm data = {data}></CandidateForm><Button style={{margin:"10px auto" , display: 'block', width:"10rem"}} size="large" type="primary" onClick={handleSubmit}>Submit</Button></> : <div>Please Login</div>}
        </div>
    )
}