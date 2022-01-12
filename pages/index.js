
import FormComponent from '../components/DepartmentForm'
import Header from '../components/Header'
import Login from '../components/Login'
import addToFirestore from '../Firebase/Storage'
import PersonalForm from '../components/PersonalForm'
export default function Home() {
  const handleSubmit = (values) => {
    addToFirestore(values);
  }
  return (
    <>
    <Header></Header>
    <Login></Login>
    <FormComponent handleSubmit = {handleSubmit} ></FormComponent>
    <PersonalForm handleSubmit = {(values)=>{console.log(values)}}></PersonalForm>
   </>
  )
}
