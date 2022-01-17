import PubResultComp from '../../components/PublishResultsComponent'
import { useContext , useEffect , useState } from 'react'
import AppContext from '../../context/state'
import updateFirestore from '../../Firebase/PublishResults'
import getAllDocs from '../../Firebase/ReadAllUsers'
import ViewSelected from '../../components/ViewSelected'
export default function Admin() {

    const [docs, setDocs] = useState([])
    const [loading, setLoading] = useState(true)
    const listOfAdmins = ["sparsh.raj2019@vitstudent.ac.in", "hemang.ahuja2020@vitstudent.ac.in", "nehsamir.joshi2019@vitstudent.ac.in",
    "nikhil.chandrashekhar2019@vitstudent.ac.in", "basta.aditya2019@vitstudent.ac.in", "kunalkumar.jha2019@vitstudent.ac.in",
    "sundaresan.k2019@vitstudent.ac.in", "shrushti.singhania2019@vitstudent.ac.in", "shraddhamehta.d2019@vitstudent.ac.in",
    "utkarsha.ojha2019@vitstudent.ac.in", "rishank.pratik2019@vitstudent.ac.in", "laksha.s2020@vitstudent.ac.in"];
    useEffect(() => {
        value.setPageState("publish")
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
        <div style={{ 
            background: "linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(/_next/static/media/bg.75d2108d.jpg)", 
            backgroundSize: 'cover', 
            minHeight: '92.5vh',
            paddingTop: '70px' }} >
            {loading ? <div>Loading...</div> : value.state.user && listOfAdmins.includes(value.state.user.email) ? <><PubResultComp onSubmit = {handlePublish} allEmails={docs}></PubResultComp><ViewSelected></ViewSelected></> : <div>Not Found</div>}
        </div>
    )
}
