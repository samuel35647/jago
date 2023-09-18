import { useFormik } from "formik";
import React from "react";

const Formik = () =>{
    const Formik = useFormik({
        initialValues:{
            Firstname:'',
            lastname:'',
            email:'',
            password:'',
        },
        onSubmit:(values)=>{
            console.log(values);
        },
        validate:(values)=>{
        let errors = {}
        if(!values.Firstname){
            errors.Firstname = 'Required'
        }

        if(!values.lastname){
            errors.lastname = 'Required'
        }
        if(!values.email){
           errors.email = 'Required'
        }
        if(!values.password){
            errors.password = 'Required'
        }

        return errors




        }
    })
// console.log(Formik.values);
    return(
  <div>
       <div className="bg-blue-500">
        <form onSubmit={Formik.handleSubmit} className='flex items-center justify-center flex-col my-10'>
        <input type="text" placeholder='Firstname' onChange={Formik.handleChange} name='Firstname'className='rounded-md p-3 border-red-200 border my-2' w-100/>
        <span>{Formik.errors.Firstname}</span>
        <input type="text" placeholder='lastname'onChange={Formik.handleChange} name='lastname' className='rounded-md p-3 border-red-200 border my-2' w-100/>
        <span>{Formik.errors.lastname}</span>
        <input type="text" placeholder='email'onChange={Formik.handleChange} name='email' className='rounded-md p-3 border-red-200 border my-2' w-100/>
        <span>{Formik.errors.email}</span>
        <input type="text" placeholder='password'onChange={Formik.handleChange} name='password' className='rounded-md p-3 border-red-200 border my-2' w-100/>
        <span>{Formik.errors.password}</span>
        <button  type='submit' className='px-20 p-3 rounded-md bg-gray-900 text-white my-5'>Sign up</button>
   </form>




       </div>
  </div>
    )
}
export default Formik