import React from 'react';
import { Menu,Layout } from 'antd';
import { Outlet,useNavigate } from 'react-router-dom';
import { HomeOutlined, AppstoreOutlined, UserOutlined,SearchOutlined } from '@ant-design/icons';


const { Header } = Layout;

function Root() {
    const navigate=useNavigate()

  return (
    <Layout>
        <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />} onClick={()=>{navigate('/')}}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<SearchOutlined />} onClick={()=>{navigate('/wrapped')}} >
            Github Wrapped
          </Menu.Item>
        </Menu>
      </Header>
        <Outlet/>
    </Layout>
  )
}

export default Root