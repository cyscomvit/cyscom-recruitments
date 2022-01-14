import React from 'react'
import addToFireStore from '../Firebase/StoreUser'
import { useContext } from 'react'
import AppContext from '../context/state'
import { Button } from 'antd'
import FormSteps from '../components/Steps'
import { useRouter } from 'next/router'
export default function Done() {
    const value = useContext(AppContext);
    const router = useRouter();
    const handleSubmit = async () => {
        console.log(value.state.personalData, value.state.departmentData)
        console.log("here");
        await addToFireStore({
            personalData: value.state.personalData,
            departmentData: value.state.departmentData,
            uid : value.state.user.email,
            result : "not_published",
            selectedDepartments : [],
        })

        router.replace('/');
        value.setFormState(0);
        value.setIsLoggedIn(false);
        value.setPersonalData({});
        value.setDepartmentData({});
        value.setPageState('home');
    }

    return (
        <div>
             <FormSteps></FormSteps>
       {value.state.isLoggedIn ? <Button onClick={handleSubmit}>Submit</Button> : <div>Please Login</div>}
        </div>
    )
}
