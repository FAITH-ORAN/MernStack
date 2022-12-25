
import React,{useState} from "react"
import { auth } from "../firebase";
import { sendSignInLinkToEmail } from "firebase/auth";
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import {toast,ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const SignupSchema = Yup.object().shape({
   email: Yup.string().email('Invalid email').required('Required'),
 });



const  Register =()=>{
   const [email,setEmail]=useState("")
   const handleSubmit= async (e)=>{
      //
      e.preventDefault()
      const config ={
         url: "http://localhost:3000/register/completeRegistration",
         handleCodeInApp: true
      }

      await sendSignInLinkToEmail(auth, email, config);
      toast.success(`un email est envoyé à ${email}, veuillez cliquer sur le lien pour completer votre enregistrement`)
         // save user email in local storage 
      window.localStorage.setItem('emailForRegistration', email)

         //clear state
      setEmail("")
   }
   
  return (
         <div>
            <h1 className="text-3xl text-center font-bold">Register</h1>
            <ToastContainer />
            <Formik
            initialValues={{
               email: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
               // same shape as initial values
               console.log(values);
            }}
            >
            {({ errors, touched }) => (
               <Form className="m-5" onSubmit={handleSubmit}>
                  <label htmlFor="email">Email</label>
                  <Field name="email" type="email" className=" bg-gray-50  border border-gray-300 text-gray-900 text-lg rounded-lg focus:border-blue-500 block  ml-2  p-2.5" 
                   value={email} placeholder="Email" 
                     onChange={(e)=>{setEmail(e.target.value)}}
                     autoFocus={true}
                   />
                  {errors.email && touched.email ? <div>{errors.email}</div> : null}
                  <button type="submit" className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">s'enrigistrer</button>
               </Form>
            )}
            </Formik>
         </div>
  )
}


export default Register;