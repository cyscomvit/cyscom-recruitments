import { useContext , useState , useEffect } from 'react'
import Results from '../components/Results';
import Login from '../components/Login';
import AppContext from '../context/state'
import styles from "../styles/home/home.module.css";
export default function ResultFunction() {
    
    const value = useContext(AppContext);
    useEffect(() => {
        value.setPageState('results');
    }, [])
   

    return (
        <div style={{backgroundImage: "url(/_next/static/media/bg.75d2108d.jpg)"}}>
         <h1 style={{paddingTop:"5rem" , fontSize:"clamp(2.3rem,5vw,5rem)",fontFamily:"Oswald",fontWeight:"900"}}>Results here</h1>

        {value.state.user ? <>
        
        <Results user={value.state.user}></Results>
        </> : <Login></Login>}
        </div>
    )
}
