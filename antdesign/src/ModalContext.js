import React,{ useState } from 'react';
import { Col, Row } from 'antd';
import { Select, Space, Input,Button } from 'antd';

const ModalContext = ()=>{
    return(
        <div>
            <br/><hr/>

            <p className='mt-4 text-xl'>고객사 정보</p>

            <Row className='mt-4  border-gray-300 border-2'>
                <Col span={3} className=' bg-violet-50 h-16 flex items-center justify-center border-r-2 border-gray-300 flex-wrap'>
                    <span className='font-bold'>Industry / Type</span> &nbsp; <span className='font-light text-red-600'>*</span>
                </Col>
                <Col span={9} className='h-16 flex items-center justify-center border-r-2 border-gray-300'>
                    <Space wrap className='mr-2'> 
                        <Select className='xl:w-48 xs:w-1' defaultValue="1" 
                            options={[
                                {
                                value: '1',
                                label: '선택하세요.',
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

                    <Space  wrap className='ml-2'> 
                        <Select className='xl:w-48 xs:w-1' defaultValue="1" 
                            options={[
                                {
                                value: '1',
                                label: '선택하세요.',
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
                <Col span={3} className=' bg-violet-50 h-16 flex items-center justify-center border-r-2 border-gray-300 overflow-wrap-break-word'>
                    <span className='font-bold '>Division _SP</span> &nbsp; <span className='font-light text-red-600'>*</span>
                </Col>
                <Col span={9} className='h-16 flex items-center justify-center'>
                    <Space wrap > 
                        <Select className='xs:w-20 sm:w-48 xl:w-96' defaultValue="1" 
                            options={[
                                {
                                value: '1',
                                label: '선택하세요.',
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

            <Row className=' border-gray-300 border-r-2 border-l-2 border-b-2'>
                <Col span={3} className=' bg-violet-50 h-16 flex items-center justify-center border-r-2 border-gray-300'>
                    <span className='font-bold'>Client Name</span> &nbsp; <span className='font-light text-red-600'>*</span>
                </Col>
                <Col span={9} className='h-16 flex items-center justify-center border-r-2 border-gray-300'>
                    <Input placeholder="Client Name을 입력하세요." className='w-96' />
                </Col>
                <Col span={3} className=' bg-violet-50 h-16 flex items-center justify-center border-r-2 border-gray-300'>
                    <span className='font-bold'>Sold To Name</span>
                </Col>
                <Col span={9} className='h-16 flex items-center justify-center'>
                    <Input placeholder="Sold To Name을 입력하세요." className='w-96' />
                </Col>
            </Row>

            <Row className=' border-gray-300 border-r-2 border-l-2 border-b-2'>
                <Col span={3} className=' bg-violet-50 h-16 flex items-center justify-center border-r-2 border-gray-300'>
                    <span className='font-bold'>Ship To Name</span>
                </Col>
                <Col span={9} className='h-16 flex items-center justify-center border-r-2 border-gray-300'>
                    <Input placeholder="Ship To Name을 입력하세요." className='w-96' />
                </Col>
                <Col span={3} className=' bg-violet-50 h-16 flex items-center justify-center border-r-2 border-gray-300'>
                    <span className='font-bold'>Bill To Name</span>
                </Col>
                <Col span={9} className='h-16 flex items-center justify-center'>
                    <Input placeholder="Bill To Name을 입력하세요." className='w-96' />
                </Col>
            </Row>

            <Row className=' border-gray-300 border-r-2 border-l-2 border-b-2'>
                <Col span={3} className=' bg-violet-50 h-16 flex items-center justify-center border-r-2 border-gray-300'>
                    <span className='font-bold'>Channel</span> &nbsp; <span className='font-light text-red-600'>*</span>
                </Col>
                <Col span={21} className='h-16 flex items-center justify-center  border-gray-300'>
                    <Input placeholder="채널" allowClear className='mx-16'/>
                </Col>
                
            </Row>

            <Row className=' border-gray-300 border-r-2 border-l-2 border-b-2'>
                <Col span={3} className=' bg-violet-50 h-16 flex items-center justify-center border-r-2 border-gray-300'>
                    <span className='font-bold'>Market Type</span> &nbsp; <span className='font-light text-red-600'>*</span>
                </Col>
                <Col span={9} className='h-16 flex items-center justify-center border-r-2 border-gray-300'>
                    <Space wrap > 
                        <Select className='xs:w-20 sm:w-48 xl:w-96' defaultValue="1" 
                            options={[
                                {
                                value: '1',
                                label: '선택하세요.',
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
                <Col span={3} className=' bg-violet-50 h-16 flex items-center justify-center border-r-2 border-gray-300'>
                    <span className='font-bold'>Region</span>  &nbsp; <span className='font-light text-red-600'>*</span>
                </Col>
                <Col span={9} className='h-16 flex items-center justify-center'>
                    <Input placeholder="지역" className='w-96' />
                </Col>
            </Row>

            <Row className=' border-gray-300 border-r-2 border-l-2 border-b-2'>
                <Col span={3} className=' bg-violet-50 h-16 flex items-center justify-center border-r-2 border-gray-300'>
                    <span className='font-bold'>사업자등록번호</span>
                </Col>
                <Col span={9} className='h-16 flex items-center justify-center border-r-2 border-gray-300'>
                    <Input placeholder="사업자등록번호를 입력하세요." className='w-96' />
                </Col>
                <Col span={3} className=' bg-violet-50 h-16 flex items-center justify-center border-r-2 border-gray-300'>
                    <span className='font-bold'>주소</span>
                </Col>
                <Col span={9} className='h-16 flex items-center justify-center'>
                    <Input placeholder="주소를 입력하세요." className='w-96' />
                </Col>
            </Row>

            <Row className=' border-gray-300 border-r-2 border-l-2 border-b-2'>
                <Col span={3} className=' bg-violet-50 h-16 flex items-center justify-center border-r-2 border-gray-300'>
                    <span className='font-bold'>대표자명</span>
                </Col>
                <Col span={9} className='h-16 flex items-center justify-center border-r-2 border-gray-300'>
                    <Input placeholder="대표자명을 입력하세요." className='w-96' />
                </Col>
                <Col span={3} className=' bg-violet-50 h-16 flex items-center justify-center border-r-2 border-gray-300'>
                    <span className='font-bold'>대표번호</span>
                </Col>
                <Col span={9} className='h-16 flex items-center justify-center'>
                    <Input placeholder="대표번호를 입력하세요." className='w-96' />
                </Col>
            </Row>

            <p className='mt-4 text-xl'>영업 정보</p>
            <Row className='mt-4  border-gray-300 border-2'>
                <Col span={3} className=' bg-violet-50 h-16 flex items-center justify-center border-r-2 border-gray-300'>
                    <span className='font-bold'>Project Name</span> &nbsp; <span className='font-light text-red-600'>*</span>
                </Col>
                <Col span={9} className='h-16 flex items-center justify-center border-r-2 border-gray-300'>
                    <Input placeholder="Project Name을 입력하세요." className='w-96' />
                </Col>
                <Col span={3} className=' bg-violet-50 h-16 flex items-center justify-center border-r-2 border-gray-300'>
                    <span className='font-bold'>Product</span> &nbsp; <span className='font-light text-red-600'>*</span>
                </Col>
                <Col span={9} className='h-16 flex items-center justify-center'>
                    <Space wrap className='mr-2'> 
                        <Select className='sm:w-16 md:w-32 xl:w-48' defaultValue="1" 
                            options={[
                                {
                                value: '1',
                                label: '선택하세요.',
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
                    <Space wrap className='ml-2'> 
                        <Select className='sm:w-16 md:w-32 xl:w-48' defaultValue="1" 
                            options={[
                                {
                                value: '1',
                                label: '선택하세요.',
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

            <Row className=' border-gray-300 border-r-2 border-l-2 border-b-2'>
                <Col span={3} className=' bg-violet-50 h-16 flex items-center justify-center border-r-2 border-gray-300'>
                    <span className='font-bold'>Deal Type</span>
                </Col>
                <Col span={9} className='h-16 flex items-center justify-center border-r-2 border-gray-300'>
                    <Space wrap > 
                        <Select className='xs:w-20 sm:w-48 xl:w-96' defaultValue="1" 
                            options={[
                                {
                                value: '1',
                                label: '선택하세요.',
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
                <Col span={3} className=' bg-violet-50 h-16 flex items-center justify-center border-r-2 border-gray-300'>
                    <span className='font-bold'>Service Type</span> &nbsp; <span className='font-light text-red-600'>*</span>
                </Col>
                <Col span={9} className='h-16 flex items-center justify-center'>
                    <Space wrap > 
                        <Select className='xs:w-20 sm:w-48 xl:w-96' defaultValue="1" 
                            options={[
                                {
                                value: '1',
                                label: '선택하세요.',
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
        </div>
    )
};
export default ModalContext;