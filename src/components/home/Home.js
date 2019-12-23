import React from 'react';
import { Layout } from 'antd';
import './Home.scss';

const {
  Header, Content, Footer, Sider,
} = Layout;

function Home() {
  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default Home;
