import React from 'react';
import './Middle.css'
import { InfoCircleTwoTone } from '@ant-design/icons';
import { Progress } from 'antd';
import { Col, Row } from 'antd';
const Middle = () => {
  return (
    <Row className='m-4'>
        <Col span={14} className='h-48 flex items-center' style={{ overflowX: 'auto' }}>
            <table className='fixed-layout-table m-0'>
                <tr className='bg-violet-50'>
                    <th rowSpan={2} >전체 <InfoCircleTwoTone /></th>
                    <th colSpan={2} >설치 미완료</th>
                    <th colspan={2} >설치 완료</th>
                </tr>
                <tr className='bg-violet-50'>
                    <th>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div>계획<br />미수립</div>
                            <div style={{ marginLeft: '4px' }}>
                                <InfoCircleTwoTone />
                            </div>
                        </div>
                    </th>
                    <th>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div>계획<br />수립</div>
                            <div style={{ marginLeft: '4px' }}>
                                <InfoCircleTwoTone />
                            </div>
                        </div>
                    </th>
                    <th>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div>Billing<br />미완료</div>
                            <div style={{ marginLeft: '4px' }}>
                                <InfoCircleTwoTone />
                            </div>
                        </div>
                    </th>
                    <th>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div>Billing<br />완료</div>
                            <div style={{ marginLeft: '4px' }}>
                                <InfoCircleTwoTone />
                            </div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <td>94</td>
                    <td>86</td>
                    <td>6</td>
                    <td>2</td>
                    <td>0</td>
                        
                </tr>
            </table>
        </Col>

        <Col span={10} className='h-48 flex items-center' style={{ overflowX: 'auto' }}>
            <table className='fixed-layout-table mt-0 ml-4 h-48'>
                <tr>
                    <th rowSpan={2} className='bg-violet-50 w-28' >진척도</th>
                    <td>
                        <span style={{ verticalAlign: 'middle', fontWeight:'bold' }}>실적</span> &nbsp; 
                        <InfoCircleTwoTone /> &nbsp;
                        <Progress strokeLinecap="butt" percent={2.1} className='w-72 ml-4'/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span style={{ verticalAlign: 'middle', fontWeight:'bold'}}>Billing</span> &nbsp; 
                        <InfoCircleTwoTone /> &nbsp;
                        <Progress strokeLinecap="butt" percent={0} className='w-72 ml-4'/>
                    </td>
                </tr>
            </table>
        </Col>
        
    </Row>

  );
};

export default Middle;
