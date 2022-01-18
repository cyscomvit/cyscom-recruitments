import React from 'react'
import { useContext , useEffect } from 'react'
import AppContext from '../context/state'
import PersonalForm from '../components/PersonalForm';
import FormSteps from '../components/Steps'
import Router from 'next/router';
export default function About() {
    const value = useContext(AppContext);
    useEffect(() => {
        value.setPageState("about");
    }, [])
    const handlePersonalSubmit = (values) => {
        value.setPersonalData(values);
        value.setFormState(2);
        Router.push('/department')
    }
    return (
        <div style={{ 
            background: "linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(/static/bg.jpg)", 
            backgroundSize: 'cover',
            backgroundPosition: 'center', 
            minHeight: '92.5vh',
            paddingTop: '70px',
            width: '100%' }} >
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
