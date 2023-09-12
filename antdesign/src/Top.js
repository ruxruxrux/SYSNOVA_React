import React from 'react';
import { Col, Row } from 'antd';
import { Select, Space, Input,Button } from 'antd';

const Top = ()=>{
    return(
    <>
    <Row className='mt-4 ml-4 mr-4 border-gray-300 border-2'>
        <Col span={3} className=' bg-violet-50 h-16 flex items-center justify-center border-r-2 border-gray-300'>
            <span className='font-bold'>검색어</span>
        </Col>

        <Col span={21} className= 'h-16 flex items-center justify-start '>
            <Space wrap className='ml-4'>
                <Select className='xs:w-20 sm:w-48' defaultValue="1"
                options={[
                    {
                    value: '1',
                    label: '계약명',
                    },
                    {
                    value: '2',
                    label: '테스트1',
                    },
                    {
                    value: '3',
                    label: '테스트2',
                    }
                ]}
                />
            </Space>
            <Input placeholder="검색어를 입력하세요." className='ml-2 w-96' />
            <Button className='ml-2 rounded-full bg-indigo-500 text-white'>검색</Button>
            <Button className='ml-2 rounded-full border-gray-500 text-gray-500'>검색 조건 초기화</Button>
            
        </Col>
    </Row>

    <Row className='ml-4 mr-4 border-gray-300 border-l-2 border-r-2 border-b-2'>
        <Col span={3} className=' bg-violet-50 h-16 flex items-center justify-center border-r-2 border-gray-300'>
            <span className='font-bold'>담당 PM</span>
        </Col>
        <Col span={9} className='h-16 flex items-center justify-center border-r-2 border-gray-300'>
            <Input placeholder="담당자 명" allowClear className='mx-20'/>
        </Col>
        <Col span={3} className='bg-violet-50 h-16 flex items-center justify-center border-r-2 border-gray-300'>
            <span className='font-bold'>진행 상태</span>
        </Col>
        <Col span={9} className='h-16  flex items-center justify-center  border-gray-300'>
            <Space wrap > 
                <Select className='xs:w-20 sm:w-48 xl:w-96' defaultValue="1" 
                options={[
                    {
                    value: '1',
                    label: '전체',
                    },
                    {
                    value: '2',
                    label: '테스트1',
                    },
                    {
                    value: '3',
                    label: '테스트2',
                    }
                ]}/>
            </Space>
        </Col>
    </Row>

    <Row className='ml-4 mr-4 border-gray-300 border-l-2 border-r-2 border-b-2'>
        <Col span={3} className=' bg-violet-50 h-16 flex items-center justify-center border-r-2 border-gray-300'>
            <span className='font-bold'>작업 상태</span>
        </Col>
        <Col span={9} className='h-16 flex items-center justify-center border-r-2 border-gray-300'>
            <Space wrap > 
                <Select className='xs:w-20 sm:w-48 xl:w-96' defaultValue="1"
                options={[
                    {
                    value: '1',
                    label: '전체',
                    },
                    {
                    value: '2',
                    label: '테스트1',
                    },
                    {
                    value: '3',
                    label: '테스트2',
                    }
                ]}/>
            </Space>
        </Col>
        <Col span={3} className='bg-violet-50 h-16 flex items-center justify-center border-r-2 border-gray-300'>
            <span className='font-bold'>주문 번호</span>
        </Col>
        <Col span={9} className='h-16  flex items-center justify-center  border-gray-300'>
            <Input placeholder="주문번호를 입력하세요." className='ml-20'/>
            <Button className='ml-2 mr-20 rounded-full bg-indigo-500 text-white'>검색</Button>
        </Col>
    </Row>
    </>
    );
};

export default Top;