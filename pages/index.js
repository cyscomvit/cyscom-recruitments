
import FormComponent from '../components/DepartmentForm'
import Header from '../components/Header'
import Login from '../components/Login'
import addToFirestore from '../Firebase/Storage'
import PersonalForm from '../components/PersonalForm'
import Router from 'next/router';
import { useContext , useEffect , useState } from 'react'
import AppContext from '../context/state'
import Navigation from '../components/Navigation'
import HomePage from '../components/HomePage'
export default function Home() {
      return (
        <HomePage></HomePage>
      )
}
