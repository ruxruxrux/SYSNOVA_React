import React,{ useState } from 'react';
import { Button, Modal, Table } from 'antd';
import ModalContext from './ModalContext';
import './Bottom.css'

const columns = [
    { title: 'No', dataIndex: 'no', key: 'no',align: 'center', style: { fontWeight: 'bold' }},
    { title: '설치계획일(ESL)', dataIndex: 'IPD_ESL', key: 'IPD_ESL',align: 'center', style: { fontWeight: 'bold' } },
    { title: '설치계획일(네트워크)', dataIndex: 'IPD_Network', key: 'IPD_Network',align: 'center', style: { fontWeight: 'bold' } },
    { title: '계약명', dataIndex: 'contractName', key: 'contractName' ,align: 'center', style: { fontWeight: 'bold' }},
    { title: 'Shop명', dataIndex: 'shopName', key: 'shopName',align: 'center', style: { fontWeight: 'bold' } },
    { title: '주문번호', dataIndex: 'orderNo', key: 'orderNo',align: 'center', style: { fontWeight: 'bold' } },
    { title: '담당PM', dataIndex: 'PM', key: 'PM',align: 'center', style: { fontWeight: 'bold' } },
    { title: '진행상태', dataIndex: 'progress', key: 'progress',align: 'center', style: { fontWeight: 'bold' } },
];
const dataSource = [
    { key: '1', no: '69', IPD_ESL:'2023.08.02', IPD_Network:'2023.07.30', contractName:'SAP - EMS Test (08-02)', shopName:'백석문화대학교 산학협력단', orderNo:'295', PM:'', progress:'계획 미수립' },
    { key: '1', no: '68', IPD_ESL:'2023.08.02', IPD_Network:'2023.07.30', contractName:'SAP - EMS Test (08-03)', shopName:'베스트샵평화점 본사', orderNo:'298', PM:'', progress:'계획 미수립' },
    { key: '1', no: '67', IPD_ESL:'2023.08.02', IPD_Network:'2023.07.30', contractName:'SAP - EMS Test (08-04)', shopName:'청호대리점 본사', orderNo:'299', PM:'', progress:'계획 미수립' },
    { key: '1', no: '66', IPD_ESL:'2023.08.02', IPD_Network:'2023.07.30', contractName:'SAP - EMS Test (08-05)', shopName:'납품처', orderNo:'300', PM:'', progress:'계획 미수립' },
    
];



const Bottom = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return (
        <div>
            <Button className='ml-4 rounded-full border-gray-500 text-gray-500'>엑셀 다운로드</Button>
            <Table className='mr-8' dataSource={dataSource} columns={columns} bordered={false}
                onRow={(record) => ({
                    onClick: () => showModal(record),
                })}>
                
            </Table>

            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={1500} footer={null}>
                <div className="text-2xl font-semibold">영업 기회 등록</div>
                <ModalContext/>
                <div className="mt-4 flex justify-end">
                    <Button onClick={handleCancel} id='cancelBtn' className='ml-4 rounded-full bg-gray-500 text-white border-gray-500'>닫기</Button>
                    <Button onClick={handleOk} id='deleteBtn' className='ml-2 rounded-full bg-red-500 text-white' >삭제</Button>
                    <Button onClick={handleOk} id='updateBtn' className='ml-2 rounded-full bg-indigo-500 text-white'>수정 저장</Button>
                    <Button onClick={handleOk} id='insertBtn' className='ml-2 rounded-full bg-indigo-500 text-white'>신규 저장</Button>
                    <Button onClick={handleOk} id='selectBtn' className='ml-2 rounded-full bg-indigo-500 text-white'>내용 호출</Button>
                </div>
            </Modal>


            
        </div>
    );
};

export default Bottom;
