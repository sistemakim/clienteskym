import React from 'react';
import { Button, Col, Row, Statistic } from 'antd';

const Summary: React.FC = () => (
    <div className='bg-white rounded-xl p-4' >
        <h1 className='font-semibold mb-2'>Resumen</h1>
        <Row>
            <Col span={24}>
                <Statistic title="Cliente" value='Nombre del cliente' precision={2}/>
            </Col>
            <Col span={24}>
                <Statistic title="Cuenta" value='RCT777'/>
            </Col>
            <Col span={12}>
                <Statistic title="Crédito" value={900} precision={2}/>
            </Col>
            <Col span={12}>
                <Statistic title="Anticipo" value={100} precision={2}/>
            </Col>
            <Col span={12}>
                <Statistic title="Abonos" value={500} precision={2}/>
            </Col>
            <Col span={12}>
                <Statistic title="Saldo" value={300} precision={2}/>
            </Col>
        </Row>
    </div>
);

export default Summary;
