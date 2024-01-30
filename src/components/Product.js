import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API } from '../global'
import { Card, Layout,Menu, Spin } from 'antd'

export default function Product() {
  const [data,setdata]=useState([])
  const [loading,setloading]=useState(false)

  const {Sider,Content,Header}=Layout
  const getProducts=async ()=>{
    try{
      setloading(true)
      const response=await axios.get(`${API}/product/get-product`)
      console.log(response)
      setdata(response.data)
      setloading(false)
      console.log(data)
    }catch(err){
      console.log("error in adding the data",err)
    }
  }

  useEffect(() => {
    getProducts()
  },[])


  return (
    <Layout>
     
    <Header> 
    <div className='logo'>
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
        <Menu.Item key={"1"} >PRODUCT</Menu.Item>
        </Menu>
        </div>
     </Header>
    <Content style={{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"20px"}}>
    {loading ? <div><Spin className="spinner-border" role="status" style={{left:"50%",top:"70%"}}/>  </div> :
      data.map((item)=>(
        
        <Card key={item._id} style={{width: 250,marginTop:"50px"}} hoverable title={item.name} cover={<img style={{height:"200px",width:"100%",objectFit:"contain"}} src={item.image} alt={item.name}/>}  >
            <h4>rs: {item.price} </h4>
            <h5>details {item.details} </h5>
        </Card>
      ))
    }
      
    
    </Content>
     </Layout>

    
  )
}
