import { useContext, useEffect } from "react";
import Router from "next/router";
import AppContext from "../context/state";
import Login from "../components/Login";
import FormSteps from "../components/Steps";
export default function Form() {
    const value = useContext(AppContext);
    useEffect(() => {
        value.setPageState("form");
    }, []);

    const dateLessThan29th = (date) => {
        if (date.getDate() > 29) {
            return false;
        }
        return true;
    };
 
  const componenetToRender = () => {
    if(!value.state.isLoggedIn){
        return <Login></Login>
    }
    else if(value.state.formState === 1){
        Router.push('/about');
    }
    else if(value.state.formState === 2){
        Router.push('/department');
    }
    else if(value.state.formState === 3){
        Router.push('/done');
    }
  }
  const style = { 
    background: "linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(/static/bg.jpg)", 
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    minHeight: '92.5vh',
    paddingTop: '80px' }
  return (
    <div>
        {
           
            <div style={style} >
                {
                     Date.now() < new Date("2022-01-21").getTime() ?
                        <div>
                    <FormSteps></FormSteps>
                    {componenetToRender()}
                        </div>
                     :
                     <center>
                     <h1>Thank you for your interest in the OWASP Recruitment Program!</h1>
                     <h2>The recruitment program is now closed.</h2>
                     </center>

                }
                    
              </div>
            
        }
    </div>

  )
}
