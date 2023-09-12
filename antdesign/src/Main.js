import React from 'react';
import { Col, Row } from 'antd';
import { FolderOutlined } from "@ant-design/icons";
import Top from './Top';
import Middle from './Middle';
import Bottom from './Bottom';

import { library } from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab,far,fas);


const Main = () => (
    <>
    <Row className='m-4'>
      <Col span={24} className=' bg-violet-50 h-16 flex items-center'>
        <FontAwesomeIcon icon={["far","fa-folder"]} style={{fontSize:'20px', marginLeft:'2rem'}} />
        <span className='pl-2.5 text-xl font-bold'>작업 현황</span>
      </Col>
    </Row>
    
    <Top/>
    <Middle/>
    <Bottom/>
    </>
    

);
export default Main;
