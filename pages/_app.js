import 'antd/dist/antd.dark.min.css';
import { useState } from 'react';
import AppContext from '../context/state';
import Navigation from '../components/Navigation';
import initFirebase from '../Firebase/Init';
function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState(null);
  const [personalData, setPersonalData] = useState({});
  const [departmentData, setDepartmentData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pageState, setPageState] = useState('home');
  const [formState, setFormState] = useState(0);
  const app = initFirebase();
  return (
    <AppContext.Provider
      value={{
        state: {
          personalData,
          departmentData,
          isLoggedIn,
          pageState,
          formState,
          user,
        },
        setPersonalData,
        setDepartmentData,
        setIsLoggedIn,
        setPageState,
        setFormState,
        setUser,
      }}
    >
      <Navigation isAdmin={user && user.email == "hemang.ahuja2020@vitstudent.ac.in"}></Navigation>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}


export default MyApp
