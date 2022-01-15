
import HomePage from '../components/HomePage'
import { useContext } from 'react'
import AppContext from '../context/state'
export default function Home() {
    const value = useContext(AppContext);
    value.setPageState("home");
      return (
        <HomePage></HomePage>
      )
}
