import React,{ useState } from 'react';
import { Button, Modal, Table } from 'antd';
import ModalContext from './ModalContext';

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
    const [modalState, setModalState] = useState(false);


    const showModal = () => {
        setModalState(true);
    }

    const closeModal = () => {
        setModalState(false);
    }



    
    return (
        <div>
            <Button className='ml-4 rounded-full border-gray-500 text-gray-500'>엑셀 다운로드</Button>
            <Table className='mr-8' dataSource={dataSource} columns={columns} bordered={false}
                onRow={(record) => ({
                    onClick: () => showModal(record),
                })}>
                
            </Table>

            <Modal open={modalState}  onCancel={closeModal} width={1500} footer={null}>
                <ModalContext parentFunction={closeModal}/>
            </Modal>
            
        </div>
    );
};

export default Bottom;
