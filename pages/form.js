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
  return (
    
    <div style={{ 
        background: "linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(/_next/static/media/bg.75d2108d.jpg)", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        minHeight: '92.5vh',
        paddingTop: '70px' }} >
            <FormSteps></FormSteps>
            {componenetToRender()}
      </div>

  )
}
