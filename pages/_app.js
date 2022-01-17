import 'antd/dist/antd.dark.min.css';
import { useState } from 'react';
import AppContext from '../context/state';
import Navigation from '../components/Navigation';
import initFirebase from '../Firebase/Init';
import "../styles/clear.css";
import Footer from '../components/Footer';
import Head from 'next/head';
import Logo from "../static/owasp-logo.png";
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
      <Head>
        <title>OWASP VITCC Recruitments 2022-23</title>
        <meta name="author" content="Hemang Ahuja" />
      </Head>
      <Head>
        <meta name="description" content="The official portal for OWASP VITCC's recruitments 2022-23" />
      </Head>
      <Head>
      <link rel="icon" href="/static/owasp-logo.png" />
      </Head>
      <Navigation isAdmin={user && user.email == "hemang.ahuja2020@vitstudent.ac.in"}></Navigation>
      <Component {...pageProps} />
      <Footer />
    </AppContext.Provider>
  );
}


export default MyApp
