'use client'
import React from 'react'
import { Alert, Form, Input } from 'antd';
import { useRouter } from 'next/navigation'

export default function Search() {

    const router = useRouter()

    const onFinish = (value: { no_cuenta: string }) => {
        const { no_cuenta } = value
        router.push(`/cuenta/${no_cuenta}`)
    }

    const onFinishFailed = () => {
        console.log('Failed!');
    }

    return (
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
                label="Número de cuenta"
                name="no_cuenta"
                validateFirst
                rules={[
                    { max: 30, message: 'Número de cuenta inválido' },
                    { pattern: /^[a-zA-Z\d]+$/, message: 'Número de cuenta inválido' },
                    { min: 1, message: 'Ingrese su número de cuenta' },
                    { whitespace: true, message: 'Ingrese su número de cuenta' },
                    { required: true, message: 'Ingrese su número de cuenta'}
                ]}
            >
                <Input
                    placeholder="Ingrese su número de cuenta"
                    allowClear={true}
                />
            </Form.Item>
        </Form>
    )
}
