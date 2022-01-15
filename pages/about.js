import React from 'react'
import { useContext  } from 'react'
import AppContext from '../context/state'
import PersonalForm from '../components/PersonalForm';
import FormSteps from '../components/Steps'
import Router from 'next/router';
export default function About() {
    const value = useContext(AppContext);
    value.setPageState("about");
    const handlePersonalSubmit = (values) => {
        value.setPersonalData(values);
        value.setFormState(2);
        Router.push('/department')
    }
    return (
        <div>
             <FormSteps></FormSteps>
            {
                value.state.isLoggedIn ?
                    <PersonalForm handleSubmit={handlePersonalSubmit}></PersonalForm> :
                    <div>
                        <h1>Please Login</h1>
                    </div>
            }
        </div>
    )
}