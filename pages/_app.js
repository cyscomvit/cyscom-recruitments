import 'antd/dist/antd.css';
import { useState } from 'react';
import AppContext from '../context/state';
import Navigation from '../components/Navigation';
function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState(null);
  const [personalData, setPersonalData] = useState({});
  const [departmentData, setDepartmentData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pageState, setPageState] = useState('home');
  const [formState, setFormState] = useState(0);
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
      <Navigation></Navigation>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp
