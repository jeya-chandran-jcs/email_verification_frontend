import axios from 'axios'
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import {Form,Input,Button, Row, Col} from "antd"
import {API} from "../global"

export default function Register() {
    const navigate=useNavigate()
    const [loading,setloaing]=useState(false)
    
    const onFinish=(values)=>{
      try{
        setloaing(true)
        axios.post(`${API}/user/forget-password`,values)
        .then((res)=>{
          setloaing(false)
          navigate("/reset")
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
            <h2 className='text-center'>Forget password</h2>
            <Form name='register' onFinish={onFinish}>

              <Form.Item name="email" 
              rules={[{ required: true, message: 'Please enter your email', type: 'email' }]}
              label="email">
                <Input  id='email' placeholder='Your email'/>
              </Form.Item>

              <Button type='primary' htmlType='submit' style={{width:"100%"}}>Send OTP</Button>

            </Form>
          </Col>
      </Row>
        }  
    </div>
    )}
