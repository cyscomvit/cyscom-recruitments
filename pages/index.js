
import HomePage from '../components/HomePage'
import { useContext, useEffect } from 'react'
import AppContext from '../context/state'
export default function Home() {
  const value = useContext(AppContext);
    useEffect(() => {
      value.setPageState('home');
    }, [])
   
      return (
        <HomePage></HomePage>
      )
}
