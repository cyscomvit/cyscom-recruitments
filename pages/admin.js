import React from 'react'
import ViewForms from '../components/ViewForms'
import PubResultComp from '../components/PublishResultsComponent'
import { useContext , useEffect} from 'react'
import AppContext from '../context/state'
import updateFirestore from '../Firebase/PublishResults'
export default function Admin() {
    const value = useContext(AppContext)
    const handlePublish = (data) => {
        updateFirestore(data)
    }
    return (
        <div>
            {value.state.user && value.state.user.email == "hemangahujaeotw@gmail.com" ? <><ViewForms></ViewForms><PubResultComp onSubmit={handlePublish}></PubResultComp></> : <div>Not Found</div>}
        </div>
    )
}
