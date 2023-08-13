import React from 'react';
import { Col, Row } from 'antd';
import { FolderOutlined } from "@ant-design/icons";
import Top from './Top';
import Middle from './Middle';
import Bottom from './Bottom';


const Main = () => (
    <>
    <Row className='m-4'>
      <Col span={24} className=' bg-violet-50 h-16 flex items-center'>
        <FolderOutlined style={{ fontSize: '24px',marginLeft:'2rem' }} />
        <span className='pl-2.5 text-xl font-bold'>작업 현황</span>
      </Col>
    </Row>
    
    <Top/>
    <Middle/>
    <Bottom/>
    </>
    

);
export default Main;
