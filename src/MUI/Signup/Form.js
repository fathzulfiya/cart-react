// import React from 'react'
// import { useState } from 'react';



// function Form() {
//     const initialValues = {username:"",email:"",password:""};
//     const [formValues,setFormvalues] =useState(initialValues);
//     const handleChange=(e)=>{
//         console.log(e.target);
//         const {name,value}=e.target;
//         setFormvalues({...formValues,name:value});
//         console.log(formValues);
//     };
//   return (
//     <>
//     <div className='container'></div>
//     <Form>
//         <h1>Login Form</h1>
//         <div className='ui divider'></div>
//         <div className='ui form'>
//         <div className='field'>
//             <label>Username</label>
//             <input type="text" name="username" placeholder="username" value={formValues.username} onChange={handleChange}/>
//         </div>
//         <div className='field'>
//             <label>Email</label>
//             <input type="email" name="email" placeholder="Email" value={formValues.email} onChange={handleChange}/>
//         </div>
//         <div className='field'>
//             <label>Password</label>
//             <input type="Password" name="Password" placeholder="Password" value={formValues.password} onChange={handleChange}/>
//         </div>
//         <button className='fluid ui button blue'>Submit</button>
//         </div>
//     </Form>
//     </>
//   )
// }
// export default Form;
