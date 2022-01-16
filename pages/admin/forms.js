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
        <div style={{backgroundImage: "url(/_next/static/media/bg.75d2108d.jpg)"}}>
            {value.state.user && value.state.user.email == "hemang.ahuja2020@vitstudent.ac.in" ? <ViewForms></ViewForms> : <div>Not Found</div>}
        </div>
    )
}
