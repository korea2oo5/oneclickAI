import React from 'react';
import PropTypes from 'prop-types';
import { Row, Layout } from 'antd';
import Content1 from './home/content1';
import Content2 from './home/content2';
import Content3 from './home/content3';
import Content4 from './home/content4';
import MenuBar from './MenuBar';

const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
  return (
    <>
      <Layout style={{ backgroundColor: 'white' }}>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          {/* 상단 메뉴바 */}
          <MenuBar />
        </Header>

        {/* xs: 모바일, sm: 태블릿, md: 작은 데스크탑 */}
        {/* 최대크기는 24 */}
        {/* gutter 컬럼 사이의 간격 */}
        <Content
          style={{
            padding: '0 calc(100% / 18 * 3)',
            marginTop: 84,
          }}
        >
          <Row gutter={8}>
            {/* 소개 */}
            {/* 비디오 크기 해상도에 따라 줄이기 작업 해야함 */}
            <Content1 />
            {/* 정의 */}
            {/* 유튜브 크기 해상도에 따라 줄이기 작업 해야함 */}
            <Content2 />
            {/* 작동방법 */}
            <Content3 />
            {/* 무엇을 배울 수 있는지 */}
            <Content4 />
          </Row>
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ©2020 Created by OneClickAI
        </Footer>
      </Layout>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
