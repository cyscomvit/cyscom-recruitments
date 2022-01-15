import { useContext } from "react";
import Router from "next/router";
import AppContext from "../context/state";
import Login from "../components/Login";
import FormSteps from "../components/Steps";
export default function Form() {
    const value = useContext(AppContext);
    value.setPageState("form");

 
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
    
      <div>
            <FormSteps></FormSteps>
            {componenetToRender()}
      </div>

  )
}
