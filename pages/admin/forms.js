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
        <div>
            {value.state.user && value.state.user.email == "hemang.ahuja2020@vitstudent.ac.in" ? <ViewForms></ViewForms> : <div>Not Found</div>}
        </div>
    )
}
