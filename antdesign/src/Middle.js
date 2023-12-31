import React from 'react';
import './Middle.css'
import { InfoCircleTwoTone } from '@ant-design/icons';
import { Progress } from 'antd';
import { Col, Row } from 'antd';

import { useRecoilState } from 'recoil';
import { contentStore } from './store';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Middle = () => {
    
    const [context, setContext] = useRecoilState(contentStore); //contentStore 의 값 가져오기

    return (
    <Row className='m-4'>
        <Col span={14} className='h-48 flex items-center' style={{ overflowX: 'auto' }}>
            <table className='fixed-layout-table m-0'>
                <tr className='bg-violet-50'>
                    <th rowSpan={2} >전체 <FontAwesomeIcon icon="fa-solid fa-circle-exclamation" style={{color:"#85aef4"}} /></th>
                    <th colSpan={2} >설치 미완료</th>
                    <th colspan={2} >설치 완료</th>
                </tr>
                <tr className='bg-violet-50'>
                    <th>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div>계획<br />미수립</div>
                            <div style={{ marginLeft: '4px' }}>
                                <FontAwesomeIcon icon="fa-solid fa-circle-exclamation" style={{color:"#85aef4"}} />
                            </div>
                        </div>
                    </th>
                    <th>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div>계획<br />수립</div>
                            <div style={{ marginLeft: '4px' }}>
                                <FontAwesomeIcon icon="fa-solid fa-circle-exclamation" style={{color:"#85aef4"}} />
                            </div>
                        </div>
                    </th>
                    <th>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {/*<div>Billing<br />미완료</div>*/}
                            <div>Client Name</div>
                            <div style={{ marginLeft: '4px' }}>
                                <FontAwesomeIcon icon="fa-solid fa-circle-exclamation" style={{color:"#85aef4"}} />
                            </div>
                        </div>
                    </th>
                    <th>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {/*<div>Billing<br />완료</div>*/}
                            <div>Ship To Name</div>
                            <div style={{ marginLeft: '4px' }}>
                                <FontAwesomeIcon icon="fa-solid fa-circle-exclamation" style={{color:"#85aef4"}} />
                            </div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <td>94</td>
                    <td>86</td>
                    <td>6</td>
                    <td>{context.clientName}</td>
                    <td>{context.shipToName}</td>
                        
                </tr>
            </table>
        </Col>

        <Col span={10} className='h-48 flex items-center' style={{ overflowX: 'auto' }}>
            <table className='fixed-layout-table mt-0 ml-4 h-48'>
                <tr>
                    <th rowSpan={2} className='bg-violet-50 w-28' >진척도</th>
                    <td>
                        <span style={{ verticalAlign: 'middle', fontWeight:'bold' }}>실적</span> &nbsp; 
                        <FontAwesomeIcon icon="fa-solid fa-circle-exclamation" style={{color:"#85aef4"}} /> &nbsp;
                        <Progress strokeLinecap="butt" percent={2.1} className='w-72 ml-4'/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span style={{ verticalAlign: 'middle', fontWeight:'bold'}}>Billing</span> &nbsp; 
                        <FontAwesomeIcon icon="fa-solid fa-circle-exclamation" style={{color:"#85aef4"}} /> &nbsp;
                        <Progress strokeLinecap="butt" percent={0} className='w-72 ml-4'/>
                    </td>
                </tr>
            </table>
        </Col>
        
    </Row>

  );
};

export default Middle;
