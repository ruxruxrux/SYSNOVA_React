import {React, useState} from 'react';
import { Col, Row } from 'antd';
import { Select, Space, Input,Button } from 'antd';
import './Bottom.css';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { contentStore } from './store';

const ModalContext = ({ parentFunction })=>{    
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');

    const [clientName, setClientName] = useState(''); //clientName 상태 관리
    const [shipToName, setShipToName] = useState(''); //shipToName 상태 관리
    const [context, setContext] = useRecoilState(contentStore); //contentStore 값 관리

    const closeModal = () => {
        setCategory('');
        setContent('');
        parentFunction();
    }

    const changeCategory = (event) => {
        setCategory(event.target.value);
    }
    
    const changeContent = (event) => {
        setContent(event.target.value);
    }

    const changeClientName = (event) => { //client Name
        setClientName(event.target.value);
    }

    const changeShipToName = (event) => { //ship To Name
        setShipToName(event.target.value);
    }

    const updateContentStore = () => { // client Name, ship To Name 수정 버튼 클릭 시
        setContext({
            clientName : clientName,
            shipToName : shipToName
        })
    };

    // ID 존재 여부
    const requsetInfo =(id) => {

        if (id != null && id != ''){
            return  axios({
                method:'GET',
                url:'https://ems-dev-api.sysnova.kr/api/edu/get',
                params:{
                    userId:id
                }
            })
            .then(response => {
                return response.data.data[0];
            })
            .catch(error => {
                console.log(error);
            })
        }
    }

    //삭제
    const deleteInfo = async () => {
        const id = prompt('삭제할 ID를 입력하세요.');

        const info = await requsetInfo(id); // ID 존재 여부

        if (info == undefined){ 
            alert('존재하지 않는 ID 입니다.');
        }else {
            axios({
                method:'DELETE',
                url:'https://ems-dev-api.sysnova.kr/api/edu/delete',
                params:{
                    userId:id
                }
            })
            .then(response => {
                alert('삭제되었습니다.');
            })
            .catch(error => {
                console.log(error);
            })
        }

    }

    //수정
    const updateInfo = async () => {
        
        const id = prompt('수정할 ID를 입력하세요.');

        const info = await requsetInfo(id); // ID 존재 여부

        if (info == undefined){ 
            alert('존재하지 않는 ID 입니다.');
        }else{
            axios({
                method:'PUT',
                url:'https://ems-dev-api.sysnova.kr/api/edu/put',
                params:{
                    userId:id,
                    category:category,
                    content:content
                }
            })
            .then(response => {
                alert('수정되었습니다.');
            })
            .catch(error => {
                console.log(error);
            })
        }
        
    }

    //등록
    const insertInfo = async () => {
        if (category == '' || content == ''){
            alert('값을 입력하세요.');
        }else {
            const id = prompt('등록할 ID를 입력하세요.');

            const info = await requsetInfo(id); // ID 존재 여부

            if (info == undefined){
                axios({
                    method:'POST',
                    url:'https://ems-dev-api.sysnova.kr/api/edu/post',
                    params:{
                        userId:id,
                        category:category,
                        content:content
                    }
                })
                .then(response => {
                    alert('등록되었습니다.');
                })
                .catch(error => {
                    console.log(error);
                })
            }else{
                alert('이미 존재하는 ID 입니다.');
            } 
        }
    }
    
    //조회
    const selectInfo = async () => {

        const id = prompt('조회할 ID를 입력하세요.');
        
        const info = await requsetInfo(id);

        if (info == undefined){
            alert('존재하지 않는 ID 입니다.');
        }else{
            setCategory(info.category);
            setContent(info.content);
        }
        
    }
    

    return(
        <div>
            <div className="text-2xl font-semibold">영업 기회 등록</div>
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
                    <Input placeholder="Client Name을 입력하세요." className='w-96' value={clientName} onChange={changeClientName}/>
                </Col>
                <Col span={3} className=' bg-violet-50 h-16 flex items-center justify-center border-r-2 border-gray-300'>
                    <span className='font-bold'>Sold To Name</span>
                </Col>
                <Col span={9} className='h-16 flex items-center justify-center'>
                    <Input id='category' placeholder="Sold To Name을 입력하세요." className='w-96' value={category} onChange={changeCategory} />
                </Col>
            </Row>

            <Row className=' border-gray-300 border-r-2 border-l-2 border-b-2'>
                <Col span={3} className=' bg-violet-50 h-16 flex items-center justify-center border-r-2 border-gray-300'>
                    <span className='font-bold'>Ship To Name</span>
                </Col>
                <Col span={9} className='h-16 flex items-center justify-center border-r-2 border-gray-300'>
                    <Input placeholder="Ship To Name을 입력하세요." className='w-96' value={shipToName} onChange={changeShipToName}/>
                </Col>
                <Col span={3} className=' bg-violet-50 h-16 flex items-center justify-center border-r-2 border-gray-300'>
                    <span className='font-bold'>Bill To Name</span>
                </Col>
                <Col span={9} className='h-16 flex items-center justify-center'>
                    <Input id='content' placeholder="Bill To Name을 입력하세요." className='w-96' value={content} onChange={changeContent}/>
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

            <div className="mt-4 flex justify-end">
                <Button  onClick={closeModal} id='cancelBtn' className='ml-4 rounded-full bg-gray-500 text-white border-gray-500'>닫기</Button>
                <Button  onClick={deleteInfo} id='deleteBtn' className='ml-2 rounded-full bg-red-500 text-white' >삭제</Button>
                <Button  onClick={updateInfo} id='updateBtn' className='ml-2 rounded-full bg-indigo-500 text-white'>수정 저장</Button>
                <Button  onClick={insertInfo} id='insertBtn' className='ml-2 rounded-full bg-indigo-500 text-white'>신규 저장</Button>
                <Button  onClick={selectInfo} id='selectBtn' className='ml-2 rounded-full bg-indigo-500 text-white'>내용 호출</Button>
                <Button  onClick={updateContentStore} id='selectBtn' className='ml-2 rounded-full bg-indigo-500 text-white'>Recoil 저장</Button>
            </div>
            
        </div>
    )
};
export default ModalContext;