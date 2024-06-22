import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { CounterContext } from '../CounterContext'
import axios from 'axios'

function Login() {
    let { register, handleSubmit, formState: { errors } } = useForm()
    let [errorMessage, setErrorMessage] = useState('')
    let { user, setUser } = useContext(CounterContext)
    let navigate = useNavigate()
    async function onSigninFormSubmit(newUser) {
        try {
            let res = await axios.post('http://localhost:4000/login', newUser)
            if (res.data.message === 'login success') {
                let token = res.data.token
                localStorage.setItem('token', token)
                setUser(res.data.user)
                navigate(`/`)
            }
            else {
                setErrorMessage(res.data.message)
            }
        }catch(error){
            setErrorMessage('An error occured. Please try again')
        } 
    }

    return (
        <div style={{ paddingTop:'120px' }}>
            <div className='bg-white w-25 mx-auto p-3 rounded-4 shadow-lg'>
                <h1 className='text-center text-primary mb-4'>LogIn</h1>
                <form onSubmit={handleSubmit(onSigninFormSubmit)}>
                    <input type="text" {...register('email',{required:true})} id='email' className='form-control mb-4 shadow-sm' placeholder='Email' />
                    {errors.email?.type === 'required' && <p style={{marginTop:'-20px'}} className='text-danger text-center'>Email is required</p>}
                    <input type="password" {...register('password',{required:true})} id='password' className='form-control mb-4 shadow-sm' placeholder='Password' />
                    {errors.password?.type === 'required' && <p style={{marginTop:'-20px'}} className='text-danger text-center'>Password is required</p>}
                    {errorMessage && <p className='text-danger text-center mt-2'>{errorMessage}</p>}
                    <div className='text-center'>
                        <button className='btn btn-success'>Login</button>
                    </div>
                </form>
                <p className='text-black text-center mt-3'>New User ! <Link to='/signup'>SignUp</Link> </p>
            </div>
        </div>

    )
}

export default Login