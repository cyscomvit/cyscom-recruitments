import React, { useEffect } from 'react'
import ViewForms from '../../components/ViewForms'
import { useContext } from 'react'
import AppContext from '../../context/state'
export default function Admin() {
    const value = useContext(AppContext)

   useEffect(() => {
         value.setPageState('review')
    }, [])
    return (
        <div style={{ 
            background: "linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(/static/bg.jpg)", 
            backgroundSize: 'cover', 
            minHeight: '92.5vh',
            paddingTop: '70px' }} >
            {value.state.user && value.state.isAdmin ? <ViewForms></ViewForms> : <div>Not Found</div>}
        </div>
    )
}
