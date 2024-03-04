import React from 'react';
import { Button, Col, Row, Statistic } from 'antd';

const Summary = (summaryObject: any) => {

    const data = summaryObject['data']

    return (

        <div className='bg-white rounded-xl p-4' >
            <h1 className='font-semibold mb-2'>Resumen</h1>
            <Row>
                <Col span={24}>
                    <Statistic title="Cuenta" value={data['NoCta']} />
                </Col>
                <Col span={24}>
                    <Statistic title="Cliente" value={data['Nombre']} />
                </Col>
                <Col span={12}>
                    <Statistic title="Crédito" value={data['SalIni']} precision={2} prefix='$'/>
                </Col>
                <Col span={12}>
                    <Statistic title="Anticipo" value={data['Anticipo']} precision={2} prefix='$'/>
                </Col>
                <Col span={12}>
                    <Statistic title="Abonos" value={data['Abonos']} precision={2} prefix='$'/>
                </Col>
                <Col span={12}>
                    <Statistic title="Saldo" value={data['TotPorCob']} precision={2} prefix='$'/>
                </Col>
            </Row>
        </div>
    )
};

export default Summary;
