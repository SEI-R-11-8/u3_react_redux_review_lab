import React, { useState } from 'react';
import axios from 'axios'
// import lightShoes from '../images/lightShoes.jpg'

export default function Home() {

   const [user, setUser] = useState('');
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [setValid] = useState(true)

   // const handleSubmit = async (event) => {
   //    event.preventDefault()
   //    const response = await axios.post(
   //       'http://localhost:3001/users',
   //       {
   //          firstName,
   //          lastName,
   //          email
   //       }
   //    )
   //       .then((response) => {

   //          setUser([
   //             ...user,
   //             {
   //                firstName,
   //                lastName,
   //                email
   //             }])
   //       })
   //    window.location.reload()

   // onSubmit={handleSubmit}

   return (
      <div>
         {/* <img src={lightShoes} className='l_shoes' alt='light shoes' width='200px' height='300px' /> */}
         <h1 className="logo">Terrae</h1>
         <p className='locations'>Locations</p>
         <p className=''>Stories</p>

         <div className='container_form mailing_list'>
            <h2 className='mail_header'>Subscribe to receive the very best  <br /> Terrae stories in your inbox.</h2>
         </div>
         <div>
            <form >

               <div className='mail_line'>
                  <label htmlFor='firstName'>First Name</label>
               </div>
               <input className='firstName'
                  type='text'
                  placeholder={"First Name"}
                  onChange={(event) => {
                     setFirstName(event.target.value)
                  }} />

               <div className='mail_line'>
                  <label htmlFor='lastName'>Last Name</label>
               </div>
               <input className='lastName'
                  type='text'
                  placeholder={"Last Name"}
                  onChange={(event) => {
                     setLastName(event.target.value)
                  }} />

               <div className='mail_line'>
                  <label htmlFor='email'>Email</label>
               </div>
               <input className='email'
                  type='text'
                  placeholder={"Email"}
                  onChange={(event) => {
                     setEmail(event.target.value)
                  }} />
            </form>

            <div>
               <button type='submit' onClick={(event) => { setValid(event.target.value) }} className='btn_submit'
                  value='Subscribe'> Subscribe </button>
            </div>
         </div>
      </div>
   )
}

