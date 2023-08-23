import { signInWithGoogle, auth, getRedirectResult } from '../Firebase/Auth';
import { Button } from 'antd';
import { Alert } from 'antd';
import { useState, useEffect, useContext } from 'react';
import AppContext from '../context/state';
const Login = () => {
  const [error, setError] = useState('Fetching User');
  const value = useContext(AppContext);
  const isAdmin = async (user) => {
    // try {
    //     user.getIdTokenResult()
    //         .then((idTokenResult) => {
    //             // Confirm the user is an Admin.
    //             // if (!!idTokenResult.claims.admin) {
    //             //     // Show admin UI.
    //             //     showAdminUI();
    //             // } else {
    //             //     // Show regular user UI.
    //             //     showRegularUI();
    //             // }
    //             console.log("here",idTokenResult);
    //             return !!idTokenResult.claims.admin
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             return false;
    //         });

    // }
    // catch (e) {
    //     console.log(e);
    //     return false;
    // }
    try {
      return await fetch('/api/owasp_is_admin', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          email: user.email,
        }),
      }).then((res) =>
        res.json().then((resss) => {
          return resss;
        })
      );
    } catch (e) {
      console.log(e);
      return false;
    }
  };
  const handleLogin = (user) => {
    if (user) {
      value.setIsLoggedIn(true);
      value.setFormState(1);
      value.setUser(user);
    }
  };
  useEffect(() => {
    const catchLogin = async () => {
      try {
        const result = await getRedirectResult(auth);
        const user = result.user;
        if (user) {
          if (value.state.user) {
            return;
          }
          if (await isAdmin(user)) {
            value.setIsAdmin(true);
          }
          if (user.email.includes('@vitstudent.ac.in')) {
            handleLogin(user);
            setError(null);
          } else {
            setError('Please login with your VIT email');
          }
        }
      } catch (error) {
        setError('Please login with your VIT email');
      }
    };
    catchLogin();
  }, []);

  return (
    <div>
      {error && <Alert type='info' message={error}></Alert>}
      {error != 'Fetching User' && (
        <Button
          style={{ margin: '10px auto', display: 'block' }}
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </Button>
      )}
    </div>
  );
};
export default Login;
