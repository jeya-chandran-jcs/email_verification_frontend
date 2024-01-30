import axios from 'axios'
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import {Form,Input,Button, Row, Col, message} from "antd"
import {API} from "../global"
// import { toast } from 'react-toastify'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
    const navigate=useNavigate()
    const [loading,setloaing]=useState(false)
    const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*#?&]).{8,}$/;

    
    const onFinish=async(values)=>{
      try{
        setloaing(true)
        const response=await axios.post(`${API}/user/login`,values)
        console.log("login response",response)
         message.success("login successfully")
          setloaing(false)
          navigate("/product")
      }catch(err){
        message.error("invalid email or password")
        setloaing(false)
        console.log("error in register",err)
      }
    }
  return (
    <div>
      {loading ? "...loading":
      <Row justify={"center"} align={"middle"} style={{height:"100vh"}}>
      <Col xs={24} sm={24} md={12} lg={8} >
          <h1 className='text-center'>Email</h1>
          <br/>
          <h2 className='text-center'>Login</h2>
          <Form name='register' onFinish={onFinish}>

            <Form.Item name="email" 
            rules={[{ required: true, message: 'Please enter your email', type: 'email' }]}
            label="email">
              <Input  id='email' placeholder='Your email'/>
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true, message: 'Please enter your password' },
            {pattern: passwordRegex, message: 'Please enter a valid password minimum 8 with Aa1@' }]}
            label="password ">
              <Input  id='password' placeholder='password'/>
            </Form.Item>
            <p className='float-end text-primary pointer' onClick={()=>navigate("/forget")}>forget password</p>

            <Button type='primary' htmlType='submit' style={{width:"100%"}}>Login</Button>

          </Form>
        </Col>
    </Row>
      }
        
    </div>
    )}