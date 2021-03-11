import React from 'react'
import { Layout, Menu } from 'antd'
import { renderRoutes } from 'react-router-config'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {routes} from '@/assets/routes'

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'

const { Sider, Content } = Layout

class BasicLayout extends React.PureComponent
{
  render() {
    console.log(routes)

    return (
      <Layout>
      <Header />
      <Layout>
        <Sider>left sidebar</Sider>
        <Content>{renderRoutes(routes)}</Content>
        <Sider>right sidebar</Sider>
      </Layout>
      <Footer />
    </Layout>
    )
  }
}

export default BasicLayout
