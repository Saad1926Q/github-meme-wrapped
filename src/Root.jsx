import React from 'react';
import { Menu,Layout } from 'antd';
import { Outlet,useNavigate,useLocation } from 'react-router-dom';
import { HomeOutlined, AppstoreOutlined, UserOutlined,SearchOutlined } from '@ant-design/icons';


const { Header } = Layout;

function Root() {
    const navigate=useNavigate()
    const location = useLocation();  


  return (
<Layout className="bg-gray-900 text-white min-h-screen">
  <Header className="bg-gray-800 shadow-md">
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className="bg-transparent" selectedKeys={[location.pathname]} >
      <Menu.Item key="/" icon={<HomeOutlined />} onClick={() => { navigate('/'); }}>
        Home
      </Menu.Item>
      <Menu.Item key="/wrapped" icon={<SearchOutlined />} onClick={() => { navigate('/wrapped'); }}>
        Github Wrapped
      </Menu.Item>
    </Menu>
  </Header>
  <Outlet />
</Layout>

  )
}

export default Root