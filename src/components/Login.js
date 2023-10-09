import React from 'react'
import { Button, Container } from 'react-bootstrap'
import * as Yup from "yup"
import {useFormik} from "formik"
import "./login.scss"

const Login = () => {

  const initialValues={
    nickName:"",
    pass:""
  }

  const validationSchema= Yup.object({
    nickName: Yup.string().required("Zorunlu alandır. Boş bırakılamaz"),
    pass:Yup.string().required("Şifre zorunlu alandır.Boş bırakılamaz.")
  })

  const onSubmit= (values) => {
      console.log(values)
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

/* console.log(formik.errors)
console.log(formik.touched) */


  return (
    <div className='body'>

      <Container className='FormBuild'>

      <h1>Login Screen</h1>

      <form className='form' onSubmit={formik.handleSubmit}>
        <label 
        className='label'
        htmlFor='nickName'>
            Username
        </label>

        <input 
        className='input'
        type='text' 
        name='nickName' 
        id='nickName' 
        placeholder='Type your username'
        value={formik.values.isminiz}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />

        {
          formik.errors.nickName && formik.touched.nickName && <p className='text-danger'>*{formik.errors.nickName}</p>
        }

        <label 
        className='label'
        htmlFor='Pass'>
          Password
        </label>
        <input 
        className='input'
        type='password'
        name='pass'
        id='pass'
        placeholder='Type your password'
        value={formik.values.pass}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        {
          formik.errors.pass && formik.touched.pass && <p className='text-danger'>*{formik.errors.pass}</p>
        }

        <Button 
        className='buton'
        type='submit'>
          Login
          </Button>





      </form>







    </Container>
    </div>
    
  )
}

export default Login