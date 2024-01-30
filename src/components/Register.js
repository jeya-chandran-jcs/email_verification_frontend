import axios from 'axios'
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import {Form,Input,Button, Row, Col, message} from "antd"
import {UserOutlined,LockOutlined,MailOutlined} from '@ant-design/icons'
import {API} from "../global"
import { toast } from 'react-toastify'


export default function Register() {
    const navigate=useNavigate()
    const [loading,setloaing]=useState(false)
    const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*#?&]).{8,}$/;

    
    const onFinish=(values)=>{
      try{
        setloaing(true)
        axios.post(`${API}/user/register`,values)
        .then((res)=>{
          message.success("user registered successfully")
          setloaing(false)
          navigate("/login")
        })
      }catch(err){
        message.error("user registration failed")
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
            <h2 className='text-center'>Register</h2>
            <Form name='register' onFinish={onFinish}>
           
              <Form.Item name="name" rules={[{ required: true, message: 'Please enter your name!' }]}
              label="Name">
                <Input  id='userName' placeholder='Your Name'  prefix={<UserOutlined />}/>
              </Form.Item>

              <Form.Item name="email" 
              rules={[{ required: true, message: 'Please enter your email', type: 'email' }]}
              label="email">
                <Input  id='email' placeholder='Your email'  prefix={<MailOutlined />}/>
              </Form.Item>

              <Form.Item name="password" rules={[{ required: true, message: 'Please enter your password' },
              {pattern: passwordRegex, message: 'Please enter a valid password minimum 8 with Aa1@' }]}
              label="password ">
                <Input  id='password' placeholder='password'prefix={<LockOutlined />}/>
              </Form.Item>

              <Button type='primary' htmlType='submit' style={{width:"100%"}}>Register</Button>

            </Form>
          </Col>
      </Row>
        }  
    </div>
    )}
