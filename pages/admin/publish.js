import PubResultComp from '../../components/PublishResultsComponent'
import { useContext , useEffect , useState } from 'react'
import AppContext from '../../context/state'
import updateFirestore from '../../Firebase/PublishResults'
import getAllDocs from '../../Firebase/ReadAllUsers'
import ViewSelected from '../../components/ViewSelected'
export default function Admin() {

    const [docs, setDocs] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getData = async () => {
            const Myids = await getAllDocs();
            setDocs(Myids);
            setLoading(false);
        }
        getData();
    }, [])
    const value = useContext(AppContext)
    const handlePublish = (data) => {
        updateFirestore(data)
    }
    return (
        <div>
            {loading ? <div>Loading...</div> : value.state.user && value.state.user.email == "hemang.ahuja2020@vitstudent.ac.in" ? <><PubResultComp onSubmit = {handlePublish} allEmails={docs}></PubResultComp><ViewSelected></ViewSelected></> : <div>Not Found</div>}
        </div>
    )
}
