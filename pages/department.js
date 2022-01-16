import React, { useEffect } from 'react'
import DepartmentForm from '../components/DepartmentForm';
import { useContext } from 'react';
import AppContext from '../context/state';
import Router from 'next/router';
import FormSteps from '../components/Steps'
export default function Department() {
    const value = useContext(AppContext);
    useEffect(() => {
        value.setPageState("department");
    }, [])
    const handleDepartmentSubmit = (values) => {
        value.setDepartmentData(values);
        value.setFormState(3);
        Router.push('/done');
    }
    return (
        <div style={{backgroundImage: "url(/_next/static/media/bg.75d2108d.jpg)" , paddingTop: "5rem" }}>
             <FormSteps></FormSteps>
            {
                value.state.isLoggedIn ?
                    <DepartmentForm handleSubmit={handleDepartmentSubmit}></DepartmentForm> :
                    <div>
                        <h1>Please Login</h1>
                    </div>
            }
        </div>
    )
}
