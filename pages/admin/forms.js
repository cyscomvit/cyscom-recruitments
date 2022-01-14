import React from 'react'
import ViewForms from '../../components/ViewForms'
import { useContext } from 'react'
import AppContext from '../../context/state'
export default function Admin() {
    const value = useContext(AppContext)

    return (
        <div>
            {value.state.user && value.state.user.email == "hemangahujaeotw@gmail.com" ? <ViewForms></ViewForms> : <div>Not Found</div>}
        </div>
    )
}
