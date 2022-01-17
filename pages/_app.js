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
  const listOfAdmins = ["sparsh.raj2019@vitstudent.ac.in", "hemang.ahuja2020@vitstudent.ac.in", "nehsamir.joshi2019@vitstudent.ac.in",
"nikhil.chandrashekhar2019@vitstudent.ac.in", "basta.aditya2019@vitstudent.ac.in", "kunalkumar.jha2019@vitstudent.ac.in",
"sundaresan.k2019@vitstudent.ac.in", "shrushti.singhania2019@vitstudent.ac.in", "shraddhamehta.d2019@vitstudent.ac.in",
"utkarsha.ojha2019@vitstudent.ac.in", "rishank.pratik2019@vitstudent.ac.in", "laksha.s2020@vitstudent.ac.in"];
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
      <Navigation isAdmin={user && listOfAdmins.includes(user.email)}></Navigation>
      <Component {...pageProps} />
      <Footer />
    </AppContext.Provider>
  );
}


export default MyApp
