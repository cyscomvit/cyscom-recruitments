import PubResultComp from '../../components/PublishResultsComponent';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/state';
import updateFirestore from '../../Firebase/AddMembers';
import getAllDocs from '../../Firebase/ReadAllUsers';
import ViewSelected from '../../components/ViewSelected';
export default function Admin() {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    value.setPageState('publish');
    const getData = async () => {
      const Myids = await getAllDocs();
      setDocs(Myids);
      setLoading(false);
    };
    getData();
  }, []);
  const value = useContext(AppContext);

  const handlePublish = (data) => {
    updateFirestore(data);
  };
  return (
    <div
      style={{
        background:
          'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(/static/bg.jpg)',
        backgroundSize: 'cover',
        minHeight: '92.5vh',
        paddingTop: '70px',
      }}
    >
      {loading ? (
        <div>Loading...</div>
      ) : value.state.user && value.state.isAdmin ? (
        <>
          <PubResultComp
            onSubmit={handlePublish}
            allEmails={docs}
          ></PubResultComp>
          <ViewSelected></ViewSelected>
        </>
      ) : (
        <div>Not Found</div>
      )}
    </div>
  );
}
