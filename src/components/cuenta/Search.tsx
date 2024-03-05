'use client'
import React from 'react'
import { Alert, Form, Input, Space, Button, Typography } from 'antd';
import { useRouter } from 'next/navigation'

const { Title } = Typography;

export default function Search() {

    const router = useRouter()

    const onFinish = (value: { no_cuenta: string }) => {
        router.push(`/cuenta/${value.no_cuenta}`)
    }

    const onFinishFailed = () => {
        console.log('Failed!');
    }

    return (
        <div className='bg-white p-5 rounded-lg'>
            <Title level={4}>Número de cuenta</Title>
            <Form
                name="input_cuenta"
                layout="horizontal"
                size='large'
                autoComplete="off"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    hasFeedback
                    name="no_cuenta"
                    validateFirst
                    rules={[
                        { max: 30, message: 'Número de cuenta inválido' },
                        { pattern: /^[a-zA-Z\d]+$/, message: 'Número de cuenta inválido' },
                        { min: 1, message: 'Ingrese su número de cuenta' },
                        { whitespace: true, message: 'Ingrese su número de cuenta' },
                        { required: true, message: 'Ingrese su número de cuenta' }
                    ]}
                >
                    <Space.Compact style={{ width: '100%' }}>
                        <Input
                            placeholder="Ingrese su número de cuenta"
                            allowClear={true}
                        />
                        <Button type="primary" htmlType='submit'>Buscar</Button>
                    </Space.Compact>
                </Form.Item>
            </Form>
        </div>
    )
}
