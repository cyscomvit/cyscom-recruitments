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
        <div style={{backgroundImage: "url(/_next/static/media/bg.75d2108d.jpg)" , paddingTop: "5rem" }}>
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
