import PageBanner from '@/components/Common/PageBanner';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import React , { useState } from 'react';
import { useRouter } from 'next/router';
import swal from 'sweetalert';
import Link from 'next/link';
import axios from 'axios';

 
const SignUp = () => {
    const router = useRouter();

    const [errorConf,setErrorCont] = useState([]);
    const [registerInput,setRegister]=useState({
        username:'',
        fname:'',
        lname:'',
        email:'',
        password:'',
        error_list:[]
    })
    const data ={
        username:registerInput.username,
        fname :registerInput.fname,
        lname :registerInput.lname,
        email :registerInput.email,
        password :registerInput.password,
    }

    const handleInput=(e)=>{
        e.persist(); 
        setRegister({...registerInput,[e.target.name]:e.target.value});
        
    }
    const Register= async(e)=>{
        e.preventDefault();
        setErrorCont(''); 
          //CHECK IF PASSWORD EQUAL CONFIRM PASSWORD  
        if(registerInput.password === registerInput.confPassword){
            axios.get(`/sanctum/csrf-cookie`).then(response=>{
                axios.post(`/api/register-customer`,data).then(res=>{
                    if(res.data.status===200){
                        console.log(res.data.message);
                         localStorage.setItem('auth_token',res.data.token);
                         localStorage.setItem('auth_token',res.data.fname); 
                         swal('Registered successfully\n your Link is: ',(res.data.link),"success");                     
                         setRegister({
                            username:'',
                            fname:'',
                            lname:'',
                            email:'',
                            password:'',
                            error_list:[]
                          }); 
                          setErrorCont(''); 
                          router.push('/login');
                    }else{
                         setRegister({...registerInput,error_list:res.data.validation_errors})    
                        console.log(res.data.validation_errors);                 
                    }
                })
            })
        }else{
            setErrorCont('password not match wit Confirm password');
        }
 


        
    }


    return (
        <>
            <Navbar />
            <PageBanner pageTitle="Sign Up" />
            <div className="ptb-80">
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            <Link href="/it-startup">
                                <img src="/images/logo.png" />
                            </Link>
                            <p>Create a new account</p>
                        </div>
                        <form onSubmit={Register}>
                            <div className="row">
                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    <input type="text" 
                                        className="form-control" 
                                        name="username" 
                                        onChange={handleInput}
                                    />
                                    <span className='span span-reg'>{registerInput.error_list.username}</span>
                                </div>                                                               
                            </div>
                            <div className="row">
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" 
                                        className="form-control" 
                                        name="email" 
                                        onChange={handleInput}
                                    />
                                    <span className='span span-reg'>{registerInput.error_list.email}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-3 col-lg-6">
                                    <label className="form-label">First Name</label>
                                    <input type="text" 
                                        className="form-control" 
                                        name="fname" 
                                        onChange={handleInput}
                                    />
                                    <span className='span span-reg'>{registerInput.error_list.fname}</span>
                                </div>
                                <div className="mb-3 col-lg-6">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" 
                                        className="form-control" 
                                        name="lname"
                                        onChange={handleInput}
                                    />
                                    <span className='span span-reg'>{registerInput.error_list.lname}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-3 col-lg-6">
                                    <label className="form-label">Password</label>
                                    <input type="password" 
                                        className="form-control" 
                                        name="password"
                                        onChange={handleInput}
                                    />
                                    <span className='span span-reg'>{registerInput.error_list.password}</span>
                                </div> 
                                <div className="mb-3 col-lg-6">
                                    <label className="form-label">Confirm Password</label>
                                    <input type="password"
                                        className="form-control" 
                                        name="confPassword"
                                        onChange={handleInput}
                                    />
                                    <span className='span span-reg'>{errorConf}</span>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </form>
                        <div className="foot">
                            <p>Already have an account yet? <Link href="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SignUp;