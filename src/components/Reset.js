import axios from 'axios'
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import {Form,Input,Button, Row, Col} from "antd"
import {API} from "../global"

export default function Register() {
    const navigate=useNavigate()
    const [loading,setloaing]=useState(false)
    const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*#?&]).{8,}$/;

    
    const onFinish=(values)=>{
      try{
        setloaing(true)
        axios.post(`${API}/user/reset-password`,values)
        .then((res)=>{
          setloaing(false)
          navigate("/login")
        })
      }catch(err){
        setloaing(false)
        console.log("error in register",err)
      }
    }
  return (
    <div>
      {loading ?
        "loading...":
        <Row justify={"center"} align={"middle"} style={{height:"100vh"}}>
        <Col xs={24} sm={24} md={12} lg={8} >
            <h1 className='text-center'>Email</h1>
            <h2 className='text-center'>Reset password </h2>
            <Form name='register' onFinish={onFinish}>

              <Form.Item name="email" 
              rules={[{ required: true, message: 'Please enter your email', type: 'email' }]}
              label="email">
                <Input  id='email' placeholder='Your email'/>
              </Form.Item>

              <Form.Item name="otp" 
              rules={[{ required: true, message: 'Please enter your otp', type: 'otp' }]}
              label="otp">
                <Input  id='otp' placeholder='Your otp'/>
              </Form.Item>

              <Form.Item name="password" rules={[{ required: true, message: 'Please enter your password' },
              {pattern: passwordRegex, message: 'Please enter a valid password minimum 8 with Aa1@' }]}
              label="password ">
                <Input  id='password' placeholder='password'/>
              </Form.Item>

              <Button type='primary' htmlType='submit' style={{width:"100%"}}>reset password</Button>

            </Form>
          </Col>
      </Row>
        }  
    </div>
    )}
